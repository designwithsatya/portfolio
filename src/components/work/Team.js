import * as React from 'react';
import PropTypes from 'prop-types';
import { Container, Stack, Typography } from '@mui/material';
import Slider from 'react-slick';
import TeamCard from '../../sections/@dashboard/team/TeamCard';
import team from '../../_mock/team';
import Iconify from '../Iconify';
import Page from '../Page';
import '../banner/carousel.css';

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <button type="button" className={className} onClick={onClick}>
      <Iconify color="#637381" icon="material-symbols:chevron-left" />
    </button>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <button type="button" className={className} onClick={onClick}>
      <Iconify color="#637381" icon="material-symbols:chevron-right" />
    </button>
  );
};

export default function Team() {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    initialSlide: 0,
    infinite: false,
    speed: 500,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Page title="Team">
      <Container>
        <Stack textAlign="center">
          <Typography variant="h6" sx={{ mt: 5 }}>
            Meet Our Team
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 5 }}>
            We are team and we all are working as a software engineering in different different programming language.if
            you have any project and need our team on that project we are ready to help.( Thank You, you gave your time
            and read all these. Have a great day).
          </Typography>
        </Stack>
        <div className="carousel">
          <Slider {...settings}>
            {team.map((team, index) => {
              return <TeamCard key={index} team={team} />;
            })}
          </Slider>
        </div>
      </Container>
    </Page>
  );
}

NextBtn.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};
PreviousBtn.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};
