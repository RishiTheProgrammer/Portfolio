import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@gsap/react";
import { Row, Col, Card } from "react-bootstrap";
import { useGSAP } from "@gsap/react";
import "./Home.css";
// import hero from "../assets/HeroIMG.png"
import homeAnimation from "../animations/homeAnimation.jsx";
import CustomNavbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import { useRef } from "react";
import AuroraBG from "../Components/AuroraBG";
import SpotlightCard from "../Components/SpotlightCard";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Home = () => {
  const heroTitleRef = useRef();
  const heroSubTitleRef = useRef();
  const heroTextRef = useRef();
  const ctaBtnRef = useRef();
  useGSAP(() => {
    homeAnimation({ heroTitleRef, heroSubTitleRef, heroTextRef, ctaBtnRef });
  });
  const isMobile = window.innerWidth < 768;

  const background = isMobile ? <div className='mobile-bg'></div> : <AuroraBG />;
  return (
    <section id="home">
      <div>
        <div className='background'>
          {background}
        </div>
        <CustomNavbar />
        <Row>
          <Col className='min-vh-100 d-flex align-items-center justify-content-center pt-3 pt-sm-0'>
            <div className='hero-content'>
                <h1 className="hero-title text-uppercase text-center d-none d-sm-block">I don't only create websites</h1>
                <h3 className='hero-subtitle text-center text-uppercase'>I create worlds</h3>
                <h5 className="text-center">Frontend Developer | UI/UX Designer | Motion Designer</h5>
                <div className="mx-auto d-flex justify-content-center gap-lg-5 flex-column flex-lg-row px-5 px-lg-0">
                <Link to="/about" className="btn btn-light btn-lg mt-3">Learn More</Link>
                <Link to="/skills" className="btn btn-outline-light btn-lg mt-3">See Skills</Link>
                </div>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center min-vh-100 g-3 px-2 px-lg-0 mt-5 mt-sm-0">
          <div className="mb-5">
            <h1 className="text-center display-1 fw-semibold">What I build?</h1>
            <h3 className="text-center display-4 fw-semibold">
              Interfaces that feels alive.
            </h3>
          </div>
          <Col lg={6}>
            <SpotlightCard>
                <Card.Body className='p-4 text-center'>
                    <Card.Title className="text-white display-5 fw-semibold">
                      React Interfaces
                    </Card.Title>
                    <Card.Text className="text-white display-6 fw-semibold mt-3">
                      React + UI + Components
                    </Card.Text>
                </Card.Body>
            </SpotlightCard>
          </Col>
          <Col lg={6}>
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
      </div>
    </section>
  );
};

export default Home;
