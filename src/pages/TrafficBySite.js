import { Box, Card, Paper, Typography, CardContent, Container } from '@mui/material';
import { fShortenNumber } from '../utils/formatNumber';
import Iconify from '../components/Iconify';
import Page from '../components/Page';

const list = [
  {
    name: 'FaceBook',
    value: 234,
    icon: <Iconify icon={'eva:facebook-fill'} color="#1877F2" width={32} />,
  },
  {
    name: 'Google',
    value: 212,
    icon: <Iconify icon={'eva:google-fill'} color="#DF3E30" width={32} />,
  },
  {
    name: 'Linkedin',
    value: 213,
    icon: <Iconify icon={'eva:linkedin-fill'} color="#006097" width={32} />,
  },
  {
    name: 'Twitter',
    value: 232,
    icon: <Iconify icon={'eva:twitter-fill'} color="#1C9CEA" width={32} />,
  },
];

export default function TrafficBySite() {
  return (
    <Page title="Analytics">
      <Container>
        <Typography sx={{ mb: 5 }} variant="h6">
          Google Analytics
        </Typography>
        <Card>
          <CardContent>
            <Box
              sx={{
                display: 'grid',
                gap: 2,
                gridTemplateColumns: 'repeat(2, 1fr)',
              }}
            >
              {list.map((site) => (
                <Paper key={site.name} variant="outlined" sx={{ py: 2.5, textAlign: 'center' }}>
                  <Box sx={{ mb: 0.5 }}>{site.icon}</Box>

                  <Typography variant="h6">{fShortenNumber(site.value)}</Typography>

                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {site.name}
                  </Typography>
                </Paper>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
}
