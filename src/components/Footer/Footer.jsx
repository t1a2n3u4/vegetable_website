import React from 'react';

// Local assets
import freshFoodLogo from '../../assets/footer/logof.png';
import facebookIcon from '../../assets/footer/fb.png';
import twitterIcon from '../../assets/footer/twitter.png';
import instagramIcon from '../../assets/footer/insta.png';
import appStoreBtn from '../../assets/footer/app.png';
import googlePlayBtn from '../../assets/footer/googleplay.png';

// Fallback images
const PLACEHOLDER_ICON = 'https://placehold.co/30x30/CCCCCC/333333?text=Icon';
const PLACEHOLDER_APP_BTN = 'https://placehold.co/120x40/CCCCCC/333333?text=Button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="text-gray-800 dark:text-white py-8 relative bg-[#90BE6D] dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Column 1 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src={freshFoodLogo}
              alt="Fresh Food Logo"
              className="w-20 h-20 mb-4 object-contain"
              onError={(e) => { e.target.onerror = null; e.target.src = PLACEHOLDER_ICON; }}
            />
            <h3 className="text-2xl font-semibold mb-4">Fresh Food</h3>
            <div className="space-y-2 text-sm">
              <p className="flex items-center justify-center md:justify-start">
                <span className="mr-2">🌐</span> www.freshfood.com
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <span className="mr-2">📧</span> help@freshfood.com
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <span className="mr-2">📞</span> +8801234567890
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Fresh Food Pages</h3>
            <ul className="space-y-2 text-sm">
              {["Home", "Categories", "Blog", "Terms And Conditions", "Privacy Policy", "Return Policy", "About us"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Follow us on</h3>
            <div className="flex space-x-4 mb-6">
              {[facebookIcon, twitterIcon, instagramIcon].map((icon, idx) => (
                <a href="#" key={idx} aria-label="Social media">
                  <img
                    src={icon}
                    alt="Social Icon"
                    className="w-8 h-8 object-contain"
                    onError={(e) => { e.target.onerror = null; e.target.src = PLACEHOLDER_ICON; }}
                  />
                </a>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" aria-label="Download on the App Store">
                <img
                  src={appStoreBtn}
                  alt="App Store"
                  className="w-32 h-auto object-contain"
                  onError={(e) => { e.target.onerror = null; e.target.src = PLACEHOLDER_APP_BTN; }}
                />
              </a>
              <a href="#" aria-label="Get it on Google Play">
                <img
                  src={googlePlayBtn}
                  alt="Google Play"
                  className="w-32 h-auto object-contain"
                  onError={(e) => { e.target.onerror = null; e.target.src = PLACEHOLDER_APP_BTN; }}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll-to-top button */}
        <button
          onClick={scrollToTop}
          className="absolute top-8 right-4 p-3 rounded-full text-white shadow-lg transition-all duration-300 transform hover:scale-110 z-20 bg-[#416413] dark:bg-green-700"
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
               viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>

        {/* Copyright */}
        <div className="border-t border-gray-400 dark:border-gray-600 mt-8 pt-4 text-center text-sm text-gray-700 dark:text-gray-300">
          <p>© 2002 - 2022 Fresh Food, LLC. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
