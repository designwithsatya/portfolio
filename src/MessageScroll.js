import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Message from './components/message/Message';
import { useMainContext } from './context/Context';

const MessageScroll = () => {
  const { messageReset, commentIncreement, setCommentIncreement, messageUpdate } = useMainContext();
  const commentIncreementRef = useRef(commentIncreement);

  const [userdata, setData] = useState([]);
  const [showButtomBar, setShowButtomBar] = useState(true);

  const GetData = async () => {
    setShowButtomBar(false);
    try {
      const response = await axios.get('/getdata', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ limitNum: 10 }),
      });
      const result = await response.data;
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetData();
  }, [messageReset]);

  useEffect(() => {
    if (messageUpdate) {
      if (messageUpdate[0] === 1) {
        fetch('/messageupdate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ commentid: messageUpdate[1] }),
        })
          .then((res) => res.json())
          .then((commentData) => {
            updateComment(commentData);
          });
      } else if (messageUpdate[0] === 2) {
        deleteComment();
      }
    }
  }, [messageUpdate]);

  function updateComment(commentData) {
    const currentMessage = [...userdata];
    if (commentData) {
      const currentMessageIndex = currentMessage.findIndex((message) => message._id === commentData._id);
      currentMessage.splice(currentMessageIndex, 1, commentData);
      setData(currentMessage);
    }
  }
  function deleteComment() {
    const currentMessage = [...userdata];
    const currentMessageIndex = currentMessage.findIndex((message) => message._id === messageUpdate[1]);
    currentMessage.splice(currentMessageIndex, 1);
    setData(currentMessage);
  }

  const observer = React.useRef(
    new IntersectionObserver((entries) => {
      const frist = entries[0];
      if (frist.isIntersecting) {
        fetch('/getmoredata', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ commentIncreement: commentIncreementRef.current }),
        })
          .then((res) => res.json())
          .then((comments) => {
            if (comments.length > 10) {
              setTimeout(() => {
                setData((prestate) => [...prestate, ...comments]);
              }, 3000);
            } else {
              setTimeout(() => {
                setShowButtomBar(false);
              }, 3000);
            }
            setCommentIncreement((prestate) => prestate + comments.length);
          });
      }
    }),
    { threshold: 1 }
  );

  useEffect(() => {
    commentIncreementRef.current = commentIncreement;
  }, [commentIncreement]);

  const [bottomBar, setbottomBar] = useState(null);
  useEffect(() => {
    const currentBottomBar = bottomBar;
    const currentobserver = observer.current;
    if (currentBottomBar) {
      currentobserver.observe(currentBottomBar);
    }
    return () => {
      if (currentBottomBar) {
        currentobserver.unobserve(currentBottomBar);
      }
    };
  }, [bottomBar]);

  return (
    <>
      {userdata.map((item) => (
        <Message
          key={item._id}
          userKey={item._id}
          User={item.user}
          Editable={item.editable}
          UserMessage={item.message}
          Likes={item.likes}
          Date={item.date}
          Replies={item.replies}
        />
      ))}
      {userdata.length > 9 && showButtomBar ? (
        <div className="bottombar" ref={setbottomBar}>
          loder
          <div className="loader">Loder..</div>
        </div>
      ) : null}
    </>
  );
};

export default MessageScroll;
