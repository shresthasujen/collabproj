import React from "react";
import about1 from "../assets/img/about-1.jpg";
import about2 from "../assets/img/about-2.jpg";
import about3 from "../assets/img/about-3.jpg";

import user from "../assets/img/user.jpg";
const About = () => {
  return (
    <div class="container-xxl py-5" id="about">
      <div class="container">
        <div class="row g-5 align-items-center">
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <h1 class="mb-4">
              Learn More About Our Work And Our Cultural Activities
            </h1>
            <p>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>
            <p class="mb-4">
              Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No
              stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo
              nonumy clita sit at, sed sit sanctus dolor eos, ipsum labore duo
              duo sit no sea diam. Et dolor et kasd ea. Eirmod diam at dolor est
              vero nonumy magna.
            </p>
            <div class="row g-4 align-items-center">
              <div class="col-sm-6">
                <a class="btn rounded-pill py-3 px-5" id="gold" href="">
                  Read More
                </a>
              </div>
              <div class="col-sm-6">
                <div class="d-flex align-items-center">
                  <img
                    class="rounded-circle flex-shrink-0"
                    src={user}
                    alt=""
                    style={{ width: "45px", height: "45px" }}
                  />
                  <div class="ms-3">
                    <h6 class=" mb-1" id="goldtext">
                      Jhon Doe
                    </h6>
                    <small>CEO & Founder</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 about-img wow fadeInUp" data-wow-delay="0.5s">
            <div class="row">
              <div class="col-12 text-center">
                <img
                  class="img-fluid w-75 rounded-circle bg-light p-3"
                  src={about1}
                  alt=""
                />
              </div>
              <div class="col-6 text-start" style={{ marginTop: "-150px" }}>
                <img
                  class="img-fluid w-100 rounded-circle bg-light p-3"
                  src={about2}
                  alt=""
                />
              </div>
              <div class="col-6 text-end" style={{ marginTop: "-150px" }}>
                <img
                  class="img-fluid w-100 rounded-circle bg-light p-3"
                  src={about3}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
