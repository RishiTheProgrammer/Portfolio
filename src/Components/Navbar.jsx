import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const CustomNavbar = ()=> {
  return (
    <Navbar expand="lg" className="bg-body-tertiary d-lg-none fixed-top" id="navbar">
      <Container>
        <Navbar.Brand href="#home" className='d-flex'>
           <h2>RISHI</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home"><i className="bi bi-house"></i> Home</Nav.Link>
            <Nav.Link href="#about"><i className="bi bi-person"></i> About</Nav.Link>
            <Nav.Link href="#skills"><i className="bi bi-puzzle"></i> Skills</Nav.Link>
            <Nav.Link href="#projects"><i className="bi bi-folder"></i> Projects</Nav.Link>
            <Nav.Link href='#contact'><i className="bi bi-envelope"></i> Contact</Nav.Link>
            <div className="d-flex justify-content-evenly align-items-center mt-3">
        <a href="https://github.com/RishiTheProgrammer/Portfolio" target="_blank" className="fs-2 logoBrand text-decoration-none">
          <i className="ri-github-fill"></i>
        </a>
        <a href="mailto:rishisprogramming@gmail.com" target="_blank" className="fs-3 logoBrand">
          <i className="bi bi-envelope"></i>
        </a>
        <a href="https://rishitheprogrammer.vercel.app" className="fs-3 logoBrand">
          <i className="bi bi-globe"></i>
        </a>
      </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;