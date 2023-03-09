import React from 'react';
import { Grid, Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import Page from '../Page';
import { AppWidgetSummary } from '../../sections/@dashboard/app';

const Service = () => (
  <>
    <Page title="Services">
      <Container>
        <Box sx={{ mt: 5 }} style={{ display: 'flex', justifyContent: 'center' }}>
          <Typography className="about" variant="h6">
            OUR SERVICES
          </Typography>
        </Box>
        <Box sx={{ mb: 5, textAlign: 'center' }}>
          <Typography variant="h4">You do business we do the softwere</Typography>
          <Typography variant="body2">
            Since 2020, we have helped 5 companies launch over 1k incredible products
          </Typography>
        </Box>
        <motion.div initial={{ x: '100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', delay: 1.5 }}>
          <Grid sx={{ mb: 5 }} container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <AppWidgetSummary title="User Design" icon={'mdi:material-ui'} />
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
              <AppWidgetSummary title="Logo Design" color="gray" icon={'skill-icons:figma-dark'} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AppWidgetSummary title="Api Intigration" color="secondary" icon={'tabler:api'} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AppWidgetSummary title="Website Maintenance" color="yellow" icon={'pajamas:issue-type-maintenance'} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AppWidgetSummary title="Social Media" color="pink2" icon={'ion:social-chrome'} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AppWidgetSummary title="Youtube Video" color="warning" icon={'mdi:youtube-tv'} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AppWidgetSummary title="Desktop Website" color="gray" icon={'fluent-mdl2:website'} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AppWidgetSummary title="DNS Configration" color="warning" icon={'eos-icons:dns'} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AppWidgetSummary title="Marriage Video Editing" color="gray" icon={'logos:adobe-after-effects'} />
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Page>
  </>
);

export default Service;
