import React from "react";
import Banner from "../../components/Banner/Banner";
import Ceo from "../../components/CEO/Ceo";
import ServiceSlider from "../../components/ServiceSlider/ServiceSlider";
import Values from "../../components/Values/Values";

const About = () => {
  return (
    <div>
      <div>
        {/* About Title */}
        <Banner title="About Us" />
        {/* About Header */}
        <div className=" text-center flex flex-col md:flex-row items-center max-w-7xl mx-2 md:mx-auto md:my-8">
          {/* welcome */}
          {/* Left Side */}
          <div className="w-full">
            <h2 className="text-2xl font-bold text-[#001238] my-2">
              Welcome To Imperial Shuttle
            </h2>
            {/* description */}
            <p className="text-justify tracking-wide text-[#88939e]">
              Since 1992 we have not only committed ourselves to delivering
              exceptional repair and maintenance service to the worldwide
              automotive owners.
            </p>
            {/* values */}
            <Values />
            <Ceo />
          </div>
          {/* right Side */}
          <div className="w-full">
            <img src="assets/images/1.png" alt="" className="px-10 py-10" />
          </div>
        </div>
        {/* See our Latest Services */}
        <div className="bg-[#f4f8f9] py-10">
          <div>
            <h4 className="text-[#ec3323] text-xl text-center">See Our</h4>
            <h2 className="text-4xl leading-8 font-semibold mb-12 text-slate-700 text-center my-2">
              Latest Services
            </h2>
            <div className="max-w-7xl mx-auto my-12">
              <ServiceSlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
