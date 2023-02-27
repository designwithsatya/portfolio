import { useState, useContext } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Stack, IconButton, InputAdornment, TextField, Checkbox, Button } from '@mui/material';
import Iconify from '../../../components/Iconify';
import { UserContext } from '../../../App';
import { useMainContext } from '../../../context/Context';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const { setUserInfo } = useMainContext();
  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch(`process.env.REACT_APP_SERVER_URL/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    if (res.status === 400 || !data) {
      Swal.fire({
        icon: 'error',
        title: 'Sorry, you are not allowed to access this page',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      setUserInfo(data);
      dispatch({ type: 'USER', payload: true });
      navigate('/2023/home', { replace: true });
    }
  };

  return (
    <>
      <Stack spacing={3}>
        <TextField
          name="email"
          label="Password"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <TextField
          name="password"
          label="password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Checkbox name="remember" label="Remember me" />
        <NavLink
          to="/forgatepassword"
          style={{ textDecoration: 'none', cursor: 'pointer' }}
          variant="subtitle2"
          underline="hover"
        >
          Forgot password?
        </NavLink>
      </Stack>
      <Button size="large" type="submit" variant="containedInherit" onClick={loginUser}>
        Login
      </Button>
    </>
  );
}
