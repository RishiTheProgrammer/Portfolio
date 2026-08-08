import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-scroll";

const CustomNavbar = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary d-lg-none fixed-top"
      id="navbar"
    >
      <Container>
        <Navbar.Brand href="#home" className="d-flex">
          <h2>RISHI</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link to="home" spy={true} smooth={false} offset={-56} containerId="mainArea" activeClass="active" className="nav-link">
          <i className="bi bi-house-fill me-1"></i> Home
        </Link>
        <Link to="about" spy={true} smooth={false} offset={-56} containerId="mainArea" activeClass="active" className="nav-link">
          <i className="bi bi-person-fill me-1"></i> About
        </Link>
        <Link to="skills" spy={true} smooth={false} offset={-56} containerId="mainArea" activeClass="active" className="nav-link">
          <i className="bi bi-mortarboard-fill me-1"></i> Skills
        </Link>
        <Link to="projects" spy={true} smooth={false} offset={-56} containerId="mainArea" activeClass="active" className="nav-link">
          <i className="bi bi-briefcase-fill me-1"></i> Projects
        </Link>
        <Link to="contact" spy={true} smooth={false} offset={-56} containerId="mainArea" activeClass="active" className="nav-link">
          <i className="bi bi-telephone-fill me-1"></i> Contact
        </Link>
            
            <div className="d-flex justify-content-evenly align-items-center mt-3">
              <a
                href="https://github.com/RishiTheProgrammer/Portfolio"
                target="_blank"
                className="fs-2 logoBrand text-decoration-none"
              >
                <i className="ri-github-fill"></i>
              </a>
              <a
                href="mailto:rishisprogramming@gmail.com"
                target="_blank"
                className="fs-3 logoBrand"
              >
                <i className="bi bi-envelope"></i>
              </a>
              <a
                href="https://rishitheprogrammer.vercel.app"
                className="fs-3 logoBrand"
              >
                <i className="bi bi-globe"></i>
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
