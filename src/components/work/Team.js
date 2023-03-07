import * as React from 'react';
import { Container, Stack, Typography } from '@mui/material';
import Slider from 'react-slick';
import TeamCard from '../../sections/@dashboard/team/TeamCard';
import team from '../../_mock/team';

export default function Team() {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    initialSlide: 0,
    infinite: false,
    speed: 500,
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
    <>
      <Container>
        <Stack>
          <Typography variant="h5" sx={{ mb: 5, mt: 5 }}>
            Meet Our Team
          </Typography>
        </Stack>
        <div>
          <Slider {...settings}>
            {team.map((team, index) => {
              return <TeamCard key={index} team={team} />;
            })}
          </Slider>
        </div>
      </Container>
    </>
  );
}
