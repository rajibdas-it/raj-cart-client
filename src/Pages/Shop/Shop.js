import React from "react";

const Shop = () => {
  return (
    <div class="container grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
      {/* <!-- sidebar start --> */}
      <div class="col-span-1 bg-white px-4 shadow rounded overflow-hidden">
        <div class="divide-y divide-gray-200 space-y-5">
          {/* <!-- category section start   --> */}
          <div class="mt-4">
            <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">
              categories
            </h3>
            <div class="space-y-2">
              {/* <!-- single category  --> */}
              <div class="flex items-center">
                <input type="checkbox" id="cat-1" class="text-primary" />
                <label for="cat-1" class="text-gray-600 ml-3 cursor-pointer">
                  Bedroom
                </label>
                <div class="ml-auto text-gray-600 text-sm">(15)</div>
              </div>
              <div class="flex items-center">
                <input type="checkbox" id="cat-1" class="text-primary" />
                <label for="cat-1" class="text-gray-600 ml-3 cursor-pointer">
                  Sofa
                </label>
                <div class="ml-auto text-gray-600 text-sm">(15)</div>
              </div>
              <div class="flex items-center">
                <input type="checkbox" id="cat-1" class="text-primary" />
                <label for="cat-1" class="text-gray-600 ml-3 cursor-pointer">
                  Office
                </label>
                <div class="ml-auto text-gray-600 text-sm">(15)</div>
              </div>
              <div class="flex items-center">
                <input type="checkbox" id="cat-1" class="text-primary" />
                <label for="cat-1" class="text-gray-600 ml-3 cursor-pointer">
                  Outdoor
                </label>
                <div class="ml-auto text-gray-600 text-sm">(15)</div>
              </div>
              {/* <!-- single category end  --> */}
            </div>
          </div>
          {/* <!-- category section end   --> */}
          {/* <!-- Brand section start   --> */}
          <div class="pt-4">
            <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">
              Brand
            </h3>
            <div class="space-y-2">
              {/* <!-- single category  --> */}
              <div class="flex items-center">
                <input type="checkbox" id="cat-1" class="text-primary" />
                <label for="cat-1" class="text-gray-600 ml-3 cursor-pointer">
                  Bedroom
                </label>
                <div class="ml-auto text-gray-600 text-sm">(15)</div>
              </div>
              <div class="flex items-center">
                <input type="checkbox" id="cat-1" class="text-primary" />
                <label for="cat-1" class="text-gray-600 ml-3 cursor-pointer">
                  Sofa
                </label>
                <div class="ml-auto text-gray-600 text-sm">(15)</div>
              </div>
              <div class="flex items-center">
                <input type="checkbox" id="cat-1" class="text-primary" />
                <label for="cat-1" class="text-gray-600 ml-3 cursor-pointer">
                  Office
                </label>
                <div class="ml-auto text-gray-600 text-sm">(15)</div>
              </div>
              <div class="flex items-center">
                <input type="checkbox" id="cat-1" class="text-primary" />
                <label for="cat-1" class="text-gray-600 ml-3 cursor-pointer">
                  Outdoor
                </label>
                <div class="ml-auto text-gray-600 text-sm">(15)</div>
              </div>
              {/* <!-- single category end  --> */}
            </div>
          </div>
          {/* <!-- Brand section end   --> */}
          {/* <!-- Price section start   --> */}
          <div class="pt-4">
            <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">
              Price
            </h3>
            <div class="mt-4 flex items-center">
              <input
                type="text"
                class="w-full border border-gray-300 px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
                placeholder="min price"
              />
              <span class="mx-3 text-gray-500">-</span>
              <input
                type="text"
                class="w-full border border-gray-300 px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
                placeholder="max price"
              />
            </div>
          </div>
          {/* <!-- Price section end   --> */}
          {/* <!-- Size section start   --> */}
          <div class="pt-4">
            <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">
              Size
            </h3>
            <div class="flex items-center gap-2 uppercase">
              {/* <!-- single size button start  --> */}
              <div class="size-selector">
                <input type="radio" name="size" class="hidden" id="size-xs" />
                <label
                  for="size-xs"
                  class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm"
                >
                  xs
                </label>
              </div>
              <div class="size-selector">
                <input type="radio" name="size" class="hidden" id="size-s" />
                <label
                  for="size-s"
                  class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm"
                >
                  s
                </label>
              </div>
              <div class="size-selector">
                <input type="radio" name="size" class="hidden" id="size-m" />
                <label
                  for="size-m"
                  class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm"
                >
                  m
                </label>
              </div>
              <div class="size-selector">
                <input type="radio" name="size" class="hidden" id="size-l" />
                <label
                  for="size-l"
                  class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm"
                >
                  l
                </label>
              </div>
              {/* <!-- single size button end  --> */}
            </div>
          </div>
          {/* <!-- Size section end   --> */}
          {/* <!-- Color section start   --> */}
          <div class="py-4">
            <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">
              Color
            </h3>
            <div class="flex items-center gap-2">
              <div class="color-selector">
                <input
                  type="radio"
                  name="color"
                  class="hidden"
                  id="color-red"
                />
                <label
                  for="color-red"
                  class="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block"
                  style={{ backgroundColor: "#fc3d57" }}
                ></label>
              </div>
              <div class="color-selector">
                <input
                  type="radio"
                  name="color"
                  class="hidden"
                  id="color-white"
                />
                <label
                  for="color-white"
                  class="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block"
                  style={{ backgroundColor: "#fff" }}
                ></label>
              </div>
              <div class="color-selector">
                <input
                  type="radio"
                  name="color"
                  class="hidden"
                  id="color-black"
                />
                <label
                  for="color-black"
                  class="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block"
                  style={{ backgroundColor: "rgb(0, 0, 0)" }}
                ></label>
              </div>
            </div>
          </div>
          {/* <!-- Color section end   --> */}
        </div>
      </div>
      {/* <!-- sidebar end --> */}
      {/* <!-- product start --> */}
      <div class="col-span-3">
        {/* <!-- sorting start  --> */}
        <div class="flex items-center mb-4">
          <select
            class="w-44 text-sm text-gray-600 px-4 py-3 border border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary"
            name=""
            id=""
          >
            <option value="">Default Sorting</option>
            <option value="">Price Low-High</option>
            <option value="">Price High-Low</option>
            <option value="">Latest Product</option>
          </select>
          <div class="flex gap-2 ml-auto">
            <div class="border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer">
              <i class="fas fa-th"></i>
            </div>
            <div class="w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer">
              <i class="fas fa-list"></i>
            </div>
          </div>
        </div>
        {/* <!-- sorting end  --> */}
        {/* <!-- product details start  --> */}
        {/* <!-- product wrapper start  --> */}
        <div class="grid grid-cols-3 gap-6">
          {/* <!-- single product start  --> */}
          <div class="bg-white shadow rounded overflow-hidden">
            {/* <!-- product image start  --> */}
            <div class="relative group">
              <img
                src="/assets/images/products/product9.jpg"
                alt=""
                class="w-full"
              />
              {/* <!-- invisible group-hover:visible transition duration-1000 opactiy badh e ei vabeo kora jay tobe transition   --> */}
              <div class="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <a
                  href="/"
                  class="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i class="fas fa-search"></i>
                </a>
                <a
                  href="/"
                  class="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i class="far fa-heart"></i>
                </a>
              </div>
            </div>
            {/* <!-- product image end  --> */}
            {/* <!-- product content start  --> */}
            <div class="pt-4 pb-3 px-4">
              <a href="/">
                <h4 class="font-roboto uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                  Guyer Chair
                </h4>
              </a>
              <div class="flex items-baseline mb-1 space-x-2 font-roboto">
                <p class="text-xl text-primary font-semibold">$45.00</p>
                <p class="text-sm text-gray-400 line-through">$55.00</p>
              </div>
              <div class="flex items-center space-x-2">
                <div class="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                </div>
                <p class="text-gray-500 text-xs ml-3">(150)</p>
              </div>
            </div>
            {/* <!-- product content end  --> */}
            <a
              href="/"
              class="block w-full border border-primary py-1 text-center text-white bg-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Add to Cart
            </a>
          </div>
          {/* <!-- single product end  --> */}
          {/* <!-- single product start  --> */}
          <div class="bg-white shadow rounded overflow-hidden">
            {/* <!-- product image start  --> */}
            <div class="relative group">
              <img
                src="/assets/images/products/product11.jpg"
                alt=""
                class="w-full"
              />
              {/* <!-- invisible group-hover:visible transition duration-1000 opactiy badh e ei vabeo kora jay tobe transition   --> */}
              <div class="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <a
                  href="/"
                  class="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i class="fas fa-search"></i>
                </a>
                <a
                  href="/"
                  class="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i class="far fa-heart"></i>
                </a>
              </div>
            </div>
            {/* <!-- product image end  --> */}
            {/* <!-- product content start  --> */}
            <div class="pt-4 pb-3 px-4">
              <a href="/">
                <h4 class="font-roboto uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                  Bed
                </h4>
              </a>
              <div class="flex items-baseline mb-1 space-x-2 font-roboto">
                <p class="text-xl text-primary font-semibold">$45.00</p>
                <p class="text-sm text-gray-400 line-through">$55.00</p>
              </div>
              <div class="flex items-center space-x-2">
                <div class="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                </div>
                <p class="text-gray-500 text-xs ml-3">(150)</p>
              </div>
            </div>
            {/* <!-- product content end  --> */}
            <a
              href="/"
              class="block w-full border border-primary py-1 text-center text-white bg-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Add to Cart
            </a>
          </div>
          {/* <!-- single product end  --> */}
          {/* <!-- single product start  --> */}
          <div class="bg-white shadow rounded overflow-hidden">
            {/* <!-- product image start  --> */}
            <div class="relative group">
              <img
                src="/assets/images/products/product3.jpg"
                alt=""
                class="w-full"
              />
              {/* <!-- invisible group-hover:visible transition duration-1000 opactiy badh e ei vabeo kora jay tobe transition   --> */}
              <div class="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <a
                  href="/"
                  class="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i class="fas fa-search"></i>
                </a>
                <a
                  href="/"
                  class="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i class="far fa-heart"></i>
                </a>
              </div>
            </div>
            {/* <!-- product image end  --> */}
            {/* <!-- product content start  --> */}
            <div class="pt-4 pb-3 px-4">
              <a href="/">
                <h4 class="font-roboto uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                  Mattress
                </h4>
              </a>
              <div class="flex items-baseline mb-1 space-x-2 font-roboto">
                <p class="text-xl text-primary font-semibold">$45.00</p>
                <p class="text-sm text-gray-400 line-through">$55.00</p>
              </div>
              <div class="flex items-center space-x-2">
                <div class="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                </div>
                <p class="text-gray-500 text-xs ml-3">(150)</p>
              </div>
            </div>
            {/* <!-- product content end  --> */}
            <a
              href="/"
              class="block w-full border border-primary py-1 text-center text-white bg-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Add to Cart
            </a>
          </div>
          {/* <!-- single product end  --> */}
          {/* <!-- single product start  --> */}
          <div class="bg-white shadow rounded overflow-hidden">
            {/* <!-- product image start  --> */}
            <div class="relative group">
              <img
                src="/assets/images/products/product3.jpg"
                alt=""
                class="w-full"
              />
              {/* <!-- invisible group-hover:visible transition duration-1000 opactiy badh e ei vabeo kora jay tobe transition   --> */}
              <div class="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <a
                  href="/"
                  class="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i class="fas fa-search"></i>
                </a>
                <a
                  href="/"
                  class="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i class="far fa-heart"></i>
                </a>
              </div>
            </div>
            {/* <!-- product image end  --> */}
            {/* <!-- product content start  --> */}
            <div class="pt-4 pb-3 px-4">
              <a href="/">
                <h4 class="font-roboto uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                  Mattress
                </h4>
              </a>
              <div class="flex items-baseline mb-1 space-x-2 font-roboto">
                <p class="text-xl text-primary font-semibold">$45.00</p>
                <p class="text-sm text-gray-400 line-through">$55.00</p>
              </div>
              <div class="flex items-center space-x-2">
                <div class="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                </div>
                <p class="text-gray-500 text-xs ml-3">(150)</p>
              </div>
            </div>
            {/* <!-- product content end  --> */}
            <a
              href="/"
              class="block w-full border border-primary py-1 text-center text-white bg-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Add to Cart
            </a>
          </div>
          {/* <!-- single product end  --> */}
          {/* <!-- single product start  --> */}
          <div class="bg-white shadow rounded overflow-hidden">
            {/* <!-- product image start  --> */}
            <div class="relative group">
              <img
                src="/assets/images/products/product3.jpg"
                alt=""
                class="w-full"
              />
              {/* <!-- invisible group-hover:visible transition duration-1000 opactiy badh e ei vabeo kora jay tobe transition   --> */}
              <div class="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <a
                  href="/"
                  class="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i class="fas fa-search"></i>
                </a>
                <a
                  href="/"
                  class="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i class="far fa-heart"></i>
                </a>
              </div>
            </div>
            {/* <!-- product image end  --> */}
            {/* <!-- product content start  --> */}
            <div class="pt-4 pb-3 px-4">
              <a href="/">
                <h4 class="font-roboto uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                  Mattress
                </h4>
              </a>
              <div class="flex items-baseline mb-1 space-x-2 font-roboto">
                <p class="text-xl text-primary font-semibold">$45.00</p>
                <p class="text-sm text-gray-400 line-through">$55.00</p>
              </div>
              <div class="flex items-center space-x-2">
                <div class="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                </div>
                <p class="text-gray-500 text-xs ml-3">(150)</p>
              </div>
            </div>
            {/* <!-- product content end  --> */}
            <a
              href="/"
              class="block w-full border border-primary py-1 text-center text-white bg-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Add to Cart
            </a>
          </div>
          {/* <!-- single product end  --> */}
          {/* <!-- single product start  --> */}
          <div class="bg-white shadow rounded overflow-hidden">
            {/* <!-- product image start  --> */}
            <div class="relative group">
              <img
                src="/assets/images/products/product3.jpg"
                alt=""
                class="w-full"
              />
              {/* <!-- invisible group-hover:visible transition duration-1000 opactiy badh e ei vabeo kora jay tobe transition   --> */}
              <div class="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <a
                  href="/"
                  class="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i class="fas fa-search"></i>
                </a>
                <a
                  href="/"
                  class="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i class="far fa-heart"></i>
                </a>
              </div>
            </div>
            {/* <!-- product image end  --> */}
            {/* <!-- product content start  --> */}
            <div class="pt-4 pb-3 px-4">
              <a href="/">
                <h4 class="font-roboto uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                  Mattress
                </h4>
              </a>
              <div class="flex items-baseline mb-1 space-x-2 font-roboto">
                <p class="text-xl text-primary font-semibold">$45.00</p>
                <p class="text-sm text-gray-400 line-through">$55.00</p>
              </div>
              <div class="flex items-center space-x-2">
                <div class="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                </div>
                <p class="text-gray-500 text-xs ml-3">(150)</p>
              </div>
            </div>
            {/* <!-- product content end  --> */}
            <a
              href="/"
              class="block w-full border border-primary py-1 text-center text-white bg-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Add to Cart
            </a>
          </div>
          {/* <!-- single product end  --> */}
        </div>
        {/* <!-- product wrapper end --> */}
        {/* <!-- product details end  --> */}
      </div>
      {/* <!-- product end --> */}
    </div>
  );
};

export default Shop;
