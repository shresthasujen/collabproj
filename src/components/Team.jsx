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
            At Kindergarten Preschool, our popular teachers create a vibrant and
            nurturing learning space. With creativity and dedication, they
            inspire young minds, fostering curiosity and laying the foundation
            for lifelong learning. Meet our exceptional educators who play a
            pivotal role in shaping the educational journey of our youngest
            learners
          </p>
        </div>
        <div class="row g-4">
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="team-item position-relative">
              <img class="img-fluid rounded-circle w-75" src={team1} alt="" />
              <div class="team-text">
                <h3>Jenny Shrestha</h3>
                <p>Computer Science</p>
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
                <h3>Himesh Dangol</h3>
                <p>Social Studies</p>
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
                <h3>Ramita Shakya</h3>
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
