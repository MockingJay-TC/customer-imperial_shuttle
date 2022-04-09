import React from "react";
import { Link } from "react-router-dom";

const CarType = ({ car }) => {
  return (
    <Link to="/car-listing" className="w-full group border px-8 py-2 hover:bg-[#88939e] hover:shadow-xl hover:border-none hover:scale-110 transition ease-in-out duration-500 delay-100">
      <div className="group-hover:text-white flex flex-col items-center">
        <img
          src="assets/images/sedan.svg"
          alt="CarType"
          className="w-28 h-20 group-hover:text-white text-white"
        />
        <h3 className="text-[#88939e] group-hover:text-white text-xl">{car}</h3>
      </div>
    </Link>
  );
};

export default CarType;
