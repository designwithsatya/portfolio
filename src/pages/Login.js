import { styled } from '@mui/material/styles';
import { Container, Typography, Divider } from '@mui/material';
import { NavLink } from 'react-router-dom';
// sections
import { LoginForm } from '../sections/auth/register';

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
          <StyledContent>
            <Typography variant="body2" sx={{ mb: 2 }}>
              <NavLink to="/register" style={{ textDecoration: 'none', cursor: 'pointer' }} variant="subtitle2">
                Don’t have an account?
              </NavLink>
            </Typography>
            <Divider sx={{ my: 3 }}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                OR
              </Typography>
            </Divider>
            <LoginForm />
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
}
