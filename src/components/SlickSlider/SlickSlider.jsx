import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
const SlickSlider = () => {
 



  return (
 <Carousel breakPoints={breakPoints}>
     <div>1</div>
     <div>2</div>
     <div>3</div>
 </Carousel>
  );
};

export default SlickSlider;
