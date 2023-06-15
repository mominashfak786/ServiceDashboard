import React from "react";
import "../styles/dashboard.css";
const Refrral = () => {
  const months = [
    "--Select Month--",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 2000 + 1 },
    (_, index) => 2000 + index
  );
  return (
    <>
      <div class="custom-height flex justify-center items-center">
        <div class="w-128 border-2  border-gray-800 rounded   p-6 flex flex-col shadow-lg justify-center items-center">
          <h2 class="text-2xl font-bold mb-4">Billing Details</h2>
          <div class="bg-gray-100  rounded-lg mb-4 mt-3 p-6">
            <div className="flex">
              <p>Subscription Cost :- </p>
              <p className="ml-4"> SGD$</p>
            </div>
            <div className="flex">
              <p>Expires On :- </p>
              <p className="ml-4"> xx/xx/xxxx</p>
            </div>
          </div>
          <div className="select is-rounded has-fixed-size is-primary is-special">
      <div className="flex items-center flex-col sm:flex-row">
        <p className="text-gray-900">Download Invoice Select Month:</p>
        <div className="mt-2 sm:ml-4">
          <select className="is-fullwidth border-gray-900 rounded-lg">
            {months.map((month, index) => (
              <option key={index} value={index + 1}>
                {month}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-2 sm:mx-2">
          <select className="is-fullwidth border-gray-900 rounded-lg">
            <option value="">--Select Year--</option>
            {years.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
          <div class="flex justify-center">
              <button
                type="download"
                class="text-white mt-6 text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
               Download
              </button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Refrral;
