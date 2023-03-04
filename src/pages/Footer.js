import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Grid, Typography, Container, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import AuthSocial from '../sections/auth/AuthSocial';

const MainBox = styled(Box)(() => ({
  background:
    'radial-gradient(circle at 15% 50%,#fef9c3,rgba(255,255,255,0) 25%),radial-gradient(circle at 85% 30%,#d1fae5,rgba(255,255,255,0) 25%);',
  textAlign: 'center',
  marginTop: '5rem',
  padding: '15px',
  paddingBottom: '20px',
  position: 'relative',
}));

const FooterStyle = styled('div')(({ theme }) => ({
  width: '50%',
  height: '100px',
  position: 'absolute',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '10px',
  top: -80,
  zIndex: 1,
  borderRadius: Number(theme.shape.borderRadius) * 1.1,
  backgroundColor: theme.palette.blugray[500],
  color: theme.palette.grey[100],
  [theme.breakpoints.down('sm')]: {
    width: '93%',
    display: 'flex',
    flexDirection: 'column',
  },
}));
const Footer = () => (
  <>
    <Container maxWidth="xl">
      <MainBox>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Box sx={{ mb: 1, mx: 2.5 }}>
              <Typography variant="h6">Policy</Typography>
            </Box>

            <Typography variant="body2">
              <NavLink to="/2023/privacypolicy" style={{ textDecoration: 'none', color: 'inherit' }}>
                Privacy Policy
              </NavLink>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Box sx={{ mb: 1, mx: 2.5 }}>
              <Typography variant="h6"> Follow Us</Typography>
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
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Box sx={{ mb: 1, mx: 2.5 }}>
              <Typography variant="h6"> Call Us</Typography>
            </Box>
            <Typography variant="body2">+917869351845</Typography>
          </Grid>
        </Grid>
        <Box style={{ marginTop: '5px' }}>
          <Typography variant="subtitle1">Copyright © 2022 by Satyendra Rajpoot. All Right Reserved.</Typography>
        </Box>
        <FooterStyle>
          <TextField size="small" label="Email" type="email" color="warning" focused />
          <Button size="small" type="submit" variant="outlinedInherit">
            Subscribe
          </Button>
        </FooterStyle>
      </MainBox>
    </Container>
  </>
);

export default Footer;
