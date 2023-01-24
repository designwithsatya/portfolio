import { useState } from 'react';
import { Box } from '@mui/material';

import { Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import Footer from '../../pages/Footer';
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled(Box)({
  display: 'flex',
  overflow: 'hidden',
});

const MainStyle = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  width: '100vw',
  paddingTop: APP_BAR_MOBILE + 20,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    // paddingLeft: theme.spacing(2),
    // paddingRight: theme.spacing(2),
  },
}));

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <RootStyle>
        <DashboardNavbar onOpenSidebar={() => setOpen(true)} />
        <DashboardSidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
        <MainStyle>
          <Outlet />
        </MainStyle>
      </RootStyle>
      <Footer />
    </>
  );
}
