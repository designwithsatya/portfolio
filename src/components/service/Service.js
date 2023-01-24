import React from 'react';
import { Grid, Container, Typography, Box } from '@mui/material';
import Page from '../Page';
import { AppWidgetSummary } from '../../sections/@dashboard/app';

const Service = () => (
  <>
    <Page title="Services">
      <Container>
        <Box style={{ display: 'flex', justifyContent: 'center' }}>
          <Typography className="about" variant="h6" sx={{ mb: 5 }}>
            What Do We Offer
          </Typography>
        </Box>
        <Typography variant="subtitle1" sx={{ mb: 5, textAlign: 'center' }}>
          We write articles on current and Interesting Technicals Topic to spread knowledge and sometimes on Social
          Causes too.
        </Typography>
        <Grid sx={{ mb: 5 }} container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Cloud Developer" icon={'vscode-icons:file-type-aws'} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="SEO Maintan" color="info" icon={'icon-park-solid:seo'} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="DNS Configration" color="warning" icon={'eos-icons:dns'} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="React Developer" color="error" icon={'vscode-icons:file-type-preact'} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="DataBase Supporting" color="gray" icon={'logos:mongodb-icon'} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Api Intigration" color="secondary" icon={'tabler:api'} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Mobile Responsive Support" color="yellow" icon={'ant-design:mobile-filled'} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Linux Developer" color="pink2" icon={'vscode-icons:folder-type-linux-opened'} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Java Developer" color="pink" icon={'vscode-icons:file-type-java'} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Website" color="gray" icon={'el:website-alt'} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  </>
);

export default Service;
