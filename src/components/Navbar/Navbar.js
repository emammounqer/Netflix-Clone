import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BNavbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <BNavbar bg="dark" variant="dark">
      <Container>
        <BNavbar.Brand href="#home">
          <img
            alt=""
            src="/logo.png"
            height="30"
            className="d-inline-block align-top"
          />
          Netflix Clone
        </BNavbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/favMovie">Favorite Movies</Nav.Link>
        </Nav>
      </Container>
    </BNavbar>
  );
}
export default NavBar;
