import './style.css';
import React from "react";
// import {button} from "bootstrap"
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from "yup"
import { Formik } from 'formik';


function AddFood(){
    const [data, setData] = useState([]);

const onSubmit = (value) =>{
    axios({
      method: 'post',
      url: `https://api-bootcamp.do.dibimbing.id/api/v1/create-food`,
      value,
      headers:{
        apiKey:`${process.env.REACT_APP_APIKEY}`,
      }
    })
    .then(function(response){
      console.log(response)
      setData(response.data.data)
    })

return (
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
  Click here! {onSubmit=(onSubmit)}
</button>
</div>
</div>

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
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add Food</h1>
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

</>

)}};

export default AddFood;