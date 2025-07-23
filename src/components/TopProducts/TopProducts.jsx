
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShoppingCart, FiClock, FiDollarSign, FiSun, FiMoon } from 'react-icons/fi'; // Import FiSun and FiMoon

// Fallback placeholder image URL
const PLACEHOLDER_IMAGE = 'https://placehold.co/100x100/CCCCCC/333333?text=No+Image';
const DETAIL_PLACEHOLDER_IMAGE = 'https://placehold.co/200x200/CCCCCC/333333?text=No+Image';

// Custom text color - now managed by Tailwind's dark mode
// const textColor = "#416413"; // dark green text color

// IMPORTANT: For these imports to work, ensure your image files are located in:
// src/assets/allproducts/
// If you are using Vite, these imports are necessary. For Create React App, require() might work,
// but direct imports are generally preferred and more explicit.

import cauliflowerImg from '../../assets/allproducts/cf.png';
import asparagusImg from '../../assets/allproducts/asparagus.png';
import carrotsImg from '../../assets/allproducts/carrots.png';
import tomatoesImg from '../../assets/allproducts/Tomato-plants.png';
import onionsBrownImg from '../../assets/allproducts/BROWN ONION.png';
import avocadoImg from '../../assets/allproducts/avocado.png';
import potatoesBrownImg from '../../assets/allproducts/potatoes.png';
import onionsRedImg from '../../assets/allproducts/onion.png';
import broccoliImg from '../../assets/allproducts/brocolli.png';
import celeryImg from '../../assets/allproducts/celery.png';
import cucumbersImg from '../../assets/allproducts/Cucumber.png';
import eggplantsImg from '../../assets/allproducts/eggplant.png';
import deliveryManImg from '../../assets/allproducts/bv.png';


// Mock data for products
const allProducts = [
  // Added aosDelay for demonstration purposes, as it was in your snippet
  { id: 4, name: 'Cauliflower', weight: 'BDT. 30/Kg', image: cauliflowerImg, description: 'Fresh white cauliflower, versatile for various dishes.', category: 'Cauliflowers', aosDelay: "100" },
  { id: 5, name: 'Asparagus', weight: 'BDT. 50/Kg', image: asparagusImg, description: 'Tender green asparagus, delicious steamed or roasted.', category: 'Asparagus', aosDelay: "200" },
  { id: 6, name: 'Carrots', weight: 'BDT. 22/Kg', image: carrotsImg, description: 'Sweet and crunchy carrots, great for snacking or adding to meals.', category: 'Carrots', aosDelay: "300" },
  { id: 7, name: 'Tomatoes', weight: 'BDT. 35/Kg', image: tomatoesImg, description: 'Fresh, ripe red tomatoes, perfect for salads and cooking.', category: 'Tomatoes', aosDelay: "400" },
  { id: 8, name: 'Onions - brown', weight: 'BDT. 20/Kg', image: onionsBrownImg, description: 'Versatile brown onions, a staple for many recipes.', category: 'Onions', aosDelay: "500" },
  { id: 9, name: 'Avocados', weight: 'BDT. 70/Kg', image: avocadoImg, description: 'Creamy and nutritious avocados, ideal for guacamole or toast.', category: 'Avocados', aosDelay: "100" },
  { id: 10, name: 'Potatoes - brown', weight: 'BDT. 15/Kg', image: potatoesBrownImg, description: 'Earthy brown potatoes, great for mashing, frying, or baking.', category: 'Potatoes', aosDelay: "200" },
  { id: 11, name: 'Onions - red', weight: 'BDT. 25/Kg', image: onionsRedImg, description: 'Pungent red onions, perfect for salads and grilling.', category: 'Onions', aosDelay: "300" },
  { id: 12, name: 'Broccoli', weight: 'BDT. 45/Kg', image: broccoliImg, description: 'Nutrient-rich broccoli florets, excellent steamed or in stir-fries.', category: 'Broccoli', aosDelay: "400" },
  { id: 13, name: 'Celery', weight: 'BDT. 30/Kg', image: celeryImg, description: 'Crisp celery stalks, good for snacking or adding crunch to dishes.', category: 'Celery', aosDelay: "500" },
  { id: 14, name: 'Cucumbers', weight: 'BDT. 40/Kg', image: cucumbersImg, description: 'Cool and refreshing cucumbers, ideal for salads and detox water.', category: 'Cucumbers', aosDelay: "100" },
  { id: 15, name: 'Eggplants', weight: 'BDT. 30/Kg', image: eggplantsImg, description: 'Glossy purple eggplants, versatile for baking, grilling, or curries.', category: 'Eggplants', aosDelay: "200" },
];

