import { Container } from '@mui/material';
import Slider from 'react-slick';
import bannerData from '../../_mock/bannerdata';
import Iconify from '../Iconify';
import './carousel.css';

const PreviousBtn = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <Iconify color="#637381" icon="material-symbols:arrow-back-ios-new-sharp" />
    </div>
  );
};
const NextBtn = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <Iconify color="#637381" icon="material-symbols:navigate-next" />
    </div>
  );
};

const Carousel = () => {
  return (
    <Container>
      <div className="carousel">
        <Slider
          autoplay
          autoplaySpeed={2000}
          initialSlide={2}
          infinite
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
        >
          {bannerData.map((data, index) => (
            <div key={index}>
              <img src={data.img} alt={data.title} style={{ width: '100%', height: '50vh' }} id="uniqueimg" />
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default Carousel;
