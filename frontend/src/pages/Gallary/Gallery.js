import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Gallery.css"; // Import CSS for styling
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import galleryVideo from "./gallery2_bg.mp4";

// Dynamically import all images from the current directory
const importImages = () => {
  const images = require.context("./", false, /\.(jpg|jpeg|png)$/);
  return images.keys().map(images);
};

const images = importImages();

export default function Gallery() {
  return (
    <div className="gallery-container">
      <video autoPlay muted loop className="gallery-bg-video">
        <source src={galleryVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h2>Gallery</h2>
      <Swiper
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={1.5} // Mobile default
        spaceBetween={30} // Adjust spacing for small screens
        breakpoints={{
          480: { slidesPerView: 2, spaceBetween: 30 },
          768: { slidesPerView: 3, spaceBetween: 40 },
          1024: { slidesPerView: 4, spaceBetween: 50 },
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={1500} // Balanced speed
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Autoplay, Navigation, Pagination]}
        className="gallery-carousel"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="gallery-slide">
            <img src={img} alt={`Image ${index + 1}`} loading="lazy" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
