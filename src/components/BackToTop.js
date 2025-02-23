import React, { useState, useEffect } from "react";
// Import the arrow icon
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / windowHeight) * 100;

      setScrollProgress(progress);
      setVisible(scrollTop > 300); // Show scrol 300px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        onClick={scrollToTop}
        className={`relative w-14 h-14 rounded-full flex items-center justify-center bg-white text-blue-600 shadow-lg transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Circle  Rounding*/}
        <svg className="absolute inset-0 w-full h-full">
          <circle
            className="stroke-gray-300"
            cx="28" cy="28" r="26"
            fill="none" strokeWidth="4"
          />
          <circle
            className="stroke-blue-600 transition-all"
            cx="28" cy="28" r="26"
            fill="none" strokeWidth="4"
            strokeDasharray="163"
            strokeDashoffset={163 - (163 * scrollProgress) / 100}
            strokeLinecap="round"
          />
        </svg>

        {/* Arrow Icon */}
        <FaArrowUp size={20} className="relative z-10" />
      </button>
    </div>
  );
};

export default BackToTop;
