import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import VideoCard from './VideoCard';
import { getAllVideos } from '../services/allAPI';

function View({ uploadVideoStatus }) {
  const [allVideo, setAllVideo] = useState([]);
  const [deleteVideoStatus, setDeleteVideoStatus] = useState(false);

  const getAllUploadedVideos = async () => {
    try {
      const response = await getAllVideos();
      const { data } = response;
      setAllVideo(data);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  useEffect(() => {
    getAllUploadedVideos();
    setDeleteVideoStatus(false);
  }, [uploadVideoStatus, deleteVideoStatus]);

  return (
    <>
      <Row>
        {allVideo.length > 0 ? (
          allVideo.map((video) => (
            <Col key={video.id} sm={12} md={6} lg={4} xl={3}>
              <VideoCard displayVideo={video} setDeleteVideoStatus={setDeleteVideoStatus} />
            </Col>
          ))
        ) : (
          <p>Nothing to display</p>
        )}
      </Row>
    </>
  );
}

export default View;
