import caro1 from "../assets/img/carousel-1.jpg";
import caro2 from "../assets/img/carousel-2.jpg";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

const Header = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={false}
      modules={[Autoplay]}
      className="mySwiper"
    >
      <div>
        <div class="h-100 p-0 " style={{ marginBottom: "10px" }}>
          <div class="owl-carousel header-carousel position-relative">
            <SwiperSlide>
              <div class="owl-carousel-item position-relative">
                <img class="img-fluid w-100" src={caro1} alt="" />
                <div
                  class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                  style={{ backgroundColor: "rgba(0, 0, 0, .2)" }}
                >
                  <div class="container">
                    <div class="row justify-content-start">
                      <div class="col-8 col-lg-8">
                        <h1 class=" text-white animated slideInDown mb-2">
                          The Best Kindergarten School For Your Child
                        </h1>
                        <p class="fs-5 fw-medium text-white mb-4 pb-2">
                          Vero elitr justo clita lorem. Ipsum dolor at sed stet
                        </p>
                        <a
                          href=""
                          id="gold"
                          class="btn  rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft"
                        >
                          Learn More
                        </a>
                        <a
                          href=""
                          class="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight"
                        >
                          Our Classes
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="owl-carousel-item position-relative ">
                <img class="img-fluid w-100" src={caro2} alt="" />
                <div
                  class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                  style={{ backgroundColor: "rgba(0, 0, 0, .2)" }}
                >
                  <div class="container">
                    <div class="row justify-content-start">
                      <div class="col-6 col-lg-7">
                        <h3
                          class="display-5 text-white mb-2 "
                          style={{ width: "100%" }}
                        >
                          Make A Brighter Future For Your Child
                        </h3>
                        <p class="fs-6 fw-medium text-white mb-2 ">
                          Vero elitr justo clita lorem. Ipsum dolor at sed stet
                        </p>
                        <a
                          href=""
                          id="gold"
                          class="btn  rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </div>
      </div>
    </Swiper>
  );
};

export default Header;
