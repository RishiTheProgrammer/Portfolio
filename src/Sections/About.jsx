import "./About.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@gsap/react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useGSAP } from "@gsap/react";
import { SiGsap } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AboutAnimation } from "../animations/aboutAnimation.jsx";
import CustomNavbar from "../Components/Navbar.jsx";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const About = () => {
  const code = `01 const Rishi = {
02      role: "Frontend Dev",
03      focus: "UI + Motion",
04      stack: [
05         "React",
06         "JavaScript",
07         "GSAP",
08         "HTML",
09         "CSS",
10         "Bootstrap"
11     ]
12 };`;
  const stats = [
    {
      title: "React",
      icon: <FaReact />,
      description: "I use this to make components based websites.",
      id: 1,
    },
    {
      title: "JavaScript",
      icon: <SiJavascript />,
      description: "I use this to create functions, events and triggers.",
      id: 2,
    },
  ];
  useGSAP(() => {
    AboutAnimation();
  }, []);
  return (
      <section id="about">
        <Container fluid>
            <CustomNavbar/>
          <h1
            className="text-center text-white mb-5 display-1 fw-bold d-none d-lg-block title"
            style={{ letterSpacing: "2rem" }}
          >
            ABOUT ME
          </h1>
          <h1 className="text-center text-white mb-3 display-1 fw-bold d-lg-none d-block title">
            ABOUT ME
          </h1>
          <Row className="d-flex align-items-center justify-content-center">
            <Col md={6} className="text-start ps-xl-5 mt-3 mt-lg-0 hero-left">
              <Card className="bg-transparent border-0">
                <Card.Body>
                  <Card.Title className="text-white display-4 fw-semibold">
                    Hi, Myself Rishi
                  </Card.Title>
                  <Card.Text className="text-white mt-3 fs-5 lh-base">
                    I'm an 8th class student and a passionate frontend
                    developer. I love to build functional and beautiful
                    webpages. I always learn new technologies and improve my
                    past skills.
                  </Card.Text>
                </Card.Body>
                <Row className='d-none d-lg-flex'>
                  {stats.map((stat) => (
                    <Col
                      md={6}
                      key={stat.id}
                      className="mt-3 mt-lg-0 stat-card"
                    >
                      <Card className="border-0">
                        <Card.Header className="d-flex align-items-center justify-content-between">
                          <span className="stat-icon fs-2">{stat.icon}</span>
                          <span className="stat-title fs-3">{stat.title}</span>
                        </Card.Header>
                        <Card.Body>
                          <Card.Text className="text-white">
                            {stat.description}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Card>
            </Col>
            <Col
              md={6}
              className="d-flex justify-content-center align-items-center mt-3 mt-lg-0 hero-right"
            >
                <div className="editor-wrapper position-relative" style={{width: "min(100%, 400px)"}}>

              <Card
                className="border-0 mx-auto"
                style={{
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    width: "max-content",
                  backdropFilter: "blur(10px)",
                }}
                >
                <Card.Header>
                  <Card.Title className="d-flex justify-content-between align-items-center text-white px-2">
                    <span style={{ letterSpacing: "5px" }}>•••</span>
                    <span>About.jsx</span>
                  </Card.Title>
                </Card.Header>
                <Card.Body
                  className="text-white text-monospace"
                  style={{ fontSize: "1.2rem" }}
                  >
                  <pre>
                    <code>{code}</code>
                  </pre>
                </Card.Body>
              </Card>
              <div className="float-element float-react d-none d-sm-flex">
                <FaReact />
              </div>
              <div className="float-element float-js d-none d-sm-flex">
                <SiJavascript />
              </div>
              <div className="float-element float-gsap d-none d-sm-flex">
                <SiGsap />
              </div>
              <div className="float-element float-github d-none d-sm-flex">
                <FaGithub />
              </div>
                    </div>
            </Col>
          </Row>
        </Container>
      </section>
  );
};

export default About;
