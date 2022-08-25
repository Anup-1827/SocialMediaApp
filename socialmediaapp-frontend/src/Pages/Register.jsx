import React, { useRef, useState } from 'react'
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import "../Styles/Pages/Register.scss";
import "../Styles/Pages/Login.scss";

function Register() {
  const firstPage = useRef();
  const secondPage = useRef();
  const register = useRef();
  const next = useRef();
  const previous = useRef()

  const handleNextBtn = (e) => {
    e.preventDefault();
    firstPage.current.classList.add('hide');
    next.current.classList.add('hide');
    secondPage.current.classList.remove('hide');
    register.current.classList.remove('hide');
    previous.current.classList.remove('hide');
  }

  const handlePreviousBtn = (e) => {
    e.preventDefault();
    firstPage.current.classList.remove('hide');
    next.current.classList.remove('hide');
    secondPage.current.classList.add('hide');
    register.current.classList.add('hide');
    previous.current.classList.add('hide');
  }

  const RegisterUser = ()=>{

  }


  return (
    <section className="Register login">
      <article className='leftSection'>
        <h1>SOCIOWEB</h1>
        <p>
          Connect with Friends and the world around
        </p>
      </article>

      <article className="rightSection">
        <form action="" className='formFields'>
      
              <section className='fistPage' ref={firstPage} >
                <input type="text" name="name" id="name" className='inputText' placeholder='Full Name' required />
                <input type="text" name="email" id="email" className='inputText' placeholder='Email' required />
                <input type="text" name="userName" id="userName" className='inputText' placeholder='UserName' required />

                <input type="password" name="password" id="password" className='inputText' placeholder='Password' required />

                <div className='fileUploadDiv'>
                  <div>
                    <label>Cover Photo</label>
                  </div>
                  <input type="file" name="coverPhoto" id="coverPhoto" />
                </div>
                <div className='fileUploadDiv'>
                  <div>
                    <label>Your Photo</label>
                  </div>
                  <div>
                    <input type="file" name="yourPhoto" id="yourPhoto" />
                  </div>
                </div>
              </section>
         
              <section className='secondPage hide' ref={secondPage}>
                <button className='previousBtn hide' ref={previous} onClick={handlePreviousBtn}><ArrowBackIcon /></button>
                <input type="text" name="city" id="city" className="city inputText" placeholder='City' required />
                <input type="text" name="state" id="state" className="state inputText" placeholder='State' required />
                <div className="DrdRelation">
                  <select type="text" name="relationShip" id="relationShip" className="relationShip inputText" placeholder='Relationship Status'>
                    <option value="">Select Relationship</option>
                    <option value="1">Single</option>
                    <option value="2">Married</option>
                    <option value="3">Complicated</option>
                  </select>
                </div>
              </section>

   
            <button type='Submit' className='register hide' ref={register} onClick={RegisterUser}>Register</button> :
            <button className='nextBtn register' onClick={handleNextBtn} ref={next}>Next</button>
          
          <p>
            Already have an account?
            <Link to="/">
              <button className='forgotPsdBtn loginPageBtn'>Login</button>
            </Link>
          </p>
        </form>
      </article>
    </section>
  )
}

export default Register