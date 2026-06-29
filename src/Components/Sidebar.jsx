import { Col } from "react-bootstrap";
import gsap from "gsap";
import "@gsap/react";
import { useGSAP } from "@gsap/react";
import logo from "../Images/Logo.png";

const Sidebar = () => {
  const tl = gsap.timeline();
  useGSAP(() => {
    tl.from(".logoName .a", {
      opacity: 0,
      duration: 1,
      stagger: .2,
    });

    tl.from(".nav-link", {
      opacity: 0,
      x: 20,
      stagger: 0.5,
      duration: 1,
    });

    tl.from(".logoBrand", {
      opacity: 0,
      y: 20,
      stagger: 0.5,
      duration: 1,
    });
  });
  return (
    <Col
      lg={2}
      className="sidebar py-5 d-lg-block d-none border-end border-3 border-secondary"
    >
      <div className="text-center">
        <img
          src={logo}
          className="rounded-circle border-2 border-primary border d-xl-inline d-none"
          height={150}
          width={150}
        />
        <h2 className="display-6 fw-bolder mt-xl-3 logoName d-inline">
          <span className="a">R</span>
          <span className="a">I</span>
          <span className="a">S</span>
          <span className="a">H</span>
          <span className="a">I</span>
        </h2>
      </div>
      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="bi bi-house me-2"></i> Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="bi bi-person me-2"></i> About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="bi bi-puzzle me-2"></i> Skills
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="bi bi-box me-2"></i> Projects
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="bi bi-envelope me-2"></i> Contact
          </a>
        </li>
      </ul>

      <div className="d-flex justify-content-evenly align-items-center mt-3">
        <a href="" className="fs-4 logoBrand">
          <i className="bi bi-github"></i>
        </a>
        <a href="mailto:rishisprogramming@gmail.com" className="fs-4 logoBrand">
          <i className="bi bi-envelope"></i>
        </a>
        <a href="" className="fs-4 logoBrand">
          <i className="bi bi-globe"></i>
        </a>
      </div>
    </Col>
  );
};

export default Sidebar;
