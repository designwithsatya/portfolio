import { Buffer } from 'buffer';
import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Box, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { sanitize } from 'dompurify';
import { fDateTime } from '../../utils/formatTime';
import { useMainContext } from '../../context/Context';
// import ButtonStyle from '../button/ButtonStyle';

const StyledCover = styled('img')({
  width: '100%',
  objectFit: 'cover',
  height: '370px',
  borderRadius: '4px',
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
  const base64ImageString = Buffer.from(postInfo.cover.data.data, 'binary').toString('base64');

  return (
    <>
      <Stack
        sx={{ background: '#6747c7 !important', color: 'white', padding: '10px' }}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        boxShadow="0 3px 1px -2px #0003, 0 2px 2px #00000024, 0 1px 5px #0000001f"
        border="0"
        borderRadius="4px"
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
          <Typography variant="subtitle1">{`Title - ${postInfo.title}`}</Typography>
        </Box>
        <Box sx={{ mb: 4 }}>
          <StyledCover alt="cover" src={`data:image/*;base64,${base64ImageString}`} />
        </Box>
        <Typography sx={{ mb: 2 }} variant="h6">
          {`Summary - ${postInfo.summary}`}
        </Typography>
        <div className="content" dangerouslySetInnerHTML={{ __html: sanitize(postInfo.content) }} />
      </Box>
    </>
  );
}
