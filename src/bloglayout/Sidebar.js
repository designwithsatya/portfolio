import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import { Typography, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

function Sidebar(props) {
  const { archives, tutorials } = props;

  return (
    <>
      <Box sx={{ textAlign: 'center' }}>
        <Paper elevation={0} sx={{ p: 2, m: '1px' }}>
          <Typography variant="caption2">Youtube</Typography>
        </Paper>
      </Box>

      <Paper elevation={0} sx={{ p: 2, margin: '1px', bgcolor: 'grey.300' }}>
        <Typography variant="h5" gutterBottom sx={{ mt: 3, textAlign: 'center' }}>
          Popular Post
        </Typography>
      </Paper>
      {archives.map((archive, index) => (
        <NavLink
          to={archive.url}
          style={{ color: '#0645ad', textDecoration: 'none' }}
          display="block"
          variant="body1"
          key={index}
        >
          <Paper elevation={0} sx={{ p: 2, margin: '1px', bgcolor: 'grey.300' }}>
            {archive.title}
          </Paper>
        </NavLink>
      ))}
      <Box sx={{ mt: 5, mb: 5, bgcolor: 'grey.300' }}>
        <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.300' }}>
          <Typography variant="h5" gutterBottom sx={{ mt: 3, textAlign: 'center' }}>
            Popular Technologies
          </Typography>
        </Paper>
        {tutorials.map((tutorial, index) => (
          <Paper key={index} elevation={0} sx={{ p: 2, bgcolor: 'grey.300' }}>
            <NavLink
              to="/"
              style={{ color: '#0645ad', textDecoration: 'none' }}
              display="block"
              variant="body1"
              key={tutorial.title}
            >
              {tutorial.title}
            </NavLink>
          </Paper>
        ))}
      </Box>
      <Paper elevation={0} sx={{ p: 1, mb: 5, bgcolor: 'grey.300' }}>
        <Typography variant="h6" gutterBottom sx={{ mt: 2, textAlign: 'center' }}>
          CONNECT WITH ME
        </Typography>
      </Paper>
      <Paper elevation={0} sx={{ p: 1, mb: 5, bgcolor: 'grey.300' }}>
        <Typography variant="h6" gutterBottom sx={{ mt: 2, textAlign: 'center' }}>
          Popular Technologies
        </Typography>
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
