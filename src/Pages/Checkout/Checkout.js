import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    // <!-- checkout page start  -->
    <div className="container grid grid-cols-12 pb-16 pt-4 items-start gap-6">
      {/* <!-- check out form start --> */}
      <div className="col-span-8 border border-gray-200 p-4 rounded">
        <h3 className="text-lg font-medium capitalize mb-4">checkout</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label for="" className="text-gray-600 mb-2 block">
                First Name <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0"
              />
            </div>
            <div>
              <label for="" className="text-gray-600 mb-2 block">
                Last Name <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0"
              />
            </div>
          </div>
          <div>
            <label for="" className="text-gray-600 mb-2 block">
              Company Name
            </label>
            <input
              type="text"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0"
            />
          </div>
          <div>
            <label for="" className="text-gray-600 mb-2 block">
              Country/Region
            </label>
            <input
              type="text"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0"
            />
          </div>
          <div>
            <label for="" className="text-gray-600 mb-2 block">
              Street Address
            </label>
            <input
              type="text"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0"
            />
          </div>
          <div>
            <label for="" className="text-gray-600 mb-2 block">
              Town/City
            </label>
            <input
              type="text"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0"
            />
          </div>
          <div>
            <label for="" className="text-gray-600 mb-2 block">
              Zip
            </label>
            <input
              type="text"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0"
            />
          </div>
          <div>
            <label for="" className="text-gray-600 mb-2 block">
              Phone Number
            </label>
            <input
              type="text"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0"
            />
          </div>
        </div>
      </div>
      {/* <!-- check out form end --> */}

      {/* <!-- sidebar start  --> */}
      <div className="col-span-4 border border-gray-200 p-4 rounded">
        <h4 className="text-gray-800 uppercase text-lg font-medium">
          order summary
        </h4>
        <div className="space-y-2">
          <div className="flex justify-between">
            <div>
              <h5 className="text-gray-800 font-medium">Itilian Shape Sofa</h5>
              <p className="text-sm text-gray-600">Size: M</p>
            </div>
            <p className="text-gray-600">x3</p>
            <p className="text-gray-600 font-medium">$320</p>
          </div>
          <div className="flex justify-between">
            <div>
              <h5 className="text-gray-800 font-medium">Itilian Shape Sofa</h5>
              <p className="text-sm text-gray-600">Size: M</p>
            </div>
            <p className="text-gray-600">x3</p>
            <p className="text-gray-600 font-medium">$320</p>
          </div>
          <div className="flex justify-between">
            <div>
              <h5 className="text-gray-800 font-medium">Itilian Shape Sofa</h5>
              <p className="text-sm text-gray-600">Size: M</p>
            </div>
            <p className="text-gray-600">x3</p>
            <p className="text-gray-600 font-medium">$320</p>
          </div>
        </div>
        <div className="flex justify-between border border-gray-200 text-gray-800 font-medium py-3 uppercase">
          <h4>Sub-Total</h4>
          <p>$960</p>
        </div>
        <div className="flex justify-between border border-gray-200 text-gray-800 font-medium py-3 uppercase">
          <h4>shipping</h4>
          <p>free</p>
        </div>
        <div className="flex justify-between border border-gray-200 text-gray-800 font-medium py-3 uppercase">
          <h4 className="font-semibold">Total</h4>
          <p>$960</p>
        </div>
        <div className="flex items-center mb-4 mt-2">
          <input
            type="checkbox"
            name=""
            id="agreement"
            className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3"
          />
          <label
            for="agreement"
            className="text-gray-600 ml-3 cursor-pointer text-sm"
          >
            Agree to our
            <Link to="/" className="text-primary">
              <span> terms & conditions</span>
            </Link>
          </label>
        </div>
        <Link
          to="/"
          className="block w-full border border-primary py-1 text-center text-white bg-primary rounded-b hover:bg-transparent hover:text-primary transition"
        >
          Place Order
        </Link>
      </div>
      {/* <!-- sidebar end  --> */}
    </div>
  );
};

export default Checkout;
