import React, { useState, useEffect } from "react";
import Testimony from "./Testimony";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Testimonials = () => {
  const [slidesPerView, setSlidesPerView] = useState(2.5);

  const fitSlidesPerView = () => {
    if (window.innerWidth <= 1024 && !(window.innerWidth <= 600)) {
      setSlidesPerView(1.3);
    } else if (window.innerWidth <= 600) {
      setSlidesPerView(1);
    } else {
      setSlidesPerView(2.5);
    }
  };

  useEffect(() => {
    fitSlidesPerView();
    window.addEventListener("resize", fitSlidesPerView);
    return () => {
      window.removeEventListener("resize", fitSlidesPerView);
    };
  }, []);

  return (
    <section id="testimony" className="container container__testimonials">
      <h1 className="container">What People Say About Us</h1>
      {/* <Swiper
        className="testimonials__slide container"
        slidesPerView={slidesPerView}
        spaceBetween={20}
      >
        <SwiperSlide>
          <Testimony img="https://reviews.tn/wp-content/uploads/2021/05/original-profile-picture-ideas-man_31.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Testimony img="https://reviews.tn/wp-content/uploads/2021/05/original-profile-picture-ideas-man_31.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Testimony img="https://reviews.tn/wp-content/uploads/2021/05/original-profile-picture-ideas-man_31.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Testimony img="https://reviews.tn/wp-content/uploads/2021/05/original-profile-picture-ideas-man_31.jpg" />
        </SwiperSlide>
    >  </Swiper> */}
    <div
        className="testimonials__slide container"
    >
        <Testimony img="https://reviews.tn/wp-content/uploads/2021/05/original-profile-picture-ideas-man_31.jpg" />
        <Testimony img="https://reviews.tn/wp-content/uploads/2021/05/original-profile-picture-ideas-man_31.jpg" />
        <Testimony img="https://reviews.tn/wp-content/uploads/2021/05/original-profile-picture-ideas-man_31.jpg" />
        <Testimony img="https://reviews.tn/wp-content/uploads/2021/05/original-profile-picture-ideas-man_31.jpg" />
    </div>

    </section>
  );
};

export default Testimonials;
