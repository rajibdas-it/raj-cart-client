import React from "react";
import { AiFillStar } from "react-icons/ai";
const Ratings = ({ ratings }) => {
  return (
    <>
      {Array.apply(null, Array(Math.round(ratings))).map((index, item) => (
        <span key={index}>
          <AiFillStar />
        </span>
      ))}
    </>
  );
};

export default Ratings;
