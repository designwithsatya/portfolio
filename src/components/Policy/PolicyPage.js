import React, { useState } from 'react';
import { Accordion, Container, Card } from '@mui/material';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import Iconify from '../Iconify';

export default function PolicyPage() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Container>
        <Typography variant="h6" sx={{ mb: 5 }}>
          Privacy Policy
        </Typography>
        <Card sx={{ padding: '20px' }}>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon={<Iconify icon="eva:plus-fill" />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography variant="subtitle2">I am an accordion</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                Effective date: July 29, 2018 Designwithsatya("us", "we", or "our") operates the
                https://designwithsatya.com/ website (the "Service"). This page informs you of our policies regarding
                the collection, use, and disclosure of personal data when you use our Service and the choices you have
                associated with that data. We use your data to provide and improve the Service. By using the Service,
                you agree to the collection and use of information in accordance with this policy. Unless otherwise
                defined in this Privacy Policy,
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
              expandIcon={<Iconify icon="eva:plus-fill" />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography variant="subtitle2">Information Collection And Use</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                We collect several different types of information for various purposes to provide and improve our
                Service to you. Types of Data Collected
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
              expandIcon={<Iconify icon="eva:plus-fill" />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography variant="subtitle2">Filtering has been entirely disabled for whole web server</Typography>
            </AccordionSummary>
            <AccordionDetails>
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
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary
              expandIcon={<Iconify icon="eva:plus-fill" />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography variant="subtitle2" sx={{ width: '33%', flexShrink: 0 }}>
                Security Of Data
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                The security of your data is important to us, but remember that no method of transmission over the
                Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable
                means to protect your Personal Data, we cannot guarantee its absolute security.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Card>
      </Container>
    </>
  );
}
