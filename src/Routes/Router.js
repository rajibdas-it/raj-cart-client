import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Register from "../Pages/Register/Register";
import Shop from "../Pages/Shop/Shop";
import Wishlist from "../Pages/Wishlist/Wishlist";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/shop", element: <Shop></Shop> },
      { path: "/product-details", element: <ProductDetails></ProductDetails> },
      { path: "/wishlist", element: <Wishlist></Wishlist> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
    ],
  },
]);
