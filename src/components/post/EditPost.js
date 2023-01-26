import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';
import { Stack, Button, Container, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Editor from './Editor';

const EditPost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [category, setcategory] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function updatePost(ev) {
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('category', category);
    data.set('id', id);
    if (files?.[0]) {
      data.set('file', files?.[0]);
    }
    ev.preventDefault();
    const response = await fetch('/post', {
      method: 'PUT',
      body: data,
      credentials: 'include',
    });

    if (response.ok) {
      setRedirect(true);
    }
  }
  useEffect(() => {
    fetch(`/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setTitle(postInfo.title);
        setContent(postInfo.content);
        setSummary(postInfo.summary);
        setcategory(postInfo.category);
      });
    });
  }, []);

  if (redirect) {
    navigate(`/2023/blogs/post/${id}`, { replace: true });
  }

  return (
    <>
      <Container>
        <Stack alignItems="center" mb={5} direction="row" justifyContent="center">
          <Typography variant="h6" gutterBottom>
            What you want to change ?
          </Typography>
        </Stack>
        <form onSubmit={updatePost}>
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
                Update Post
              </Button>
            </Stack>
          </Stack>
        </form>
      </Container>
    </>
  );
};
export default EditPost;
