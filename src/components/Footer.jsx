import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarker,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import class1 from "../assets/img/classes-1.jpg";
import class2 from "../assets/img/classes-2.jpg";
import class3 from "../assets/img/classes-3.jpg";
import class4 from "../assets/img/classes-4.jpg";
import class5 from "../assets/img/classes-5.jpg";
import class6 from "../assets/img/classes-6.jpg";

const Footer = () => {
  return (
    <div
      class="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn"
      data-wow-delay="0.1s"
      id="dark"
    >
      <div class="container py-5">
        <div class="row g-5">
          <div class="col-lg-3 col-md-6">
            <h3 class="text-white mb-4">Get In Touch</h3>
            <p class="mb-2">
              <i class="fa fa-map-marker-alt me-3">
                <FaMapMarker />
              </i>
              Location, City, Country
            </p>
            <p class="mb-2">
              <i class="fa fa-phone-alt me-3">
                <FaPhoneAlt />
              </i>
              +012 345 67890
            </p>
            <p class="mb-2">
              <i class="fa fa-envelope me-3">
                <FaEnvelope />
              </i>
              info@example.com
            </p>
            <div class="d-flex pt-2">
              <a class="btn btn-outline-light btn-social" href="">
                <i class="fab fa-twitter">
                  <FaTwitter />
                </i>
              </a>
              <a class="btn btn-outline-light btn-social" href="">
                <i class="fab fa-facebook-f">
                  <FaFacebook />
                </i>
              </a>
              <a class="btn btn-outline-light btn-social" href="">
                <i class="fab fa-youtube">
                  <FaYoutube />
                </i>
              </a>
              <a class="btn btn-outline-light btn-social" href="">
                <i class="fab fa-linkedin-in">
                  <FaLinkedin />
                </i>
              </a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <h3 class="text-white mb-4">Quick Links</h3>
            <a class="btn  text-white-50" href="">
              About Us
            </a>
            <a class="btn text-white-50" href="">
              Contact Us
            </a>
            <a class="btn text-white-50" href="">
              Our Services
            </a>
            <a class="btn text-white-50" href="">
              Privacy Policy
            </a>
            <a class="btn text-white-50" href="">
              Terms & Condition
            </a>
          </div>
          <div class="col-lg-3 col-md-6">
            <h3 class="text-white mb-4">Photo Gallery</h3>
            <div class="row g-2 pt-2">
              <div class="col-4">
                <img
                  class="img-fluid rounded bg-light p-1"
                  src={class1}
                  alt=""
                />
              </div>
              <div class="col-4">
                <img
                  class="img-fluid rounded bg-light p-1"
                  src={class2}
                  alt=""
                />
              </div>
              <div class="col-4">
                <img
                  class="img-fluid rounded bg-light p-1"
                  src={class3}
                  alt=""
                />
              </div>
              <div class="col-4">
                <img
                  class="img-fluid rounded bg-light p-1"
                  src={class4}
                  alt=""
                />
              </div>
              <div class="col-4">
                <img
                  class="img-fluid rounded bg-light p-1"
                  src={class5}
                  alt=""
                />
              </div>
              <div class="col-4">
                <img
                  class="img-fluid rounded bg-light p-1"
                  src={class6}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <h3 class="text-white mb-4">Newsletter</h3>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div
              class="position-relative mx-auto"
              style={{ maxWidth: "400px" }}
            >
              <input
                class="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                id="gold"
                class="btn  py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="copyright">
          <div class="row">
            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy;{" "}
              <a class="border-bottom" href="">
                Your Site Name
              </a>
              , All Right Reserved. Designed By{" "}
              <a class="border-bottom" href="">
                Tunde Philps
              </a>
            </div>
            <div class="col-md-6 text-center text-md-end">
              <div class="footer-menu">
                <a href="">Home</a>
                <a href="">Cookies</a>
                <a href="">Help</a>
                <a href="">FQAs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
