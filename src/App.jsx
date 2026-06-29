import "./App.css"; 
import { Container, Row } from "react-bootstrap";
import Sidebar from "./Components/Sidebar";
import MainArea from "./Components/MainArea";

const App = () => {
  return (
    <Container fluid>
      <Row>
          <Sidebar/>
          <MainArea/>
      </Row>
    </Container>
  );
};

export default App;