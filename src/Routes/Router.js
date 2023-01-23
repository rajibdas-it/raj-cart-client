import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import UserDashboard from "../Layout/UserDashboard";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import OrderHistory from "../Pages/UserDashboard/OrderHistory/OrderHistory";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Register from "../Pages/Register/Register";
import Shop from "../Pages/Shop/Shop";
import Wishlist from "../Pages/UserDashboard/Wishlist/Wishlist";
import Checkout from "../Pages/Checkout/Checkout";
import Cart from "../Pages/Cart/Cart";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/shop", element: <Shop></Shop> },
      { path: "/product-details", element: <ProductDetails></ProductDetails> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      { path: "/cart", element: <Cart></Cart> },
      {
        path: "/checkout",
        element: (
          <PrivateRoutes>
            <Checkout></Checkout>{" "}
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/user",
    element: (
      <PrivateRoutes>
        <UserDashboard></UserDashboard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/user",
        element: (
          <PrivateRoutes>
            <OrderHistory></OrderHistory>{" "}
          </PrivateRoutes>
        ),
      },
      {
        path: "/user/order-history",
        element: (
          <PrivateRoutes>
            <OrderHistory></OrderHistory>{" "}
          </PrivateRoutes>
        ),
      },
      { path: "/user/wishlist", element: <Wishlist></Wishlist> },
    ],
  },
]);
