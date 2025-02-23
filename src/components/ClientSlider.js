import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const ClientSlider = ({ clients }) => {
  return (
    <div className="w-full max-w-6xl mx-auto relative">
      <Swiper
        modules={[Pagination, Autoplay]} 
        spaceBetween={20}
        slidesPerView={1} // Default: 1 slide for mobile
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        touchEventsTarget="container"
        className="w-full max-w-full relative z-10"
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 }, 
          1024: { slidesPerView: 3, spaceBetween: 30 }, 
        }}
      >
        {clients.map((client, index) => {
          const { message, image, name, position, borderColor } = client;
          return (
            <SwiperSlide key={index} className="p-4">
              <div
                className="w-full mx-auto lg:max-w-[320px] xl:max-w-[500px] h-[250px] rounded-[11px] border border-gray-400 py-6 px-[20px] bg-white shadow-lg"
                style={{ borderTop: `10px solid ${borderColor}` }}
              >
                {/* Message */}
                <div className="mb-4 text-gray-700 text-center-justify ">{message}</div>

                {/* Person Details */}
                <div className="flex items-center gap-x-4 flex-wrap">
                  {/* Image  */}
                  <img
                    src={image}
                    alt={name}
                    className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                  />
                  
                  {/* Name & Position */}
                  <div className="flex flex-col min-w-[120px]">
                    <div className="font-bold truncate ">{name}</div>
                    <div className="text-gray-500 text-sm truncate">{position}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ClientSlider;
