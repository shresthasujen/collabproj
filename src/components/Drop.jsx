import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaBookReader, FaTruck } from "react-icons/fa";

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
          <a href="" class="navbar-brand  ">
            <h1 class="m-0 text-primary">
              <i class="fa fa-book-reader me-3">
                <FaBookReader />
              </i>
              Preschool
            </h1>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="/Blog">Blog</Nav.Link>

            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Drop;
