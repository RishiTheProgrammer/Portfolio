import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@gsap/react";
import { Container, Row } from "react-bootstrap";
import { useGSAP } from "@gsap/react";
import { Element } from "react-scroll";
import { RiReactjsFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoHtml5 } from "react-icons/io";
import { BsBootstrapFill } from "react-icons/bs";
import { RiCodeSSlashFill } from "react-icons/ri";
import { FaWandSparkles } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiGsap } from "react-icons/si";
import { SiScrollreveal } from "react-icons/si";
import { TbCircleLetterTFilled } from "react-icons/tb";
import SkillCard from '../Components/SkillCard.jsx';

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
            <SkillCard icon={<RiReactjsFill size={50} color="#4dd8eb"/>} title="React" level="Intermediate" text="Building interactive user interfaces with React." iconClassName="bg-primary-subtle rounded-3 p-2" xs={12} sm={6} xl={3} CardClassName='mt-5 mt-xl-0'/>
            <SkillCard icon={<SiJavascript size={58} color="#f0db4f" className='rounded-3'/>} title="JavaScript" level="Intermediate" text="Creating functional and dynamic web experiences." xs={12} sm={6} xl={3} CardClassName='mt-5 mt-xl-0'/>
            <SkillCard icon={<IoLogoHtml5 size={50} color="#fd7e14"/>} title="HTML5" level="Advanced" text="Structuring content for web page in the right way." iconClassName="bg-warning-subtle rounded-3 p-2" xs={12} sm={6} xl={3} CardClassName='mt-5 mt-xl-0'/>
            <SkillCard icon={<BsBootstrapFill size={58} color="#5337a3" className='rounded-3'/>} title="Bootstrap" level="Advanced" text="Develpoing layouts and responsives with Bootstrap." xs={12} sm={6} xl={3} CardClassName='mt-5 mt-xl-0'/>
          </Row>
          <Row className='mt-5'>
            <h3 className="text-danger mb-4"><FaWandSparkles/> Animation</h3>
            <SkillCard icon={<SiGsap size={50} color="#0ae448"/>} title="GSAP" level="Learning" text="Creating smooth and engaging animations." iconClassName="bg-success-subtle rounded-3 p-2" xs={12} sm={6} xl={3} CardClassName='mt-5 mt-xl-0'/>
            <SkillCard icon={<TbCircleLetterTFilled size={50} color="#520dc2"/>} title="Typed.js" level="Intermediate" text="Creating neat and beautiful typing animations." style={{backgroundColor: "#140330"}} iconClassName='rounded-3 p-2' xs={12} sm={6} xl={3} CardClassName='mt-5 mt-xl-0'/>
            <SkillCard icon={<IoLogoCss3 size={50} color="#2061ef"/>} title="CSS3" level="Advanced" text="Animating modern websites with creativity." iconClassName="bg-primary-subtle rounded-3 p-2" xs={12} sm={6} xl={3} CardClassName='mt-5 mt-xl-0'/>
            <SkillCard icon={<SiScrollreveal size={50} color="#1aa179"/>} title="ScrollReveal" level="Intermediate" text="Creating engaging and attractive scroll animations." iconClassName="rounded-3 p-2" style={{backgroundColor: "#06281e"}} xs={12} sm={6} xl={3} CardClassName='mt-5 mt-xl-0'/>
          </Row>
          <Row className='mt-5'>
            <h3 className="text-success mb-4"><FaTools/> Tools and Others</h3>
            <SkillCard icon={<FaGitAlt size={50} color="#f34f29"/>} title="Git" level="Intermediate" text="Tool I use to commit my projects." iconClassName="bg-danger-subtle rounded-3 p-2" xs={12} sm={6} xl={3} CardClassName='mt-5 mt-xl-0'/>
            <SkillCard icon={<SiJavascript size={58} color="#f0db4f" className='rounded-3'/>} title="JavaScript" level="Intermediate" text="Creating functional and dynamic web experiences." xs={12} sm={6} xl={3} CardClassName='mt-5 mt-xl-0'/>
            <SkillCard icon={<IoLogoCss3 size={50} color="#2061ef"/>} title="CSS3" level="Advanced" text="Styling modern websites with creativity." iconClassName="bg-primary-subtle rounded-3 p-2" xs={12} sm={6} xl={3} CardClassName='mt-5 mt-xl-0'/>
            <SkillCard icon={<BsBootstrapFill size={58} color="#5337a3" className='rounded-3'/>} title="Bootstrap" level="Advanced" text="Develpoing layouts and responsives with Bootstrap." xs={12} sm={6} xl={3} CardClassName='mt-5 mt-xl-0'/>
          </Row>
        </Container>
      </section>
    </Element>
  );
};

export default Skills;
