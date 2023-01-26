import React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Typography, Box, Button, Card, Container } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';
import Page from '../components/Page';
import account from '../_mock/account';
import myphoto from '../image/website2.svg';

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
}));

/* ul li::before {
    content: "\2022";
    color: red;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
} */

const About = () => (
  <>
    <Page title="About Me">
      <Container maxWidth="lg">
        <Typography style={{ color: 'black' }} variant="h5" sx={{ mb: 2 }}>
          We The Web Developer
        </Typography>
        <box style={{ textAlign: 'justify' }}>
          <Typography variant="body2" sx={{ mb: 2 }}>
            <span style={{ color: 'orangered' }}>https://www.satyendrapoojarajpoot.in</span> website is all about
            creativity and innovative work in the field of Technology. We provide web development courses videos, MCS
            important videos and technology videos and articles. You will get all of my youtube videos source code and
            you are free to use it and make changes. Please give us your valuable feedback and suggestions. We
            appreciate your opinions and will use it to evaluate changes and make improvements on our blog.
          </Typography>
        </box>
        <Box sx={{ mb: 5 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6}>
              <box style={{ textAlign: 'justify' }}>
                <Typography sx={{ mb: 3 }} variant="body2">
                  My name is Satyendra Singh. I'm 23years old. I born in Banda, Uttar Pradesh. Currently, I am living in
                  Bengalore, India. I live with my wife. And my family lives in Native only. I am thankful to God that
                  he gives me such a wonderful family. I am working as a web developer \ And I am a Youtuber too. I want
                  to share with you my experiences during Colleges, as Web developers and the problems I faced, the
                  solutions I found and the places I went to. I hope my blog will guide you, and give you the knowledge
                  that you are looking to.
                </Typography>
              </box>
              <Box sx={{ mt: 5 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} md={6}>
                    <Button fullWidth size="large" type="submit" variant="containedInherit" startIcon={<GitHubIcon />}>
                      View On GitHub
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Button
                      fullWidth
                      size="large"
                      type="submit"
                      variant="containedInherit"
                      startIcon={<DownloadIcon />}
                    >
                      View On GitHub
                      <Follow>
                        <Stripe />
                      </Follow>
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Box className="blur" style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
                <img id="mypro" src={myphoto} alt="myimg" />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box style={{ display: 'flex', justifyContent: 'center' }}>
          <Typography className="about" variant="h6" sx={{ mb: 5 }}>
            About Me
          </Typography>
        </Box>
        <Card>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6}>
              <Box style={{ marginTop: '15px' }} sx={{ mb: 5, mx: 2.5 }}>
                <Box className="blur" style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
                  <img
                    style={{ width: '400px', height: '50vh', textAlign: 'center' }}
                    src={account.myprofile}
                    alt="myimg"
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Box style={{ marginTop: '15px' }} sx={{ mb: 5, mx: 2.5 }}>
                <Typography variant="body2" sx={{ mb: 5 }}>
                  A passionate Full Stack Software Developer 🚀 having a special interest in Frontend technologies and
                  experience of building Web applications with JavaScript / Reactjs / Nodejs and some other tool
                  libraries and frameworks.
                </Typography>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  Here are a few Highlights:
                </Typography>
                <div style={{ marginLeft: '15px', margin: '15px' }}>
                  <ul style={{ fontSize: '13px' }}>
                    <li>Full Stack Wev and mobile development</li>
                    <li>Interactive Front End as per the Design</li>
                    <li>React and React Native</li>
                    <li>Buliding Rest API</li>
                    <li>Managing database</li>
                  </ul>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Page>
  </>
);

export default About;
