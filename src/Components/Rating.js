import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rate, handleRating, style }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => {
        return (
          <span key={i} onClick={() => handleRating(i)}>
            {rate > i ? (
              <AiFillStar style={style} fontSize={"15px"} />
            ) : (
              <AiOutlineStar style={style} fontSize={"15px"} />
            )}
          </span>
        );
      })}
    </>
  );
};

export default Rating;
