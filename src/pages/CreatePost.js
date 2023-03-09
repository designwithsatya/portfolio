import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';
import Swal from 'sweetalert2';
import { Stack, Button, Container, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Editor from '../components/post/Editor';
import Iconify from '../components/Iconify';

const CreatePost = () => {
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
  });

  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [category, setcategory] = useState('');
  const [files, setFiles] = useState('');
  async function createNewPost(ev) {
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('category', category);
    data.set('file', files[0]);
    ev.preventDefault();
    const response = await fetch('/post', {
      method: 'POST',
      body: data,
      credentials: 'include',
    });
    if (response.ok) {
      Swal.fire({
        icon: 'success',
        title: 'Post is Created',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'somthing is wrong',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }

  return (
    <>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            What going in your mind {userData.name} ?
          </Typography>
          <Button variant="containedInherit" startIcon={<Iconify icon="eva:plus-fill" />}>
            New Post
          </Button>
        </Stack>
        <form onSubmit={createNewPost}>
          <Stack spacing={3}>
            <Stack direction={{ xs: 'column', sm: 'column' }} spacing={2}>
              <input
                type="title"
                required
                placeholder={'Title'}
                value={title}
                onChange={(ev) => setTitle(ev.target.value)}
              />
              <input
                required
                type="summary"
                placeholder={'Summary'}
                value={summary}
                onChange={(ev) => setSummary(ev.target.value)}
              />
              <input type="file" accept="image/*" required onChange={(ev) => setFiles(ev.target.files)} />
              <Editor value={content} onChange={setContent} />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  required
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
export default CreatePost;
