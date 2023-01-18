import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { id, categoryName, img } = category;
  return (
    <div class="relative rounded-sm overflow-hidden group">
      <img src={img} alt="" class="w-full" />
      <Link
        to="/"
        class="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition"
      >
        {categoryName}
      </Link>
    </div>
  );
};

export default Category;