import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Personal Assistant App
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
        </Nav>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/categories">
            Contacts
          </Nav.Link>
        </Nav>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/events">
            Events
          </Nav.Link>
        </Nav>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/notes">
            Notes
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
