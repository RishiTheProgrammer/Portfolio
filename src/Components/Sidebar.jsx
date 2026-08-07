import { Col } from "react-bootstrap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@gsap/react";
import { useGSAP } from "@gsap/react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import "../Components/Sidebar.css"

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Sidebar = () => {
  
  return (
    <Col
      lg={2}
      className="sidebar py-5 d-lg-block d-none border-end border-3 border-secondary"
    >
      <div className="gap-3 d-flex text-center flex-column">
        <img
          src={logo}
          className="rounded-circle d-xl-inline d-none mx-auto img-logo"
          height={150}
          width={150}
          style={{ boxShadow: "0px 0px 10px 2px rgba(255, 255, 255, 0.5)" }}
        />
        <h1 className="display-6 fw-bolder logoName d-inline">
          <span className="a">R</span>
          <span className="a">I</span>
          <span className="a">S</span>
          <span className="a">H</span>
          <span className="a">I</span>
        </h1>
      </div>
      
      <div className="ms-3 d-flex flex-column gap-2">
        <Link to="home" spy={true} smooth={false} containerId="mainArea" activeClass="active" className="nav-link">
          <i className="bi bi-house-fill me-1"></i> Home
        </Link>
        <Link to="about" spy={true} smooth={false} containerId="mainArea" activeClass="active" className="nav-link">
          <i className="bi bi-person-fill me-1"></i> About
        </Link>
        <Link to="skills" spy={true} smooth={false} containerId="mainArea" activeClass="active" className="nav-link">
          <i className="bi bi-mortarboard-fill me-1"></i> Skills
        </Link>
        <Link to="projects" spy={true} smooth={false} containerId="mainArea" activeClass="active" className="nav-link">
          <i className="bi bi-briefcase-fill me-1"></i> Projects
        </Link>
        <Link to="contact" spy={true} smooth={false} containerId="mainArea" activeClass="active" className="nav-link">
          <i className="bi bi-telephone-fill me-1"></i> Contact
        </Link>
      </div>

      <div className="d-flex justify-content-evenly align-items-center mt-3">
        <a href="https://github.com/RishiTheProgrammer/Portfolio" target="_blank" className="fs-2 logoBrand text-decoration-none">
          <i className="ri-github-fill"></i>
        </a>
        <a href="mailto:rishisprogramming@gmail.com" target="_blank" className="fs-3 logoBrand">
          <i className="bi bi-envelope"></i>
        </a>
        <a href="https://rishitheprogrammer.vercel.app" className="fs-3 logoBrand">
          <i className="bi bi-globe"></i>
        </a>
      </div>
    </Col>
  );
};

export default Sidebar;
