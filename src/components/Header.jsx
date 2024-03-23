import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = ({navBarTitle}) => {
  return (
    <>
      <Navbar fixed="top" expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">{navBarTitle}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex flex-grow-1 justify-content-end">
              <Nav.Link href="#">Contacto</Nav.Link>
              <Nav.Link href="#">Donaciones</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header