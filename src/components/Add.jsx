import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { uploadAllVideos } from '../services/allAPI';

        function Add({setUploadVideosStatus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    const [videos , setVideos]=useState({
      id:"",
      caption:"",
      url:"",
      embedLink:""
    })
    console.log(videos);

    const embedVideoLink =(e)=>{
      const {value} = e.target
      console.log(value.slice(-11));
      const link =`https://www.youtube.com/embed/${value.slice(-11)}`
      setVideos({...videos,embedLink:link})
    }

    const handleUpload = async () => {
      const { id, caption, url, embedLink } = videos;
      if (!id || !caption || !url || !embedLink) {
        alert('Please fill the form completely');
      } else {
        try {
          const response = await uploadAllVideos(videos);
          console.log(response);
    
          if (response.status>=200 && response.status<300) {
            setUploadVideosStatus(response.data)
            alert(`${videos.caption} is successfully Uploaded`);
          setVideos({
            id:"",
            caption:"",
            url:"",
            embedLink:""
          })
            // Close the modal
            handleClose();
          } else {
            console.log(response);
           alert('Something went wrong. Try again');
          }
        } catch (error) {
          console.error('Error uploading videos:', error);
          alert('An error occurred. Please try again later.');
        }
      }
    }
         

         

  return (
    <>
      <div className='d-flex align-items-center'>
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className='btn'><i class="fa-solid fa-cloud-arrow-up fs-5"></i></button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-film text-warning" ></i> Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>please fill the following details</p>
          <form className='border border-secondary rounded p-2'>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video ID" onChange={(e)=>setVideos({...videos,id:e.target.value})}/>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video Captipn" onChange={(e)=>setVideos({...videos,caption:e.target.value})}/>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video Image URL" onChange={(e)=>setVideos({...videos,url:e.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Youtube Video Link" onChange={embedVideoLink}/>
            </Form.Group>
          </form>
       
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add

