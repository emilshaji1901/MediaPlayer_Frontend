import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    fontSize: '30px',
  };

  return (
    <Navbar className="bg-dark">
      <Container>
        <Navbar.Brand>
          <Link to={'/'} style={linkStyle}>
            <i className="fa-solid fa-video fa-beat-fade text-warning me-3"></i>
            Video Player
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
