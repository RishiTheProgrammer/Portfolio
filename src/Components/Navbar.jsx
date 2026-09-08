import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './Navbar.css'
import { Link } from "react-scroll";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="fixed-top" id="navbar">
      <Container>
        <Navbar.Brand href="#home" className="mt-2">
          <h2>RISHI</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex align-items-center gap-3 ms-auto">
            <Link
              to="home"
              spy={true}
              smooth={false}
              offset={-56}
              activeClass="active"
              className="nav-link"
            >
              <i className="bi bi-house-fill me-1"></i> Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={false}
              offset={-56}
              activeClass="active"
              className="nav-link"
            >
              <i className="bi bi-person-fill me-1"></i> About
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={false}
              offset={-56}
              activeClass="active"
              className="nav-link"
            >
              <i className="bi bi-mortarboard-fill me-1"></i> Skills
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={false}
              offset={-56}
              activeClass="active"
              className="nav-link"
            >
              <i className="bi bi-briefcase-fill me-1"></i> Projects
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={false}
              offset={-56}
              activeClass="active"
              className="nav-link"
            >
              <i className="bi bi-telephone-fill me-1"></i> Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
