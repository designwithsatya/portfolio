import { Stack, Button } from '@mui/material';
import Iconify from '../../components/Iconify';

export default function AuthSocial() {
  const navConfig = [
    {
      path: 'https://github.com/designwithsatyendra',
      icon: 'fa:github-alt',
      color: '#000000',
      id: 1,
    },
    {
      path: 'https://www.linkedin.com/in/satyendra-singh-48ba751b7',
      icon: 'entypo-social:linkedin-with-circle',
      color: '#1877F2',
      id: 2,
    },
    {
      path: 'https://www.youtube.com/watch?v=OXWCzLpcGN4',
      icon: 'fa:youtube-play',
      color: '#DF3E20',
      id: 3,
    },

    {
      path: 'https://www.instagram.com/satyendra_pooja_rajpoot/',
      icon: 'fa6-brands:instagram-square',
      color: '#bc2a8d',
      id: 4,
    },
  ];

  return (
    <>
      <Stack direction="row" mb={2} spacing={2}>
        {navConfig.map((item) => (
          <a key={item.id} href={item.path} target="_blank" rel="noopener noreferrer">
            <Button fullWidth size="large" color="inherit" variant="outlined">
              <Iconify icon={item.icon} color={item.color} width={22} height={22} />
            </Button>
          </a>
        ))}
      </Stack>
    </>
  );
}
