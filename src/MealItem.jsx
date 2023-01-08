import './style.css';
import React from "react";
import { Nav, Navbar, Container, Button, Form, FormControl, Table, ButtonGroup, Modal, Collapse } from "react-bootstrap";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar, AiTwotoneEdit } from "react-icons/ai";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const API_URL="https://api-bootcamp.do.dibimbing.id/api/v1/foods"

function MealItem() {
const [data, setData] = useState([]);
// const [Ingridients, setIngredients] = useState('');
// const [description, setDescription] = useState(1);
// const [rating, setRating] = useState();
// const [image, setImage] = useState();

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
  }}, []);


    return(
        <>

        
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
            <p className='text-menu1'>Sure to add one and let people know better!</p>
            <p className='text-menu1'>make sure you already register before!</p>


    <section className='py-4 py-lg-5 container'>
      <div className='row justify-content-center align-item-center'>
      {data.map((item, index) => {
      return <React.Fragment >
<div className="container text-center">
    <div className="row">
      <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" key={index}>
      <div className="card">
        <img src={item.imageUrl} className="card-img-top" alt={item.name}/>
        <div className="card-body">
          <h5>{item.name}</h5>
          <p className="desc">{item.description}</p>
          <a className="btn btn-light"><AiFillStar/>{item.rating}</a>
          <a className='btn btn-dark'><AiTwotoneEdit/>Ingridients</a>
        </div>
      </div>
    </div>
</div>
</div>
</React.Fragment>
})}
      </div>
    </section>




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
              <Form.Control value={RatingEdit} type="number" onChange={(e) => setRatingEdit(e.target.value)} placeholder="Enter Rating" />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
        </>
    );
  }

// }
export default MealItem;