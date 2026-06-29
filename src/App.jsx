import "./App.css"; 
import { Container, Row } from "react-bootstrap";
import Sidebar from "./Components/Sidebar";
import MainArea from "./Components/MainArea";
import CustomNavbar from "./Components/Navbar";


const App = () => {
  return (
    <Container fluid>
      <CustomNavbar/>
      <Row>
          <Sidebar/>
          <MainArea/>
      </Row>
    </Container>
  );
};

export default App;