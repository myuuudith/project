import React from "react";
import Axios from "axios";
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import { Link } from "react-router-dom";
import "./login.css";

const onSubmit = (value =>{
    Axios({
      method: "post",
      url: "https://api-bootcamp.do.dibimbing.id/api/v1/register",
      data: {
        name: value.name,
        email: value.email,
        password: value.password,
        passwordRepeat: value.passwordRepeat,
        role: value.role,
        profilePicture: value.profilePicture,
        phoneNumber: value.phoneNumber,
      },
      headers: {
        apiKey: process.env.REACT_APP_APIKEY,
      },
    })
      .then((response) => {
        console.log(response);
        alert(
         "Wohoo welcome to the club!"
        );
        window.location.href = "/login";
      })
      .catch((error) => {
        console.log(error);
        alert(`${error.response.data.message}`);
      });
})

const Regist = () =>{
    return(
     <section>
       <Formik
       initialValues={{
        name: '',
        email: '',
        password: '',
        passwordRepeat: '',
        role: '',
        profilePicture: '',
        phoneNumber: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string()
        .min(3, "Must be 3 characters or more")
        .max(21, "Must be 21 characters or less")
        .required("Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      password: Yup.string()
        .min(6, "Must be 6 characters or more")
        .max(10, "Must be 10 characters or less")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{6,10}^/,
          "Password must contain atleast one letter and one number"
        )
        .required("Required"),
      passwordRepeat: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords does not match")
        .required("Required"),
      role: Yup.string()
        .oneOf(["admin", "general"], "Invalid Job Type")
        .required("Required"),
      profilePictureUrl: Yup.string().required("Required"),
      phoneNumber: Yup.string()
        .min(10, "Must be 10 characters or more")
        .max(12, "Must be 12 characters or less")
        .matches(/^[0-9]{10,12}$/, "Must be in digit")
        .required("Required"),
      })}
      onSubmit={onsubmit}
       >

        {/* <----REGISTLINEEEE-----> */}
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

      <div className="cover">
        <p className="text-area-f1">Register in this page!!</p><br/>
        <Form>
        <div className="body-login">
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
        id="Email"
        name="Email"
        type="Email"
        placeholder="Email"
        onChange={Formik.handleChange}
        onBlur={Formik.handleBlur}
      />
      <p className="pass-req-rep">Password Repeat</p>
      <input
        className="pass-req-rep"
        name="pass-req-rep"
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
      <p className="prof-req">Profile Picture</p>
        <div class="mb-3">
  <input className="form-control" type="file" id="formFile"/>
</div>
      <p className="phone-req">Phone number</p>
      <input
        className="phone-req"
        name="phone-req"
        type="text"
        placeholder="Phone number"
        />
      <br />

      
      <button className="register" type="submit">Submit</button>
        </div>
        </Form>
        </div>
        </div>
       </Formik>
     </section>
    ) 
   }

export default Regist;