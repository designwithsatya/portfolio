import { Container, Typography } from '@mui/material';
import React from 'react';

const Slider = () => (
  <>
    <Container>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://solctech.com/images/software%20support/software%20development%2001.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <Typography variant="subtitle1">
                "Satyendra Singh Rajpoot ka DesignWithSatya is a web developer and Youtuber.DesignWithSatya want to help
                others by providing free videos on Web Development and Schools/University important topics."
              </Typography>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="http://trotons.com/wp-content/uploads/2019/11/Outsourcing-Software-Development-Projects.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <Typography variant="subtitle1">
                "Satyendra Singh Rajpoot ka DesignWithSatya is a web developer and Youtuber.DesignWithSatya want to help
                others by providing free videos on Web Development and Schools/University important topics."
              </Typography>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </Container>
  </>
);

export default Slider;
