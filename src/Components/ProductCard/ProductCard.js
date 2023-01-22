import React from "react";
import { FiSearch } from "react-icons/fi";
import { BsHeart } from "react-icons/bs";
import Ratings from "../Ratings/Ratings";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartProvider";

const ProductCard = ({ product }) => {
  const { handleAddToCart } = useContext(CartContext);

  const {
    id,
    categoryId,
    categoryName,
    discountPrice,
    price,
    img,
    productName,
    ratings,
    reviewNo,
  } = product;

  return (
    <div className="bg-white shadow rounded overflow-hidden">
      <div className="relative group">
        <img src={img} alt="" className="w-full" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition">
          <a
            href="/"
            className="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
          >
            <FiSearch />
          </a>
          <a
            href="/"
            className="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
          >
            <BsHeart />
          </a>
        </div>
      </div>
      <div className="pt-4 pb-3 px-4">
        {/* eikahne single product er url hobe. jetay click korle product er details e niye jabe.  */}
        <Link to="/product-details">
          <h4 className="font-roboto uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
            {productName}
          </h4>
        </Link>
        <div className="flex items-baseline mb-1 space-x-2 font-roboto">
          {discountPrice && (
            <p className="text-xl text-primary font-semibold">
              ${discountPrice}
            </p>
          )}
          {discountPrice ? (
            <p className="text-sm text-gray-400 line-through">${price}</p>
          ) : (
            <p className="text-xl text-primary font-semibold">${price}</p>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex gap-1 text-sm text-yellow-400">
            <Ratings ratings={ratings}></Ratings>
          </div>
          <p className="text-gray-500 text-xs ml-3">({reviewNo})</p>
        </div>
      </div>

      <button
        onClick={() => handleAddToCart(product)}
        className="block w-full border border-primary py-1 text-center text-white bg-primary rounded-b hover:bg-transparent hover:text-primary transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
