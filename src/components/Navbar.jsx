import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../assets/Navbar.css'

function NavBar() {
  return (
    <Navbar expand="lg" style={{background:'transparent'}}>
      <Container fluid className='navbar'>
        <Navbar.Brand href="#" style={{fontSize:'2vw', marginRight:'50px'}}><strong>IdeaRight</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <NavDropdown style={{}} title="Features" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action1" className='link'>Home</Nav.Link>
            <Nav.Link href="#action2" className='link'>Business Model AI</Nav.Link>
            <Nav.Link href="#" className='link'>
              About us
            </Nav.Link>
            <Nav.Link href="#action2" className='link'>Blog</Nav.Link>
          </Nav>
          <Nav.Link href='#' style={{marginRight:'40px'}}>SIGN IN</Nav.Link>
          <Button className='join-button'>JOIN NOW</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;