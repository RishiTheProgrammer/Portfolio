import { Col } from 'react-bootstrap'
import Home from '../Sections/Home.jsx'
import About from '../Sections/About.jsx'
import Skills from '../Sections/Skills.jsx'
import { Element } from "react-scroll";
import CustomNavbar from "../Components/Navbar";

const MainArea = () => {
  

  return (
    <Col id='mainArea' style={{scrollBehavior: "smooth"}} className='px-0'>
      <CustomNavbar/>
      <Element name='home' id='home'>
        <Home/>
      </Element>
      <Element name='about' id='about'>
        <About/>
      </Element>
      <Element name='skills' id='skills'>
        <Skills/>
      </Element>
    </Col>
  )
}

export default MainArea