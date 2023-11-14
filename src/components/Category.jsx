import React, { useEffect } from 'react'
import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addToCategory, deleteACategory, getAVideo, getAllCategory, updateCategory } from '../services/allAPI';
import { Col, Row } from 'react-bootstrap';
import VideoCard from './VideoCard';

function Category() {
  const [show , setShow] = useState(false);
  const [CategoryName , setCategoryName] = useState("")
  const [category , setCategory]= useState([])


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // function to add category
  const handleAddCategory = async () => {
    console.log(CategoryName);
    if (CategoryName) {
      let body = {
        CategoryName,
        allVideos: []
      };
      const response = await addToCategory(body);
      console.log(response);
      if(response.status>=200 && response.status<300){
        alert('Category added Successfully')
        setCategoryName("")
        handleClose()
      }
      else{
        alert('Something went wrong. Please try again')
      }
      
    } else {
      alert('Please fill the Category name');
    }
  };

    //function to add category
    const allCategory =async ()=>{
     const {data} = await getAllCategory()
   /*  console.log(data); */
   setCategory(data)
    }

      console.log(category);

    //fn to del  category
    const removeCategory = async(id)=>{
      await deleteACategory(id)
      allCategory()
    }

    //fn to prevent reload
    const dragOver = (e)=>{
      e.preventDefault()
    }

    //fn to drop vdo csard tocategeory
    const VideoDrop =async (e,Categoryid)=>{
      console.log(`Category in which videocard is droped is ${Categoryid}`);
      let videoID=e.dataTransfer.getData("videoID")
      console.log(videoID);
     
      //api to get a vdo
      const {data} = await getAVideo(videoID)
      console.log(data);

      let selectCategory =category.find((item)=>item?.id===Categoryid)
      selectCategory.allVideos.push(data)
      console.log(selectCategory);

      await updateCategory(Categoryid,selectCategory)
      allCategory()

    }

    useEffect(()=>{
      allCategory()
    },[])

  return (
    <>
      <div className='d-gid ms-3'>
        <button onClick={handleShow} className='btn btn-warning'>Add new category</button>

      </div>

   {category?.length>0?
   category?.map((item)=>(<div className='m-5 border border-secondary p-3 rounded'  droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>VideoDrop(e, item?.id)}>
   <div className="d-flex justify-content-between align-items-center">
     <h6>{item.CategoryName}</h6>
     <button onClick={()=>removeCategory(item?.id)} className='btn btn-danger'><i class="fa-solid fa-trash-can"></i></button>

   </div>
    <Row>
      <Col>
      {
        item?.allVideos.length>0?
        item?.allVideos.map((card)=>(<VideoCard displayVideo={card} isPresent ={true}/>))
        :<p>Nothing to Display</p>
      }
      </Col>
    </Row>
 </div>))
    :
    <p>Nothing to display</p>
}


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='border border-secondary rounded p-3'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Category Name" onChange={(e)=>setCategoryName(e.target.value)} />
            </Form.Group>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} variant="warning">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category