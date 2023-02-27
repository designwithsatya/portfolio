import { useNavigate } from 'react-router-dom';
import { Stack, TextField, Button } from '@mui/material';
import { useState } from 'react';
import Swal from 'sweetalert2';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    work: '',
    password: '',
    cpassword: '',
  });

  // let name;
  // let value;

  const handleInputs = (e) => {
    const { name, value } = e.target;
    // name = e.target.name;
    // value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;
    const res = await fetch(`process.env.REACT_APP_SERVER_URL/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

    const data = await res.json();
    // I need to change the data to res
    if (data.status === 422 || !data) {
      Swal.fire({
        icon: 'error',
        title: 'Please make sure all fields are filled in correctly.',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Successfully Register',
        showConfirmButton: false,
        timer: 1500,
      });
      navigate('/login', { replace: true });
    }
  };

  return (
    <>
      <Stack spacing={3}>
        <Stack direction="row" spacing={2}>
          <TextField type="text" name="name" value={user.name} onChange={handleInputs} label="Full name" />
          <TextField type="text" name="email" value={user.email} onChange={handleInputs} label="Email address" />
        </Stack>
        <Stack direction="row" spacing={2}>
          <TextField type="text" name="work" value={user.work} onChange={handleInputs} label="Your work" />
          <TextField type="phone" name="phone" value={user.phone} onChange={handleInputs} label="Your Phone" />
        </Stack>
        <TextField name="password" label="Password" value={user.password} onChange={handleInputs} type="password" />
        <TextField name="cpassword" label="CPassword" value={user.cpassword} onChange={handleInputs} type="password" />
      </Stack>
      <Button sx={{ my: 2 }} size="large" type="submit" variant="containedInherit" onClick={PostData}>
        Register
      </Button>
    </>
  );
}
