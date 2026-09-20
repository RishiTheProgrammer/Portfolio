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
import SpotlightCard from "../Components/SpotlightCard";
import { FaJs, FaReact } from "react-icons/fa6";
import { SiGsap } from "react-icons/si";

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
      description: "Making triggers, functions and eventListners to make website dynamic, controllable and functional.",
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
  const stack = [
  {
    id: 1,
    name: "React",
    category: "Core",
    description: "Builds the component-based interface and manages the structure of the portfolio.",
    icon: "react",
  },
  {
    id: 2,
    name: "JavaScript",
    category: "Core",
    description: "Powers interactions, logic, dynamic behavior, and functionality throughout the portfolio.",
    icon: "javascript",
  },
  {
    id: 3,
    name: "Bootstrap",
    category: "UI",
    description: "Handles responsive layouts, grids, spacing, and reusable interface components.",
    icon: "bootstrap",
  },
  {
    id: 4,
    name: "GSAP",
    category: "Motion",
    description: "Creates the animations, transitions, and motion-driven interactions.",
    icon: "gsap",
  },
  {
    id: 5,
    name: "ScrollTrigger",
    category: "Motion",
    description: "Connects animations to scrolling and controls scroll-based experiences.",
    icon: "scrolltrigger",
  },
  {
    id: 6,
    name: "Vite",
    category: "Build",
    description: "Provides the fast development environment and production build system.",
    icon: "vite",
  },
  {
    id: 7,
    name: "npm",
    category: "Build",
    description: "Manages the packages and dependencies used by the project.",
    icon: "npm",
  },
  {
    id: 8,
    name: "Git",
    category: "Workflow",
    description: "Tracks changes and keeps the project history organized.",
    icon: "git",
  },
  {
    id: 9,
    name: "GitHub",
    category: "Workflow",
    description: "Stores the source code and provides version-control collaboration.",
    icon: "github",
  },
  {
    id: 10,
    name: "Vercel",
    category: "Deploy",
    description: "Hosts and deploys the portfolio so it can live on the web.",
    icon: "vercel",
  },
];
  return (
    <section id="home">
      <div>
        <div className='background'>
          <div className='mobile-bg'></div>
        </div>
        <CustomNavbar />
        <Row id="hero">
          <Col className='min-vh-100 d-flex align-items-center justify-content-center pt-3 pt-sm-0'>
            <div className='hero-content'>
                <h1 className="hero-title text-uppercase text-center d-none d-sm-block">I don't only create websites</h1>
                <h3 className='hero-subtitle text-center text-uppercase font-italianno'>I create worlds</h3>
                <h5 className="text-center">Frontend Developer | UI/UX Designer | Motion Designer</h5>
                <div className="mx-auto d-flex justify-content-center gap-sm-5 flex-column flex-sm-row px-5 px-lg-0">
                <a href="#wib" className="btn btn-light btn-lg mt-3">Learn More</a>
                <Link to="/skills" className="btn btn-outline-light btn-lg mt-3">See Skills</Link>
                </div>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center justify-content-evenly min-vh-100 g-3 px-3 mt-5 mt-sm-0" id="wib">
          <div className="">
            <h1 className="text-center font-italianno display-1" ref={heroTitleRef}>What I Build ?</h1>
            <h3 className="text-center display-4 lh-base" ref={heroSubTitleRef}>Interfaces That Feels <span className="px-2 alive">Alive</span> With</h3>
          </div>
          {statCard.map((stat) => (
            <Col lg={4} key={stat.id}>
              <SpotlightCard className='stat-card'>
                <Card.Header className='d-flex align-items-center justify-content-between px-2 fs-1 mb-2'><span>{stat.icon}</span><span>{stat.title}</span></Card.Header>
                <Card.Body>
                  <Card.Text className='text-capitalize'>{stat.description}</Card.Text>
                  {stat.features.map((feature, index) => (
                    <li key={index} className='stat-features'>{feature}</li>
                  ))}
                </Card.Body>
              </SpotlightCard>
            </Col>
          ))}
        </Row>
        <Row className="min-vh-100 g-3 px-3 mt-5 mt-sm-0" id="stack">
          <h1 className="text-center display-4 mb-5 text-capitalize fw-semibold">What is powering this Portfolio?</h1>
          <div className="stack-container">
            {stack.map((stack) => (
              <div className='stack-card mx-auto mt-3 mt-lg-0' key={stack.id}>
                <span>{stack.category}</span>
                <h2>{stack.name}</h2>
                <p>{stack.description}</p>
              </div>
            ))}
          </div>
        </Row>
      </div>
    </section>
  );
};

export default Home;
