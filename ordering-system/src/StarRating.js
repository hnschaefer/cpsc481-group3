import React from 'react';

const StarRating = ({ rating }) => {
  const starStyle = {
    fontSize: '30px',
    color: '#FFAA33 ',
  };

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= 3) {
      stars.push(
        <span
          key={i}
          className={i <= rating ? 'star filled' : 'star'}
          style={starStyle}
        >
          &#9733;
        </span>
      );
    } else {
      stars.push(
        <span
          key={i}
          className={'star'}
          style={starStyle}
        >
          &#9733;
        </span>
      );
    }
  }

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;