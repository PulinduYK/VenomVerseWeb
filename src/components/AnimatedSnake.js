import React, { useEffect } from "react";
import { gsap } from "gsap";

const AnimatedSnake = () => {
  useEffect(() => {
    // Animate the snake to follow the SVG path
    gsap.to("#snake", {
      strokeDasharray: 500,
      strokeDashoffset: 500,
      duration: 10,
      repeat: -1,
      ease: "power1.inOut",
      strokeDashoffset: 0,
    });

    // Floating Effect
    gsap.to("#snake", {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div className="absolute w-full h-full top-0 left-0 pointer-events-none overflow-hidden">
      {/* Glowing Snake Animation part */}
      <svg
        className="absolute w-[100%] h-[100%]"
        viewBox="0 0 800 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="snake"
          d="M10,200 Q200,50 400,200 T800,200"
          stroke="rgba(0, 0, 255, 0.8)"  // Change to Blue
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow)"
        />
         {/* Glowing part */}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default AnimatedSnake;
