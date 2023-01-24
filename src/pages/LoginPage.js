import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import { Container, Typography, Divider } from '@mui/material';
import { LoginForm } from '../sections/auth/login';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(8, 0),
}));

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <StyledRoot>
        <Container maxWidth="sm">
          <Typography variant="h5" sx={{ textAlign: 'center' }}>
            Please Register The Page
          </Typography>
          <Divider sx={{ my: 1 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              OR
            </Typography>
          </Divider>
          <StyledContent>
            <Typography variant="body2" sx={{ mb: 2 }}>
              <NavLink to="/login" style={{ textDecoration: 'none', cursor: 'pointer' }} variant="subtitle2">
                I have an account?
              </NavLink>
            </Typography>
            <LoginForm />
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
}
