import React from 'react';
// import Swal from 'sweetalert2';
import '../components/component/FormInputStyle.css';
import {
  Container,
  Typography,
  Card,
  Grid,
  Box,
  Stack,
  Button,
  TextField,
  TextareaAutosize,
  Avatar,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Page from '../components/Page';

// import InlineError from '../components/component/InlineError';
// import { validateEmail } from '../components/component/Validation';

const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.grey[500_12],
}));

export default function EcommerceShop() {
  // const [userData, setUserData] = useState({
  //   name: '',
  //   email: '',
  //   message: '',
  // });

  // // const [emailError, setEmailError] = useState();
  // // const [buttonLoading, setButtonLoading] = useState(false);

  // // we are storing data in states

  // const handleInputs = (e) => {
  //   const { name, value } = e.target;
  //   setUserData({ ...userData, [name]: value });
  // };

  // const contactForm = async (e) => {
  //   e.preventDefault();
  //   // setButtonLoading(true);
  //   const { name, email, message } = userData;

  //   const res = await fetch('/contact', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       name,
  //       email,
  //       message,
  //     }),
  //   });

  //   const data = await res.json();
  //   if (!data) {
  //     console.log('message not send ');
  //   } else {
  //     Swal.fire({
  //       icon: 'success',
  //       title: 'Message Sent!',
  //       showConfirmButton: false,
  //       timer: 1500,
  //     });
  //     setUserData({ ...userData, message: '' });
  //   }
  // };

  return (
    <Page title="Contact Us">
      <Container>
        <Box style={{ display: 'flex', justifyContent: 'center' }}>
          <Typography className="about" variant="h6" sx={{ mb: 5 }}>
            Get in Touch
          </Typography>
        </Box>
        <Box style={{ marginTop: '15px' }} sx={{ mb: 5, mx: 2.5 }}>
          <Typography variant="subtitle1" sx={{ mt: 5, textAlign: 'justify' }}>
            Hello Everyone! Have a great day :) I am here to help you. If you want to know something or you have any
            suggestion then please mail me. Thank You.
          </Typography>
        </Box>
        <Card>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Box style={{ marginTop: '15px' }} sx={{ mb: 1, mx: 2.5 }}>
                <AccountStyle>
                  <Avatar src="/assets/icons/phone.png" alt="photoURL" />
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="body1" sx={{ color: 'text.primary' }}>
                      7869351845
                    </Typography>
                  </Box>
                </AccountStyle>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box style={{ marginTop: '15px' }} sx={{ mb: 1, mx: 2.5 }}>
                <AccountStyle>
                  <Avatar src="/assets/icons/email.png" alt="photoURL" />
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="body1" sx={{ color: 'text.primary' }}>
                      designwithsatya@gmail.com
                    </Typography>
                  </Box>
                </AccountStyle>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box style={{ marginTop: '15px' }} sx={{ mb: 5, mx: 2.5 }}>
                <AccountStyle>
                  <Avatar src="/assets/icons/gps.png" alt="photoURL" />
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="body1" sx={{ color: 'text.primary' }}>
                      Banda Uttar pradesh 210001
                    </Typography>
                  </Box>
                </AccountStyle>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6}>
              <Box sx={{ mb: 5, mx: 2.5 }}>
                <form>
                  <Stack spacing={3}>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                      <TextField
                        name="name"
                        type="text"
                        required
                        fullWidth
                        id="outlined-basic"
                        label="Frist Name"
                        variant="outlined"
                      />

                      <div className="formInputstyle">
                        <TextField
                          type="email"
                          required
                          name="summary"
                          fullWidth
                          id="outlined-basic"
                          label="Email"
                          variant="outlined"
                        />
                        {/* <Typography variant="body2"> {emailError && <InlineError error={emailError} />}</Typography> */}
                      </div>
                    </Stack>
                    <TextareaAutosize
                      aria-label="minimum height"
                      minRows={6}
                      required
                      name="message"
                      placeholder="How can help you"
                      style={{ width: '100%' }}
                    />

                    <Button
                      // disabled={buttonLoading && true}
                      type="submit"
                      fullWidth
                      size="large"
                      variant="containedInherit"
                    >
                      SUBMIT
                      {/* {buttonLoading ? 'Loading..' : 'SUBMIT'} */}
                    </Button>
                  </Stack>
                </form>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Box
                sx={{ mb: 5, mx: 2.5 }}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                  height: '87%',
                }}
              >
                <Typography variant="h2" sx={{ mb: 5 }}>
                  <iframe
                    title="myFrame"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62241.30612445064!2d77.63917795648106!3d12.838001318663284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c8a7750e1c3%3A0x4a5cfc0fce5af71d!2sElectronic%20City%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1664272240818!5m2!1sen!2sin"
                    height="280"
                    width="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Page>
  );
}
