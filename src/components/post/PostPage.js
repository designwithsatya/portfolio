import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Box, Typography, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { sanitize } from 'dompurify';
import { fDateTime } from '../../utils/formatTime';
import Iconify from '../Iconify';
import { useMainContext } from '../../context/Context';

const StyledCover = styled('img')({
  width: '100%',
  objectFit: 'cover',
  height: '300px',
});

export default function PostPage() {
  const { userInfo } = useMainContext();
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);

  if (!postInfo) return '';
  const base64String = btoa(String.fromCharCode(...new Uint8Array(postInfo.cover.data.data)));

  return (
    <>
      <Stack
        sx={{ background: '#6747c7', color: 'white', padding: '10px' }}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="subtitle1">Author - {postInfo.author.name}</Typography>
        <Typography variant="subtitle1"> {fDateTime(postInfo.createdAt)}</Typography>
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
        {userInfo === undefined ? null : (
          <Box sx={{ mb: 2 }}>
            <NavLink
              style={{ cursor: 'pointer', color: '#6747c7', textDecoration: 'none' }}
              className="edit-btn"
              to={`/2023/blogs/edit/${postInfo._id}`}
            >
              Edit this post
            </NavLink>
          </Box>
        )}
        <Box sx={{ mb: 1 }}>
          <NavLink
            style={{ cursor: 'pointer', color: '#6747c7', textDecoration: 'none' }}
            className="edit-btn"
            to="/2023/home"
          >
            Back to home
          </NavLink>
        </Box>
      </Stack>
      <Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1">{postInfo.title}</Typography>
          <Typography variant="subtitle2">{postInfo.summary}</Typography>
        </Box>
        <Box sx={{ mb: 5 }}>
          <StyledCover alt="cover" src={`data:image/;base64,${base64String}`} />
        </Box>
        <div className="content" dangerouslySetInnerHTML={{ __html: sanitize(postInfo.content) }} />
        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <NavLink
            style={{ textDecoration: 'none' }}
            to="https://github.com/designwithsatyendra"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="large"
              type="submit"
              variant="containedInherit"
              endIcon={<Iconify icon="material-symbols:download" />}
            >
              Get Source Code
            </Button>
          </NavLink>
        </Box>
      </Box>
    </>
  );
}
