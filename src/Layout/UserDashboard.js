import React from "react";
import { Outlet } from "react-router-dom";
import UserDashboardSidebar from "../Pages/UserDashboard/UserDashboardSidebar/UserDashboardSidebar";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const UserDashboard = () => {
  return (
    <div>
      <Header />
      <div className="container grid grid-cols-1 lg:grid-cols-12 items-start gap-6 pt-4 pb-16">
        <div className="col-span-3 hidden lg:block">
          <UserDashboardSidebar></UserDashboardSidebar>
        </div>
        <div className="col-span-9 space-y-4">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserDashboard;
