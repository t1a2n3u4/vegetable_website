import React from "react";
import Img1 from "../../assets/suggested/carrots.png";
import Img2 from "../../assets/suggested/Cucumber.png";
import Img3 from "../../assets/suggested/Tomato-plants.png";

import { FaStar } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";

const secondaryColor = "#93be5a";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Carrots",
    rating: 5.0,
    color: "Orange",
    price: "BDT 30/kg",
    aosDelay: "0",
    tag: "New",
  },
  {
    id: 2,
    img: Img2,
    title: "Cucumber",
    rating: 4.5,
    color: "Green",
    price: "BDT 30/kg",
    aosDelay: "200",
    tag: "New",
  },
  {
    id: 3,
    img: Img3,
    title: "Tomato Plants",
    rating: 4.7,
    color: "Red",
    price: "BDT 30/kg",
    aosDelay: "400",
    tag: "New",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12 py-10 bg-[#93be5a] dark:bg-black transition-colors duration-300">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Header section */}
        <div className="mb-10">
          <h1
            data-aos="fade-up"
            className="text-3xl font-bold text-left text-green-800 dark:text-white"
          >
            Suggested for you
          </h1>
        </div>

        {/* Grid Container */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {ProductsData.map((data) => (
              <div
                key={data.id}
                className="relative bg-white dark:bg-slate-800 text-black dark:text-white rounded-lg p-4 shadow-md w-[220px] h-[350px] flex flex-col justify-between hover:scale-105 transition-transform duration-300"
              >
                {/* Tag */}
                {data.tag && (
                  <div className="absolute top-2 left-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded z-20">
                    {data.tag}
                  </div>
                )}

                {/* Product Image */}
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-[180px] w-full object-fill rounded-md"
                />

                {/* Product Info */}
                <div>
                  <h3 className="font-semibold text-green-800 dark:text-white">
                    {data.title}
                  </h3>
                  <p className="text-sm text-green-800 dark:text-white">
                    {data.color}
                  </p>
                  <p className="text-sm font-semibold mt-1 text-green-800 dark:text-white">
                    {data.price}
                  </p>
                  <div className="flex items-center gap-2 mt-2 justify-between">
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span>{data.rating}</span>
                    </div>
                    <button
                      aria-label={`Add ${data.title} to cart`}
                      className="p-2 rounded-full"
                      style={{ backgroundColor: secondaryColor }}
                    >
                      <FiShoppingCart className="text-white" size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <button
            className="text-center mt-10 cursor-pointer text-white py-1 px-5 rounded-md"
            style={{ backgroundColor: "#416413" }}
          >
            View All Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
