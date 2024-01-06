import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'

function NavBar() {
  return (
    <>
  <Navbar collapseOnSelect expand="lg" className="">
      <Container>
        <Navbar.Brand href="#"  style={{'font-weight':'bold'}}>Mode UI</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="m-auto">   
            <NavDropdown title="Card access" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#">Banking</Nav.Link>
            <Nav.Link href="#">Processing</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Carrier</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
          <Nav>
           <button className='btn btn-light'>LOGIN <span><i class="fa fa-sign-in" aria-hidden="true"></i></span></button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <hr />
    </>
  )
}

export default NavBar