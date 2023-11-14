import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigateByUrl = useNavigate();

  return (
    <>
      <Row className='mt-5 mb-5 d-flex justify-content-center align-items-center'>
        <Col></Col>
        <Col lg={5}>
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p className='mt-3' style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta porro ipsum esse excepturi sunt blanditiis totam error tenetur sit non? Dicta qui quae eum eligendi, veniam aperiam vero. Fuga, praesentium!</p>

          <button onClick={() => navigateByUrl('/home')} className='mt-5 btn btn-warning'>
            Get Started <i className="fa-solid fa-arrow-right"></i>
          </button>
        </Col>
        <Col></Col>
        <Col lg={5}>
          <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="Music Beat GIF" />
        </Col>
      </Row>

      {/* ... (rest of your component) */}
    </>
  );
}

export default LandingPage;
