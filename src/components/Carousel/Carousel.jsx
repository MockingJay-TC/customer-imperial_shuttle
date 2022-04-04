import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import content from "./carouselData";

const Carousel = () => {
  return (
    <Slider className="slider-wrapper">
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
              <button class="btn">{item.button}</button>
            </div>
          </div>
          {/* <section>
            <img src={item.userProfile} alt={item.user} />
            <span>
              Posted by <strong>{item.user}</strong>
            </span>
          </section> */}
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
