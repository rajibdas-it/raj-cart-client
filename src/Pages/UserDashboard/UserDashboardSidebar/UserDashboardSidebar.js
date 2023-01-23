import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../../assets/images/avatar.png";
import {
  FaAddressCard,
  FaGift,
  FaCreditCard,
  FaPowerOff,
} from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../../Context/UserContext";

const UserDashboardSidebar = () => {
  const { userSignOut } = useContext(AuthContext);
  const handleSignOut = () => {
    userSignOut()
      .then(() => {})
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <div className="px-4 py-3 shadow flex items-center gap-4">
        <div className="flex-shrink-0">
          <img
            src={avatar}
            alt=""
            className="rounded-full w-14 h-14 border border-gray-200 p-1 object-cover"
          />
        </div>
        <div className="flex-grow">
          <p className="text-gray-600">Hello,</p>
          <h4 className="text-gray-800 font-medium">Rajib Das</h4>
        </div>
      </div>
      <div className="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 text-gray-600">
        {/* <!-- Order history start  --> */}
        <div className="pl-8 pb-4 space-y-1">
          <p className="block text-xl font-semibold capitalize relative transition">
            <span className="absolute -left-8 top-1 text-base">
              <FaGift className="w-6 h-5" />
            </span>
            My Order History
          </p>
          <Link
            to="/user/order-history"
            className="text-primary block font-medium capitalize relative transition"
          >
            <span className="absolute -left-8 top-0 text-base">
              <i className="far fa-address-card"></i>
            </span>
            My Order
          </Link>
          <a
            href="/"
            className="hover:text-primary block capitalize relative transition"
          >
            My Returns
          </a>
          <a
            href="/"
            className="hover:text-primary block capitalize relative transition"
          >
            My Cancellations
          </a>
          <a
            href="/"
            className="hover:text-primary block capitalize relative transition"
          >
            My Review
          </a>
        </div>
        {/* <!-- Order history end  --> */}

        {/* <!-- Wishlist Section start  --> */}
        <div className="pl-8 pb-4 space-y-1 py-4">
          <p className="block text-xl font-semibold capitalize relative transition">
            <span className="absolute -left-8 top-1 text-base">
              <BsHeart className="w-6 h-5" />
            </span>
            My Wishlist
          </p>

          <Link
            to="/user/wishlist"
            className="hover:text-primary block capitalize relative transition"
          >
            Wishlist
          </Link>
        </div>
        {/* <!-- Wishlist Section end  --> */}

        {/* <!-- Payment Section start  --> */}
        <div className="pl-8 pb-4 space-y-1 py-4">
          <p className="block text-xl font-semibold capitalize relative transition">
            <span className="absolute -left-8 top-1 text-base">
              <FaCreditCard className="w-6 h-5" />
            </span>
            Payment Method
          </p>

          <a
            href="/"
            className="hover:text-primary block capitalize relative transition"
          >
            My Cards
          </a>
          <a
            href="/"
            className="hover:text-primary block capitalize relative transition"
          >
            Voucher
          </a>
        </div>
        {/* <!-- Payment Section end  --> */}

        {/* <!-- Manage Account Section start  --> */}
        <div className="pl-8 pb-4 space-y-1 py-4">
          <p className="block text-xl font-semibold capitalize relative transition">
            <span className="absolute -left-8 top-1 text-base">
              <FaAddressCard className="w-6 h-5" />
            </span>
            Manage My Account
          </p>

          <a
            href="/"
            className="hover:text-primary block capitalize relative transition"
          >
            Profile Information
          </a>
          <a
            href="/"
            className="hover:text-primary block capitalize relative transition"
          >
            Manage Address
          </a>
          <a
            href="/"
            className="hover:text-primary block capitalize relative transition"
          >
            Change Password
          </a>
        </div>
        {/* <!-- Manage Account end  --> */}

        {/* <!-- Logout Button start  --> */}
        <div className="pl-8 space-y-1 py-4">
          <button
            onClick={handleSignOut}
            className="block text-xl font-semibold capitalize relative transition"
          >
            <span className="absolute -left-8 top-1 text-base">
              <FaPowerOff className="w-6 h-5" />
            </span>
            Logout
          </button>
        </div>
        {/* <!-- Logout Button end  --> */}
      </div>
    </div>
  );
};

export default UserDashboardSidebar;
