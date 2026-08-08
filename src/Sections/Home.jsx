import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '@gsap/react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { useGSAP } from '@gsap/react'
import "./Home.css"
import hero from "../assets/HeroIMG.png"
import { Element, Link } from 'react-scroll'
import Typed from "typed.js"

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Home = () => {
    const typedRef = useRef(null)

    useGSAP(() => {
    }, [])
    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: [
        "Frontend Developer",
        "React Developer",
        "UI Designer"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    });

    return () => {
      typed.destroy();
    };
        }, [])
  return (
<Element name="home">
    <section id="home">
        <Container fluid>
            <Row className='d-flex justify-content-center align-items-center' style={{minHeight: "100vh"}}>
                <Col md={6} className='text-start ps-xl-5'>
                    <Card className='bg-transparent border-0'>
                        <Card.Body>
                            <Card.Title className='text-white display-4 fw-bold'>Hi, I'm <span className='text-primary name'>Rishi</span></Card.Title>
                            <span className='text-white fs-3 fw-semibold card-subtitle' ref={typedRef}></span>
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