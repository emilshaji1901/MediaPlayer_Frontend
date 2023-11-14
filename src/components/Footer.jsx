import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
  };

  return (
    <div style={{ height: '300px' }} className='d-flex justify-content-center align-items-center w-100 flex-column'>
      <div className='d-flex justify-content-evenly align-items-center w-100'>
        <div className="wbsites" style={{ width: '400px' }}>
          <h4 className='mb-3'>
            <i className="fa-solid fa-video text-warning me-3"></i>
            Video Player
          </h4>
          <h6>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odio nihil enim repellat quisquam
            optio alias totam, quos expedita ipsa, ad tempore vero maiores officiis veniam consectetur porro
            numquam dignissimos.
          </h6>
        </div>

        <div className="links d-flex flex-column">
          <h4 className="mb-3">Links</h4>
          <Link to={'/'} style={linkStyle}>Landing Page</Link>
          <Link to={'/home'} style={linkStyle}>Home Page</Link>
          <Link to={'/watch-history'} style={linkStyle}>Watch History</Link>
        </div>

        <div className="guides d-flex flex-column">
          <h4 className="mb-3">Guides</h4>
          <Link to={'/'} style={linkStyle}>React</Link>
          <a href='https://react-bootstrap.github.io/' style={linkStyle} target='_blank' rel='noopener noreferrer'>React Bootstrap</a>
          <a href='https://bootswatch.com/' style={linkStyle} target='_blank' rel='noopener noreferrer'>Bootswatch</a>
        </div>

        <div className="contacts d-flex flex-column">
          <h4>Contact Us</h4>
          <div className='d-flex'>
            <input type="text" className='form-control' placeholder='Enter your mail id' />
            <button className='btn btn-warning ms-2'>Subscribe</button>
          </div>
          <br />

          <div className="d-flex justify-content-evenly align-items-center ">
            <Link to={'/'} style={linkStyle}><i className="fa-brands fa-instagram fa-2x"></i></Link>
            <Link to={'/'} style={linkStyle}><i className="fa-brands fa-x-twitter fa-2x"></i></Link>
            <Link to={'/'} style={linkStyle}><i className="fa-brands fa-linkedin fa-2x"></i></Link>
            <Link to={'/'} style={linkStyle}><i className="fa-brands fa-facebook fa-2x"></i></Link>
          </div>
        </div>
      </div>

      <p className='mt-5'>Copyright ©2023 Media Player Buit with React All rights reserved</p>
    </div>
  );
}

export default Footer;
