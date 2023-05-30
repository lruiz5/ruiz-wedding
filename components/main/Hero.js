import React from "react";
import { Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Hero = () => {
  return (
    <section className="wpo-hero-slider wpo-hero-style-3">
      <h2 className="hidden">some</h2>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <Swiper
            // install Swiper modules
            modules={[Pagination, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            speed={1800}
            parallax={true}
          >
            <SwiperSlide>
              <div
                className="slide-inner slide-bg-image"
                style={{
                  backgroundImage: `url(${"/images/slider/slider-1-min.webp"})`,
                }}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slide-inner slide-bg-image"
                style={{
                  backgroundImage: `url(${"/images/slider/slider-2.png"})`,
                }}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slide-inner slide-bg-image"
                style={{
                  backgroundImage: `url(${"/images/slider/slider-3-min.webp"})`,
                }}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slide-inner slide-bg-image"
                style={{
                  backgroundImage: `url(${"/images/slider/slider-4-min.webp"})`,
                }}
              ></div>
            </SwiperSlide>
            ...
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
