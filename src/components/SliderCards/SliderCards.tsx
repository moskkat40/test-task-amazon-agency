/* eslint-disable max-len */
import Slider from 'react-slick';
import logoOne from '../../images/1logo.png';
import logoTwo from '../../images/2logo.png';
import logoThree from '../../images/3logo.png';
import person1 from '../../images/person1.png';
import person2 from '../../images/person2.png';
import person3 from '../../images/person3.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReviewCard from '../ReviewCard/ReviewCard';
import './SliderCards.scss';

type ArrowProps = {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export const CustomPrevArrow = ({ onClick }: ArrowProps) => (
  <div className="custom-arrow prev" onClick={onClick}></div>
);

export const CustomNextArrow = ({ onClick }: ArrowProps) => (
  <div className="custom-arrow next" onClick={onClick}></div>
);

const SliderCards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <CustomNextArrow onClick={() => {}} />,
    prevArrow: <CustomPrevArrow onClick={() => {}} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [
    {
      id: 1,
      logo: logoOne,
      review:
        'Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth and client satisfaction.',
      photo: person1,
      name: 'Ethan Morgan',
      position: 'Founder and CEO, ',
      company: 'Serene Living Products',
    },
    {
      id: 2,
      logo: logoTwo,
      review:
        'Sales Fortuna has made sales so much easier for us. It saves time, simplifies the whole process, and helps us land more deals without extra hassle.',
      photo: person2,
      name: 'Olivia Hayes',
      position: 'Owner, Starlight ',
      company: 'Creations',
    },
    {
      id: 2,
      logo: logoThree,
      review:
        'Sales Fortuna has simplified our lead generation, helping us attract qualified prospects effortlessly and drive consistent growth.',
      photo: person3,
      name: 'Alexander Reed',
      position: 'Co-Founder, Opulent ',
      company: 'Living Group',
    },
  ];

  return (
    <div className="container">
      <Slider {...settings}>
        <ReviewCard info={data[0]} />
        <ReviewCard info={data[1]} />
        <ReviewCard info={data[2]} />
        <ReviewCard info={data[1]} />
        <ReviewCard info={data[2]} />
        <ReviewCard info={data[0]} />
      </Slider>
    </div>
  );
};

export default SliderCards;
