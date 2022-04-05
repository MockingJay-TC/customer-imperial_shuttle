import React from "react";
import { ImLocation } from "react-icons/im";
import { BsCalendar2DateFill } from "react-icons/bs";
import DatePickers from "../DatePicker/DatePickers";

const Search = () => {
  return (
    <div className="hidden p-16 gap-8 absolute left-2/4 -translate-x-2/4 w-2/3 h-10 md:h-20 -mt-5 md:-mt-14 z-50 bg-white shadow-lg rounded-full md:flex items-center justify-evenly">
      <div className="flex items-center gap-1">
        <ImLocation className="text-2xl text-[#ec3323]" />
        <input
          type="text"
          placeholder="Choose a location"
          className="border-x-0 border-t-0 outline-none border-b-2 border-[#ec3323] focus:ring-0"
        />
      </div>
      <div class="flex items-center gap-1">
        <BsCalendar2DateFill className="text-2xl text-[#ec3323]" />
        <DatePickers title="Pick-up-date" />
      </div>
      <div class="flex items-center gap-1">
        <BsCalendar2DateFill className="text-2xl text-[#ec3323]" />
        <DatePickers title="Return Date" />
      </div>
      <button
        type="button"
        class="py-4 px-8 shadow-md text-xl text-white focus:outline-none bg-[#ec3323] rounded-full border-gray-200 hover:bg-white hover:text-[#ec3323] focus:z-10 focus:ring-0"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
