import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Iconify from '../../../components/Iconify';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[500_8],
  '&:hover': {
    backgroundColor: theme.palette.grey[500_8],
  },
  marginLeft: 0,
  width: '50%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function BlogPostsSearch() {
  return (
    <Search>
      <SearchIconWrapper>
        <Iconify icon="eva:search-fill" />
      </SearchIconWrapper>
      <StyledInputBase placeholder="Post Search…" inputProps={{ 'aria-label': 'search' }} />
    </Search>
  );
}
