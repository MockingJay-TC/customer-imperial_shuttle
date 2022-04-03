import React from "react";
import data from "./data";

const Values = () => {
  return (
    <div className="mx-auto text-left my-4 text-[#88939e]">
      <div className="md:grid grid-cols-2 flex flex-col">
        {data.map((val) => {
          return (
            <div>
              <div>
                <input
                  id="checkbox-2"
                  aria-describedby="checkbox-2"
                  type="checkbox"
                  disabled
                  checked
                  class="w-4 h-4 text-[#ec3323] bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-2" class="ml-3 text-sm font-medium">
                  {val}
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Values;
