import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Button, Typography, Container, Box } from '@mui/material';
import Page from '../components/Page';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Page403() {
  return (
    <Page title="403">
      <Container>
        <ContentStyle sx={{ textAlign: 'center', alignItems: 'center' }}>
          <Typography variant="h2" paragraph>
            No permission
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            The page you're trying access has restricted access. Please refer to your system administrator
          </Typography>
          <Box
            component="img"
            src="/static/illustrations/page403.svg"
            sx={{ height: 300, mx: 'auto', my: { xs: 5, sm: 10 } }}
          />
          <NavLink to="/" style={{ textDecoration: 'none' }}>
            <Button size="large" variant="containedInherit">
              Go to HomePage
            </Button>
          </NavLink>
        </ContentStyle>
      </Container>
    </Page>
  );
}
