import React from 'react';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

function InlineError(props) {
  const { error } = props;
  return (
    <Typography variant="body2" style={{ color: 'red' }}>
      {error}
    </Typography>
  );
}

InlineError.propTypes = {
  error: PropTypes.string.isRequired,
};

export default InlineError;
