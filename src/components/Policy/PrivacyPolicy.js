import React from 'react';
// import { styled } from '@mui/material/styles';
import { Typography, Container, Box, Card, CardContent } from '@mui/material';
import Page from '../Page';

// const Follow = styled(Box)(() => ({
//   position: 'absolute',
//   top: '-4px',
//   right: '15px',
//   width: '48px',
//   height: '55px',
//   display: 'flex',
//   flexDirection: 'row',
//   justifyContent: 'center',
//   alignItems: 'center',
// }));
// const Stripe = styled(Box)(() => ({
//   transform: 'skew(-29deg)',
//   backgroundColor: '#59d7a3',
//   height: '100%',
//   width: '100%',
//   display: 'flex',
//   flexDirection: 'row',
//   alignItems: 'center',
// }));

const PrivacyPolicy = () => (
  <>
    <Page title="privacypolicy">
      <Container maxWidth="lg">
        <Card>
          <CardContent>
            <Box sx={{ mb: 1 }}>
              <Typography style={{ color: 'black' }} variant="h6" sx={{ mb: 1 }}>
                PrivacyPolicy
              </Typography>
              <Typography variant="body2">
                Effective date: July 29, 2018 Designwithsatya("us", "we", or "our") operates the
                https://designwithsatya.com/ website (the "Service"). This page informs you of our policies regarding
                the collection, use, and disclosure of personal data when you use our Service and the choices you have
                associated with that data. We use your data to provide and improve the Service. By using the Service,
                you agree to the collection and use of information in accordance with this policy. Unless otherwise
                defined in this Privacy Policy,
              </Typography>
            </Box>
            <Box sx={{ mb: 1 }}>
              <Typography style={{ color: 'black' }} variant="h6" sx={{ mb: 1 }}>
                Information Collection And Use
              </Typography>
              <Typography variant="body2">
                We collect several different types of information for various purposes to provide and improve our
                Service to you. Types of Data Collected
              </Typography>
              <Typography variant="body2">
                Personal Data While using our Service, we may ask you to provide us with certain personally identifiable
                information that can be used to contact or identify you ("Personal Data"). Personally, identifiable
                information may include, but is not limited to: Email address Names Cookies and Usage Data Usage Data We
                may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may
                include information such as your computer's Internet Protocol address (e.g. IP address), browser type,
                browser version, the pages of our Service that you visit, the time and date of your visit, the time
                spent on those pages, unique device identifiers and other diagnostic data. Tracking & Cookies Data We
                use cookies and similar tracking technologies to track the activity on our Service and hold certain
                information. Cookies are files with small amount of data which may include an anonymous unique
                identifier. Cookies are sent to your browser from a website and stored on your device. Tracking
                technologies also used are beacons, tags, and scripts to collect and track information and to improve
                and analyze our Service. You can instruct your browser to refuse all cookies or to indicate when a
                cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of
                our Service. Examples of Cookies we use: Session Cookies. We use Session Cookies to operate our Service.
                Preference Cookies. We use Preference Cookies to remember your preferences and various settings.
                Security Cookies. We use Security Cookies for security purposes.
              </Typography>
            </Box>
            <Box sx={{ mb: 1 }}>
              <Typography style={{ color: 'black' }} variant="h6" sx={{ mb: 1 }}>
                Security Of Data
              </Typography>
              <Typography variant="body2">
                The security of your data is important to us, but remember that no method of transmission over the
                Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable
                means to protect your Personal Data, we cannot guarantee its absolute security.
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Page>
  </>
);

export default PrivacyPolicy;
