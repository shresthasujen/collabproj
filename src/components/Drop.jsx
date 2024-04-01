import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "../assets/img/11600074575 (2).png";
function Drop() {
  return (
    <Navbar expand="lg" id="mobilenav">
      <Container
        style={{
          alignContent: "center",
          alignItems: "center !important",
          textAlign: "center",
          display: "flex",
        }}
      >
        <Navbar.Brand
          href="#home"
          style={{ alignItems: "center", display: "flex" }}
        >
          {/* Use Link instead of anchor tags */}
          <Link to="/" className="navbar-brand d-flex">
            <img src={logo} alt="" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-item nav-link">
              Home
            </Link>
            <Link to="/Aboutus" className="nav-item nav-link">
              About Us
            </Link>
            <Link to="/Programs" className="nav-item nav-link">
              Programs
            </Link>
            <Link to="/Ourmissions" className="nav-item nav-link">
              Our missions
            </Link>
            <Link to="/Testimonials" className="nav-item nav-link">
              Testimonials
            </Link>
            <Link to="/Gallery" className="nav-item nav-link">
              Gallery
            </Link>
            <Link to="/Contactus" className="nav-item nav-link">
              Contact Us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Drop;
