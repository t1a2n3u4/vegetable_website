import React from "react";
import Image1 from "../../assets/hero/c2.png";
import Image2 from "../../assets/hero/c3.png";
import Image3 from "../../assets/hero/c1.png";

import DeliveryIcon from "../../assets/badges/delivery.png";
import EconomicIcon from "../../assets/badges/eco.png";
import QualityIcon from "../../assets/badges/organic.png";

import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Fresh Picks Daily – Up to 40% Off on Vegetables & Fruits!",
    description:
      "Taste the goodness of nature – handpicked veggies and juicy fruits delivered fresh to your door. Eat healthy, live better, and save more with every bite!",
  },
  {
    id: 2,
    img: Image2,
    title: "Get Fresh. Eat Smart. Save Big – 40% Off Today!",
    description:
      "Why settle for less? Stock your kitchen with crunchy, juicy, garden-fresh produce delivered to your doorstep. Shop now and taste the difference!",
  },
  {
    id: 3,
    img: Image3,
    title: "Fresh Today, Gone Tomorrow – 40% Off Ends Soon!",
    description:
      "Grab the crunchiest deals on fruits and veggies before they're gone. Harvested daily, delivered fresh – your basket of goodness awaits!",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[700px] sm:min-h-[800px] bg-gray-100 flex items-center dark:bg-slate-950 dark:text-white duration-200">
      {/* Background Shape */}
      <div
        aria-hidden="true"
        className="absolute -top-1/4 right-0 w-[700px] h-[350px] bg-secondary dark:bg-blue-600 rounded-bl-[350px] rounded-br-[350px] -z-8"
      />

      <div className="container pb-24 relative">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
                {/* Text Content */}
                <div className="text-center sm:text-left order-2 sm:order-1 z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    className="text-4xl sm:text-6xl font-bold mb-4"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="text-sm mb-4"
                  >
                    {data.description}
                  </p>
                  <button
                    onClick={handleOrderPopup}
                    className="bg-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                  >
                    Call for Details
                  </button>
                </div>

                {/* Image */}
                <div className="order-1 sm:order-2 flex justify-center">
                  <img
                    src={data.img}
                    alt=""
                    className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] object-contain"
                    data-aos="zoom-in"
                  />
                </div>
              </div>

              {/* Badges & Heading */}
              <div className="mt-16 relative">
                {/* Heading */}
                <h2 className="text-center text-2xl sm:text-3xl font-bold mb-8">
                  <span className="text-green-600">Get fresh food</span>{" "}
                  <span className="text-gray-800 dark:text-gray-200">for your family</span>{" "}
                  <span className="text-green-600">anytime</span>{" "}
                  <span className="text-gray-800 dark:text-gray-200">and</span>{" "}
                  <span className="text-green-600">anywhere</span>
                </h2>

                {/* Badges */}
                <div className="flex justify-center items-center gap-12">
                  {/* Delivery */}
                  <div className="flex flex-col items-center text-center">
                    <img src={DeliveryIcon} alt="Delivery" className="w-14 h-14" />
                    <p className="text-sm text-gray-800 dark:text-gray-200 mt-2">Fast Delivery</p>
                  </div>

                  {/* Economic */}
                  <div className="flex flex-col items-center text-center">
                    <img src={EconomicIcon} alt="Economic" className="w-14 h-14" />
                    <p className="text-sm text-gray-800 dark:text-gray-200 mt-2">Economical</p>
                  </div>

                  {/* Quality */}
                  <div className="flex flex-col items-center text-center">
                    <img src={QualityIcon} alt="Quality" className="w-14 h-14" />
                    <p className="text-sm text-gray-800 dark:text-gray-200 mt-2">Top Quality</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
