import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { BsCart3, BsHeart } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";
import logo from "../../assets/images/logo.svg";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  console.log(categories);
  return (
    <div>
      <header className="py-4 shadow-sm bg-white hidden lg:block">
        <div className="container flex items-center justify-evenly">
          <a href="/">
            <img src={logo} className="w-32" alt="" />
          </a>

          <div className="w-full max-w-xl relative flex">
            <span className="absolute left-4 top-3 text-lg text-gray-400">
              <FiSearch className="w-6 h-6" />
            </span>
            <input
              type="text"
              placeholder="Search"
              className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
            />
            <button className="bg-primary px-8 rounded-r-md border border-primary text-white hover:bg-transparent hover:text-primary transition">
              Search
            </button>
          </div>

          <div className="flex items-center justify-center space-x-10">
            <a
              href="/"
              className="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="text-3xl">
                <BsHeart />
              </div>
              <div className="text-xs leading-3">Wish List</div>
              <span className="absolute right-2 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                8
              </span>
            </a>

            <a
              href="/"
              className="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="text-2xl">
                <BsCart3 />
              </div>
              <div className="text-xs leading-3">Cart</div>
              <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                8
              </span>
            </a>
            <a
              href="/"
              className="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="text-2xl">
                <i className="fa-regular fa-user"></i>
              </div>
              <div className="text-xs leading-3">Account</div>
            </a>
          </div>
        </div>
      </header>
      {/* <div>
        <section className="py-4 shadow-sm bottom-0 fixed bg-white w-full z-10 block lg:hidden">
          <div className="container flex items-center justify-evenly">
            <a href="/">
              <img src="/assets/images/logo.svg" className="w-32" alt="" />
            </a>
            <div className="flex flex-col justify-center items-center">
              <button className=" px-8 rounded-r-md  text-gray-800">
                <FiSearch />
              </button>
              <p className="text-gray-800 text-sm">Search</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <button className=" px-8 rounded-r-md  text-gray-800">
                <BsHeart />
              </button>
              <p className="text-gray-800 text-sm">Wishlist</p>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <button className="px-8 rounded-r-md  text-gray-800">
                <BsCart3 />
              </button>
              <p className="text-gray-800 text-sm">Cart</p>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <button className="px-8 rounded-r-md  text-gray-800">
                <FaUserAlt />
              </button>
              <p className="text-gray-800 text-sm">Account</p>
            </div>
          </div>
        </section>
      </div> */}

      <nav className="bg-gray-800">
        <div className="container flex">
          <div className="px-8 py-4 bg-primary flex items-center cursor-pointer relative group">
            <span className="text-white">
              <GiHamburgerMenu />
            </span>
            <span className="capitalize ml-2 text-white">all categories</span>
            <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 hidden group-hover:block">
              {categories.map((category) => (
                <a
                  href="/"
                  className="flex items-center px-6 py-3 hover:bg-gray-100 hover:text-red-500 transition"
                >
                  <span className="ml-6 text-gray-600 text-sm capitalize">
                    {category.categoryName}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-between flex-grow pl-12">
            <div className="flex items-center space-x-6 capitalize">
              <Link
                to="/"
                className="text-gray-200 hover:text-white transition"
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="text-gray-200 hover:text-white transition"
              >
                Shop
              </Link>
            </div>

            <div className="flex items-center relative">
              <Link
                to="/login"
                className="capitalize text-gray-200 hover:text-white transition"
              >
                Login
              </Link>
              <p className="text-gray-200">/</p>
              <Link
                to="/register"
                className="capitalize text-gray-200 hover:text-white transition"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
