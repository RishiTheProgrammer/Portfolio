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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(()=>{
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
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
      </div>
    </section>
  );
};

export default Home;
