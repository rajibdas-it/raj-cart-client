import ReactStars from "react-stars";
import React, { useState } from "react";
import { render } from "react-dom";
import Rating from "react-rating";

const Ratings = () => {
  // const [ratings, setRatings] = useState(0);
  // const ratingChanged = (newRating) => {
  //   setRatings(newRating);
  // };
  const a = 3.6;

  return (
    <div>
      <h1>hlww! this is rating page</h1>
      {/* <ReactStars
        count={5}
        onChange={ratingChanged}
        size={30}
        color2={"#ffd700"}
      /> */}
      {/* <Rating /> */}
      {/* const a = 3.6;
      {Array.apply(null, Array(Math.round(a))).map((item) => (
        <span className="text-yellow-400 text-xl">★</span>
      ))} */}
    </div>
  );
};

export default Ratings;
