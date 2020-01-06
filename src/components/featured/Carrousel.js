import React from "react";
import Slider from "react-slick";

//all the Slider images
import SliderImage1 from "../../resources/Images/FirstSlide.jpeg";
import SliderImage2 from "../../resources/Images/SeconSlide.jpg";
import SliderImage3 from "../../resources/Images/ThirdSlide.jpeg";

const Carrousel = () => {
  const setting = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500
  };

  return (
    <div
      className="carrousel_wrapper"
      style={{
        overflow: "hidden",
        height: `${window.innerHeight}px`
      }}
    >
      <Slider {...setting}>
        <div>
          <div
            className="carrousel_image"
            style={{
              height: `${window.innerHeight}px`,
              background: `url(${SliderImage1})`
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              height: `${window.innerHeight}px`,
              background: `url(${SliderImage2})`
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              height: `${window.innerHeight}px`,
              background: `url(${SliderImage3})`
            }}
          ></div>
        </div>
      </Slider>
    </div>
  );
};
export default Carrousel;
