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
      { path: "/checkout", element: <Checkout></Checkout> },
      { path: "/cart", element: <Cart></Cart> },
    ],
  },
  {
    path: "/user",
    element: <UserDashboard></UserDashboard>,
    children: [
      { path: "/user", element: <OrderHistory></OrderHistory> },
      { path: "/user/order-history", element: <OrderHistory></OrderHistory> },
      { path: "/user/wishlist", element: <Wishlist></Wishlist> },
    ],
  },
]);
