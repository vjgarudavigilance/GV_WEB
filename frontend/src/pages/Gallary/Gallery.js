import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Gallery.css'; // Import CSS for styling
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import images
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpg';
import img6 from './img6.jpg';
import img7 from './img7.jpg';
import img8 from './img8.jpg';
import img9 from './img9.jpg';
import img10 from './img10.jpg';
import img11 from './img11.jpg';
import img12 from './img12.jpg';
import img13 from './img13.jpg';
import img14 from './img14.jpg';
import img15 from './img15.jpg';
import img16 from './img16.jpg';
import img17 from './img17.jpg';
import img18 from './img18.jpg';
import img19 from './img19.jpg';
import img20 from './img20.jpg';
import img21 from './img21.jpg';
import img22 from './img22.jpg';
import img23 from './img23.jpg';
import img24 from './img24.jpg';
import img25 from './img25.jpg';
import img26 from './img26.jpg';
import img27 from './img27.jpg';
import img28 from './img28.jpg';

import galleryVideo from './gallery2_bg.mp4';

export default function Gallery() {
  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12,
    img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24,
    img25, img26, img27, img28
];


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
        slidesPerView={1.5} // Default for mobile
        spaceBetween={100} // Default spacing for smaller screens
        breakpoints={{
          480: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={3000}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Autoplay, Navigation, Pagination]}
        className="gallery-carousel"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="gallery-slide">
            <img src={img} alt={`Image ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
