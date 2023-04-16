import React from "react";

import art from "../assets/art3Dark1.png";
import art1 from "../assets/art2Dark1.png";
import art2 from "../assets/art1Dark1.png";

import art3Light from "../assets/art1Light.png";
import art2Light from "../assets/art2Light.png";
import art1Light from "../assets/art3Light.png";
import phone1 from "../assets/phoneSection1.png";
import phone2 from "../assets/phoneSection2.png";
import phone3 from "../assets/phoneSection31.png";

import Slider from "react-slick";

const slideImages = [
  {
    url: art,
    head: "1.Real-time Crowd Tracking",
    para: "Real-time crowd monitoring through advanced heat map technology provides insights into crowd movements and density for effective resource management.",
    phone: phone1,
  },
  {
    url: art1,
    head: "2.Analytics and Reporting",
    para: "Plan future events and menu items with the use of analytics, which provide information about the event such as category and participant count.",
    phone: phone2,
  },
  {
    url: art2,
    head: "3.Weekly Event Tracking",
    para: "Check list of events, Set reminders by adding events to Bookmarks, and Receive alerts for upcoming events and activities.",
    phone: phone3,
  },
];

const SliderModel = ({ theme }) => {
  return (
    <div className="slideshow">
     <Slider dots infinite speed={500} slidesToShow={1} centerMode centerPadding={'250px'} autoplay autoplaySpeed={3000} responsive={[{breakpoint: '600px', settings: {centerPadding: '50px'}}, {breakpoint: '1200px', settings: {centerPadding: '50px'}},{breakpoint: '1400px', settings: {centerPadding: '50px'}}]}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div className="slide-phone" key={index} >
              <div className="sliderLeft">
                <p className="sliderLeftHead">{slideImage.head}</p>
                <p className="sliderPara">{slideImage.para}</p>
                <img className="vector" src={slideImage.url} alt="vectorImages" />
              </div>
              <div className="sliderRight mainText">
                <img src={slideImage.phone} alt="phoneSection" />
              </div>
            </div>
          </div>
        ))}
        </Slider>
    </div>
  );
};

export default SliderModel;
