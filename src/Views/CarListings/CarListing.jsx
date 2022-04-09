import React from "react";
import Banner from "../../components/Banner/Banner";
import { ImLocation } from "react-icons/im";
import { MdDateRange } from "react-icons/md";
import { BiFilter } from "react-icons/bi";
import CarCard from "../../components/CarCard/CarCard";
import { Filter } from "../../components/Filter/Filter";

const CarListing = () => {
  return (
    <div>
      <Banner title="Car Listing" />
      {/* Main Page */}
      <div className="py-8 px-20 flex items-center shadow-xl">
        {/* left */}
        <div className="w-5/12">
          <h2 className="text-4xl my-4 font-bold">Book car in easy steps</h2>
          <p className="text-[#88939e] text-md w-2/4 leading-5 tracking-wide">
            Renting a car brings you freedom, and we'll help you find he best
            car for you at a great price
          </p>
          <p className="my-4 text-[#88939e] text-sm tracking-wide">
            Trusted by 10,000 Customers worldwide
          </p>
        </div>
        {/* right */}
        <div className="w-7/12 border rounded-3xl shadow-sm py-8 px-8">
          {/* top */}
          <div className="flex items-center justify-between gap-8">
            {/* left */}
            <div className="w-full mb-4">
              <div className="flex items-center gap-2 ">
                <ImLocation className="text-[#ec3323]" />
                <label htmlFor="location">Pick-up Location</label>
              </div>
              <input
                type="text"
                className="border-x-0 border-t-0 outline-none border-b-2 border-[#f3f3f3] focus:ring-0 focus:border-[#ec3323] w-full"
              />
            </div>
            {/* right */}
            <div className="w-full mb-4">
              <div className="flex items-center gap-2 ">
                <ImLocation className="text-[#ec3323]" />
                <label htmlFor="location">Drop-off Location</label>
              </div>
              <input
                type="text"
                className="border-x-0 border-t-0 outline-none border-b-2 border-[#f3f3f3] focus:ring-0 focus:border-[#ec3323] w-full"
              />
            </div>
          </div>
          {/* down */}
          <div className="flex justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <MdDateRange className="text-[#ec3323]" />
                <label htmlFor="pick-up date">Pick-up Date</label>
              </div>
              <input
                type="text"
                className="border-x-0 w-full border-t-0 outline-none border-b-2 border-[#f3f3f3] focus:ring-0 focus:border-[#ec3323]"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <MdDateRange className="text-[#ec3323]" />
                <label htmlFor="pick-up date">Drop-off Date</label>
              </div>
              <input
                type="text"
                className="border-x-0 w-full border-t-0 outline-none border-b-2 border-[#f3f3f3] focus:ring-0 focus:border-[#ec3323]"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <MdDateRange className="text-[#ec3323]" />
                <label htmlFor="pick-up date">Pick-up Time</label>
              </div>
              <input
                type="text"
                className="border-x-0 w-full border-t-0 outline-none border-b-2 border-[#f3f3f3] focus:ring-0 focus:border-[#ec3323]"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <MdDateRange className="text-[#ec3323]" />
                <label htmlFor="pick-up date">Drop-off Time</label>
              </div>
              <input
                type="text"
                className="border-x-0 w-full border-t-0 outline-none border-b-2 border-[#f3f3f3] focus:ring-0 focus:border-[#ec3323]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* cars */}
      <div className="bg-[#f2f2f2] flex justify-start py-10 px-20">
        {/* left */}
        <div className="h-full border-2 border-gray-300 p-8 rounded-3xl w-1/3 3xl:w-1/4 ">
          <div className="flex items-center gap-2  font-bold text-xl">
            <h3>Filter By</h3>
            <BiFilter />
          </div>
          <hr className="my-4" />
          <Filter />
        </div>
        {/* right */}
        <div className="grid grid-cols-3 justify-between gap-10 flex-wrap pl-20 h-fit">
          {/* <div className="flex flex-wrap gap-10 border border-[tomato] h-fit"> */}
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
        </div>
      </div>
    </div>
  );
};

export default CarListing;
