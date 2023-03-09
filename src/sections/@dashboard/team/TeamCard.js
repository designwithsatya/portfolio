import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Card, Typography, CardContent } from '@mui/material';

const StyledCardMedia = styled('div')({
  position: 'relative',
  paddingTop: 'calc(100% * 3 / 4)',
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
  objectFit: 'contain',
  position: 'absolute',
  marginTop: '20px',
  borderRadius: '50%',
  '&:hover': {
    filter: 'grayscale(100%)',
    transition: '1s',
  },
});

// ----------------------------------------------------------------------

TeamCard.propTypes = {
  team: PropTypes.object.isRequired,
};

export default function TeamCard({ team }) {
  const { name, role, img, title } = team;
  return (
    <>
      <Card
        sx={{ position: 'relative' }}
        style={{
          textAlign: 'center',
          margin: 10,
        }}
      >
        <StyledCardMedia>
          <StyledCover alt={title} src={img} />
        </StyledCardMedia>
        <CardContent>
          <StyledTitle>
            <Typography variant="h5">{name}</Typography>
          </StyledTitle>
          <StyledTitle color="inherit" variant="subtitle2">
            {role}
          </StyledTitle>
        </CardContent>
      </Card>
    </>
  );
}
