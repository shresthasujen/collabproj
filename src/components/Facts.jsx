import React from "react";
import call from "../assets/img/call.jpg";
import {
  FaArrowRight,
  FaBusAlt,
  FaChalkboardTeacher,
  FaFutbol,
  FaHome,
} from "react-icons/fa";

const Facts = () => {
  return (
    <>
      <div class="container-xxl py-5">
        <div class="container">
          <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h1 class="mb-3">School Facilities</h1>
            <p>
              At Kindergarten Preschool, we offer top-notch facilities to enrich
              your child's learning journey. Our well-equipped classrooms, safe
              play areas, and modern resources create an ideal environment for
              exploration and growth. Discover the comfort and quality that
              define our commitment to providing an excellent educational
              experience at Kindergarten Preschool.
            </p>
          </div>
          <div class="row g-4">
            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="facility-item">
                <div class="facility-icon " id="gold">
                  <span class="" id="gold"></span>
                  <i
                    class="fa fa-bus-alt fa-3x  "
                    style={{ fontSize: "30px" }}
                    id="goldtext"
                  >
                    <FaBusAlt />
                  </i>
                  <span class="" id="gold"></span>
                </div>
                <div class="facility-text " id="gold">
                  <h3 class=" mb-3" id="goldtext">
                    School Bus
                  </h3>
                  <p class="mb-0">
                    Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero
                    ipsum sit
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
              <div class="facility-item">
                <div class="facility-icon bg-success">
                  <span class="bg-success"></span>
                  <i
                    class="fa fa-futbol fa-3x text-success"
                    style={{ fontSize: "30px" }}
                  >
                    <FaFutbol />
                  </i>
                  <span class="bg-success"></span>
                </div>
                <div class="facility-text bg-success">
                  <h3 class="text-success mb-3">Playground</h3>
                  <p class="mb-0">
                    Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero
                    ipsum sit
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="facility-item">
                <div class="facility-icon bg-warning">
                  <span class="bg-warning"></span>
                  <i
                    class="fa fa-home fa-3x text-warning"
                    style={{ fontSize: "30px" }}
                  >
                    <FaHome />
                  </i>
                  <span class="bg-warning"></span>
                </div>
                <div class="facility-text bg-warning">
                  <h3 class="text-warning mb-3">Healthy Canteen</h3>
                  <p class="mb-0">
                    Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero
                    ipsum sit
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
              <div class="facility-item">
                <div class="facility-icon bg-info">
                  <span class="bg-info"></span>
                  <i
                    class="fa fa-chalkboard-teacher fa-3x text-info"
                    style={{ fontSize: "30px" }}
                  >
                    <FaChalkboardTeacher />
                  </i>
                  <span class="bg-info"></span>
                </div>
                <div class="facility-text bg-info">
                  <h3 class="text-info mb-3">Positive Learning</h3>
                  <p class="mb-0">
                    Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero
                    ipsum sit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="container-xxl py-5">
        <div class="container">
          <div class="bg-light rounded">
            <div class="row g-0">
              <div
                class="col-lg-6 wow fadeIn"
                data-wow-delay="0.1s"
                style={{ minHeight: "400px" }}
              >
                <div class="position-relative h-100">
                  <img
                    class="position-absolute w-100 h-100 rounded"
                    src={call}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <div class="h-100 d-flex flex-column justify-content-center p-5">
                  <h1 class="mb-4">Become A Teacher</h1>
                  <p class="mb-4">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                    sit, sed stet lorem sit clita duo justo magna dolore erat
                    amet
                  </p>
                  <a class="btn  py-3 px-5" href="" id="gold">
                    Get Started Now
                    <i class="fa fa-arrow-right ms-2">
                      <FaArrowRight />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Facts;
