import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const ServiceSlider = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {}, []);
  return (
    <div>
      <motion.dev ref={carousel} className="carousel">
        <motion.dev
          drag="x"
          dragConstraints={{ right: 0 }}
          className="inner-carousel"
        >
          <motion.dev className="item">Hello</motion.dev>
        </motion.dev>
      </motion.dev>
    </div>
  );
};

export default ServiceSlider;
