import { Buffer } from 'buffer';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Card, Grid, Typography, CardContent, CardActions, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { fDateTime } from '../../../utils/formatTime';

// ----------------------------------------------------------------------

const StyledCardMedia = styled('div')({
  position: 'relative',
  paddingTop: 'calc(100% * 2 / 5)',
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
  const { _id, title, createdAt, cover, summary } = post;
  const base64ImageString = Buffer.from(cover.data.data, 'binary').toString('base64');

  return (
    <Grid item xs={12} sm={6} md={4}>
      <NavLink style={{ textDecoration: 'none' }} to={`/2023/blogs/post/${_id}`}>
        <Card className="cardhovereffect" sx={{ position: 'relative' }}>
          <StyledCardMedia>
            <StyledCover alt={title} src={`data:image/*;base64,${base64ImageString}`} />
          </StyledCardMedia>
          <CardContent>
            <Typography gutterBottom variant="caption" sx={{ color: 'text.disabled', display: 'block' }}>
              {fDateTime(createdAt)}
            </Typography>
            <StyledTitle>
              <Typography variant="subtitle2">{title}</Typography>
            </StyledTitle>
            <StyledTitle color="inherit" variant="body2">
              {summary}
            </StyledTitle>
          </CardContent>
          <CardActions>
            <Button fullWidth variant="outlinedInherit" size="small">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </NavLink>
    </Grid>
  );
}
