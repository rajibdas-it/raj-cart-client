import React from "react";
import deliveryVan from "../../../assets/images/icons/delivery-van.svg";
import moneyBack from "../../../assets/images/icons/money-back.svg";
import serviceHour from "../../../assets/images/icons/service-hours.svg";

const Features = () => {
  return (
    <div class="container py-16">
      <div class="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
        <div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <img src={deliveryVan} alt="" class="w-12 h-12 object-contain" />
          <div>
            <h4 class="font-medium capitalize text-lg text-roboto">
              Free Shopping
            </h4>
            <p class="capitalize text-gray-500 text-sm">order over $200</p>
          </div>
        </div>
        <div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <img src={moneyBack} alt="" class="w-12 h-12 object-contain" />
          <div>
            <h4 class="font-medium capitalize text-lg text-roboto">
              Money Return
            </h4>
            <p class="capitalize text-gray-500 text-sm">30 days money return</p>
          </div>
        </div>
        <div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <img src={serviceHour} alt="" class="w-12 h-12 object-contain" />
          <div>
            <h4 class="font-medium capitalize text-lg text-roboto">
              24/7 Support
            </h4>
            <p class="capitalize text-gray-500 text-sm">Customer support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
