import React from "react";

const Account = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <section className="bg-gray-150 mt-6 md:flex ml-5  ">
          <div className="  lg:w-1/2 mb-4  ">
            <div className="flex flex-wrap">
              <div className="w-full  lg:w-1/3 mb-4 md:ml-10 md:mr-5 ">
                <div className="bg-white border border-gray-200 rounded-lg shadow p-4 ml-5">
                  <div className="text-center">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                      alt="avatar"
                      className="rounded-full mx-auto w-32"
                    />
                  </div>
                  <div className="flex justify-center mt-4">
                    <button
                      type="button"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Update
                    </button>
                    <button
                      type="button"
                      class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    >
                      Edit
                    </button>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg shadow p-4">
                    <div className="flex mb-3">
                      <div className="w-1/3">
                        <p className="font-medium">First Name:</p>
                      </div>
                      <div className="w-2/3">
                        <p className="text-gray-500 ml-2">John </p>
                      </div>
                    </div>
                    <hr className="my-3" />
                    <div className="flex mb-3">
                      <div className="w-1/3">
                        <p className="font-medium">Last Name:</p>
                      </div>
                      <div className="w-2/3">
                        <p className="text-gray-500 ml-2">Smith </p>
                      </div>
                    </div>
                    <hr className="my-3" />
                    <div className="flex mb-3">
                      <div className="w-1/3">
                        <p className="font-medium">Profession Type:</p>
                      </div>
                      <div className="w-2/3">
                        <p className="text-gray-500 ml-2">XXXXX</p>
                      </div>
                    </div>
                    <hr className="my-3" />

                    <div className="flex mb-3">
                      <div className="w-1/3">
                        <p className="font-medium">Govt. ID :</p>
                      </div>
                      <div className="w-2/3">
                        <p className="text-gray-500 ml-2">XXXXX</p>
                      </div>
                    </div>
                    <hr className="my-3" />

                    <div className="flex mb-3">
                      <div className="w-1/3">
                        <p className="font-medium">Email:</p>
                      </div>
                      <div className="w-2/3">
                        <p className="text-gray-500 ml-2">
                          example@example.com
                        </p>
                      </div>
                    </div>
                    <hr className="my-3" />
                    <div className="flex mb-3">
                      <div className="w-1/3">
                        <p className="font-medium">Phone:</p>
                      </div>
                      <div className="w-2/3">
                        <p className="text-gray-500 ml-2">(123) 456-7890</p>
                      </div>
                    </div>
                    <hr className="my-3" />
                    <div className="flex mb-3">
                      <div className="w-1/3">
                        <p className="font-medium ">Address:</p>
                      </div>
                      <div className="w-2/3">
                        <p className="text-gray-500 ml-2">
                          123 Main St, San Francisco, CA 94111
                        </p>
                      </div>
                    </div>
                    <hr className="my-3" />
                    <div className="flex justify-center">
                      <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div class="flex justify-center items-center mt-2">
        <div class="bg-white shadow-lg rounded-lg px-4 py-2 border border-gray-200">
          <h1 class="text-3xl font-bold mb-1  text-center ">Change Password</h1>
          <form>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Current password
              </label>
              <input
                type="password"
                id="password"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required=""
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                New password
              </label>
              <input
                type="password"
                id="password"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required=""
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="repeat-password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm password
              </label>
              <input
                type="password"
                id="repeat-password"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required=""
              />
            </div>

            <div class="flex justify-center">
              <button
                type="submit"
                class="text-white mt-3 text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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

export default Account;
