import React from "react";
import { Link } from "react-scroll"; // Smooth scrolling

// Import navigation data
import { nav } from "../data";

const Nav = () => {
  return (
    <nav aria-label="Main Navigation">
      <ul className="flex gap-x-12">
        {nav.map((item, index) => {
          const { href, name } = item;
          return (
            <li key={index}>
              <Link
                to={href} // Section ID
                smooth={true} // Enable smooth scrolling
                duration={800} // Smooth scrolling speed
                offset={-70} // Adjust for fixed header
                className="hover:text-accent transition cursor-pointer"
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
