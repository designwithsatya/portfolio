import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Page from '../Page';
import sourcecodeprice from '../../_mock/sourcecodeprice';
import PhonePayImg from '../../image/PhonePeQR.png';

const MainStyle = styled(Box)(() => ({
  textAlign: 'center',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center',
}));
const SCode = styled(Box)(({ theme }) => ({
  width: '400px',
  height: '400px',
  marginBottom: '30px',
  [theme.breakpoints.up('xs')]: {
    width: '200px',
    height: '200px',
  },
}));

const SourseCode = () => (
  <>
    <Page title="SourceCode">
      <Container>
        <Typography style={{ color: 'black' }} variant="h5" sx={{ mb: 2 }}>
          How To Get The Source Code
        </Typography>
        <Typography style={{ color: 'black' }} variant="body2" sx={{ mb: 1 }}>
          Hello all,
        </Typography>
        <Box style={{ textAlign: 'justify' }}>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Satyendra Singh,I want to tell everyone that my father is a farmer and I have completed my studies in
            2019.After that my father took a loan and sent me to Hyderabad to study.There I did full stack developer
            coaching from Naresh IT Technology.After completion of coaching, I came to Bangalore for job.I got a job
            here, after that I lost my job due to Corona virus.Right now I have nothing. And my father is asking me
            money for my sister's marriage. I need money for my sister's marriage.So I decided to share my knowledge on
            YouTube. For 2 Month's I have been sharing knowledge on coding and uploading many videos on YouTube. So I
            believed in "Just keep doing the good things in life by helping others and don't expect anything in return
            because God is watching and Karma will give us everything for sure”.
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            You all are always there, Again I need your support and love (in the form of very little Money, sorry :( ).
            I left my job and Now I want to do something on my own and this will not possible without your love and
            support.
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            So{' '}
            <span style={{ color: 'purple' }}>
              I am collecting only {sourcecodeprice.price}Rs for this video Source Code
            </span>
            . I hope you all understand my feeling and my situation.
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Here is my PAYTM, GOOGLE PAY, PHONE PAY Number 7869351845. You have to pay {sourcecodeprice.price}Rs on this
            Number. Thanks in advance.
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Uper diya gaya number 7869351845 me PAYTM, GOOGLE PAY, PHONE PAY tino me koi ek online payment aap kar sakte
            ho. Only {sourcecodeprice.price}RS pay krna hai. Ek bar hone ke baad screenshot muje
            <span style={{ color: 'purple' }}>WhatsApp me HERE</span> same number par kr dijiyega. Me apko source code
            share kr doonga. Dhanyawad.
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            **Those who Pay <span style={{ color: 'purple' }}>WhatsApp me HERE</span> with a screenshot of payment. And,
            only those will get the source code**
          </Typography>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Thank You, you gave your time and read all these. Have a great day.
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            <span style={{ color: 'purple' }}>Here is the PAYTM QR CODE</span>
          </Typography>
        </Box>
        <MainStyle>
          <SCode>
            <Typography variant="h5">Satyendra Rajpoot</Typography>
            <Typography variant="body2">Scan this code to Pay</Typography>
            <img src={PhonePayImg} alt="phonepay" />
          </SCode>
        </MainStyle>
      </Container>
    </Page>
  </>
);

export default SourseCode;
