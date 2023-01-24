import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, TextField, Stack, Container, Typography, TextareaAutosize } from '@mui/material';
// import 'react-quill/dist/quill.snow.css';
// import Editor from './Editor';

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    title: '',
    summary: '',
    content: '',
  });
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  useEffect(() => {
    fetch(`/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setUserData({ ...postInfo });
      });
    });
  }, []);

  const UpdateForm = async (e) => {
    e.preventDefault();
    const { title, summary, content } = userData;
    const res = await fetch('/post', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        summary,
        content,
      }),
    });
    const data = await res.json();
    if (!data) {
      console.log('message not send ');
    } else {
      setUserData({ ...userData });
      navigate('/2023/home', { replace: true });
    }
  };

  return (
    <>
      <Container>
        <Typography variant="h6" sx={{ mb: 5 }}>
          Update Post
        </Typography>
        <form method="PUT">
          <Stack spacing={3}>
            <Stack direction={{ xs: 'column', sm: 'column' }} spacing={2}>
              <TextField
                name="title"
                type="text"
                value={userData.title}
                onChange={handleInputs}
                required
                fullWidth
                id="outlined-basic"
                label="Title"
                variant="outlined"
              />
              <TextField
                name="summary"
                type="text"
                value={userData.summary}
                onChange={handleInputs}
                required
                fullWidth
                id="outlined-basic"
                label="summary"
                variant="outlined"
              />
              <TextareaAutosize
                aria-label="minimum height"
                minRows={6}
                required
                name="content"
                value={userData.content}
                onChange={handleInputs}
                placeholder="How can help you"
                style={{ width: '100%' }}
              />
              {/* <Editor name="content" value={userData.content} onChange={handleInputs} /> */}
              <Button type="submit" onClick={UpdateForm} fullWidth size="large" variant="containedInherit">
                Create Post
              </Button>
            </Stack>
          </Stack>
        </form>
      </Container>
    </>
  );
}
