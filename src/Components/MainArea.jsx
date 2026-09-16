import { Col } from 'react-bootstrap'
import Home from '../Sections/Home.jsx'
import About from '../Sections/About.jsx'
import Skills from '../Sections/Skills.jsx'
import { Routes, Route } from "react-router-dom";

const MainArea = () => {
  

  return (
    <Col id='mainArea' style={{scrollBehavior: "smooth"}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </Col>
  )
}

export default MainArea