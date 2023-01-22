import React from "react";
import addImg from "../../../assets/images/offer.jpg";

const AddBanner = () => {
  return (
    <div className="container pb-16">
      <a href="/">
        <img src={addImg} alt="" className="w-full" />
      </a>
    </div>
  );
};

export default AddBanner;
