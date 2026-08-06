import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '@gsap/react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { useGSAP } from '@gsap/react'
import { Element } from 'react-scroll'

gsap.registerPlugin(ScrollTrigger, useGSAP);

const About = () => {
    useGSAP(() => {
        
    }, [])
  return (
            <Element name="about">
    
    <section id="about">
        <Container fluid>
            <Row className='min-vh-100 d-flex justify-content-center align-items-center'>
                <Col md={6} className='text-start ps-xl-5'>
                    <Card className='bg-transparent border-0'>
                        <Card.Body>
                            <Card.Title className='text-white display-4 fw-semibold'><i class="bi bi-person text-primary"></i> About me</Card.Title>
                            <Card.Text className='text-white mt-3'>I'm an 8th class student and a passionate frontend developer. I love to build functional and beautiful webpages. I always learn new technologies and improve my past skills.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="text-lg-end text-center pe-xl-5">
                    <Row className='row-cols-2'>
                        <Col xs={12} sm={6} className='border border-1 p-0'>
                            <Card className='bg-transparent border-0 w-100'>
                                <Card.Body className='text-center'>
                                    <div className='d-flex'>
                                        <div className='d-flex align-items-center justify-content-center text-center'>
                                            <i className='bi bi-person display-5'></i>
                                        </div>
                                        <div className='d-flex align-items-start justify-content-center text-start flex-column ms-3 gap-2'>
                                            <Card.Subtitle className='fs-5'>Name</Card.Subtitle>
                                            <Card.Subtitle>Rishi</Card.Subtitle>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} className='border border-1 p-0'>
                            <Card className='bg-transparent border-0 w-100'>
                                <Card.Body className='text-center'>
                                    <div className='d-flex'>
                                        <div className='d-flex align-items-center justify-content-center text-center'>
                                            <i className='bi bi-mortarboard display-5'></i>
                                        </div>
                                        <div className='d-flex align-items-start justify-content-center text-start flex-column ms-3 gap-2'>
                                            <Card.Subtitle className='fs-5'>Class</Card.Subtitle>
                                            <Card.Subtitle>8th</Card.Subtitle>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} className='border border-1 p-0'>
                            <Card className='bg-transparent border-0 w-100'>
                                <Card.Body className='text-center'>
                                    <div className='d-flex'>
                                        <div className='d-flex align-items-center justify-content-center text-center'>
                                            <i className='bi bi-geo-alt-fill display-5'></i>
                                        </div>
                                        <div className='d-flex align-items-start justify-content-center text-start flex-column ms-3 gap-2'>
                                            <Card.Subtitle className='fs-5'>Location</Card.Subtitle>
                                            <Card.Subtitle>Pakistan</Card.Subtitle>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} className='border border-1 p-0'>
                            <Card className='bg-transparent border-0 w-100'>
                                <Card.Body className='text-center'>
                                    <div className='d-flex'>
                                        <div className='d-flex align-items-center justify-content-center text-center'>
                                            <i className='ri-target-fill display-5'></i>
                                        </div>
                                        <div className='d-flex align-items-start justify-content-center text-start flex-column ms-3 gap-2'>
                                            <Card.Subtitle className='fs-5'>Focus</Card.Subtitle>
                                            <Card.Subtitle>UI Dev.</Card.Subtitle>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
    </Element>
  )
}

export default About