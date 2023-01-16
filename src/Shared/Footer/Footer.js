import React from "react";
import bankList from "../../assets/images/methods.png";

const Footer = () => {
  return (
    <>
      <footer class="bg-white pt-16 pb-12 border-t border-gray-100">
        <div class="container grid grid-cols-3">
          <div class="col-span-1 space-y-8">
            <img src="/assets/images/logo.svg" alt="" />
            <p class="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div class="flex space-x-6 items-center">
              <a href="#" class="text-gray-400 hover:text-gray-500">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-500">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-500">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-500">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div class="col-span-2 grid grid-cols-2 gap-8">
            <div class="grid grid-cols-2 gap-8">
              <div>
                <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  solutions
                </h3>
                <div class="mt-4 space-y-4">
                  <a
                    href="#"
                    class="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Marketing
                  </a>
                  <a
                    href="#"
                    class="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Analytics
                  </a>
                  <a
                    href="#"
                    class="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Commerce
                  </a>
                  <a
                    href="#"
                    class="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Insights
                  </a>
                </div>
              </div>
              <div>
                <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Support
                </h3>
                <div class="mt-4 space-y-4">
                  <a
                    href="#"
                    class="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Pricing
                  </a>
                  <a
                    href="#"
                    class="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Documentation
                  </a>
                  <a
                    href="#"
                    class="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Guide
                  </a>
                  <a
                    href="#"
                    class="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    API Status
                  </a>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-8">
              <div>
                <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Company
                </h3>
                <div class="mt-4 space-y-4">
                  <a
                    href="#"
                    class="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    class="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Blog
                  </a>
                  <a
                    href="#"
                    class="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Jobs
                  </a>
                  <a
                    href="#"
                    class="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Press
                  </a>
                </div>
              </div>
              <div>
                <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Legal
                </h3>
                <div class="mt-4 space-y-4">
                  <a
                    href="#"
                    class="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Claim
                  </a>
                  <a
                    href="#"
                    class="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Privacy
                  </a>
                  <a
                    href="#"
                    class="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Policy
                  </a>
                  <a
                    href="#"
                    class="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Terms
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div class="bg-gray-800 py-4">
        <div class="container flex items-center justify-between">
          <p class="text-white">&copy; RAFCART - All Rights Reserved</p>
          <img src={bankList} alt="" class="h-5" />
        </div>
      </div>
    </>
  );
};

export default Footer;
