import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { addToHistory, deleteAllVideos } from '../services/allAPI';

function VideoCard({ displayVideo, setDeleteVideoStatus, isPresent }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);

    const { caption, embedLink } = displayVideo;
    const today = new Date();
    const timestamp = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).format(today);

    const videoDetails = {
      caption,
      embedLink,
      timestamp,
    };

    try {
      const response = await addToHistory(videoDetails);
      console.log(response);
    } catch (error) {
      console.error('Error adding to history:', error);
    }
  };

  const removeVideo = async (id) => {
    try {
      const response = await deleteAllVideos(id);
      setDeleteVideoStatus(true);
      console.log(response);
    } catch (error) {
      console.error('Error deleting video:', error);
    }
  };

  const dragStart = (e, id) => {
    e.dataTransfer.setData('videoID', id);
  };

  return (
    <>
      <Card style={{ width: '100%', height: '300px' }} className='mb-4' draggable onDragStart={(e) => dragStart(e, displayVideo?.id)}>
        <Card.Img onClick={handleShow} height={'280px'} variant="top" src={displayVideo.url} />
        <Card.Body>
          <Card.Title className='d-flex justify-content-between align-items-center'>{displayVideo.caption}</Card.Title>
          {!isPresent && (
            <button onClick={() => removeVideo(displayVideo?.id)} className='btn btn-danger'>
              <i className="fa-solid fa-trash-can"></i>
            </button>
          )}
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="530"
            src={`${displayVideo.embedLink}?autoplay=1`}
            title={displayVideo.caption}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default VideoCard;
