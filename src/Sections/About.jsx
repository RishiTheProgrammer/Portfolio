import "./About.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@gsap/react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useGSAP } from "@gsap/react";
import { SiGsap, SiJavascript } from "react-icons/si";
import { FaReact, FaGithub } from "react-icons/fa";
import { AboutAnimation } from "../animations/aboutAnimation.jsx";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const About = () => {
  const code = `01 const Rishi = {
02   role: "Frontend Developer",
03   focus: "UI + Motion",
04   mindset: "Build. Learn. Improve.",
05   currently: "Next.js",
06   goal: "Better with every build"
07 };`;

  const highlights = [
    {
      id: 1,
      number: "01",
      title: "I build",
      text: "Interactive interfaces with React, JavaScript and thoughtful UI decisions.",
    },
    {
      id: 2,
      number: "02",
      title: "I animate",
      text: "I use motion to give interfaces personality instead of adding animation just for decoration.",
    },
    {
      id: 3,
      number: "03",
      title: "I learn",
      text: "Every project is an excuse to experiment, solve problems and level up.",
    },
  ];

  useGSAP(() => {
    AboutAnimation();
  }, []);

  return (
    <section className="about-section">
      <Container fluid>
        <div className="about-heading">
          <p className="about-kicker">01 / THE DEVELOPER</p>

          <h1
            className="text-center fw-bold title about-title d-none d-lg-block"
            style={{ letterSpacing: "1.5rem" }}
          >
            ABOUT ME
          </h1>

          <h1 className="text-center fw-bold title about-title d-lg-none d-block">
            ABOUT ME
          </h1>

          <p className="about-heading-line">
            A student developer obsessed with making the web feel alive.
          </p>
        </div>

        <Row className="align-items-center justify-content-center g-5 about-main">
          <Col lg={6} className="hero-left">
            <div className="about-copy">
              <p className="about-eyebrow">HEY, I'M RISHI.</p>

              <h2>
                I build interfaces that
                <span> feel alive.</span>
              </h2>

              <p className="about-description">
                I'm a student and frontend developer who enjoys turning ideas
                into functional, polished web experiences. I care about the
                little things: clean structure, responsive layouts, useful
                interactions and motion that actually adds character.
              </p>

              <p className="about-description muted">
                I'm constantly learning and experimenting. Right now, my
                journey is moving toward Next.js, then Python and deeper
                full-stack development.
              </p>

              <div className="about-tags" aria-label="Development focus">
                <span>Frontend</span>
                <span>UI + Motion</span>
                <span>Always Learning</span>
              </div>
            </div>

            <Row className="about-highlights g-3 mt-4">
              {highlights.map((item) => (
                <Col md={4} key={item.id}>
                  <Card className="about-highlight h-100">
                    <Card.Body>
                      <span className="highlight-number">
                        {item.number}
                      </span>

                      <h3>{item.title}</h3>

                      <p>{item.text}</p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>

          <Col
            lg={6}
            className="d-flex justify-content-center align-items-center hero-right"
          >
            <div className="editor-wrapper position-relative">
              <Card className="about-editor border-0">
                <Card.Header className="about-editor-header">
                  <span className="editor-dots">•••</span>

                  <span>About.jsx</span>

                  <span className="editor-status">●</span>
                </Card.Header>

                <Card.Body className="about-editor-body">
                  <pre>
                    <code>{code}</code>
                  </pre>
                </Card.Body>

                <Card.Footer className="about-editor-footer">
                  <span>main</span>
                  <span>UTF-8</span>
                  <span>React</span>
                </Card.Footer>
              </Card>

              <div
                className="float-element float-react"
                aria-hidden="true"
              >
                <FaReact />
              </div>

              <div
                className="float-element float-js"
                aria-hidden="true"
              >
                <SiJavascript />
              </div>

              <div
                className="float-element float-gsap"
                aria-hidden="true"
              >
                <SiGsap />
              </div>

              <div
                className="float-element float-github"
                aria-hidden="true"
              >
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
