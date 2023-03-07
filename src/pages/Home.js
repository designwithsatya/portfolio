import React from 'react';
import Typical from 'react-typical';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import AuthSocial from '../sections/auth/AuthSocial';

const RootStyle = styled(Box)(({ theme }) => ({
  background: `url('https://images.unsplash.com/photo-1624377632657-3902bfd35958?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')`,
  minHeight: '100vh',
  width: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  left: '0',
  right: '0',
  Button: '0',
  margin: '0 auto',
  position: 'relative',
  top: '0',
  opacity: 0.7,
  color: 'white',
  overflow: 'hidden',
  marginTop: '-4%',
  // marginBottom: '20px',
  [theme.breakpoints.down('sm')]: {
    minHeight: '50vh',
  },
}));

const UnderRootStyle = styled(Box)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: `translate(-50%, -50%)`,
  textAlign: 'center',
  width: '100%',
}));
const MyTypoGraphy = styled(Typography)(({ theme }) => ({
  fontSize: '50px',
  lineHeight: '1.4',
  fontFamily: 'sans-serif',
  letterSpacing: '1px',
  fontWeight: '800',
  [theme.breakpoints.down('sm')]: {
    fontSize: '21px',
  },
}));
const MyTypoGraphyAuto = styled(Box)(() => ({
  margin: '0 0 0 20px',
  fontWeight: '700',
  textTransform: 'uppercase',
  paddingRight: '20px',
  transition: 'none',
  opacity: '1',
}));

const Home = () => (
  <>
    <RootStyle>
      <UnderRootStyle>
        <MyTypoGraphy>WELCOME TO DESIGNWITHSATYA</MyTypoGraphy>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Happy Holi Blessings To All Of You 👍
        </Typography>
        <Box style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <span style={{ color: '#ff9800', fontWeight: '900' }}>A WEBSITE FOR</span>
          <MyTypoGraphyAuto>
            <span>
              <Typical
                steps={['REACTDEVELOPER', 2000, 'DESIGNWITHSATYA', 2000, 'WEBDEVELOPER', 2000, 'DESIGNWITHME', 2000]}
                loop={Infinity}
              />
            </span>
          </MyTypoGraphyAuto>
        </Box>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            padding: '10px',
          }}
        >
          <AuthSocial />
        </Box>
      </UnderRootStyle>
      <svg id="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#C0C0C0" d="M0,224L480,192L960,192L1440,256L1440,320L960,320L480,320L0,320Z" />
      </svg>
    </RootStyle>
  </>
);

export default Home;
