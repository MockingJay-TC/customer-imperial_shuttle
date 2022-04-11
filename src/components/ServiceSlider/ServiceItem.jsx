import { GiDiamondRing } from "react-icons/gi";

const ServiceItem = ({ title, description, index }) => {
  return (
    <div
      className="carousel-item relative py-5 px-4 w-[400px] snap-start"
      style={{ boxShadow: "0 3px 14px 0 rgb(0 11 40 / 6%)" }}
    >
      {/* number */}
      <div className="absolute right-3 top-4 text-[#88939e] text-4xl">
        0{index + 1}
      </div>
      {/* image */}
      <GiDiamondRing className="mt-7 text-5xl text-[#ec3323]" />
      {/* title */}
      <div className="text-3xl my-4">{title} </div>
      {/* description */}
      <p className="text-[#88939e] w-full">{description}</p>
    </div>
  );
};

export default ServiceItem;
