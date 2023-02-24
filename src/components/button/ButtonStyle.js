import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const Follow = styled(Box)(() => ({
  position: 'absolute',
  top: '-4px',
  right: '15px',
  width: '48px',
  height: '55px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}));
const Stripe = styled(Box)(() => ({
  transform: 'skew(-29deg)',
  backgroundColor: '#59d7a3',
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  opacity: '0.5',
}));

const ButtonStyle = (props) => (
  <>
    <Button sx={{ mb: 5 }} size="large" type="submit" variant="containedInherit" startIcon={<DownloadIcon />}>
      {props.name}
      <Follow>
        <Stripe />
      </Follow>
    </Button>
  </>
);

export default ButtonStyle;
