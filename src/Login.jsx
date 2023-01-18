import React from "react";
import { useEffect, useState } from 'react';
import Axios from "axios";
import { useFormik } from "formik";
import * as Yup from 'yup';
import "./login.css";
import { Link } from "react-router-dom";
import './navbar.css'
import './navbar'
function Login(){
  // const navigate = useNavigate();
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
      
      <div class="alert alert-warning card-register" role="alert">
  <h4 class="alert-heading">Hey-hey-heyy</h4>
  <p>Thank you for your contribution for make this website big and bigger! For better future from you and for others!</p>
  <br/>
</div>
      {/* --------------LOGIN AREA-------------- */}

      <div className="cover-login">
        <p className="text-area-f1">Login here please!!</p><br/>

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

      <button className="login-login" type="submit">Log-in</button>
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
