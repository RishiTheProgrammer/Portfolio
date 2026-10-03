import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@gsap/react";
import { Row, Col, Card } from "react-bootstrap";
import { useGSAP } from "@gsap/react";
import "./Home.css";
import homeAnimation from "../animations/homeAnimation.jsx";
import { Link } from "react-scroll";
import { useRef } from "react";
import SpotlightCard from "../Components/SpotlightCard";
import {
  FaReact,
  FaJs
} from "react-icons/fa6";

import {
  SiGsap
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Home = () => {
  const heroTitleRef = useRef();
  const heroSubTitleRef = useRef();
  useGSAP(() => {
    homeAnimation({ heroTitleRef, heroSubTitleRef, });
  });
  const statCard = [
    {
      id: 1,
      icon: <FaReact/>,
      title: "React",
      description: "Making component-based UI and Interfaces to make the website easy and simple to make.",
      features: [
      "Reusable components",
      "Responsive interfaces",
      "Component-based architecture",
      ],
    },
    {
      id: 2,
      icon: <FaJs/>,
      title: "JavaScript",
      description: "Making triggers, functions and event listeners to make website dynamic, controllable and functional.",
      features: [
      "Interactive UI",
      "Event-driven interactions",
      "Dynamic functionality",
      ],
    },
    {
      id: 3,
      icon: <SiGsap/>,
      title: "GSAP",
      description: "Making beautiful entrance, moving and subtle animations to make interface engaging.",
      features: [
      "Entrance animations",
      "Scroll-based motion",
      "Interactive animations",
      ],
    }
  ];
  return (
    <section>
      <div>
        <div className='background'>
          <div className='mobile-bg'></div>
        </div>
        <Row id="hero">
          <Col className='min-vh-100 d-flex align-items-center justify-content-center pt-3 pt-sm-0'>
            <div className='hero-content'>
                <h1 className="hero-title text-uppercase text-center d-none d-sm-block">I don't only create websites</h1>
                <h3 className='hero-subtitle text-center text-uppercase font-italianno'>I create worlds</h3>
                <h5 className="text-center">Frontend Developer | UI/UX Designer | Motion Designer</h5>
                <div className="mx-auto d-flex justify-content-center gap-sm-5 flex-column flex-sm-row px-5 px-lg-0 cta-row">
                <Link to="wib" smooth={true} duration={600} offset={-90} className="btn btn-lg mt-3 cta-btn">Learn More</Link>
                <Link to="skills" smooth={true} duration={600} offset={-90} className="btn btn-lg mt-3 cta-btn">See Skills</Link>
                </div>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center justify-content-evenly min-vh-100 g-3 px-3 mt-5 mt-sm-0 py-lg-5" id="wib">
          <div className="">
            <h1 className="text-center font-italianno display-1" ref={heroTitleRef}>What I Build?</h1>
            <h3 className="text-center display-4 lh-base" ref={heroSubTitleRef}>Interfaces That Feel <span className="px-2 alive">Alive</span> With</h3>
          </div>
          {statCard.map((stat) => (
            <Col lg={4} key={stat.id}>
              <SpotlightCard className='card stat-card border-0'>
                <Card.Header className='d-flex align-items-center justify-content-between fs-1 mb-2 bg-transparent'><span>{stat.icon}</span><span>{stat.title}</span></Card.Header>
                <Card.Body>
                  <Card.Text className='text-capitalize'>{stat.description}</Card.Text>
                  <ul className="stack-feature-list">
                    {stat.features.map((feature, index) => (
                      <li key={index} className='stat-features'>{feature}</li>
                    ))}
                  </ul>
                </Card.Body>
              </SpotlightCard>
            </Col>
          ))}
        </Row>
        <Row
  className="stack-section min-vh-100 align-items-center g-0 mt-5 mt-sm-0"
  id="stack"
>
  <Col xs={12}>
    <div className="stack-heading px-3">
      <p className="stack-kicker">THE TOOLKIT</p>

      <h2 className="stack-title">
        Built with <span>code.</span>
        <br />
        Brought alive with <span>motion.</span>
      </h2>
    </div>

    <div className="marquee-wrapper">
      <div className="marquee marquee-one">
        <div className="marquee-track">
          <span>React</span>
          <i>✦</i>
          <span>JavaScript</span>
          <i>✦</i>
          <span>GSAP</span>
          <i>✦</i>
          <span>CSS</span>
          <i>✦</i>
          <span>React</span>
          <i>✦</i>
          <span>JavaScript</span>
          <i>✦</i>
          <span>GSAP</span>
          <i>✦</i>
          <span>CSS</span>
          <i>✦</i>
        </div>
      </div>

      <div className="marquee marquee-two">
        <div className="marquee-track">
          <span>HTML</span>
          <i>✦</i>
          <span>Bootstrap</span>
          <i>✦</i>
          <span>Git</span>
          <i>✦</i>
          <span>Vite</span>
          <i>✦</i>
          <span>GitHub</span>
          <i>✦</i>
          <span>HTML</span>
          <i>✦</i>
          <span>Bootstrap</span>
          <i>✦</i>
          <span>Git</span>
          <i>✦</i>
          <span>Vite</span>
          <i>✦</i>
          <span>GitHub</span>
          <i>✦</i>
        </div>
      </div>
    </div>

    <div className="stack-footer px-3">
      <p>
        I don't just use tools.
        <span> I experiment with them.</span>
      </p>
    </div>
  </Col>
</Row>
      </div>
    </section>
  );
};

export default Home;