const browseCategories = [
  'All', 'Asparagus', 'Avocados', 'Beans', 'Broccoli', 'Cauliflowers', 'Carrots', 'Celery', 'Corn', 'Cucumbers', 'Eggplants', 'Garlic', 'Ginger', 'Grapes', 'Green-Beans', 'Lettuce', 'Mushrooms', 'Onions', 'Potatoes', 'Pumpkins', 'Spinach', 'Tomatoes', 'Zucchini'
];

// Framer Motion variants for list items
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

// Framer Motion variants for page transitions
const pageVariants = {
  initial: { opacity: 0, x: "100%" },
  in: { opacity: 1, x: "0%" },
  out: { opacity: 0, x: "-100%" },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

// Product Card Component
const ProductCard = ({ product, onClick }) => (
  <motion.div
    data-aos="fade-up" // Added data-aos attribute
    data-aos-delay={product.aosDelay} // Added data-aos-delay attribute
    key={product.id} // Ensure key is on the outermost element of the map
    // Combined styling from your snippet and previous code
    className="space-y-3 relative bg-white rounded-md p-4 shadow-md w-[170px] flex flex-col items-center cursor-pointer
               dark:bg-gray-800 dark:shadow-lg dark:shadow-green-900/50" // Dark mode styles
    variants={itemVariants}
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
    onClick={() => onClick(product)} // Pass the product to the onClick handler
  >
    <img
      src={product.image}
      alt={product.name}
      className="w-24 h-24 object-contain mb-2 rounded-lg" // Changed object-cover to object-contain
      onError={(e) => { e.target.onerror = null; e.target.src = PLACEHOLDER_IMAGE; }} // Fallback image
    />
    {/* Applied textColor to h3 and p */}
    <h3 className="font-medium text-center text-gray-800 dark:text-white">{product.name}</h3> {/* Dark mode text color */}
    <p className="text-sm text-gray-600 dark:text-gray-300">{product.weight}</p> {/* Dark mode text color */}
    {/* Cart button positioned bottom-right */}
    <button
      aria-label={`Add ${product.name} to cart`} // Using product.name for aria-label
      className="absolute bottom-2 right-2 p-2 rounded-full bg-green-600 hover:bg-green-700 transition"
    >
      <FiShoppingCart className="text-white" size={20} /> {/* FiShoppingCart icon */}
    </button>
  </motion.div>
);

// Product Detail Card Component
const ProductDetailCard = ({ product, onBack }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
    className="fixed inset-0 bg-gray-100 z-20 overflow-y-auto p-4 sm:p-8
               dark:bg-gray-900" // Dark mode background
  >
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8 relative
                    dark:bg-gray-800 dark:shadow-xl dark:shadow-green-900/50"> {/* Dark mode background and shadow */}
      <button
        onClick={onBack}
        className="absolute top-4 left-4 bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition
                   dark:bg-gray-700 dark:hover:bg-gray-600" // Dark mode button styles
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </button>

      <div className="flex flex-col items-center mt-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-48 h-48 object-contain rounded-lg shadow-md mb-6" // Changed object-cover to object-contain
          onError={(e) => { e.target.onerror = null; e.target.src = DETAIL_PLACEHOLDER_IMAGE; }} // Fallback image
        />
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800 dark:text-white">{product.name}</h2> {/* Dark mode text color */}
        <p className="text-xl text-green-700 font-semibold mb-4">{product.weight}</p>
        <p className="text-gray-700 text-center max-w-prose mb-6 dark:text-gray-300">{product.description}</p> {/* Dark mode text color */}

        <div className="flex items-center space-x-4 mb-6">
          <button className="bg-gray-200 text-gray-700 p-3 rounded-full hover:bg-gray-300 transition
                             dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"> {/* Dark mode button styles */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
            </svg>
          </button>
          <span className="text-2xl font-bold text-gray-800 dark:text-white">1</span> {/* Dark mode text color */}
          <button className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>

        <button className="bg-green-600 text-white text-lg px-8 py-3 rounded-full shadow-lg hover:bg-green-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  </motion.div>
);


const App = () => {
  // Use localStorage to persist theme preference
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light'; // Default to light if no theme is saved
  });

  // useEffect to apply or remove the 'dark' class on the html element
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (theme === 'dark') {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
    // Save the current theme to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null); // State to hold the selected product

  // Function to handle product click
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  // Function to go back to product listing
  const handleBackToProducts = () => {
    setSelectedProduct(null);
  };

  // Filter products based on activeCategory
  const filteredProducts = activeCategory === 'All'
    ? allProducts
    : allProducts.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800
                    dark:bg-gray-900 dark:text-gray-100"> {/* Dark mode background and text */}
      {/* Header */}
      
      <main className="container mx-auto px-4 py-8 pt-20"> {/* Added pt-20 to account for fixed header */}
        {/* Use AnimatePresence for exit animations when switching views */}
        <AnimatePresence mode='wait'>
          {selectedProduct ? (
            // Render ProductDetailCard if a product is selected
            <ProductDetailCard key="detail" product={selectedProduct} onBack={handleBackToProducts} />
          ) : (
            // Render product listing if no product is selected
            <motion.div
              key="list"
              initial="in"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              {/* Browse Products section */}
              <section className="mb-8">
                <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Browse Products</h2> {/* Dark mode text */}
                <div className="flex overflow-x-auto pb-2 scrollbar-hide mb-4">
                  {browseCategories.map((category) => (
                    <button
                      key={category}
                      className={`px-4 py-2 rounded-full text-base font-bold whitespace-nowrap mr-2 transition ${
                        activeCategory === category
                          ? 'text-green-700 dark:text-green-400 underline decoration-solid decoration-2 decoration-green-700 dark:decoration-green-400' // Dark mode for active category
                          : 'text-gray-700 hover:text-green-700 dark:text-gray-300 dark:hover:text-green-400' // Dark mode for inactive categories
                      }`}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                {/* Products grid - Updated with place-items-center and gap-5 */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                  {/* Render filtered products here */}
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} onClick={handleProductClick} />
                  ))}
                </div>
                <div className="text-center mt-6 text-sm text-gray-600 dark:text-gray-400"> {/* Dark mode text */}
                  Page 1 of 25 {/* This can be made dynamic if pagination is implemented */}
                </div>
              </section>

              {/* Delivery Information section - Card styling removed */}
              <section className="mb-8">
                <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Delivery Information</h2> {/* Dark mode text */}
                {/* Card styling classes removed */}
                <div className="flex flex-col md:flex-row-reverse items-center justify-between space-y-4 md:space-y-0 md:space-x-8">
                  <img
                    src={deliveryManImg} // Using the imported image variable
                    alt="Delivery Man"
                    className="w-48 h-auto rounded-lg object-contain md:ml-8" // Increased width to w-48
                    onError={(e) => { e.target.onerror = null; e.target.src = PLACEHOLDER_IMAGE; }} // Fallback image
                  />
                  <div className="text-left flex-grow">
                    <div className="flex items-center mb-2">
                      {/* Green tick SVG added here */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-lg font-medium text-gray-800 dark:text-white">Home delivery available countrywide</p> {/* Dark mode text */}
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between sm:space-x-8 mt-4">
                      {/* Inside City Corporation */}
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-white">Inside City Corporation</h4> {/* Dark mode text */}
                        <div className="flex items-center text-sm text-gray-600 mt-1 dark:text-gray-400"> {/* Dark mode text */}
                          <FiClock className="h-4 w-4 text-green-600 mr-1" /> {/* Alarm icon */}
                          <span>Delivery within 6 hours</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600 mt-1 dark:text-gray-400"> {/* Dark mode text */}
                          <FiDollarSign className="h-4 w-4 text-green-600 mr-1" /> {/* Money icon */}
                          <span>Delivery charge BDT. 50</span>
                        </div>
                      </div>

                      {/* Outside City Corporation */}
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-white">Outside City Corporation</h4> {/* Dark mode text */}
                        <div className="flex items-center text-sm text-gray-600 mt-1 dark:text-gray-400"> {/* Dark mode text */}
                          <FiClock className="h-4 w-4 text-green-600 mr-1" /> {/* Alarm icon */}
                          <span>Delivery Within 24 hours</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600 mt-1 dark:text-gray-400"> {/* Dark mode text */}
                          <FiDollarSign className="h-4 w-4 text-green-600 mr-1" /> {/* Money icon */}
                          <span>Delivery charge BDT. 70</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default App;