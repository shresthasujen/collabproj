import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom"; // Import Link from React Router

import logo from "../assets/img/Petpalslogo.png";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0"
      id="desktopnav"
    >
      <Link to="/" className="navbar-brand d-flex">
        {" "}
        <img src={logo} alt="" />
      </Link>
      <button
        type="button"
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav mx-auto">
          <Link to="/" className="nav-item nav-link">
            HOME
          </Link>
          <Link to="/" className="nav-item nav-link">
            ABOUT US
          </Link>
          <Link to="/" className="nav-item nav-link">
            PROGRAMS
          </Link>

          <Link to="/" className="nav-item nav-link">
            TESTIMONIALS
          </Link>
          <Link to="/" className="nav-item nav-link">
            GALLERY
          </Link>
          <Link to="/Contactus" className="nav-item nav-link">
            CONTACT US
          </Link>
        </div>
        <Link
          to="/Contactus"
          id="gold"
          className="text-white btn  rounded-pill px-3 d-none d-lg-block"
        >
          Login{" "}
          <i className="fa fa-arrow-right ms-3">
            <BiRightArrowAlt />{" "}
          </i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
