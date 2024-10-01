import { Navbar, Container, Nav } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-warning">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold">
            Ifran Silalahi
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/experience">Experience</Nav.Link>
              <Nav.Link href="/skills">Skills</Nav.Link>
              <Nav.Link href="/interest">Interest</Nav.Link>
              <Nav.Link href="/awards">Awards</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
