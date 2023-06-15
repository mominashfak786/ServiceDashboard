import React from "react";

const Servicereport = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-4">
        <div className="w-1/2 bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-4xl text-center font-bold mb-4">Service Form</h1>
          <form>
            <div className="mb-4">
              <label htmlFor="service-id" className="block font-medium">
                Service ID -XXXXX
              </label>
            </div>
            <div className="mb-4">
              <label htmlFor="what-you-did" className="block font-medium">
                What you did :
              </label>
              <textarea
                id="what-you-did"
                name="what-you-did"
                className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                rows={2}
                maxLength={100}
                defaultValue={""}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="time" className="block font-medium">
                Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="date" className="block font-medium">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="total-hours" className="block font-medium">
                Total Hours
              </label>
              <input
                type="number"
                id="total-hours"
                name="total-hours"
                className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="status" className="block font-medium">
                Status
              </label>
              <select
                id="status"
                name="status"
                className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              >
                <option value="select">---Select---</option>
                <option value="completed">Completed</option>
                <option value="hold">Hold</option>
                <option value="cancel">Cancel</option>
              </select>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-indigo-500 text-white py-2 px-4 rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Servicereport;
