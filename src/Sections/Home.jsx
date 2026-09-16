import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@gsap/react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useGSAP } from "@gsap/react";
import "./Home.css";
// import hero from "../assets/HeroIMG.png"
import IntroTimeline from "../animations/introTimeline.jsx";
import CustomNavbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { SiHtml5 } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";
import { SiVite } from "react-icons/si";
import { SiGsap } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Home = () => {
  const heroTitleRef = useRef();
  const heroSubTitleRef = useRef();
  const heroTextRef = useRef();
  const ctaBtnRef = useRef();
  const navigate = useNavigate();
  useGSAP(() => {
    IntroTimeline({ heroTitleRef, heroSubTitleRef, heroTextRef, ctaBtnRef });
  });
  return (
    <section id="home">
      <Container fluid>
        <CustomNavbar />
        <Row className="d-flex align-items-center min-vh-100">
          <Col>
        <div className="cloud-space">
            <div className="cloud-particles">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>
<div className="cloud-background-text">
    DEVELOPER
</div>
          <div className="cloud-core">
            <span>R</span>
          </div>
          <div className="cloud-icon icon-html">
            <SiHtml5 />
          </div>
          <div className="cloud-icon icon-css">
            <IoLogoCss3 />
          </div>
          <div className="cloud-icon icon-js">
            <IoLogoJavascript />
          </div>
          <div className="cloud-icon icon-bootstrap">
            <BsBootstrapFill />
          </div>
          <div className="cloud-icon icon-react">
            <FaReact />
          </div>
          <div className="cloud-icon icon-vite">
            <SiVite />
          </div>
          <div className="cloud-icon icon-gsap">
            <SiGsap />
          </div>
          <div className="cloud-icon icon-github">
            <FaGithub />
          </div>
        </div>
          </Col>
        </Row>
        <Row className="d-flex align-items-center min-vh-100 g-3">
          <div className="mb-5">
            <h1 className="text-center display-1 fw-semibold">What I build?</h1>
            <h3 className="text-center display-4 fw-semibold">
              Interfaces that feels alive.
            </h3>
          </div>
          <Col lg={8}>
            <Card className="bg-transparent border-0 h-100">
              <Card.Body style={{ minHeight: "400px" }} className="text-center">
                <Card.Title className="text-white display-5 fw-semibold">
                  React Interfaces
                </Card.Title>
                <Card.Text className="text-white display-6 fw-semibold">
                  React + UI + Components
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Row className="g-3">
              <Col>
                <Card className="bg-transparent border-0">
                  <Card.Body>
                    <Card.Title className="text-white display-6 fw-semibold">
                      Motion
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="bg-transparent border-0">
                  <Card.Body>
                    <Card.Title className="text-white display-6 fw-semibold">
                      Interaction
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
