import './style.css';
import React from "react";
import { Button, Form, ButtonGroup, Modal, Collapse } from "react-bootstrap";
// import {button} from "bootstrap"
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar, AiTwotoneEdit } from "react-icons/ai";
import * as Yup from "yup"
import { Formik } from 'formik';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const API_URL="https://api-bootcamp.do.dibimbing.id/api/v1/foods"

function MealItem() {
const [data, setData] = useState([]);

const [nameEdit, setNameEdit] = useState('');
const [IngredientsEdit, setIngredientsEdit] = useState(1);
const [descriptionEdit, setDescriptionEdit] = useState();
const [imageEdit, setImageEdit] = useState();
const [RatingEdit, setRatingEdit] = useState();
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = (id) => setShow(id);

// const MealItem = () =>{
useEffect((value)=> {
    axios({
        method: 'get',
        url: 'https://api-bootcamp.do.dibimbing.id/api/v1/foods',
        value,
          headers : {          
            apiKey: `${process.env.REACT_APP_APIKEY}`,
          }
    })
    .then(function(response){
        console.log(response)
        setData(response.data.data)
    });

    const handleEdit = () => {
      axios ({
        method: 'post',
        url: `https://api-bootcamp.do.dibimbing.id/api/v1/create-food`,
        data: {
          name: nameEdit,
          ingredients: IngredientsEdit,
          description: descriptionEdit,
          image: imageEdit,
          rating: RatingEdit
        }
      })
      .then(function (response) {
        handleClose()
        setNameEdit('')
        setIngredientsEdit('')
        setDescriptionEdit('')
        setImageEdit('')
        setRatingEdit('')
        MealItem()
      });
    }

const handleDelete = (id) => {
    if (window.confirm(`Delete ID ${id}?`)) {
    axios ({
      method: 'del',
      url: `https://api-bootcamp.do.dibimbing.id/api/v1/delete-food/efdd307b-1d9c-4a47-9d40-d3720708711f`,})
    .then(function (response) {
      MealItem()
    });
  }
  }

const handleLike= (id, like) =>{
if (!like){
  axios({
    method:"post",
    url:"https://api-bootcamp.do.dibimbing.id/api/v1/like",
    data:{
      foodId: id,
    },
    headers:{
      apiKey: `${process.env.REACT_APP_APIKEY}`
    }
  })
  .then((response) => {
    console.log(response);
    MealItem();
  })
  .catch((error) => {
    console.log(error);
  });
}
else{
  axios({
    method:"post",
    url:"https://api-bootcamp.do.dibimbing.id/api/v1/unlike",
    data:{
      foodId: id,
    },
    headers:{
      apiKey: `${process.env.REACT_APP_APIKEY}`
    }
  })
  .then((response) => {
    console.log(response);
    MealItem();
  })
  .catch((error) => {
    console.log(error);
  });
}
}
}, []);


    return(
        <>

  <div>
    <nav className="navbar">
        <h3 className="home">Foodies</h3>
        <ul className="nav-links">
        
        <Link to="/home" className="home">
            <li>Home</li>
          </Link>
        
          <Link to="/menu" className="menu">
            <li>Menu</li>
          </Link>

          <Link to="/login" className="login">
            <li>Login</li>
          </Link>

         
          
        </ul>
      </nav>
      <div class="card text-center">
  <div class="card-header">
    About Foodies
  </div>
  <div class="card-body">
    <h5 class="card-title">A new Website to help strangers</h5>
    <p class="card-text">Foodies is more like a home to new people.<br/>With support from everyone of you, we can provide information from each of you to share and make a new memory.<br/>Let start from foodies</p>
    <a href="/login" class="btn btn-dark">Enter the world</a>
  </div>
</div>
            <div class="alert alert-warning card-menu" role="alert">
  Hey! We're short of menu! Add one!
  <br/>

  <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Click here!
</button>

<Formik
initialValues={{
          name: "",
          description: "",
          imageUrl: "",
          ingredients: [""],
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
          description: Yup.string().required("Required"),
          imageUrl: Yup.string().required("Required"),
        })}
        // onSubmit={onSubmit}
        >
</Formik>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <p>Name:</p>
      <input class="form-control form-control-sm" type="text" placeholder="" aria-label=".form-control-sm example"/>
      <p>Description:</p>
      <input class="form-control form-control-sm" type="text" placeholder="" aria-label=".form-control-sm example"/>
      <p>ImageUrl:</p>
      <input class="form-control form-control-sm" type="text" placeholder="" aria-label=".form-control-sm example"/>
      <p>Ingridients:</p>
      <input class="form-control form-control-sm" type="text" placeholder="" aria-label=".form-control-sm example"/>

      </div>
      <div class="modal-footer ">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button"  class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

</div>


    <section className='py-4 py-lg-5 container'>
      <div className='row justify-content-center align-item-center'>
      {data.map((item, index) => {
      return <React.Fragment >
<div className="container text-center">
    <div className="row">
      <div className="col-md-6 mx-0 mb-4 item11" key={index}>
      <div className="card">
        <img src={item.imageUrl} className="card-img-top" alt={item.name}/>
        <div className="card-body">
          <h5>{item.name}</h5>
          <p className="desc">{item.description}</p>
          <a className="btn btn-light"><AiFillStar/>{item.rating}</a>
          <p><AiTwotoneEdit/>{item.ingredients}</p>
          <div className=''>
          <td><ButtonGroup aria-label="Action">
      <Button size="sm" variant="light" className='edit-meal1' onClick={() => handleShow(item.id)}>Edit your menu</Button>
    </ButtonGroup>
    </td>
          </div>
        </div>
      </div>
    </div>
</div>
</div>
</React.Fragment>
})}
      </div>
    </section>



<div className='edit-meal'>
{/* ---------------------------EDIT */}

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control value={nameEdit} type="text" onChange={(e) => setNameEdit(e.target.value)} placeholder="Enter Food Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control value={descriptionEdit} type="text" onChange={(e) => setDescriptionEdit(e.target.value)} placeholder="Enter Description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicImage">
              <Form.Label>Image</Form.Label>
              <Form.Control value={imageEdit} type="text" onChange={(e) => setImageEdit(e.target.value)} placeholder="Enter Image" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicIngridients">
              <Form.Label>Ingredients</Form.Label>
              <Form.Control value={IngredientsEdit} type="text" onChange={(e) => setIngredientsEdit(e.target.value)} placeholder="Enter Ingridients" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicRating">
              <Form.Label>Rating</Form.Label>
              <Form.Control value={RatingEdit} type="text" onChange={(e) => setRatingEdit(e.target.value)} placeholder="Enter Rating" />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
      </div>
        </>
    );
  }

// }
export default MealItem;