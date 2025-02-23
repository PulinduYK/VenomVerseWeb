import React from "react";
// Import data
import { footer } from "../data";
// Import components
import Copyright from "../components/Copyright";

const Footer = () => {
  // Destructure footer data
  const { logo, links, legal, newsletter, form } = footer;

  return (
    <footer className=" bg-blue-200 pt-[142px] pb-[60px] text-black">
      <div className="container mx-auto">
        <div
          className="flex flex-col items-center text-center 
            lg:flex-row lg:items-start lg:text-left lg:justify-between gap-y-8"
        >
          {/* Logo */}
          <div >
            <img src={logo} alt="Company Logo" className="w-32" />
          </div>

          {/* Links Section */}
          <div  >
            <div className="text-2xl uppercase font-medium mb-6">Links</div>
            <ul className="flex flex-col gap-y-3">
              {links.map((item, index) => {
                const { href, name } = item;
                return (
                  <li key={index}>
                    <a
                      href={href}
                      className="font-medium hover:text-accent transition"
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <div className="text-2xl uppercase font-medium mb-6">Legal</div>
            <ul className="flex flex-col gap-y-3">
              {legal.map((item, index) => {
                const { href, name } = item;
                return (
                  <li key={index}>
                    <a
                      href={href}
                      className="font-medium hover:text-accent transition"
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <div className="text-2xl uppercase font-medium mb-6">
              {newsletter.title}
            </div>
            <p className="text-xl text-gray-400 mb-[18px]">{newsletter.subtitle}</p>

            {/* Form */}
            <form  className="max-w-[349px] mb-[10px]">
              <div className="h-[62px] p-[7px] flex border border-gray-700 rounded-lg">
                <input
                  className="w-full h-full pl-6 border-none outline-none placeholder:text-gray-400 "
                  type="email"
                  placeholder={form.placeholder}
                  aria-label="Enter your email"
                  required
                />
                <button
                  className="btn btn-sm bg-accent hover:bg-accentHover w-[102px] text-white"
                  type="submit"
                  aria-label="Subscribe"
                >
                  {form.btnText}
                </button>
              </div>
            </form>
            <span className="text-sm text-gray-500">{form.smallText}</span>
            <div>
            <span className="text-sm text-gray-500">{form.EsmallText}</span>
            </div>
            <div>
            <span className="text-sm text-gray-500">{form.EnsmallText}</span>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <hr className="mt-10 mb-5 border-gray-700" />

        {/* Copyright Component */}
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
