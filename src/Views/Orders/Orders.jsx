import React from "react";
import Banner from "../../components/Banner/Banner";
import Table from "../../components/Table/Table";

const Orders = () => {
  return (
    <div>
      <Banner title="Orders" />
      <div className="pb-20 bg-[#f2f2f2] h-fit">
        <div className="flex justify-between item-center px-20 py-8">
          <div className="">
            <h2 className="text-4xl font-bold tracking-wide text-[#ec3323]">
              Orders
            </h2>
            <p className="text[#88939e]">Here is your Order list data</p>
          </div>
          <div className="">
            <button
              id="dropdownDefault"
              dataDropdownToggle="dropdown"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center "
              type="button"
            >
              Status
              <svg
                class="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              id="dropdown"
              class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
            >
              <ul
                class="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefault"
              >
                <li>
                  <a
                    href="/"
                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Completed
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    In-use
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-8 px-20">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Orders;
