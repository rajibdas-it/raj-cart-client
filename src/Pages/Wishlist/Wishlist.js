import React from "react";

const Wishlist = () => {
  return (
    // <!-- account container start  -->
    <div class="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
      {/* <!-- side bar start  --> */}
      <div class="col-span-3">
        <div class="px-4 py-3 shadow flex items-center gap-4">
          <div class="flex-shrink-0">
            <img
              src="/assets/images/avatar.png"
              alt=""
              class="rounded-full w-14 h-14 border border-gray-200 p-1 object-cover"
            />
          </div>
          <div class="flex-grow">
            <p class="text-gray-600">Hello,</p>
            <h4 class="text-gray-800 font-medium">Rajib Das</h4>
          </div>
        </div>
        <div class="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 text-gray-600">
          {/* <!-- single link start  --> */}
          <div class="pl-8 pb-4 space-y-1">
            <a
              href="/"
              class="text-primary block font-medium capitalize relative transition"
            >
              <span class="absolute -left-8 top-0 text-base">
                <i class="far fa-address-card"></i>
              </span>
              Manage Account
            </a>
            <a
              href="/"
              class="hover:text-primary block capitalize relative transition"
            >
              My Order history
            </a>
            <a
              href="/"
              class="hover:text-primary block capitalize relative transition"
            >
              manage address
            </a>
            <a
              href="/"
              class="hover:text-primary block capitalize relative transition"
            >
              Change Password
            </a>
          </div>
          {/* <!-- single link end  --> */}
          {/* <!-- single link start  --> */}
          <div class="pl-8 space-y-1 py-4">
            <a
              href="/"
              class="hover:text-primary block font-medium capitalize relative transition"
            >
              <span class="absolute -left-8 top-0 text-base">
                <i class="far fa-address-card"></i>
              </span>
              Order History
            </a>
            <a
              href="/"
              class="hover:text-primary block capitalize relative transition"
            >
              My Order history
            </a>
            <a
              href="/"
              class="hover:text-primary block capitalize relative transition"
            >
              manage address
            </a>
            <a
              href="/"
              class="hover:text-primary block capitalize relative transition"
            >
              Change Password
            </a>
          </div>
          {/* <!-- single link end  --> */}
          {/* <!-- single link start  --> */}
          <div class="pl-8 space-y-1 py-4">
            <a
              href="/"
              class="hover:text-primary block font-medium capitalize relative transition"
            >
              <span class="absolute -left-8 top-0 text-base">
                <i class="far fa-address-card"></i>
              </span>
              Payment history
            </a>
            <a
              href="/"
              class="hover:text-primary block capitalize relative transition"
            >
              Voucher
            </a>
          </div>
          {/* <!-- single link end  --> */}
          {/* <!-- single link start  --> */}
          <div class="pl-8 space-y-1 py-4">
            <a
              href="/"
              class="hover:text-primary block font-medium capitalize relative transition"
            >
              <span class="absolute -left-8 top-0 text-base">
                <i class="far fa-address-card"></i>
              </span>
              My Wishlist
            </a>
          </div>
          {/* <!-- single link end  --> */}
          {/* <!-- single link start  --> */}
          <div class="pl-8 space-y-1 py-4">
            <a
              href="/"
              class="hover:text-primary block font-medium capitalize relative transition"
            >
              <span class="absolute -left-8 top-0 text-base">
                <i class="far fa-address-card"></i>
              </span>
              Logout
            </a>
          </div>
          {/* <!-- single link end  --> */}
        </div>
      </div>
      {/* <!-- side bar end  --> */}

      {/* <!-- wishlist start  --> */}
      <div class="col-span-9 space-y-4">
        {/* <!-- signle wishlist start  --> */}
        <div class="flex items-center justify-between gap-6 border border-gray-200 rounded">
          {/* <!-- wish list start  --> */}
          <div class="w-28 flex-shrink-0">
            <img
              src="assets/images/products/product9.jpg"
              alt=""
              class="w-full"
            />
          </div>
          <div class="w-1/3">
            <h2 class="text-gray-800 text-xl font-medium uppercase">
              Italian L shape Sofa
            </h2>
            <p>
              Availability: <span class="text-green-600">In Stock</span>
            </p>
          </div>
          <div class="text-primary text-lg font-semibold">$960.00</div>
          <button
            type="submit"
            class="border border-primary px-6 py-2 text-center text-white bg-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
          >
            Add to Cart
          </button>
          <div class="text-gray-600 cursor-pointer hover:text-primary">
            <i class="fas fa-trash"></i>
          </div>
          {/* <!-- wish list end  --> */}
        </div>
        {/* <!-- signle wishlist end --> */}
        {/* <!-- signle wishlist start  --> */}
        <div class="flex items-center justify-between gap-6 border border-gray-200 rounded">
          {/* <!-- wish list start  --> */}
          <div class="w-28 flex-shrink-0">
            <img
              src="assets/images/products/product9.jpg"
              alt=""
              class="w-full"
            />
          </div>
          <div class="w-1/3">
            <h2 class="text-gray-800 text-xl font-medium uppercase">
              Italian L shape Sofa
            </h2>
            <p>
              Availability: <span class="text-green-600">In Stock</span>
            </p>
          </div>
          <div class="text-primary text-lg font-semibold">$960.00</div>
          <button
            type="submit"
            class="border border-primary px-6 py-2 text-center text-white bg-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
          >
            Add to Cart
          </button>
          <div class="text-gray-600 cursor-pointer hover:text-primary">
            <i class="fas fa-trash"></i>
          </div>
          {/* <!-- wish list end  --> */}
        </div>
        {/* <!-- signle wishlist end --> */}
        {/* <!-- signle wishlist start  --> */}
        <div class="flex items-center justify-between gap-6 border border-gray-200 rounded">
          {/* <!-- wish list start  --> */}
          <div class="w-28 flex-shrink-0">
            <img
              src="assets/images/products/product9.jpg"
              alt=""
              class="w-full"
            />
          </div>
          <div class="w-1/3">
            <h2 class="text-gray-800 text-xl font-medium uppercase">
              Italian L shape Sofa
            </h2>
            <p>
              Availability: <span class="text-green-600">In Stock</span>
            </p>
          </div>
          <div class="text-primary text-lg font-semibold">$960.00</div>
          <button
            type="submit"
            class="border border-primary px-6 py-2 text-center text-white bg-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
          >
            Add to Cart
          </button>
          <div class="text-gray-600 cursor-pointer hover:text-primary">
            <i class="fas fa-trash"></i>
          </div>
          {/* <!-- wish list end  --> */}
        </div>
        {/* <!-- signle wishlist end --> */}
      </div>
      {/* <!-- wishlist info end  --> */}
    </div>
  );
};

export default Wishlist;
