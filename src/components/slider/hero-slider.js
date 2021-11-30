import React, { useState, useRef } from "react";
import BannerCard from "./banner-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { BannerData } from "@/constant/banner";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Scrollbar,
} from "swiper";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

SwiperCore.use([Navigation, Pagination, Autoplay, Scrollbar]);

function HeroSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperOption = {
    loop: true,
    speed: 600,
    spaceBetween: 0,
    slidesPerView: 1,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    navigation: {
      prevEl: prevRef.current ? prevRef.current : undefined,
      nextEl: nextRef.current ? nextRef.current : undefined,
    },
  };

  return (
    <div className="hero-slider-area">
      <Swiper
        effect="fade"
        onInit={(swiper) => {
          const navigation = swiper.params.navigation;
          navigation.prevEl = prevRef.current;
          navigation.nextEl = nextRef.current;
          swiper.update();
        }}
        {...swiperOption}
      >
        {BannerData &&
          BannerData.map((item, index) => (
            <SwiperSlide key={index}>
              <BannerCard data={item} />
            </SwiperSlide>
          ))}
        <div className="swiper-button-prev">
          <button ref={prevRef} aria-label="prev-button">
            <IoIosArrowBack />
          </button>
        </div>
        <div className="swiper-button-next">
          <button ref={nextRef} aria-label="next-button">
            <IoIosArrowForward />
          </button>
        </div>
      </Swiper>
    </div>
  );
}

export default HeroSlider;
