import React from "react";

const Banner = ({ title }) => {
  return (
    <div className="font-[satisfy] text-white text-4xl md:text-7xl text-center py-8 md:py-16 border px-4 md:px-0 bg-about bg-cover bg-no-repeat bg-center">
      {title}
    </div>
  );
};

export default Banner;
