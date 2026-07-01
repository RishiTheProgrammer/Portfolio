import { Col } from 'react-bootstrap'
import Home from '../Sections/Home'

const MainArea = () => {
  return (
    <Col lg={10} className='overflow-y-scroll vh-100'>
        <Home/>
    </Col>
  )
}

export default MainArea