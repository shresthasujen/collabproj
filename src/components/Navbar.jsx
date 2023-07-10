import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { FaBookReader } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav
      class="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0"
      id="desktopnav"
    >
      <a href="" class="navbar-brand">
        <h1 class="m-0 " id="goldtext">
          <i class="fa fa-book-reader me-3">
            <FaBookReader />
          </i>
          Preschool
        </h1>
      </a>
      <button
        type="button"
        class="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav mx-auto">
          <a href="/" class="nav-item nav-link active">
            Home
          </a>
          <a href="#about" class="nav-item nav-link">
            About Us
          </a>
          <a href="#classes" class="nav-item nav-link">
            Classes
          </a>

          <a href="#contacts" class="nav-item nav-link">
            Contact Us
          </a>
        </div>
        <a href="" id="gold" class="btn  rounded-pill px-3 d-none d-lg-block">
          Join Us
          <i class="fa fa-arrow-right ms-3">
            <BiRightArrowAlt />{" "}
          </i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
