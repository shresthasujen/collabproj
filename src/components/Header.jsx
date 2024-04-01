import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import caro1 from "../assets/img/carousel-1.jpg";
import caro2 from "../assets/img/carousel-2.jpg";

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
      <SwiperSlide>
        <div className="h-100 p-0" style={{ marginBottom: "10px" }}>
          <div className="owl-carousel header-carousel position-relative">
            <div className="owl-carousel-item position-relative">
              <img className="img-fluid w-100" src={caro1} alt="" />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                style={{ backgroundColor: "rgba(0, 0, 0, .2)" }}
              >
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-8 col-lg-8">
                      <h1 className="text-white animated slideInDown mb-2">
                        The Best Kindergarten School For Your Child
                      </h1>
                      <p className="fs-5 fw-medium text-white mb-4 pb-2">
                        Vero elitr justo clita lorem. Ipsum dolor at sed stet
                      </p>
                      <Link
                        to="/Aboutus"
                        id="gold"
                        className="btn rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft text-white"
                      >
                        Learn More
                      </Link>
                      <Link
                        to="/Programs"
                        className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight"
                      >
                        Our Classes
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-100 p-0" style={{ marginBottom: "10px" }}>
          <div className="owl-carousel header-carousel position-relative">
            <div className="owl-carousel-item position-relative">
              <img className="img-fluid w-100" src={caro2} alt="" />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                style={{ backgroundColor: "rgba(0, 0, 0, .2)" }}
              >
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-6 col-lg-7">
                      <h3
                        className="display-5 text-white mb-2"
                        style={{ width: "100%" }}
                      >
                        Make A Brighter Future For Your Child
                      </h3>
                      <p className="fs-6 fw-medium text-white mb-2">
                        Vero elitr justo clita lorem. Ipsum dolor at sed stet
                      </p>
                      <Link
                        to="/Aboutus"
                        id="gold"
                        className="btn rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft text-white"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Header;
