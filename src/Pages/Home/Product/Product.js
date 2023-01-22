import React, { useEffect, useState } from "react";
import ProductCard from "../../../Components/ProductCard/ProductCard";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container pb-16">
      <h1 className="text-3xl font-medium text-gray-800 uppercase mb-6">
        top new arrival
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Product;
