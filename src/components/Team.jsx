import React from "react";
import team1 from "../assets/img/team-1.jpg";

import team2 from "../assets/img/team-2.jpg";
import team3 from "../assets/img/team-3.jpg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Team = () => {
  return (
    <div class="container-xxl py-5">
      <div class="container">
        <div
          class="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <h1 class="mb-3">Popular Teachers</h1>
          <p>
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
            lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum
            vero dolor duo.
          </p>
        </div>
        <div class="row g-4">
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="team-item position-relative">
              <img class="img-fluid rounded-circle w-75" src={team1} alt="" />
              <div class="team-text">
                <h3>Full Name</h3>
                <p>Designation</p>
                <div class="d-flex align-items-center">
                  <a class="btn btn-square  mx-1" id="gold" href="">
                    <i class="fab fa-facebook-f">
                      <FaFacebook />
                    </i>
                  </a>
                  <a class="btn btn-square   mx-1" id="gold" href="">
                    <i class="fab fa-twitter">
                      <FaTwitter />
                    </i>
                  </a>
                  <a id="gold" class="btn btn-square   mx-1" href="">
                    <i class="fab fa-instagram">
                      <FaInstagram />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="team-item position-relative">
              <img class="img-fluid rounded-circle w-75" src={team2} alt="" />
              <div class="team-text">
                <h3>Full Name</h3>
                <p>Designation</p>
                <div class="d-flex align-items-center">
                  <a class="btn btn-square  mx-1" id="gold" href="">
                    <i class="fab fa-facebook-f">
                      <FaFacebook />
                    </i>
                  </a>
                  <a class="btn btn-square   mx-1" id="gold" href="">
                    <i class="fab fa-twitter">
                      <FaTwitter />
                    </i>
                  </a>
                  <a class="btn btn-square   mx-1" id="gold" href="">
                    <i class="fab fa-instagram">
                      <FaInstagram />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div class="team-item position-relative">
              <img class="img-fluid rounded-circle w-75" src={team3} alt="" />
              <div class="team-text">
                <h3>Full Name</h3>
                <p>Designation</p>
                <div class="d-flex align-items-center">
                  <a class="btn btn-square  mx-1" id="gold" href="">
                    <i class="fab fa-facebook-f">
                      <FaFacebook />
                    </i>
                  </a>
                  <a class="btn btn-square   mx-1" id="gold" href="">
                    <i class="fab fa-twitter">
                      <FaTwitter />
                    </i>
                  </a>
                  <a class="btn btn-square   mx-1" id="gold" href="">
                    <i class="fab fa-instagram">
                      <FaInstagram />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
