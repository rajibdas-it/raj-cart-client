import React from "react";
import { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { CartContext } from "../../Context/CartProvider";

const CartDetails = ({ item }) => {
  const { handleProductQuantity, handleDeleteProduct } =
    useContext(CartContext);
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
        <button
          onClick={() => handleProductQuantity(item, "decrement")}
          className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
        >
          -
        </button>
        <div className="h-8 w-8 text-sm flex items-center justify-center">
          {item.orderQty}
        </div>
        <button
          onClick={() => handleProductQuantity(item, "increment")}
          className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
        >
          +
        </button>
      </div>
      <div className="text-primary text-lg font-semibold">
        ${(item.price * item.orderQty).toFixed(2)}
      </div>
      <button
        onClick={() => handleDeleteProduct(item)}
        className="text-gray-600 cursor-pointer hover:text-primary"
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default CartDetails;
