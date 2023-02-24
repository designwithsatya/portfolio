import React, { useRef, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Button, Container } from '@mui/material';
import SubCommentBox from '../comentbox/subcommentbox/SubCommentBox';
import { useMainContext } from '../../context/Context';
import { fDateTime } from '../../utils/formatTime';

import Iconify from '../Iconify';

import './message.css';

const showReply = React.createContext();
export function useOpenReply() {
  return useContext(showReply);
}

const SubMessage = (props) => {
  const { setmessageUpdate } = useMainContext();
  const { User, Editable, UserMessage, Likes, parentKey, subId, Date } = props;

  const likeIcons = useRef();
  const numLikes = useRef();
  const [openreply, setOpenreply] = useState(false);

  const deleteMessage = (e) => {
    e.preventDefault();
    fetch('/deletesubmessageuser', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messageId: parentKey, subId }),
    }).then(() => {
      setmessageUpdate([2, parentKey]);
    });
  };
  const ChangeOpenReply = () => {
    setOpenreply((current) => !current);
  };

  // like
  let toggleLike = false;
  let res = Likes;
  const likeComment = () => {
    toggleLike = !toggleLike;
    if (toggleLike) {
      res += 1;
      likeIcons.current.style.color = '#4688de';
    } else {
      res -= 1;
      likeIcons.current.style.color = 'gray';
    }
    numLikes.current.innerHTML = res;
    fetch('/updateSublike', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messageId: parentKey, subId, likes: res }),
    });
  };

  return (
    <>
      <Container>
        <section className="messagecontainer1">
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
            {openreply && <SubCommentBox parentkey={parentKey} />}
          </showReply.Provider>
        </section>
      </Container>
    </>
  );
};

SubMessage.propTypes = {
  User: PropTypes.string.isRequired,
  Editable: PropTypes.string.isRequired,
  UserMessage: PropTypes.string.isRequired,
  Likes: PropTypes.number.isRequired,
  Date: PropTypes.string.isRequired,
  parentKey: PropTypes.string.isRequired,
  subId: PropTypes.string.isRequired,
};

export default SubMessage;
