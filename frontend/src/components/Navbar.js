import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link, useNavigate } from "react-router-dom";
import contactAPI from "../api/contactAPI";

function NavBar(props) {
  const navigate = useNavigate();

  const doLogout = async () => {
    const data = await contactAPI.logout();
    if (data) {
      props.setUsername("");
      navigate("/");
    }
  };

  const renderAuthItems = () => {
    if (props.username === "") {
      return (
        <Container>
          <Navbar.Brand as={Link} to="/">
            Personal Assistant App
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/signup">
              Signup
            </Nav.Link>
          </Nav>
        </Container>
      );
    }

    return (
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
          <Nav.Link as={Link} to="#" onClick={doLogout}>
            Logout
          </Nav.Link>
          <Nav.Link>Hello {props.username}</Nav.Link>
        </Nav>
      </Container>
    );
  };

  return (
    <Navbar bg="dark" variant="dark">
      {renderAuthItems()}
    </Navbar>
  );
}

export default NavBar;
