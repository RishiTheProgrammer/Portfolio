import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const CustomNavbar = ()=> {
    const tl = gsap.timeline()
    useGSAP(()=>{
        tl.from("#Navbar",{
            opacity: 0,
            y: -50,
            duration: 1
        });
    })
  return (
    <Navbar expand="lg" className="bg-body-tertiary d-lg-none fixed-top" id="Navbar">
      <Container>
        <Navbar.Brand href="#home" className='d-flex'>
           <h2>RISHI</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home"><i className="bi bi-house"></i> Home</Nav.Link>
            <Nav.Link href="#link"><i className="bi bi-person"></i> About</Nav.Link>
            <Nav.Link href="#link"><i className="bi bi-puzzle"></i> Skills</Nav.Link>
            <Nav.Link href="#link"><i className="bi bi-folder"></i> Projects</Nav.Link>
            <NavDropdown title="Conatct" id="basic-nav-dropdown" className="">
              <NavDropdown.Item href="#action/3.1" className='w-100 d-flex align-items-center justify-content-between'><i className="bi bi-github fs-4"></i> GitHub</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className='w-100 d-flex align-items-center justify-content-between'>
                <i className="bi bi-envelope fs-4"></i> Gmail
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='w-100 d-flex align-items-center justify-content-between'><i className="bi bi-globe fs-4"></i> Rishi</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;