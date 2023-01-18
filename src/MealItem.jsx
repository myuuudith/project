import './style.css';
import React from "react";
import { Form, ButtonGroup, Modal } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { AiFillStar, AiTwotoneEdit } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './navbar.css'
import './navbar'

function MealItem() {
const [data, setData] = useState([]);

const [name, setName] = useState('');
const [Ingredients, setIngredients] = useState(1);
const [description, setDescription] = useState();
const [image, setImage] = useState();
const [Rating, setRating] = useState();

const [nameEdit, setNameEdit] = useState('');
const [IngredientsEdit, setIngredientsEdit] = useState(1);
const [descriptionEdit, setDescriptionEdit] = useState();
const [imageEdit, setImageEdit] = useState();
const [RatingEdit, setRatingEdit] = useState();
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = (id) => setShow(id);

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
    })
});

const getData =(value)=>{
  axios({
    method: 'get',
    url: `https://api-bootcamp.do.dibimbing.id/api/v1/foods`,
    value,
    headers : {          
      apiKey: `${process.env.REACT_APP_APIKEY}`,
    }
})
.then(function(response){
    console.log(response)
    setData(response.data.data)
})
}

const handleAdd = (value) => {
  axios ({
    method: 'post',
    url: 'https://api-bootcamp.do.dibimbing.id/api/v1/create-food',
    data: {
    name: value.name,
    ingredients: value.Ingredients,
    description: value.description,
    image: value.image,
    rating: value.Rating
    },
    headers: {
      apiKey: process.env.REACT_APP_APIKEY,
    },
  })
  .then(function (response) {
    // console.log(response);
    setName('')
    setIngredients('')
    setDescription('')
    setImage('')
    setRating('')
    getData()
  });
}


const handleDelete = (id) => {
  if (window.confirm(`Delete ID ${id}?`)) {
    axios({
      method: 'delete',
      url: `https://api-bootcamp.do.dibimbing.id/api/v1/delete-food/${id}`,
        headers : { 
          apiKey: process.env.REACT_APP_APIKEY,
        }
  })
  .then((response)=>{
      console.log(response)
      setData()
  })
  .catch((error)=>{
    console.log(error);
  })
}
}


const handleLike = (id, isLikef) =>{
if(!isLikef){
  axios({
    method: 'post',
    url: 'https://api-bootcamp.do.dibimbing.id/api/v1/like',
    data:{
      likeFood: id,
    },
    headers : { 
      apiKey: process.env.REACT_APP_APIKEY,
    },
  })
    .then(function(response){
      console.log(response);
  })
  .catch(function(error){
    console.log(error);
  });
} else {
  axios({
    method: 'post',
    url: 'https://api-bootcamp.do.dibimbing.id/api/v1/unlike',
    data:{
      likeFood: id,
    },
    headers : { 
      apiKey: process.env.REACT_APP_APIKEY,
    },
  })
    .then(function(response){
      console.log(response);
  })
  .catch(function(error){
    console.log(error);
  });
}
}
// useEffect((value) => {
//   MealItem()
//  }, []);

// const [lists, setList] = useState()
  const[toggleMenu, setToggleMenu] = useState(false);
  const[screenWidth, setScreenWidth] = useState(window.innerWidth )
  const toggleNav = () =>{
setToggleMenu(!toggleMenu)
  }

  useEffect(()=>{
    const changeWidth=()=>{
        setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)

    return()=>{
        window.removeEventListener('resize', changeWidth)
    }
  },[])


    return(
        <>

  <div>
  <nav>
        {(toggleMenu || screenWidth > 500) &&(
        <ul className='list'>
        <li><a className='items' href="/home">home</a></li>
        <a className='items' href='/home'>menu</a>
        <a className='items' href="/login">login</a>
    </ul>
        )}
        
        <button onClick={toggleNav} className='btn-btn-nav'>BTN</button>
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
    <Form onSubmit={handleAdd} >
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Enter Food name</Form.Label>
        <Form.Control value={name} name="name" type="text" onChange={(e) => setName(e.target.value)} placeholder="Food Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicIngridients">
        <Form.Label>Ingredients</Form.Label>
        <Form.Control value={Ingredients} name="Ingridients" type="text" onChange={(e) => setIngredients(e.target.value)}placeholder="Enter Food Ingredients" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control value={description} name="description" type="text" onChange={(e) => setDescription(e.target.value)}placeholder="Enter Food Description" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicImage">
        <Form.Label>Image</Form.Label>
        <Form.Control value={image} name="image" type="text" onChange={(e) => setImage(e.target.value)}placeholder="Enter Url Image" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicRating">
        <Form.Label>Rating</Form.Label>
        <Form.Control value={Rating} name="Rating" type="text" onChange={(e) => setRating(e.target.value)}placeholder="Give your Rating" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>

      </Form>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add Food</h1>
        <Button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></Button>
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
        <Button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</Button>
        <Button type="button"  class="btn btn-primary" >Save changes</Button>
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
          <p className="btn btn-light"><AiFillStar/>{item.rating}</p>
          <p className='btn btn-light' onClick={()=> handleLike}>{item.isLikef}
          <FcLike/>
            </p>
          <p><AiTwotoneEdit/>{item.ingredients}</p>
          <div className=''>
          <td>
            <ButtonGroup aria-label="Action">
      <Button size="sm" variant="light" className='edit-meal1' 
      onClick={() => handleShow(item.id)}
      >Edit your menu</Button>
    </ButtonGroup>
    <ButtonGroup aria-label="Action">
      <Button size="sm" variant="danger" className='edit-meal1'
      onClick={() => handleDelete(item.id)}>
        delete this food
      </Button>
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

    <Modal show={show} onHide={handleClose} >
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
          <Button variant="primary" onClick={handleAdd}>
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