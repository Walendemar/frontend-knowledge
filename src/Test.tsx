import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/swiper-bundle.css";

const images = [
  <SwiperSlide key="image1">
    <div style={{ width: "200px", height: "200px", background: "green" }} />
  </SwiperSlide>,
  <SwiperSlide key="image2">
    <div style={{ width: "200px", height: "200px", background: "blue" }} />
  </SwiperSlide>,
  <SwiperSlide key="image3">
    <div style={{ width: "200px", height: "200px", background: "red" }} />
  </SwiperSlide>,
  <SwiperSlide key="image4">
    <div style={{ width: "200px", height: "200px", background: "yellow" }} />
  </SwiperSlide>,
  <SwiperSlide key="image5">
    <div style={{ width: "200px", height: "200px", background: "brown" }} />
  </SwiperSlide>,
];

const Test = () => {
  return (
    <div className="swiper-wrapper">
      <Swiper
        className="swiper"
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {images.map((image) => image)}
      </Swiper>
    </div>
  );
};

export default Test;
