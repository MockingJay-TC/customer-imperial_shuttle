import React from "react";
import { BsHeartFill } from "react-icons/bs";
import { GiGearStickPattern } from "react-icons/gi";

const CarCard = () => {
  return (
    //   Car Card
    <div className="rounded-xl shadow-md p-8 bg-white h-fit">
      {/* name */}
      <div className="flex justify-between">
        <h2 className="font-bold">Porsche 718 Cayman S</h2>
        <BsHeartFill className="text-[#ec3323]" />
      </div>
      <p className="text-[#88939e]">Coupe</p>
      {/* image */}
      <img src="assets/images/1.png" className="my-4 px-6" alt="Car" />
      {/* settings */}
      <div className="flex justify-between">
        {/* Passengers */}
        <div className="flex items-center gap-2">
          <div></div>
          <p>2</p>
        </div>
        {/* Transmission */}
        <div className="flex items-center gap-2">
          <GiGearStickPattern className="text-[#ec3323]" />
          <p>Manual</p>
        </div>
        {/* Rate */}
        <div>
          <div>
            $400<span>/d</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
