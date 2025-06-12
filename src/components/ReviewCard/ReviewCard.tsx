import React from 'react';
import './ReviewCard.scss';

export interface ReviewProps {
  info: ReviewInfo;
}

export interface ReviewInfo {
  id: number;
  logo: string;
  review: string;
  photo: string;
  name: string;
  position: string;
  company: string;
}

const ReviewCard: React.FC<ReviewProps> = ({ info }) => {
  return (
    <div className="reviewCard">
      <div className="reviewCard__logo">
        <img src={info.logo} alt={`${info.company} logo`} />
      </div>
      <div className="reviewCard__text">{info.review}</div>
      <div className="reviewCard__author">
        <img src={info.photo} alt={info.name} className="reviewCard__photo" />
        <div className="reviewCard__info">
          <div className="reviewCard__name">{info.name}</div>
          <div className="reviewCard__position">
            {info.position}
            <span className="reviewCard__company">{info.company}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
