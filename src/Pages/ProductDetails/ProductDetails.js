import React from "react";

const ProductDetails = () => {
  return (
    <div>
      <div className="container grid grid-cols-2 gap-6">
        <div>
          <img
            src="/assets/images/products/product9.jpg"
            alt=""
            className="w-full"
          />
          <div className="grid grid-cols-5 gap-4 mt-4">
            <img
              src="/assets/images/products/product9.jpg"
              alt=""
              className="w-full cursor-pointer border border-primary"
            />
            <img
              src="/assets/images/products/product1.jpg"
              alt=""
              className="w-full cursor-pointer"
            />
            <img
              src="/assets/images/products/product8.jpg"
              alt=""
              className="w-full cursor-pointer"
            />
            <img
              src="/assets/images/products/product12.jpg"
              alt=""
              className="w-full cursor-pointer"
            />
            <img
              src="/assets/images/products/product11.jpg"
              alt=""
              className="w-full cursor-pointer"
            />
          </div>
        </div>
        {/* <!-- product big image end  --> */}

        {/* <!-- product content start  --> */}
        <div>
          <h2 className="text-3xl font-medium uppercase mb-2">
            Italian L Shape Sofa
          </h2>
          <div className="flex items-center mb-4">
            <div className="flex gap-1 text-sm text-yellow-400">
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span>
                <i className="fas fa-star"></i>
              </span>
            </div>
            <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
          </div>
          <div className="space-y-2">
            <p className="text-gray-800 font-semibold space-x-2">
              <span>Avilability:</span>
              <span className="text-green-600">In Stock</span>
            </p>
            <p className="text-gray-800 space-x-2">
              <span className="text-gray-800 font-semibold">Brand:</span>
              <span className="text-gray-600">Apex</span>
            </p>
            <p className="text-gray-800 space-x-2">
              <span className="text-gray-800 font-semibold">Category:</span>
              <span className="text-gray-600">Sofa</span>
            </p>
            <p className="text-gray-800 space-x-2">
              <span className="text-gray-800 font-semibold">SKU:</span>
              <span className="text-gray-600">8E45VGRT</span>
            </p>
          </div>
          <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
            <p className="text-2xl text-primary font-semibold">$45.00</p>
            <p className="text-base text-gray-400 line-through">$55.00</p>
          </div>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit.
          </p>
          {/* <!-- Size section start   --> */}
          <div className="pt-4">
            <h3 className="text-xl text-gray-800 mb-1 uppercase font-medium">
              Size
            </h3>
            <div className="flex items-center gap-2 uppercase">
              {/* <!-- single size button start  --> */}
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  className="hidden"
                  id="size-xs"
                />
                <label
                  for="size-xs"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm"
                >
                  xs
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  className="hidden"
                  id="size-s"
                />
                <label
                  for="size-s"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm"
                >
                  s
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  className="hidden"
                  id="size-m"
                />
                <label
                  for="size-m"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm"
                >
                  m
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  className="hidden"
                  id="size-l"
                />
                <label
                  for="size-l"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm"
                >
                  l
                </label>
              </div>
              {/* <!-- single size button end  --> */}
            </div>
          </div>
          {/* <!-- Size section end   --> */}
          {/* <!-- Color section start   --> */}
          <div className="py-4">
            <h3 className="text-xl text-gray-800 mb-1 uppercase font-medium">
              Color
            </h3>
            <div className="flex items-center gap-2">
              <div className="color-selector">
                <input
                  type="radio"
                  name="color"
                  className="hidden"
                  id="color-red"
                />
                <label
                  for="color-red"
                  className="bg-[#fc3d57] border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block"
                  //   style="background-color: #fc3d57"
                ></label>
              </div>
              <div className="color-selector">
                <input
                  type="radio"
                  name="color"
                  className="hidden"
                  id="color-white"
                />
                <label
                  for="color-white"
                  className="bg-[#fff] border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block"
                  //   style="background-color: #fff"
                ></label>
              </div>
              <div className="color-selector">
                <input
                  type="radio"
                  name="color"
                  className="hidden"
                  id="color-black"
                />
                <label
                  for="color-black"
                  className="bg-black border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block"
                  //   style="background-color: rgb(0, 0, 0)"
                ></label>
              </div>
            </div>
          </div>
          {/* <!-- Color section end   --> */}
          {/* <!-- quantity section start  --> */}
          <div className="mt-4">
            <h3 className="text-xl text-gray-800 mb-1 uppercase font-medium">
              Quantity
            </h3>
            <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
              <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                -
              </div>
              <div className="h-8 w-8 text-sm flex items-center justify-center">
                4
              </div>
              <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                +
              </div>
            </div>
          </div>
          {/* <!-- quantity section end  --> */}
          {/* <!-- add cart and wishlist button start   --> */}
          <div className="flex gap-3 border-b border-gray-200 pb-5 mt-6">
            <a
              href=""
              className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"
            >
              <i className="fas fa-shopping-bag"></i> Add to cart
            </a>
            <a
              href=""
              className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition"
            >
              <i className="fa fa-heart"></i> wishlist
            </a>
          </div>
          {/* <!-- add cart and wishlist button end   --> */}
          {/* <!-- social icon start  --> */}
          <div className="flex gap-3 mt-4">
            <a
              href=""
              className="text-gray-400 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center hover:text-gray-500 transition"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href=""
              className="text-gray-400 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center hover:text-gray-500 transition"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href=""
              className="text-gray-400 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center hover:text-gray-500 transition"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          {/* <!-- social icon end --> */}
        </div>
        {/* <!-- product content end  --> */}
      </div>
      {/* <!-- product view section end  --> */}

      {/* <!-- product details view start  --> */}
      <div className="container pb-16">
        <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium capitalize">
          Product details
        </h3>
        <div className="w-3/5 pt-6">
          <div className="text-gray-600 space-y-3 text-justify">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis est molestiae adipisci autem cum, architecto eum a
              quisquam molestias dignissimos.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis est molestiae adipisci autem cum, architecto eum a
              quisquam molestias dignissimos.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis est molestiae adipisci autem cum, architecto eum a
              quisquam molestias dignissimos.
            </p>
          </div>
          {/* <!-- product table start  --> */}
          <table className="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
            <tr>
              <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                Color
              </th>
              <td className="py-2 px-4 border border-gray-300">
                Black, Brown, Red
              </td>
            </tr>
            <tr>
              <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                Material
              </th>
              <td className="py-2 px-4 border border-gray-300">
                Artificial Leather
              </td>
            </tr>
            <tr>
              <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                Weight
              </th>
              <td className="py-2 px-4 border border-gray-300">50kg</td>
            </tr>
          </table>
          {/* <!-- product table end  --> */}
        </div>
      </div>
      {/* <!-- product details view end  --> */}

      {/* <!-- Related Product section start  --> */}
      <div className="container pb-16">
        <h1 className="text-3xl font-medium text-gray-800 uppercase mb-6">
          Related Product
        </h1>
        <div className="grid grid-cols-4 gap-6">
          {/* <!-- single product start  --> */}
          <div className="bg-white shadow rounded overflow-hidden">
            {/* <!-- product image start  --> */}
            <div className="relative group">
              <img
                src="/assets/images/products/product9.jpg"
                alt=""
                className="w-full"
              />
              {/* <!-- invisible group-hover:visible transition duration-1000 opactiy badh e ei vabeo kora jay tobe transition   --> */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <a
                  href=""
                  className="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i className="fas fa-search"></i>
                </a>
                <a
                  href=""
                  className="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i className="far fa-heart"></i>
                </a>
              </div>
            </div>
            {/* <!-- product image end  --> */}
            {/* <!-- product content start  --> */}
            <div className="pt-4 pb-3 px-4">
              <a href="#">
                <h4 className="font-roboto uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                  Guyer Chair
                </h4>
              </a>
              <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                <p className="text-xl text-primary font-semibold">$45.00</p>
                <p className="text-sm text-gray-400 line-through">$55.00</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                </div>
                <p className="text-gray-500 text-xs ml-3">(150)</p>
              </div>
            </div>
            {/* <!-- product content end  --> */}
            <a
              href="#"
              className="block w-full border border-primary py-1 text-center text-white bg-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Add to Cart
            </a>
          </div>
          {/* <!-- single product end  --> */}
          {/* <!-- single product start  --> */}
          <div className="bg-white shadow rounded overflow-hidden">
            {/* <!-- product image start  --> */}
            <div className="relative group">
              <img
                src="/assets/images/products/product11.jpg"
                alt=""
                className="w-full"
              />
              {/* <!-- invisible group-hover:visible transition duration-1000 opactiy badh e ei vabeo kora jay tobe transition   --> */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <a
                  href=""
                  className="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i className="fas fa-search"></i>
                </a>
                <a
                  href=""
                  className="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i className="far fa-heart"></i>
                </a>
              </div>
            </div>
            {/* <!-- product image end  --> */}
            {/* <!-- product content start  --> */}
            <div className="pt-4 pb-3 px-4">
              <a href="#">
                <h4 className="font-roboto uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                  Bed
                </h4>
              </a>
              <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                <p className="text-xl text-primary font-semibold">$45.00</p>
                <p className="text-sm text-gray-400 line-through">$55.00</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                </div>
                <p className="text-gray-500 text-xs ml-3">(150)</p>
              </div>
            </div>
            {/* <!-- product content end  --> */}
            <a
              href="#"
              className="block w-full border border-primary py-1 text-center text-white bg-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Add to Cart
            </a>
          </div>
          {/* <!-- single product end  --> */}
          {/* <!-- single product start  --> */}
          <div className="bg-white shadow rounded overflow-hidden">
            {/* <!-- product image start  --> */}
            <div className="relative group">
              <img
                src="/assets/images/products/product3.jpg"
                alt=""
                className="w-full"
              />
              {/* <!-- invisible group-hover:visible transition duration-1000 opactiy badh e ei vabeo kora jay tobe transition   --> */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <a
                  href=""
                  className="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i className="fas fa-search"></i>
                </a>
                <a
                  href=""
                  className="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i className="far fa-heart"></i>
                </a>
              </div>
            </div>
            {/* <!-- product image end  --> */}
            {/* <!-- product content start  --> */}
            <div className="pt-4 pb-3 px-4">
              <a href="#">
                <h4 className="font-roboto uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                  Mattress
                </h4>
              </a>
              <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                <p className="text-xl text-primary font-semibold">$45.00</p>
                <p className="text-sm text-gray-400 line-through">$55.00</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                </div>
                <p className="text-gray-500 text-xs ml-3">(150)</p>
              </div>
            </div>
            {/* <!-- product content end  --> */}
            <a
              href="#"
              className="block w-full border border-primary py-1 text-center text-white bg-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Add to Cart
            </a>
          </div>
          {/* <!-- single product end  --> */}
          {/* <!-- single product start  --> */}
          <div className="bg-white shadow rounded overflow-hidden">
            {/* <!-- product image start  --> */}
            <div className="relative group">
              <img
                src="/assets/images/products/product1.jpg"
                alt=""
                className="w-full"
              />
              {/* <!-- invisible group-hover:visible transition duration-1000 opactiy badh e ei vabeo kora jay tobe transition   --> */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <a
                  href=""
                  className="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i className="fas fa-search"></i>
                </a>
                <a
                  href=""
                  className="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i className="far fa-heart"></i>
                </a>
              </div>
            </div>
            {/* <!-- product image end  --> */}
            {/* <!-- product content start  --> */}
            <div className="pt-4 pb-3 px-4">
              <a href="#">
                <h4 className="font-roboto uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                  Dual Sofa
                </h4>
              </a>
              <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                <p className="text-xl text-primary font-semibold">$45.00</p>
                <p className="text-sm text-gray-400 line-through">$55.00</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                </div>
                <p className="text-gray-500 text-xs ml-3">(150)</p>
              </div>
            </div>
            {/* <!-- product content end  --> */}
            <a
              href="#"
              className="block w-full border border-primary py-1 text-center text-white bg-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Add to Cart
            </a>
          </div>
          {/* <!-- single product end  --> */}
        </div>
      </div>
      {/* <!-- Related Product section end  --> */}
    </div>
  );
};

export default ProductDetails;
