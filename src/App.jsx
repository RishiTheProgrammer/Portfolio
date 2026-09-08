import "./App.css"; 
import { Container, Row } from "react-bootstrap";
import MainArea from "./Components/MainArea";
import CustomNavbar from "./Components/Navbar";
import introTimeline from "./animations/introTimeline.jsx"
import { useEffect } from 'react'


const App = () => {
  useEffect(() => {
    introTimeline()
  },[])
  return (
    <Container fluid className="App">
      <CustomNavbar/>
      <Row>
          <MainArea/>
      </Row>
    </Container>
  );
};

export default App;