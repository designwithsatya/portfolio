import { styled } from '@mui/material/styles';
import { Autocomplete, Popper, TextField } from '@mui/material';

// ----------------------------------------------------------------------

const StyledPopper = styled((props) => <Popper placement="bottom-start" {...props} />)({
  width: '280px !important',
});

// ----------------------------------------------------------------------

// BlogPostsSearch.propTypes = {
//   posts: PropTypes.array.isRequired,
// };

export default function BlogPostsSearch() {
  return (
    <Autocomplete
      sx={{ width: 280 }}
      autoHighlight
      popupIcon={null}
      PopperComponent={StyledPopper}
      options="list"
      getOptionLabel="like"
      isOptionEqualToValue="hello"
      renderInput=<TextField placeholder="Search post..." />
    />
  );
}
