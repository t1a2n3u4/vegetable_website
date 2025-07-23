import React, { useEffect } from "react";
import { motion } from "framer-motion"; // Import motion

// Import your local video file
import foodVideo from "../../assets/website/food.mp4"; // Ensure this path is correct for your project structure

const Subscribe = () => {
  // Framer Motion variants for the main container (zoom-in effect)
  const containerVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Framer Motion variants for the heading and input field (fade-up effect)
  const itemFadeUpVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  // Define the custom text color (no longer used for background, but kept if needed elsewhere)
  // const backgroundColor = "#416413"; // This constant is no longer used for background styling here

  // The useEffect for CSS custom property is no longer strictly necessary if `backgroundColor` isn't used
  // in `text-[var(--color-dark-green-bg)]` etc. However, it doesn't hurt to keep it if other parts
  // of your app might rely on it. For this component specifically, it's not needed for the background.
  useEffect(() => {
    const styleTag = document.createElement('style');
    // Removed the background color variable definition as it's no longer used for the background.
    // If you have other elements relying on --color-dark-green-bg, you might need to re-evaluate.
    styleTag.innerHTML = `:root { /* No specific background variable defined here for this component */ }`;
    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);


  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative overflow-hidden text-white py-20 mb-20 flex items-center justify-center" // Removed background color from here
      // style={{ backgroundColor: backgroundColor }} // Removed this line
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={foodVideo} // Using your local video import
        autoPlay
        loop
        muted
        playsInline // Recommended for autoplay on mobile
        onError={(e) => console.error("Video load error:", e)} // Added error handling for video
      />

      {/* Overlay for blur and color tint - Removed green background tint */}
      <div
        className="absolute inset-0 w-full h-full opacity-80 backdrop-blur-sm z-10 bg-black/30" // Changed background to a subtle black overlay
        // style={{ backgroundColor: backgroundColor }} // Removed this line
      ></div>

      <div className="container relative z-20"> {/* Content container, increased z-index */}
        <div className="space-y-6 max-w-xl mx-auto text-center"> {/* Centered text */}
          <motion.h1
            variants={itemFadeUpVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow-lg" // Added drop-shadow for better visibility
          >
            Nourish Your Inbox: Fresh Updates & Exclusive Offers!
          </motion.h1>
          <motion.p
            variants={itemFadeUpVariants}
            className="text-lg sm:text-xl text-gray-200 drop-shadow-md" // Added drop-shadow
          >
            Get the latest on organic produce, healthy recipes, and special discounts delivered straight to you.
          </motion.p>
          <motion.div
            variants={itemFadeUpVariants}
            className="flex flex-col sm:flex-row gap-4 mt-8 justify-center" // Centered input/button on small screens
          >
            <input
              type="email" // Changed type to email for better input validation
              placeholder="Enter your email address"
              className="flex-grow p-3 rounded-lg border border-transparent focus:border-green-400 focus:ring-2 focus:ring-green-400 text-gray-800 placeholder-gray-500 transition-all duration-300 shadow-md"
            />
            <button className="px-6 py-3 bg-white text-green-700 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Subscribe Now
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Subscribe;
