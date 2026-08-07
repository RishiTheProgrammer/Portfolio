import { Col } from 'react-bootstrap'
import Home from '../Sections/Home.jsx'
import About from '../Sections/About.jsx'
import Skills from '../Sections/Skills.jsx'

const MainArea = () => {
  

  return (
    <Col lg={10} className='overflow-y-scroll vh-100' id='mainArea' style={{scrollBehavior: "smooth"}}>
          <Home/>
          <About/>
          <Skills/>
    </Col>
  )
}

export default MainArea