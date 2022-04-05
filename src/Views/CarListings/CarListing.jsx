import React from "react";
import Banner from "../../components/Banner/Banner";
import { ImLocation } from "react-icons/im";
import { MdDateRange } from "react-icons/md";
import { BiFilter } from "react-icons/bi";

const CarListing = () => {
  return (
    <div>
      <Banner title="Car Listing" />
      {/* Main Page */}
      <div>
        {/* left */}
        <div>
          <h2>Book car in easy steps</h2>
          <p>
            Renting a car brings you freedom, and we'll help you find he best
            car for you at a great price
          </p>
        </div>
        {/* right */}
        <div className="border border-[tomato]">
          {/* top */}
          <div className="flex">
            {/* left */}
            <div className="w-full">
              <div className="flex items-center gap-2">
                <ImLocation />
                <label htmlFor="location">Pick-up</label>
              </div>
              <input type="text" className="border border-[tomato]" />
            </div>
            {/* right */}
            <div className="w-full">
              <div className="flex items-center gap-2">
                <ImLocation />
                <label htmlFor="location">Drop-off</label>
              </div>
              <input type="text" className="border border-[tomato]" />
            </div>
          </div>
          {/* down */}
          <div>
            <div className="flex items-center gap-2">
              <MdDateRange />
              <label htmlFor="pick-up date">Pick-up Date</label>
            </div>
            <div className="flex items-center gap-2">
              <MdDateRange />
              <label htmlFor="pick-up date">Pick-up Date</label>
            </div>
            <div className="flex items-center gap-2">
              <MdDateRange />
              <label htmlFor="pick-up date">Pick-up Date</label>
            </div>
            <div className="flex items-center gap-2">
              <MdDateRange />
              <label htmlFor="pick-up date">Pick-up Date</label>
            </div>
          </div>
        </div>
      </div>

      {/* cars */}
      <div className="bg-gray-400">
        {/* left */}
        <div className="h-96 border-2 border-gray-500 p-4">
          <div>
            <h3>Filter By</h3>
            <BiFilter />
          </div>
          <hr />

        </div>
      </div>
    </div>
  );
};

export default CarListing;
