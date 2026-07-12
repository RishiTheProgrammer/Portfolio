import gsap from 'gsap'
import '@gsap/react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { useGSAP } from '@gsap/react'
import "./Home.css"
import logo from "../Images/logo.png";

const Home = () => {
    useGSAP(() => {
        const tl = gsap.timeline();
            tl.from("#home", { duration: 1, opacity: 0, y: -50 })
    }, [])
  return (
    <section id="home">
        <Container fluid>
            <Row className='min-vh-100 d-flex justify-content-center align-items-center'>
                <Col md={6} className='text-start ps-xl-5'>
                    <Card className='bg-transparent border-0'>
                        <Card.Body>
                            <Card.Title className='text-white display-4 fw-bold'>Hi, I'm <span className='text-primary name'>Rishi</span></Card.Title>
                            <Card.Subtitle className='text-white fs-3 fw-semibold'>A Frontend Developer</Card.Subtitle>
                            <Card.Text className='text-white mt-3'>I am a passionate frontend developer with a strong focus on creating visually appealing and user-friendly web applications. With expertise in HTML, CSS, JavaScript, and modern frontend frameworks, I strive to deliver seamless user experiences and innovative solutions.</Card.Text>
                            <div className="d-flex align-items-center">
                                <Button variant="primary">Learn More</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="text-lg-end text-center pe-xl-5">
                    <img src={logo} alt="" className="img-fluid rounded-5" height={330} width={330}/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Home