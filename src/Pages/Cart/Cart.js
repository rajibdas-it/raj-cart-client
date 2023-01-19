import React from "react";
import prodImg1 from "../../assets/images/products/product2.jpg";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="container pb-16 mt-10 grid grid-cols-12 gap-6">
      <div className="col-span-9">
        <div className="space-y-4">
          {/* cart item table header start  */}
          <div class="bg-[#E9E4E4] flex items-center justify-between gap-6 border border-gray-200 rounded p-4">
            <div class="w-28 flex-shrink-0"></div>
            <div class="w-1/3">
              <h2 class="text-gray-800 text-xl font-bold capitalize">
                Product Descriptions
              </h2>
            </div>
            <div>
              <h2 class="text-gray-800 text-xl font-bold capitalize">
                Quantity
              </h2>
            </div>
            <div>
              <h2 class="text-gray-800 text-xl font-bold capitalize">
                Total Price
              </h2>
            </div>
            <div></div>
          </div>
          {/* cart item table header end  */}

          {/*  Cart Item Start */}
          <div class="flex items-center justify-between gap-6 border border-gray-200 rounded p-4">
            <div class="w-28 flex-shrink-0">
              <img src={prodImg1} alt="" class="w-full" />
            </div>
            <div class="w-1/3">
              <h2 class="text-gray-800 text-xl font-medium uppercase">
                Italian L shape Sofa
              </h2>
            </div>
            {/* <div class="text-primary text-lg font-semibold">$960.00</div> */}
            <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
              <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                -
              </div>
              <div className="h-8 w-8 text-sm flex items-center justify-center">
                4
              </div>
              <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                +
              </div>
            </div>
            <div class="text-primary text-lg font-semibold">$40.00</div>
            <button class="text-gray-600 cursor-pointer hover:text-primary">
              <FaTrash />
            </button>
          </div>
          <div class="flex items-center justify-between gap-6 border border-gray-200 rounded p-4">
            <div class="w-28 flex-shrink-0">
              <img src={prodImg1} alt="" class="w-full" />
            </div>
            <div class="w-1/3">
              <h2 class="text-gray-800 text-xl font-medium uppercase">
                Italian L shape Sofa
              </h2>
            </div>
            {/* <div class="text-primary text-lg font-semibold">$960.00</div> */}
            <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
              <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                -
              </div>
              <div className="h-8 w-8 text-sm flex items-center justify-center">
                4
              </div>
              <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                +
              </div>
            </div>
            <div class="text-primary text-lg font-semibold">$40.00</div>
            <button class="text-gray-600 cursor-pointer hover:text-primary">
              <FaTrash />
            </button>
          </div>
          {/*  Cart Item End */}
        </div>
      </div>
      {/* oder summar start */}
      <div class="col-span-3 ">
        <div className="border border-gray-200 p-4 rounded">
          <h4 class="text-gray-800 uppercase text-lg font-medium">
            order summary
          </h4>
          <div class="flex justify-between text-gray-800 font-medium pt-3 text-sm capitalize">
            <h4 class="font-semibold">Subtotal</h4>
            <p>$960</p>
          </div>
          <div class="flex justify-between text-gray-800 font-medium py-1 text-sm capitalize">
            <h4>Delivery</h4>
            <p>free</p>
          </div>
          <div class="flex justify-between border-b border-gray-200 text-gray-800 font-medium py-1 text-sm capitalize">
            <h4>Tax</h4>
            <p>free</p>
          </div>
          <div class="flex justify-between text-gray-800  py-3 uppercase text-sm font-bold">
            <h4 class="">Total</h4>
            <p>$960</p>
          </div>
          <div className="mt-2">
            <Link
              to="/checkout"
              class="block w-full border border-primary pt-1 text-center text-white bg-primary rounded-b hover:bg-transparent hover:text-primary transition"
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
