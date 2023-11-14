import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div style={{height:'300px'}} className='d-flex justify-content-center align-items-center w-100 flex-column'>
      <div className='d-flex justify-content-evenly align-items-center w-100'>
<div className="wbsites" style={{width:'400px'}}>
  <h4 className='mb-3'>
  <i class="fa-solid fa-video  text-warning me-3" ></i>
 Video Player
  </h4>
  <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odio nihil enim repellat quisquam optio alias totam, quos expedita ipsa, ad tempore vero maiores officiis veniam consectetur porro numquam dignissimos.</h6>
</div>


<div className="links d-flex flex-column">
  <h4 className="mb-3">Links</h4>
<Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
<Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
<Link to={'/watch-history'} style={{textDecoration:'none',color:'white'}}>Watch History</Link>

</div>


<div className="guides d-flex flex-column">
<h4 className="mb-3">Guides</h4>
<Link to={'/'} style={{textDecoration:'none',color:'white'}}>React</Link>
<Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white'}}>React Bootstrap</Link>
<Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}}>Bootswatch</Link>

</div>


<div className="contacts d-flex flex-column">
  <h4>Contact Us</h4>
  <div className='d-flex'>
    <input type="text" className='form-control' placeholder='Enter your mail id' />
    <button className='btn btn-warning ms-2'>Subscribe</button>
  </div><br />
  
<div className="d-flex justify-content-evenly align-items-center ">
<Link to={'/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
<Link to={'/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-x-twitter fa-2x"></i></Link>
<Link to={'/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-linkedin fa-2x"></i></Link>
<Link to={'/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook fa-2x"></i></Link>

</div>
</div>
      </div>
<p className='mt-5'>Copyright ©2023 Media Player Buit with React All rights reserved</p>

    </div>
  )
}

export default Footer