import React from "react";
// Import data
import { copyright } from "../data";

const Copyright = () => {
  // Destructure copyright data
  const { link1, link2, copyText, social } = copyright;

  return (
    <div
      className="flex flex-col items-center gap-y-2 lg:flex-row lg:justify-between w-full text-gray-400 text-sm"

    >
      {/* Links */}
      <div className="flex gap-x-6">
        <a className="hover:text-accent transition" href={link1.href}>
          {link1.name}
        </a>
        <a className="hover:text-accent transition" href={link2.href}>
          {link2.name}
        </a>
      </div>

      {/* Copyright Text */}
      <div className="text-center">{copyText}</div>

      {/* Social Icons */}
      <ul className="flex gap-x-[12px]">
        {social.map((item, index) => {
          const { href, icon } = item;
          return (
            <li key={index}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                <img src={icon} alt={`Social icon ${index}`} className="w-5 h-5" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Copyright;
