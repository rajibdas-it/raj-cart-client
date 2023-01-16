import React from "react";

import { BsHeart } from "react-icons/bs";

const Header = () => {
  return (
    <div>
      <header class="py-4 shadow-sm bg-white">
        <div class="container flex items-center justify-evenly">
          <a href="/">
            <img src="/assets/images/logo.svg" class="w-32" alt="" />
          </a>

          <div class="w-full max-w-xl relative flex">
            <span class="absolute left-4 top-3 text-lg text-gray-400">
              <i class="fas fa-search"></i>
            </span>
            <input
              type="text"
              placeholder="Search"
              class="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
            />
            <button class="bg-primary px-8 rounded-r-md border border-primary text-white hover:bg-transparent hover:text-primary transition">
              Search
            </button>
          </div>

          <div class="flex items-center justify-center space-x-10">
            <a
              href="/"
              class="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div class="text-2xl">
                <BsHeart />
              </div>
              <div class="text-xs leading-3">Wish List</div>
              <span class="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                8
              </span>
            </a>
            <a
              href="/"
              class="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div class="text-2xl">
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
              <div class="text-xs leading-3">Cart</div>
              <span class="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                8
              </span>
            </a>
            <a
              href="/"
              class="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div class="text-2xl">
                <i class="fa-regular fa-user"></i>
              </div>
              <div class="text-xs leading-3">Account</div>
            </a>
          </div>
        </div>
      </header>

      <nav class="bg-gray-800">
        <div class="container flex">
          <div class="px-8 py-4 bg-primary flex items-center cursor-pointer relative group">
            <span class="text-white">
              <i class="fas fa-bars"></i>
            </span>
            <span class="capitalize ml-2 text-white">all categories</span>

            <div class="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
              <a
                href="/"
                class="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <img
                  src="./assets/images/icons/bed.svg"
                  alt="sofa"
                  class="w-5 h-5 object-contain"
                />
                <span class="ml-6 text-gray-600 text-sm capitalize">Bed</span>
              </a>
              <a
                href="/"
                class="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <img
                  src="./assets/images/icons/sofa.svg"
                  alt="sofa"
                  class="w-5 h-5 object-contain"
                />
                <span class="ml-6 text-gray-600 text-sm capitalize">sofa</span>
              </a>
              <a
                href="/"
                class="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <img
                  src="./assets/images/icons/office.svg"
                  alt="sofa"
                  class="w-5 h-5 object-contain"
                />
                <span class="ml-6 text-gray-600 text-sm capitalize">
                  Office
                </span>
              </a>
              <a
                href="/"
                class="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <img
                  src="./assets/images/icons/terrace.svg"
                  alt="sofa"
                  class="w-5 h-5 object-contain"
                />
                <span class="ml-6 text-gray-600 text-sm capitalize">
                  Outdoor
                </span>
              </a>
              <a
                href="/"
                class="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <img
                  src="./assets/images/icons/bed-2.svg"
                  alt="sofa"
                  class="w-5 h-5 object-contain"
                />
                <span class="ml-6 text-gray-600 text-sm capitalize">
                  Mattress
                </span>
              </a>
              <a
                href="/"
                class="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <img
                  src="./assets/images/icons/restaurant.svg"
                  alt="sofa"
                  class="w-5 h-5 object-contain"
                />
                <span class="ml-6 text-gray-600 text-sm capitalize">
                  Dinning
                </span>
              </a>
            </div>
          </div>

          <div class="flex items-center justify-between flex-grow pl-12">
            <div class="flex items-center space-x-6 capitalize">
              <a
                href="index.html"
                class="text-gray-200 hover:text-white transition"
              >
                Home
              </a>
              <a
                href="shop.html"
                class="text-gray-200 hover:text-white transition"
              >
                Shop
              </a>
              <a href="/" class="text-gray-200 hover:text-white transition">
                About us
              </a>
              <a href="/" class="text-gray-200 hover:text-white transition">
                Contact us
              </a>
            </div>

            <a
              href="/"
              class="capitalize text-gray-200 hover:text-white transition"
            >
              login/register
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
