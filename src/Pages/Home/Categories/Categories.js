import React from "react";
import bedroom from "../../../assets/images/category/category-1.jpg";
import sofa from "../../../assets/images/category/category-5.jpg";
import office from "../../../assets/images/category/category-3.jpg";

const Categories = () => {
  return (
    <div class="container py-16">
      <h2 class="text-roboto text-2xl font-medium text-gray-800 uppercase mb-6">
        shop by category
      </h2>
      <div class="grid grid-cols-3 gap-3">
        <div class="relative rounded-sm overflow-hidden group">
          <img src={bedroom} alt="" class="w-full" />
          <a
            href="/"
            class="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition"
          >
            Bedroom
          </a>
        </div>
        <div class="relative rounded-sm overflow-hidden group">
          <img src={sofa} alt="" class="w-full" />
          <a
            href="/"
            class="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition"
          >
            Sofa
          </a>
        </div>
        <div class="relative rounded-sm overflow-hidden group">
          <img src={office} alt="" class="w-full" />
          <a
            href="/"
            class="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition"
          >
            Office
          </a>
        </div>
      </div>
    </div>
  );
};

export default Categories;
