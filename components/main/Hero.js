import React from "react";
import { Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSlides } from "../../slices/sliderSlice";
import { useEffect } from "react";

const Hero = () => {
  const { slides, error, loading } = useSelector((state) => state.slide);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSlides());
  }, []);

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
            {slides.map((image) => (
              <SwiperSlide key={image.content.image.id}>
                <div
                  className="slide-inner slide-bg-image"
                  style={{
                    backgroundImage: `url(${image.content.image.filename})`,
                  }}
                ></div>
              </SwiperSlide>
            ))}
            ...
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
