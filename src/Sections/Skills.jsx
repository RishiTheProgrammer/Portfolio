import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@gsap/react";
import { Container, Row } from "react-bootstrap";
import { useGSAP } from "@gsap/react";
import { Element } from "react-scroll";
import { RiReactjsFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { BsBootstrapFill } from "react-icons/bs";
import { RiCodeSSlashFill } from "react-icons/ri";
import SkillCard from '../Components/SkillCard.jsx'

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Skills = () => {
  useGSAP(() => {}, []);
  return (
    <Element name="skills">
      <section id="skills">
        <Container fluid style={{minHeight: "100vh"}} className='d-flex align-items-center flex-column'>
            <h1 className="text-center display-5 fw-semibold mb-5 d-flex gap-2">Skills <span className='d-none d-lg-block'> That Power My Work</span></h1>
          <Row className='mt-5'>
            <h3 className="text-primary mb-4"><RiCodeSSlashFill/> Fontend Development</h3>
            <SkillCard icon={<RiReactjsFill size={50} color="#4dd8eb"/>} title="React" level="Intermediate" text="Building interactive user interfaces with React." badgeBg="#0d2845" iconClassName="bg-primary-subtle rounded-3 p-2" xs={12} sm={6} xl={3} CardClassName='mt-5 mt-xl-0'/>
            <SkillCard icon={<SiJavascript size={58} color="#f0db4f" className='rounded-3'/>} title="JavaScript" level="Intermediate" text="Creating functional and dynamic web experiences." badgeBg="#f0db4f" xs={12} sm={6} xl={3} CardClassName='mt-5 mt-xl-0'/>
            <SkillCard icon={<IoLogoCss3 size={50} color="#2061ef"/>} title="CSS3" level="Advanced" text="Styling modern websites with creativity." badgeBg="#0d2845" iconClassName="bg-primary-subtle rounded-3 p-2" xs={12} sm={6} xl={3} CardClassName='mt-5 mt-xl-0'/>
            <SkillCard icon={<BsBootstrapFill size={58} color="#5337a3" className='rounded-3'/>} title="Bootstrap" level="Advanced" text="Develpoing layouts and responsives with Bootstrap." badgeBg="#5337a3" xs={12} sm={6} xl={3} CardClassName='mt-5 mt-xl-0'/>
          </Row>
        </Container>
      </section>
    </Element>
  );
};

export default Skills;
