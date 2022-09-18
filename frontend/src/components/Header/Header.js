import React from 'react'
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import {Link} from 'react-router-dom'

const Header = () => {
      return (
    <Navbar bg="primary" expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand>
        <Link to="/">
           Home
        </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="mymeeting">
            <Link to="/mymeeting">
            My meeting
            </Link>
           
            </Nav.Link>
           
            <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My profile</NavDropdown.Item>
             
              
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;