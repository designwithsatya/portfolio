import * as React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
// material
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { Box, Stack, AppBar, Toolbar, Typography, Tooltip, useMediaQuery } from '@mui/material';

// components

import Iconify from '../../components/Iconify';
import AccountPopover from './AccountPopover';
import ScrollIndicator from '../../components/scroll/ScrollIndicator';
import { bgBlur } from '../../utils/cssStyles';
import { useSettingsContext } from '../../components/settings';
import SvgColor from '../../components/svg-color';
import { Search } from './Search';
import MobileSection from './MobileSection';

const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 64;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  ...bgBlur({ color: theme.palette.background.default }),
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

DashboardNavbar.propTypes = {
  onOpenSidebar: PropTypes.func,
};

export default function DashboardNavbar({ onOpenSidebar }) {
  const { themeMode, onToggleMode } = useSettingsContext();
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <RootStyle>
      <Box sx={{ flexGrow: 1 }}>
        <ScrollIndicator />
        <ToolbarStyle>
          <IconButton onClick={onOpenSidebar} sx={{ mr: 1 }}>
            <Tooltip title="Menu" arrow>
              <Iconify color="#637381" icon="eva:menu-2-fill" />
            </Tooltip>
          </IconButton>

          <Typography id="mynamestyle1" variant="subtitle2" sx={{ flexGrow: 1 }}>
            <NavLink id="mynamestyle1" to="/" style={{ textDecoration: 'none' }}>
              DESIGNWITHSATYA
            </NavLink>
          </Typography>
          <IconButton color={themeMode === 'dark' ? 'warning' : 'default'} onClick={onToggleMode}>
            <SvgColor src={`/assets/icons/setting/ic_${themeMode === 'light' ? 'moon' : 'sun'}.svg`} />
          </IconButton>

          <Stack direction="row" alignItems="center" spacing={{ xs: 1.5, sm: 1.5 }}>
            {!matchesXs && <Search />}
            {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}
            <NavLink
              to="/2023/blogs/sourcecode"
              style={{
                textDecoration: 'none',
                color: '#fff',
                background: '#6747c7',
                fontSize: '12px',
                fontWeight: 'bold',
                padding: '7px',
                borderRadius: '3px',
                boxShadow: '0 3px 1px -2px #0003, 0 2px 2px #00000024, 0 1px 5px #0000001f',
              }}
            >
              SOURCECODE
            </NavLink>
            {!matchesXs && <AccountPopover />}
            {matchesXs && <MobileSection />}
          </Stack>
        </ToolbarStyle>
      </Box>
    </RootStyle>
  );
}
