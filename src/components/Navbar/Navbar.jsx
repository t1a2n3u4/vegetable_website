import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
import logo from "../../assets/footer/logof.png";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Categories",
    dropdown: true,
    links: [
      { id: 1, name: "Vegetables", link: "/#vegetables" },
      { id: 2, name: "Fruits", link: "/#fruits" },
      { id: 3, name: "Dry Fruits", link: "/#dry-fruits" },
    ],
  },
  {
    id: 3,
    name: "Pages",
    dropdown: true,
    links: [
      { id: 1, name: "FAQ", link: "/#faq" },
      { id: 2, name: "404 Error", link: "/#not-found" },
      { id: 3, name: "Pricing", link: "/#pricing" },
    ],
  },
  {
    id: 4,
    name: "Blog",
    link: "/#blog",
  },
  {
    id: 5,
    name: "About",
    link: "/#about",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <nav className="bg-[#93be5a] dark:bg-blue-800 text-white shadow-md w-full z-50">
      <div className="container mx-auto flex justify-between items-center gap-6 flex-wrap py-3 px-4">
        {/* Logo */}
        <div>
          <img src={logo} alt="VeggieWorld Logo" className="h-20 w-auto" />
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center gap-4 flex-wrap">
          {Menu.map((item) =>
            item.dropdown ? (
              <li key={item.id} className="group relative cursor-pointer">
                <a
                  href="#"
                  className="flex items-center gap-1 py-2 px-3 hover:text-yellow-100 duration-200"
                >
                  {item.name}
                  <FaCaretDown className="group-hover:rotate-180 transition-all duration-300" />
                </a>
                <div className="absolute hidden group-hover:block w-44 rounded-md bg-white dark:bg-slate-900 p-2 mt-1 text-black dark:text-white shadow-lg z-50">
                  <ul>
                    {item.links.map((link) => (
                      <li key={link.id}>
                        <a
                          href={link.link}
                          className="block p-2 rounded hover:bg-green-100 dark:hover:bg-blue-600/30"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ) : (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="px-3 py-2 hover:text-yellow-100 duration-200"
                >
                  {item.name}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Search, Cart, Dark Mode */}
        <div className="flex items-center gap-4 flex-wrap">
          {/* Search */}
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search"
              className="w-[200px] rounded-lg border border-gray-300 py-1 px-2 text-sm focus:outline-none focus:border-primary text-black dark:bg-slate-800 dark:text-white"
            />
            <IoMdSearch className="absolute top-1/2 -translate-y-1/2 right-3 text-black dark:text-white" />
          </div>

          {/* Cart Button */}
          <button
            onClick={handleOrderPopup}
            className="bg-gradient-to-r from-green-600 to-green-700 hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-2"
          >
            <span className="hidden sm:inline">Order</span>
            <FaCartShopping className="text-xl" />
          </button>

          {/* Dark Mode Toggle */}
          <DarkMode />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
