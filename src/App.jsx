import "./App.css"; 
import { Container, Row } from "react-bootstrap";
import MainArea from "./Components/MainArea";
import { useEffect } from 'react'
import gsap from 'gsap'


const App = () => {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");

  const xTo = gsap.quickTo(cursor, "x", {
    duration: 0.15
  });

  const yTo = gsap.quickTo(cursor, "y", {
    duration: 0.15
  });

  const moveCursor = (e) => {
    xTo(e.clientX);
    yTo(e.clientY);
  };

  window.addEventListener("mousemove", moveCursor);

  return () => {
    window.removeEventListener("mousemove", moveCursor);
  };
  },[])
  return (
    <Container fluid className="App">
      <div className="custom-cursor d-none d-lg-block"></div>
      <Row>
          <MainArea/>
      </Row>
    </Container>
  );
};

export default App;