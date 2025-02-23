import React from "react";
import { Link } from "react-scroll"; // Smooth scrolling
import { nav } from "../data"; // Navigation data
import { HiOutlineX } from "react-icons/hi"; // Close icon

const MobileNav = ({ setMobileNav }) => {
  return (
    <div className="fixed inset-0 bg-accent/95 z-50 flex flex-col justify-center items-center transition-transform duration-300">
      {/* Close Icon (❌) */}
      <button
        onClick={() => setMobileNav(false)}
        className="absolute top-6 right-6 text-white text-4xl hover:text-gray-300 transition"
      >
        <HiOutlineX />
      </button>

      {/* Navigation Links */}
      <ul className="flex flex-col justify-center items-center gap-y-8">
        {nav.map((item, index) => {
          const { href, name } = item;
          return (
            <li key={index}>
              <Link
                to={href} // Section ID
                smooth={true} // Enable smooth scrolling
                duration={800} // Scroll animation speed
                offset={-70} // Adjust for fixed header
                className="text-white text-xl cursor-pointer hover:text-gray-300 transition"
                onClick={() => setMobileNav(false)} // Close menu after clicking
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileNav;
