import React from "react";
import { FaTrash } from "react-icons/fa";

const CartDetails = ({ item }) => {
  return (
    <div className="flex items-center justify-between gap-6 border border-gray-200 rounded p-4">
      <div className="w-28 flex-shrink-0">
        <img src={item.img} alt="" className="w-full" />
      </div>
      <div className="w-1/3">
        <h2 className="text-gray-800 text-xl font-medium uppercase">
          {item.productName}
        </h2>
      </div>
      {/* <div className="text-primary text-lg font-semibold">$960.00</div> */}
      <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
        <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
          -
        </div>
        <div className="h-8 w-8 text-sm flex items-center justify-center">
          {item.orderQty}
        </div>
        <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
          +
        </div>
      </div>
      <div className="text-primary text-lg font-semibold">
        ${(item.price * item.orderQty).toFixed(2)}
      </div>
      <button className="text-gray-600 cursor-pointer hover:text-primary">
        <FaTrash />
      </button>
    </div>
  );
};

export default CartDetails;
