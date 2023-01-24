import { Typography, Box, Container, Button } from '@mui/material';
import React, { useRef, useState } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import SendIcon from '@mui/icons-material/Send';
import { useMainContext } from '../../context/Context';

import './topcommentbox.css';

const TopCommentBox = () => {
  const { setmessageReset, setCommentIncreement } = useMainContext();

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
    fetch('/newcommnet', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messageData: message.current.value }),
    }).then(() => {
      setmessageReset((prestate) => !prestate);
      setCommentIncreement(10);
      message.current.value = '';
      setenablebtn(true);
    });
  };

  return (
    <>
      <Container>
        <Box style={{ display: 'flex', justifyContent: 'center' }}>
          <Typography className="about" variant="h6" sx={{ mt: 5 }}>
            Post Comments
          </Typography>
        </Box>

        <form>
          <section className="CommentBox">
            <input
              type="text"
              id="contact_form_name"
              className="contact_form_name input_field"
              name="name"
              ref={message}
              onFocus={commentFocus}
              onBlur={commentFocusout}
              onKeyUp={commentStrok}
              placeholder="Type Somthing Here...."
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
                  Commet
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  startIcon={<CancelIcon />}
                  type="button"
                  className="commentbutton"
                  onClick={() => {
                    setshowButtons(false);
                    message.current.value = '';
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

export default TopCommentBox;
