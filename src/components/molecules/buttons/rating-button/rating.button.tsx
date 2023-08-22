import React, { useEffect, useState } from 'react';
import { LikeButton } from '../like-button/like.button';

interface IRatingButtonProps {
  // TODO: add more props
  userRating: number;
  callback: () => void;
}

//TODO : customizable with props
export const RatingButton = ({ userRating, callback }: IRatingButtonProps) => {
  const [rating, setRating] = useState(userRating);

  useEffect(() => {
    if (callback) {
      callback();
    }
  }, [rating]);

  return (
    <React.Fragment>
      {[...Array(5)].map((item, index) => {
        const givenRating = index + 1;
        return (
          <LikeButton
            key={index}
            liked={givenRating <= rating ? true : false}
            callback={() => setRating(givenRating)}
          />
        );
      })}
    </React.Fragment>
  );
};
