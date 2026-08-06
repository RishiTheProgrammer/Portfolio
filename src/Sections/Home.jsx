import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '@gsap/react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { useGSAP } from '@gsap/react'
import "./Home.css"
import hero from "../assets/HeroIMG.png"
import { Element, Link } from 'react-scroll'

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Home = () => {
    useGSAP(() => {
    }, [])
  return (
<Element name="home">
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
                                <Link to="about" containerId="mainArea" className="btn btn-primary">
                                    Learn More
                                </Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="text-lg-end text-center pe-xl-5">
                    <img src={hero} alt="" className="img-fluid" style={{ mixBlendMode: "lighten", opcaiy: .95,  }}/>
                </Col>
            </Row>
        </Container>
    </section>
    </Element>
  )
}

export default Home