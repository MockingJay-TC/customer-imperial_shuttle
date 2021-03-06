import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Offer from "../../components/Offer/Offer";
import Search from "../../components/Search/Search";
import CarCard from "../../components/CarCard/CarCard";
import CarType from "../../components/CarType/CarType";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      {/* <img
        src="assets/images/slide1.jpg"
        alt="Slide"
        className="absolute w-screen h-full top-[120%] -z-10 brightness-50 mix-blend-overlay bg-[#333]"
      /> */}
      <div className="h-fit">
        <Carousel />
        <div className=" relative clip bg-[#f4f8f9] text-center pt-20">
          <Search />
        </div>

        <div className="-mt-72 text-center pb-40 ">
          <h2 className="text-3xl font-bold tracking-wide">
            Why People Like Us?
          </h2>
          <p className="text-sm text-[#c8c8c8]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <div className="max-w-6xl mx-auto mt-12 grid grid-cols-4 gap-4 bg-transparent">
            <Offer />
            <Offer />
            <Offer />
            <Offer />
            <Offer />
            <Offer />
            <Offer />
            <Offer />
          </div>
        </div>

        <div className="h-fit bg-[#f4f8f9] text-center py-12">
          <h2 className="text-3xl font-bold">Popular Cars</h2>
          <p className="text-[#c8c8c8]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className=" my-6 grid grid-cols-3 gap-10 flex-wrap h-fit max-w-7xl mx-auto">
            {/* <div className="flex flex-wrap gap-10 border border-[tomato] h-fit"> */}
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
          </div>
        </div>
        {/* Car by types */}
        <div className="bg-white text-center py-16">
          <h2 className="text-3xl font-bold">Car by Types</h2>
          <p className="text-[#c8c8c8]">Lorem ipsum dolor sit amet.</p>
          {/* container */}
          <div className="max-w-7xl grid grid-cols-6 mx-auto py-12 gap-8">
            {/* car type */}
            <CarType car="Sedan" />
            <CarType car="Coupe" />
            <CarType car="Minivan" />
            <CarType car="Limousine" />
            <CarType car=" Wagon" />
            <CarType car="Roadster" />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
