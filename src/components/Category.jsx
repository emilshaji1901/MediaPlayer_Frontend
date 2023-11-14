import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { addToCategory, deleteACategory, getAVideo, getAllCategory, updateCategory } from '../services/allAPI';
import VideoCard from './VideoCard';

function Category() {
  const [show, setShow] = useState(false);
  const [CategoryName, setCategoryName] = useState("");
  const [category, setCategory] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddCategory = async () => {
    try {
      if (CategoryName.trim() !== "") {
        const body = {
          CategoryName,
          allVideos: [],
        };
        const response = await addToCategory(body);

        if (response.status >= 200 && response.status < 300) {
          alert('Category added successfully');
          setCategoryName("");
          handleClose();
          allCategory();
        } else {
          alert('Something went wrong. Please try again.');
        }
      } else {
        alert('Please fill the Category name.');
      }
    } catch (error) {
      console.error('Error adding category:', error);
      alert('Error adding category. Please try again.');
    }
  };

  const allCategory = async () => {
    try {
      const { data } = await getAllCategory();
      setCategory(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const removeCategory = async (id) => {
    try {
      await deleteACategory(id);
      allCategory();
    } catch (error) {
      console.error('Error removing category:', error);
      alert('Error removing category. Please try again.');
    }
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const VideoDrop = async (e, CategoryId) => {
    try {
      const videoID = e.dataTransfer.getData("videoID");
      const { data } = await getAVideo(videoID);

      const updatedCategory = category.map((item) => {
        if (item.id === CategoryId) {
          item.allVideos.push(data);
        }
        return item;
      });

      await updateCategory(CategoryId, updatedCategory.find((item) => item.id === CategoryId));
      allCategory();
    } catch (error) {
      console.error('Error dropping video:', error);
      alert('Error dropping video into category. Please try again.');
    }
  };

  useEffect(() => {
    allCategory();
  }, []);

  return (
    <>
      <div className='d-grid ms-3'>
        <Button onClick={handleShow} variant='warning'>
          Add new category
        </Button>
      </div>

      {category?.length > 0 ? (
        category?.map((item) => (
          <div key={item.id} className='m-5 border border-secondary p-3 rounded' droppable onDragOver={(e) => dragOver(e)} onDrop={(e) => VideoDrop(e, item?.id)}>
            <div className='d-flex justify-content-between align-items-center'>
              <h6>{item.CategoryName}</h6>
              <Button onClick={() => removeCategory(item?.id)} variant='danger'>
                <i className='fa-solid fa-trash-can'></i>
              </Button>
            </div>
            <Row>
              <Col>
                {item?.allVideos.length > 0 ? (
                  item?.allVideos.map((card) => <VideoCard key={card.id} displayVideo={card} isPresent={true} />)
                ) : (
                  <p>Nothing to Display</p>
                )}
              </Col>
            </Row>
          </div>
        ))
      ) : (
        <p>Nothing to display</p>
      )}

      <Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='border border-secondary rounded p-3'>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Category</Form.Label>
              <Form.Control type='text' placeholder='Enter Category Name' onChange={(e) => setCategoryName(e.target.value)} />
            </Form.Group>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} variant='warning'>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Category;
