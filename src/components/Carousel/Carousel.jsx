import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import content from "./content";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <Slider className="slider-wrapper relative">
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{
            background: `url('${item.image}') no-repeat center center`,
          }}
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            {/* <button className="btn text-white text-2xl font-bold">{item.button}</button> */}
            <div>
              <Link to="/car-listing">
                <button className="btn text-md md:text-2xl">Rent Now</button>
              </Link>
            </div>
          </div>
          <section>
            <img src={item.userProfile} alt={item.user} />
            <span>
              <strong>{item.user}</strong>
            </span>
          </section>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
