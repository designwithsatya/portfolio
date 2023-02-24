import React, { useRef, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Button, Container } from '@mui/material';
import CommentBox from '../comentbox/CommentBox';
import SubMessage from './SubMessage';
import { useMainContext } from '../../context/Context';
import { fDateTime } from '../../utils/formatTime';
import Iconify from '../Iconify';
import './message.css';

const showReply = React.createContext();
export function useOpenReply() {
  return useContext(showReply);
}

const Message = (props) => {
  const { setmessageUpdate } = useMainContext();
  const { User, Editable, UserMessage, Likes, Date, Replies, userKey } = props;

  const likeIcons = useRef();
  const numLikes = useRef();
  const [arrowUp, setArrowup] = useState(false);
  const [openreply, setOpenreply] = useState(false);

  const deleteMessage = (e) => {
    e.preventDefault();
    fetch('/deletemesage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messageId: props.userKey }),
    }).then(() => {
      setmessageUpdate([2, props.userKey]);
    });
  };
  const ChangeOpenReply = () => {
    setOpenreply((current) => !current);
  };

  const changeArrow = () => {
    setArrowup((current) => !current);
  };
  // like
  let toggleLike = false;
  let res = Likes;
  const likeComment = () => {
    toggleLike = !toggleLike;
    if (toggleLike) {
      res += 1;
      likeIcons.current.style.color = '#228B22';
    } else {
      res -= 1;
      likeIcons.current.style.color = 'gray';
    }
    numLikes.current.innerHTML = res;
    fetch('/updatelike', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messageId: props.userKey, likes: res }),
    });
  };

  return (
    <>
      <Container>
        <section className="messagecontainer">
          {<Iconify className="fa" icon="logos:blogger" />}
          <div className="usermessagebox">
            <div className="username">
              <span className="messageuser"> {User}</span>
              <span style={{ margin: '10px' }}>{fDateTime(Date)}</span>
            </div>
            <div className="messagetext">{UserMessage}</div>
            <section className="messageiconscontainer">
              <Iconify icon="mdi:like" ref={likeIcons} onClick={likeComment} />
              <div ref={numLikes}>{Likes}</div>
              <Iconify icon="mdi:dislike" />
              {!Editable ? (
                <Button type="button" onClick={ChangeOpenReply}>
                  Reply
                </Button>
              ) : (
                <Button type="button" onClick={deleteMessage}>
                  Delete
                </Button>
              )}
            </section>
          </div>
          <showReply.Provider value={ChangeOpenReply}>
            {openreply && <CommentBox userKey={userKey} />}
          </showReply.Provider>
          {Replies.length > 0 && (
            <section className="arrowreplies">
              <Button
                startIcon={arrowUp ? <Iconify icon="eva:plus-fill" /> : <Iconify icon="eva:plus-fill" />}
                type="button"
                onClick={changeArrow}
              >
                Views {Replies.length} Replies
              </Button>
            </section>
          )}

          {arrowUp && (
            <section className="submessagecontainer">
              {Replies.map((reply) => (
                <SubMessage
                  key={Math.random()}
                  parentKey={userKey}
                  subId={reply._id}
                  User={reply.user}
                  UserMessage={reply.message}
                  Likes={reply.likes}
                  Date={reply.date}
                />
              ))}
            </section>
          )}
        </section>
      </Container>
    </>
  );
};

Message.propTypes = {
  User: PropTypes.string.isRequired,
  Editable: PropTypes.string.isRequired,
  UserMessage: PropTypes.string.isRequired,
  Likes: PropTypes.number.isRequired,
  Date: PropTypes.string.isRequired,
  userKey: PropTypes.number.isRequired,
  Replies: PropTypes.arrayOf(
    PropTypes.shape({
      User: PropTypes.string.isRequired,
      UserMessage: PropTypes.string.isRequired,
      Likes: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Message;
