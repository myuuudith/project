import React from "react";
import Axios from "axios";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./login.css";
import './navbar.css'
import './navbar'

function Regist(){
  // const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordRepeat: '',
      role: '',
      profilePicture: '',
      phoneNumber: '',
    }, 
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      password: Yup.string()
        .matches()
        .required("Required"),
      confirmPass: Yup.string()
        .oneOf([Yup.ref("password")], "Your password doesn't match")
        .required("Required"),
      profPict: Yup.string()
      .required("Required"),
      phoneNum: Yup.string()
        .required("Required"),
    }),
    onSubmit: (values) => {
      Axios.post(`https://api-bootcamp.do.dibimbing.id/api/v1/register`, 
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

        const email = res.data.user.email;
        localStorage.setItem("email", email);
      })
      .catch((err) =>{
        const showError = err.response.data.status_message;
        alert(showError);
      });
    },
  });

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
        {/* <----REGISTLINEEEE-----> */}
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

      <div class="alert alert-warning card-register" role="alert">
  <h4 class="alert-heading">Hey-hey-heyy</h4>
  <p>Thank you for your contribution for make this website big and bigger! For better future from you and for others!</p>
  <br/>
</div>

      <div className="cover-regist">
        <p className="text-area-f1">Register in this page!!</p><br/>

        <div className="body-login">
      <form >
      <p className="name-req">Name</p>
        <input
        className="name-req"
        name="name"
        type="text"
        placeholder="Name"
        />
      <p className="Email1">Email</p>
      <input
      className="Email1"
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
      className="pass1"
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


      <p className="pass-req-rep">Password Repeat</p>
      <input
        className="pass-req-rep"
        name="confirmPass"
        type="password"
        placeholder="password"
        />
      <p className="role-req">Role</p>
      <input
        className="role-req"
        name="role-req"
        type="text"
        placeholder="..."
        />
        
      <p className="prof-req"
      name="profPict">Profile Picture</p>
        <div class="mb-3">
  <input className="form-control" type="file" id="formFile"/>
</div>

      <p className="phone-req">Phone number</p>
      <input
        className="phone-req"
        name="phoneNum"
        type="text"
        placeholder="Phone number"
        />
      <br />
      
     
      <button className="register" type="submit" onSubmit={formik.handleSubmit}>Submit</button>
    

</form>
</div></div></div>

     
    </>
    ) 
   }

export default Regist;
