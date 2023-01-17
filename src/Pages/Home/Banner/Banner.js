import React from "react";

const Banner = () => {
  return (
    <div class="bg-banner bg-cover bg-center bg-no-repeat p-6 lg:p-3">
      <div class="container">
        <h1 class="text-2xl md:text-3xl lg:text-6xl font-roboto text-gray-800 font-medium mb-4 capitalize">
          Best Collection for <br />
          home decoration
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          sunt <br />
          <span className="hidden md:block">
            et inventore repellat accusantium officiis dolor omnis consectetur
            fuga sed.
          </span>
        </p>
        <div class="mt-6 lg:mt-12">
          <button class="text-white bg-primary px-8 py-3 border border-primary font-medium hover:bg-transparent hover:text-primary transition duration-200 rounded-md">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
