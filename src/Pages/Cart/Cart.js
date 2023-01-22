import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartProvider";
import CartDetails from "./CartDetails";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="container pb-16 mt-10 grid grid-cols-12 gap-6">
      <div className="col-span-9">
        <div className="space-y-4">
          {/* cart item table header start  */}
          <div className="bg-[#E9E4E4] flex items-center justify-between gap-6 border border-gray-200 rounded p-4">
            <div className="w-28 flex-shrink-0"></div>
            <div className="w-1/3">
              <h2 className="text-gray-800 text-xl font-bold capitalize">
                Product Descriptions
              </h2>
            </div>
            <div>
              <h2 className="text-gray-800 text-xl font-bold capitalize">
                Quantity
              </h2>
            </div>
            <div>
              <h2 className="text-gray-800 text-xl font-bold capitalize">
                Total Price
              </h2>
            </div>
            <div></div>
          </div>
          {/* cart item table header end  */}

          {/*  Cart Item Start */}
          {cartItems.map((item) => (
            <CartDetails key={item._id} item={item}></CartDetails>
          ))}

          {/*  Cart Item End */}
        </div>
      </div>
      {/* oder summar start */}
      <div className="col-span-3 ">
        <div className="border border-gray-200 p-4 rounded">
          <h4 className="text-gray-800 uppercase text-lg font-medium">
            order summary
          </h4>
          <div className="flex justify-between text-gray-800 font-medium pt-3 text-sm capitalize">
            <h4 className="font-semibold">Subtotal</h4>
            <p>$960</p>
          </div>
          <div className="flex justify-between text-gray-800 font-medium py-1 text-sm capitalize">
            <h4>Delivery</h4>
            <p>free</p>
          </div>
          <div className="flex justify-between border-b border-gray-200 text-gray-800 font-medium py-1 text-sm capitalize">
            <h4>Tax</h4>
            <p>free</p>
          </div>
          <div className="flex justify-between text-gray-800  py-3 uppercase text-sm font-bold">
            <h4 className="">Total</h4>
            <p>$960</p>
          </div>
          <div className="mt-2">
            <Link
              to="/checkout"
              className="block w-full border border-primary pt-1 text-center text-white bg-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Place Order
            </Link>
          </div>
        </div>
      </div>
      {/* oder summar end */}
    </div>
  );
};

export default Cart;
