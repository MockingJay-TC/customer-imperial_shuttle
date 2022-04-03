import React from "react";

const CarCard = () => {
  return (
    //   Car Card
    <div className="rounded-xl shadow-sm p-8">
      {/* name */}
      <div className="flex justify-between">
        <h2 className="font-bold">Porsche 718 Cayman S</h2>
        <div>love</div>
      </div>
      <p className="text-[#88939e]">Coupe</p>
      {/* image */}
      <img src="assets/images/1.png" className="my-4" alt="Car" />
      {/* settings */}
      <div className="flex justify-between">
        {/* Passengers */}
        <div className="flex items-center gap-2">
          <div></div>
          <p>2</p>
        </div>
        {/* Transmission */}
        <div className="flex items-center gap-2">
          <div></div>
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
