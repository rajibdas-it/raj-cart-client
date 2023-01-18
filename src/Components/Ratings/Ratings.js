import React from "react";
import { AiFillStar } from "react-icons/ai";
const Ratings = ({ ratings }) => {
  console.log(ratings);
  return (
    <>
      {Array.apply(null, Array(Math.round(ratings))).map((item) => (
        <span>
          <AiFillStar />
        </span>
      ))}
    </>
  );
};

export default Ratings;
