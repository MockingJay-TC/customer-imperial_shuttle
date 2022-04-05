import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Search from "../../components/Search/Search";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Search />
      <h1 className="h-12 text-center py-8 leading-6 my-8">Victor Is Here</h1>
    </div>
  );
};

export default Home;
