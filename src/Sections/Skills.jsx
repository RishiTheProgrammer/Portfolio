import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@gsap/react";
import { Container, Row, Col } from "react-bootstrap";
import { useGSAP } from "@gsap/react";
import { Element } from "react-scroll";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Skills = () => {
  useGSAP(() => {}, []);
  return (
    <Element name="skills">
      <section id="skills">
        <Container fluid>
          <Row className="d-flex justify-content-center align-items-center" style={{ minHeight: "75vh" }}>
            <h1 className="text-center display-4 fw-semibold">Skills</h1>
          </Row>
        </Container>
      </section>
    </Element>
  );
};

export default Skills;
