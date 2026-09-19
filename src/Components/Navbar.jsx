import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './Navbar.css'
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@gsap/react";
import StaggeredMenu from "./StaggeredMenu.jsx";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const CustomNavbar = () => {
  const navClass = ({ isActive }) => isActive ? "nav-link active" : "nav-link";

  return (
    <>
    <>
      {/* Desktop Navbar */}
      <div className="d-none d-lg-block">
        <Navbar className="fixed-top rounded-4 m-3" id="navbar">
          <Container>
            <Navbar.Brand href="/" className="mt-2">
              <h2>
                <i className="bi bi-lightning-charge-fill"></i> RISHI
              </h2>
            </Navbar.Brand>

            <Navbar.Collapse>
              <Nav className="d-flex align-items-center justify-content-evenly gap-lg-3 ms-lg-auto">
                <NavLink to="/" className={navClass} end>
                  <i className="bi bi-house-fill me-1"></i> Home
                </NavLink>

                <NavLink to="/about" className={navClass}>
                  <i className="bi bi-person-fill me-1"></i> About
                </NavLink>

                <NavLink to="/skills" className={navClass}>
                  <i className="bi bi-mortarboard-fill me-1"></i> Skills
                </NavLink>

                <NavLink to="/projects" className={navClass}>
                  <i className="bi bi-briefcase-fill me-1"></i> Projects
                </NavLink>

                <NavLink to="/contact" className={navClass}>
                  <i className="bi bi-telephone-fill me-1"></i> Contact
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      {/* Mobile Staggered Menu */}
      <div className="d-lg-none">
        <StaggeredMenu
          position="right"
          items={[
            { label: "Home", link: "/" },
            { label: "About", link: "/about" },
            { label: "Skills", link: "/skills" },
            { label: "Projects", link: "/projects" },
            { label: "Contact", link: "/contact" }
          ]} 
          menuButtonColor="#ffffff"
          openMenuButtonColor="#1a1a1a"
          changeMenuColorOnOpen={true}
        />
      </div>
    </>
    </>
  );
};

export default CustomNavbar;
