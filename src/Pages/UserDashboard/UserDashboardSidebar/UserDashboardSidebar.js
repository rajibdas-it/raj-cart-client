import React from "react";
import avatar from "../../../assets/images/avatar.png";

const UserDashboardSidebar = () => {
  return (
    <div>
      <div class="px-4 py-3 shadow flex items-center gap-4">
        <div class="flex-shrink-0">
          <img
            src={avatar}
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
  );
};

export default UserDashboardSidebar;
