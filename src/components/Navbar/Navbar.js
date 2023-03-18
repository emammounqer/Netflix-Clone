import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BNavbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <BNavbar bg="dark" variant="dark">
      <Container>
        <BNavbar.Brand href="/">
          <img
            alt=""
            src="/logo.png"
            height="30"
            className="d-inline-block align-top"
          />
          Netflix Clone
        </BNavbar.Brand>
        <Nav className="me-auto">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/favMovie">Favorite Movies</Link>
        </Nav>
      </Container>
    </BNavbar>
  );
}
export default NavBar;
