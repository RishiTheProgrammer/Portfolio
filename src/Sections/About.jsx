import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '@gsap/react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP);

const About = () => {
    useGSAP(() => {
        
    }, [])
  return (
    <section id="about">
        <Container fluid>
            <Row className='min-vh-100 d-flex justify-content-center align-items-center'>
                <Col md={6} className='text-start ps-xl-5'>
                    <Card className='bg-transparent border-0'>
                        <Card.Body>
                            <Card.Title className='text-white display-4 fs-3 fw-semibold'><i class="bi bi-person text-primary"></i> About me</Card.Title>
                            <Card.Text className='text-white mt-3'>I'm an 8th class student and a passionate frontend developer. I love to build functional and beautiful webpages. I always learn new technologies and improve my past skills.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="text-lg-end text-center pe-xl-5">
                    <Row>
                        <Col>
                            <Card className='bg-transparent border-2 border-primary'>
                                <Card.Body>
                                    <Card.Title className='text-white display-4 fs-3 fw-semibold'><i class="bi bi-code-slash text-primary"></i> Skills</Card.Title>
                                    <Card.Text className='text-white mt-3'>HTML, CSS, JavaScript, ReactJS, Bootstrap, GitHub, Figma</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default About