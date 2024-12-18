import React, { useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../assets/Vertical.css'; // Import the CSS file

const VerticalNavbar = () => {
  // Add a unique class when the component is mounted
  useEffect(() => {
    document.body.classList.add('vertical-navbar-page');

    // Clean up the class when the component is unmounted
    return () => {
      document.body.classList.remove('vertical-navbar-page');
    };
  }, []);

  return (
    <div style={{ display: 'flex', height: '100vh', margin: 0, padding: 0 }}>
      <Navbar
        bg="light"
        expand="lg"
        className="flex-column"
        style={{
          height: '100vh',
          width: '250px',
          position: 'fixed',
          top: 0,
          left: 0,
          padding: '10px',
          margin: 0, // Avoid margin around the navbar
        }}
      >
        <Navbar.Brand href="/" className="navbar-brand">
          MyApp
        </Navbar.Brand>
        <Navbar.Collapse id="navbarNav">
          <Nav className="flex-column navbar-nav">
            <Nav.Link href="#competitor-analysis" className="nav-link">
              Competitor Analysis
            </Nav.Link>
            <Nav.Link href="#trends" className="nav-link">
              Trends
            </Nav.Link>
            <Nav.Link href="#people" className="nav-link">
              People
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <main className="main-content">
        <div>
          <h1>Welcome to MyApp</h1>
          <p>Your content goes here!</p>
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
          />
        </div>
      </main>
    </div>
  );
};

export default VerticalNavbar;
