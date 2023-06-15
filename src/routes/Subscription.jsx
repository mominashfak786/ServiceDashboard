import React from "react";

const Subscription = () => {
  return (
    <>
      <div class="custom-height flex justify-center items-center">
        <div class=" border-2  bg-white rounded-lg shadow-lg p-8">
          <h2 class="text-2xl font-bold text-center mb-4">
            Subscription Details
          </h2>
          <div class="text-center">
            <p class="mb-4">Customer ID: xxxxxx</p>
            <p class="mb-4">Plan Activated: xx/xx/xxxx</p>
            <p class="mb-4">Expires On: xx/xx/xxxx</p>
            <p class="mb-4">Solution Type: Full Package [Standard]</p>
            <p class="mb-4">Timings Schedule: 09:00 am to 06:00 pm</p>
            <p class="mb-4">Subscription Cost: SGD xxx</p>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Subscription;
