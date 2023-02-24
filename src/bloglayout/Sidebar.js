import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import { Typography, Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import SocialShare from '../components/socialshare';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.grey[800],
  backgroundColor: theme.palette.grey[500_12],
  '&:hover': {
    color: theme.palette.grey[500],
  },
}));
const PostStyle = styled(Box)({
  display: 'flex',
  gap: '10px',
  padding: '10px',
  marginBottom: '10px',
  boxShadow: `0px 0px 15px rgb(0 0 0 / 10%)`,
  outline: 'none',
  border: 'none',
});
const StyledCover = styled('img')({
  width: '30%',
  height: 'auto',
  objectFit: 'cover',
  borderRadius: '5px',
});
const TextStyle = styled(Box)({
  margin: '0px',
  padding: '5px',
});

function Sidebar(props) {
  const { archives, tutorials } = props;
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/platform.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Box sx={{ textAlign: 'center' }}>
        <Paper elevation={0} sx={{ p: 5 }}>
          <div
            className="g-ytsubscribe"
            data-channelid="UC-9n9c2tO1z8CP_WkicYtVQ"
            data-layout="full"
            data-count="default"
          />
        </Paper>
      </Box>

      <Typography variant="h5" gutterBottom sx={{ mt: 3, textAlign: 'center' }}>
        Popular Post
      </Typography>
      {archives.map((archive, index) => (
        <PostStyle key={index}>
          <StyledCover
            alt="img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIuG-O2zImf-VmclPkTZG70i82wrTU5y9kYr3lyG3ZhzUNcjXAeiRHdaVqek0rNts_Nd4&usqp=CAU"
          />
          <NavLink
            to={archive.url}
            style={{ color: 'inherit', textDecoration: 'none' }}
            display="block"
            variant="body1"
          >
            <TextStyle>
              <Typography variant="subtitle1" sx={{ lineHeight: '1.2' }}>
                {archive.title}
              </Typography>
            </TextStyle>
          </NavLink>
        </PostStyle>
      ))}
      <Box sx={{ mt: 5, mb: 5, bgcolor: 'grey.300' }}>
        <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.300' }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {tutorials.map((tutorial, index) => (
                <Grid key={index} item xs={4} md={4}>
                  <NavLink style={{ textDecoration: 'none' }} to={tutorial.url}>
                    <Item>{tutorial.title}</Item>
                  </NavLink>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Paper>
      </Box>
      <Paper elevation={0} sx={{ p: 1, mb: 5, bgcolor: 'grey.300' }}>
        <Typography variant="h6" gutterBottom sx={{ mt: 2, textAlign: 'center' }}>
          CONNECT WITH ME
        </Typography>
      </Paper>
      <Paper elevation={0} sx={{ p: 1, mb: 5, bgcolor: 'grey.300' }}>
        <Typography variant="subtitle1" gutterBottom sx={{ mt: 2, textAlign: 'center' }}>
          Please Share This Post :
        </Typography>
        <SocialShare />
      </Paper>
    </>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,

  tutorials: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.elementType.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Sidebar;
