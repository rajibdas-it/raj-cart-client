import React from "react";
import addImg from "../../../assets/images/offer.jpg";

const AddBanner = () => {
  return (
    <div class="container pb-16">
      <a href="/">
        <img src={addImg} alt="" class="w-full" />
      </a>
    </div>
  );
};

export default AddBanner;
