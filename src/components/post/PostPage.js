import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Box, Typography, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { fDateTime } from '../../utils/formatTime';
import Iconify from '../Iconify';
// import { useMainContext } from '../../context/Context';

const StyledCover = styled('img')({
  width: '100%',
  objectFit: 'cover',
});

export default function PostPage() {
  // const { userInfo } = useMainContext();
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
  console.log(postInfo.cover);

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

      {/* {userInfo.id === postInfo.author._id ? (
        <Box sx={{ mb: 2 }}>
          <NavLink
            style={{ cursor: 'pointer', textDecoration: 'none' }}
            className="edit-btn"
            to={`/2023/blogs/edit/${postInfo._id}`}
          >
            Edit this post
          </NavLink>
        </Box>
      ) : null} */}

      <Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">{postInfo.title}</Typography>
          <Typography variant="subtitle2">{postInfo.summary}</Typography>
        </Box>

        <Box sx={{ mb: 5 }}>
          <StyledCover alt="cover" src={`http://localhost:5000/${postInfo.cover}`} />
        </Box>
        <div className="content" dangerouslySetInnerHTML={{ __html: postInfo.content }} />
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
