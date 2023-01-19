import React, { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
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
          {products.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
      </div>
      {/* <!-- product end --> */}
    </div>
  );
};

export default Shop;
