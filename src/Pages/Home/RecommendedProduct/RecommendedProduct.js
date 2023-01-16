import React from "react";
import one from "../../../assets/images/products/product9.jpg";
import two from "../../../assets/images/products/product11.jpg";
import three from "../../../assets/images/products/product3.jpg";
import four from "../../../assets/images/products/product1.jpg";
import { AiFillStar } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BsCart3, BsHeart } from "react-icons/bs";

const RecommendedProduct = () => {
  return (
    <div class="container pb-16">
      <h1 class="text-3xl font-medium text-gray-800 uppercase mb-6">
        recommended for you
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white shadow rounded overflow-hidden">
          <div class="relative group">
            <img src={one} alt="" class="w-full" />
            <div class="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition">
              <a
                href="/"
                class="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              >
                <i class="fas fa-search"></i>
              </a>
              <a
                href="/"
                class="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              >
                <i class="far fa-heart"></i>
              </a>
            </div>
          </div>

          <div class="pt-4 pb-3 px-4">
            <a href="/">
              <h4 class="font-roboto uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                Guyer Chair
              </h4>
            </a>
            <div class="flex items-baseline mb-1 space-x-2 font-roboto">
              <p class="text-xl text-primary font-semibold">$45.00</p>
              <p class="text-sm text-gray-400 line-through">$55.00</p>
            </div>
            <div class="flex items-center space-x-2">
              <div class="flex gap-1 text-sm text-yellow-400">
                <span>
                  <i class="fas fa-star"></i>
                </span>
                <span>
                  <i class="fas fa-star"></i>
                </span>
                <span>
                  <i class="fas fa-star"></i>
                </span>
                <span>
                  <i class="fas fa-star"></i>
                </span>
                <span>
                  <i class="fas fa-star"></i>
                </span>
              </div>
              <p class="text-gray-500 text-xs ml-3">(150)</p>
            </div>
          </div>

          <a
            href="/"
            class="block w-full border border-primary py-1 text-center text-white bg-primary rounded-b hover:bg-transparent hover:text-primary transition"
          >
            Add to Cart
          </a>
        </div>

        <div class="bg-white shadow rounded overflow-hidden">
          <div class="relative group">
            <img src={two} alt="" class="w-full" />
            <div class="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition">
              <a
                href="/"
                class="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              >
                <i class="fas fa-search"></i>
              </a>
              <a
                href="/"
                class="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              >
                <i class="far fa-heart"></i>
              </a>
            </div>
          </div>

          <div class="pt-4 pb-3 px-4">
            <a href="/">
              <h4 class="font-roboto uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                Bed
              </h4>
            </a>
            <div class="flex items-baseline mb-1 space-x-2 font-roboto">
              <p class="text-xl text-primary font-semibold">$45.00</p>
              <p class="text-sm text-gray-400 line-through">$55.00</p>
            </div>
            <div class="flex items-center space-x-2">
              <div class="flex gap-1 text-sm text-yellow-400">
                <span>
                  <i class="fas fa-star"></i>
                </span>
                <span>
                  <i class="fas fa-star"></i>
                </span>
                <span>
                  <i class="fas fa-star"></i>
                </span>
                <span>
                  <i class="fas fa-star"></i>
                </span>
                <span>
                  <i class="fas fa-star"></i>
                </span>
              </div>
              <p class="text-gray-500 text-xs ml-3">(150)</p>
            </div>
          </div>

          <a
            href="/"
            class="block w-full border border-primary py-1 text-center text-white bg-primary rounded-b hover:bg-transparent hover:text-primary transition"
          >
            Add to Cart
          </a>
        </div>

        <div class="bg-white shadow rounded overflow-hidden">
          <div class="relative group">
            <img src={three} alt="" class="w-full" />
            <div class="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition">
              <a
                href="/"
                class="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              >
                <i class="fas fa-search"></i>
              </a>
              <a
                href="/"
                class="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              >
                <i class="far fa-heart"></i>
              </a>
            </div>
          </div>

          <div class="pt-4 pb-3 px-4">
            <a href="/">
              <h4 class="font-roboto uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                Mattress
              </h4>
            </a>
            <div class="flex items-baseline mb-1 space-x-2 font-roboto">
              <p class="text-xl text-primary font-semibold">$45.00</p>
              <p class="text-sm text-gray-400 line-through">$55.00</p>
            </div>
            <div class="flex items-center space-x-2">
              <div class="flex gap-1 text-sm text-yellow-400">
                <span>
                  <i class="fas fa-star"></i>
                </span>
                <span>
                  <i class="fas fa-star"></i>
                </span>
                <span>
                  <i class="fas fa-star"></i>
                </span>
                <span>
                  <i class="fas fa-star"></i>
                </span>
                <span>
                  <i class="fas fa-star"></i>
                </span>
              </div>
              <p class="text-gray-500 text-xs ml-3">(150)</p>
            </div>
          </div>

          <a
            href="/"
            class="block w-full border border-primary py-1 text-center text-white bg-primary rounded-b hover:bg-transparent hover:text-primary transition"
          >
            Add to Cart
          </a>
        </div>

        <div class="bg-white shadow rounded overflow-hidden">
          <div class="relative group">
            <img src={four} alt="" class="w-full" />
            <div class="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition">
              <a
                href="/"
                class="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              >
                <FiSearch />
              </a>
              <a
                href="/"
                class="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              >
                <BsHeart />
              </a>
            </div>
          </div>
          <div class="pt-4 pb-3 px-4">
            <a href="/">
              <h4 class="font-roboto uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                Dual Sofa
              </h4>
            </a>
            <div class="flex items-baseline mb-1 space-x-2 font-roboto">
              <p class="text-xl text-primary font-semibold">$45.00</p>
              <p class="text-sm text-gray-400 line-through">$55.00</p>
            </div>
            <div class="flex items-center space-x-2">
              <div class="flex gap-1 text-sm text-yellow-400">
                <span>
                  <AiFillStar />
                </span>
                <span>
                  <AiFillStar />
                </span>
                <span>
                  <AiFillStar />
                </span>
                <span>
                  <AiFillStar />
                </span>
                <span>
                  <AiFillStar />
                </span>
              </div>
              <p class="text-gray-500 text-xs ml-3">(150)</p>
            </div>
          </div>

          <a
            href="/"
            class="block w-full border border-primary py-1 text-center text-white bg-primary rounded-b hover:bg-transparent hover:text-primary transition"
          >
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecommendedProduct;
