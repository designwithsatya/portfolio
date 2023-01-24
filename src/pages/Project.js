import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';

import { Stack, Button, Container, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Editor from '../components/post/Editor';

const Project = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({});

  const callAboutPage = async () => {
    try {
      const res = await fetch('/about', {
        method: 'GET',
        headers: {
          Accept: 'appllication/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      const data = await res.json();
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate('/2023/home', { replace: true });
    }
  };
  useEffect(() => {
    callAboutPage();
  }, []);

  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [category, setcategory] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);
  async function createNewPost(ev) {
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('category', category);
    data.set('file', files[0]);
    ev.preventDefault();
    const response = await fetch('http://localhost:5000/post', {
      method: 'POST',
      body: data,
      credentials: 'include',
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    navigate('/2023/home', { replace: true });
  }

  return (
    <>
      <Container>
        <Stack alignItems="center" mb={5}>
          <Typography variant="h6" gutterBottom>
            What going in your mind {userData.name} ?
          </Typography>
        </Stack>
        <form onSubmit={createNewPost}>
          <Stack spacing={3}>
            <Stack direction={{ xs: 'column', sm: 'column' }} spacing={2}>
              <input type="title" placeholder={'Title'} value={title} onChange={(ev) => setTitle(ev.target.value)} />
              <input
                type="summary"
                placeholder={'Summary'}
                value={summary}
                onChange={(ev) => setSummary(ev.target.value)}
              />
              <input type="file" onChange={(ev) => setFiles(ev.target.files)} />
              <Editor value={content} onChange={setContent} />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="simple-select-label"
                  id="demo-simple-select"
                  label="category"
                  name="category"
                  value={category}
                  onChange={(ev) => setcategory(ev.target.value)}
                >
                  <MenuItem value={'Technical'}>Technical</MenuItem>
                  <MenuItem value={'Government'}>Government Vacancy</MenuItem>
                  <MenuItem value={'IT'}>IT News</MenuItem>
                </Select>
              </FormControl>
              <Button type="submit" fullWidth size="large" variant="containedInherit">
                Create Post
              </Button>
            </Stack>
          </Stack>
        </form>
      </Container>
    </>
  );
};
export default Project;
