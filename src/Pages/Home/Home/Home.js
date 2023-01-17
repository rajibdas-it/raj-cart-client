import React from "react";
import AddBanner from "../AddBanner/AddBanner";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Features from "../Features/Features";
import Product from "../Product/Product";
import Ratings from "../Ratings/Ratings";
import RecommendedProduct from "../RecommendedProduct/RecommendedProduct";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Features></Features>
      <Categories></Categories>
      <Product></Product>
      <AddBanner></AddBanner>
      <RecommendedProduct></RecommendedProduct>
      {/* <Ratings></Ratings> */}
    </div>
  );
};

export default Home;
