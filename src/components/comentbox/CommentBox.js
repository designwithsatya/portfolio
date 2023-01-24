import { Container, Button } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import SendIcon from '@mui/icons-material/Send';
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useOpenReply } from '../message/Message';
import { useMainContext } from '../../context/Context';
import './topcommentbox.css';

const CommentBox = (props) => {
  const { userKey } = props;
  const { setmessageUpdate } = useMainContext();
  const ChangeOpenReply = useOpenReply();

  const message = useRef(null);
  const [showCommentLine, setshowCommentLine] = useState(false);
  const [showButtons, setshowButtons] = useState(false);
  const [enablebtn, setenablebtn] = useState(true);
  const commentFocus = () => {
    setshowCommentLine(true);
    setshowButtons(true);
  };
  const commentFocusout = () => {
    setshowCommentLine(false);
  };
  const commentStrok = (e) => {
    const currMessage = e.target.value;
    if (currMessage) {
      setenablebtn(false);
    } else {
      setenablebtn(true);
    }
  };
  const sendComment = (e) => {
    e.preventDefault();
    fetch('/postsubcomments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messageId: userKey, messageData: message.current.value }),
    }).then(() => {
      setmessageUpdate([1, userKey]);
      message.current.value = '';
      setenablebtn(true);
    });
  };

  return (
    <>
      <Container>
        <form>
          <section className="CommentBox">
            <input
              type="text"
              placeholder="add comment"
              ref={message}
              onFocus={commentFocus}
              onBlur={commentFocusout}
              onKeyUp={commentStrok}
            />
            {showCommentLine && <div className="comentline" />}
            {showButtons && (
              <>
                <Button
                  type="button"
                  variant="containedInherit"
                  className="commentbutton sendbutton"
                  disabled={enablebtn}
                  onClick={sendComment}
                  endIcon={<SendIcon />}
                >
                  CommetB
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  startIcon={<CancelIcon />}
                  type="button"
                  className="commentbutton"
                  onClick={() => {
                    setshowButtons(false);
                    ChangeOpenReply();
                  }}
                >
                  Cancel
                </Button>
              </>
            )}
          </section>
        </form>
      </Container>
    </>
  );
};

CommentBox.propTypes = {
  userKey: PropTypes.string.isRequired,
};

export default CommentBox;
