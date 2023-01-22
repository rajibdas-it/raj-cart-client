import React from "react";
import { FaTrash } from "react-icons/fa";
import prodOne from "../../../assets/images/products/product10.jpg";

const Wishlist = () => {
  return (
    <div>
      {/* <!-- signle wishlist start  --> */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 border border-gray-200 rounded p-2">
        {/* <!-- wish list start  --> */}
        <div className="w-28 flex-shrink-0">
          <img src={prodOne} alt="" className="w-full" />
        </div>
        <div className="w-1/3">
          <h2 className="text-gray-800 text-xl font-medium uppercase">
            Italian L shape Sofa
          </h2>
          <p>
            Availability: <span className="text-green-600">In Stock</span>
          </p>
        </div>
        <div className="text-primary text-lg font-semibold">$960.00</div>
        <button
          type="submit"
          className="border border-primary px-6 py-2 text-center text-white bg-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
        >
          Add to Cart
        </button>
        <div className="text-gray-600 cursor-pointer hover:text-primary">
          <FaTrash className="w-6 h-6" />
        </div>
        {/* <!-- wish list end  --> */}
      </div>
    </div>
  );
};

export default Wishlist;
