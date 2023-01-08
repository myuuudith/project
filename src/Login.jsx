import React, { useState } from "react";
import Axios from "axios";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import "./login.css";
import { Link } from "react-router-dom";

function Login(){
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: " ",
      password: " "
    }, 
    validationSchema: Yup.object({
      email: Yup.string()
        .required('Required'),
      password: Yup.string()
        .required('Required'),
    }),
    onSubmit: (values) => {
      // Movie DB auth step 1
      Axios.post(`${process.env.REACT_APP_BASEURL}/api/v1/login`, 
      values,{
        headers : {          
          apiKey: `${process.env.REACT_APP_APIKEY}`,
        }
      })
      .then ((res) => {
        const token = res.data.token;
        console.log(token);
        localStorage.setItem("token", token);

        const name = res.data.user.name;
        localStorage.setItem("name", name);
      })
      .catch((err) =>{
        const showError = err.response.data.status_message;
        alert(showError);
      });
    },
  });

    return(
        <>
        <h1 className="Login-text1">Hello! Welcome to Foodies!!</h1>
        <h3 className="Login-text2">Haven't join yet? Come in and became a member of Foodies</h3><br/>
        
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

      {/* --------------LOGIN AREA-------------- */}

      <div className="cover">
        <p className="text-area-f1">Login here please!!</p><br/>

      {/* <label
      style={{ fontSize: 20, textAlign:"center" }}
      className="label-email"
        htmlFor="email"
      >
        Email
      </label> */}

      <div className="body-login">
      <form onSubmit={formik.handleSubmit}>
      <p className="Email1">Email</p>
      <input
      className="email"
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div style={{ color: "red" }}>{formik.errors.email}</div>
      ) : null}
      
      <br />

      <label 
      // style={{ fontSize: 20, textAlign:"center" }}
      htmlFor="password" className="pass1">Password  </label>
      <input
      className="pass"
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}
      <br />

      {/* <Link to="/menu" className="login-login"> */}
      <button className="login-login" type="submit">Log-in</button>
      {/* </Link> */}
    <p className="or-login">or </p>
      <Link to="/register" className="register">
      <button className="register" type="submit">Register</button>
      </Link>
      </form>
    </div>
    
    </div>
    
    


        </>
    )
}



export default Login;
