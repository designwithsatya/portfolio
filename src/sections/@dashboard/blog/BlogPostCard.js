import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Card, Grid, Typography, CardContent } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { fDateTime } from '../../../utils/formatTime';

// ----------------------------------------------------------------------

const StyledCardMedia = styled('div')({
  position: 'relative',
  paddingTop: 'calc(100% * 3 / 5)',
});

const StyledTitle = styled('div')({
  height: 44,
  overflow: 'hidden',
  WebkitLineClamp: 2,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  textDecoration: 'none',
});

const StyledCover = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

BlogPostCard.propTypes = {
  post: PropTypes.object.isRequired,
};

export default function BlogPostCard({ post }) {
  const { _id, title, summary, createdAt, cover } = post;
  const resimg = `E:/blogapp/backend/${cover}`;
  console.log(cover);
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card sx={{ position: 'relative' }}>
        <StyledCardMedia>
          <StyledCover alt={title} src={resimg} />
        </StyledCardMedia>
        <CardContent
          sx={{
            pt: 4,
          }}
        >
          <Typography gutterBottom variant="caption" sx={{ color: 'text.disabled', display: 'block' }}>
            {fDateTime(createdAt)}
          </Typography>
          <NavLink style={{ textDecoration: 'none' }} to={`/2023/blogs/post/${_id}`}>
            <StyledTitle color="inherit" variant="body2">
              {title}
            </StyledTitle>
          </NavLink>
          <StyledTitle color="inherit" variant="body1">
            {summary}
          </StyledTitle>
        </CardContent>
      </Card>
    </Grid>
  );
}
