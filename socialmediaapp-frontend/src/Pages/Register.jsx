import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { RegisterThunk } from '../redux/Auth/AuthSlice';
import { STATUS } from '../config';

import "../Styles/Pages/Register.scss";
import "../Styles/Pages/Login.scss";
import { useEffect } from 'react';
import { CircularProgress } from '@mui/material';

function Register() {
  const firstPage = useRef();
  const secondPage = useRef();
  const register = useRef();
  const next = useRef();
  const previous = useRef();

  const email = useRef();
  const userName = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const profilePicture = useRef();
  const coverPicture = useRef();
  const city = useRef();
  const state = useRef();
  const relationship = useRef();
  const errorMsgPwd = useRef();
  const desc = useRef();
  const errorMessage = useRef();
  const RegisterloginBtn = useRef();

  const registrationDetails = useSelector(state=> state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    if(registrationDetails.status === STATUS.SUCCESS){
      navigate('/login')
    }else if(registrationDetails.status === STATUS.ERROR){
      errorMessage.current.classList.remove('hide');
    }
  }, [registrationDetails])


  const handleNextBtn = (e) => {
    let valid = true;
    e.preventDefault();
    

    firstPage.current.childNodes.forEach(child=>{
      if(child.attributes.required && child.value == ""){
            child.style.border= "1px solid red";
            valid = false;
      }
      // child.setCustomValidity("Anup");
    })

    if(password.current.value !== confirmPassword.current.value){
      valid = false
      confirmPassword.current.setCustomValidity("Password do not match");
      errorMsgPwd.current.classList.remove('hide');
    }

    if(valid){
      firstPage.current.classList.add('hide');
  next.current.classList.add('hide');
  secondPage.current.classList.remove('hide');
  register.current.classList.remove('hide');
  previous.current.classList.remove('hide');
    }
  }

  const handlePreviousBtn = (e) => {
    e.preventDefault();
    firstPage.current.classList.remove('hide');
    next.current.classList.remove('hide');
    secondPage.current.classList.add('hide');
    register.current.classList.add('hide');
    previous.current.classList.add('hide');
    errorMessage.current.classList.add('hide');
  }

  const handleErrorBox = (e)=>{
    e.target.style.border= "1px solid black";
    if(e.target.name === "confirmPassword" || e.target.name ==="password"){
      errorMsgPwd.current.classList.add('hide')
    }
  }

  const RegisterUser = (e)=>{
    e.preventDefault();
    let valid = true;

    secondPage.current.childNodes.forEach(child=>{
      if(child.attributes.required && child.value == ""){
            child.style.border= "1px solid red";
            valid = false;
      }
    })


    if(valid){
      const userDetails = {};
      userDetails.userName = userName.current.value
      userDetails.password = password.current.value
      userDetails.email = email.current.value
      userDetails.city = city.current.value
      userDetails.desc = desc.current.value
      userDetails.from = state.current.value
      userDetails.relationship = Number(relationship.current.value)
      userDetails.coverPicture = coverPicture.current.value
      userDetails.profilPicture = profilePicture.current.value
  
      dispatch(RegisterThunk(userDetails));
    }
  
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
        <form action="" className='formFields' >
      
              <section className='fistPage' ref={firstPage} onFocus={handleErrorBox}>
                <input ref={email} type="email" name="email" id="email" className='inputText' placeholder='Email' required={true} maxLength={50}/>
                <input ref={userName} type="text" name="userName" id="userName" className='inputText' placeholder='UserName' required={true} minLength={3} maxLength={20}/>

                <input ref={password} type="password" name="password" id="password" className='inputText' placeholder='Password' required={true} minLength={6} maxLength={20} />
                <input ref={confirmPassword} type="password" name="confirmPassword" id="confirmPassword" className='inputText' placeholder='Confirm Password' required={true} />
                <label ref={errorMsgPwd} className='hide errorMsg'>Passwords do not match</label>
                <div className='fileUploadDiv'>
                  <div>
                    <label>Cover Photo</label>
                  </div>
                  <input ref={coverPicture} type="file" name="coverPhoto" id="coverPhoto" />
                </div>
                <div className='fileUploadDiv'>
                  <div>
                    <label>Your Photo</label>
                  </div>
                  <div>
                    <input ref={profilePicture} type="file" name="yourPhoto" id="yourPhoto" />
                  </div>
                </div>
              </section>
         
              <section className='secondPage hide' ref={secondPage}>
                <button className='previousBtn hide' ref={previous} onClick={handlePreviousBtn}><ArrowBackIcon /></button>
                <input ref={city} type="text" name="city" id="city" className="city inputText" placeholder='City' required={true}  maxLength={50}/>
                <input ref={state} type="text" name="state" id="state" className="state inputText" placeholder='State' required={true} maxLength={50}/>
                <div className="DrdRelation">
                  <select ref={relationship} type="text" name="relationShip" id="relationShip" className="relationShip inputText" placeholder='Relationship Status'>
                    <option value="">Select Relationship</option>
                    <option value="1">Single</option>
                    <option value="2">Married</option>
                    <option value="3">Complicated</option>
                  </select>
                </div>
                <input ref={desc} type="textarea"  name="desc" id="desc" className='inputText' placeholder='Write Something about you.....'/>
              </section>

   
            <button type='Submit' className='register hide' ref={register} onClick={RegisterUser}>Register{(registrationDetails.status === STATUS.LOADING)?<CircularProgress style={{color:'white', width:"25px", height:"25px", marginLeft:"20px"}}/>:""}</button>
            <button type="Submit" className='nextBtn register' onClick={handleNextBtn} ref={next}>Next</button>
            <p ref={errorMessage} className='hide errorMsg' style={{"marginTop": "10px"}}>Can not Register Try with different UserName and Email </p>
          <p>
            Already have an account?
            <Link to="/">
              <button ref={RegisterloginBtn} className='forgotPsdBtn loginPageBtn'>Login</button>
            </Link>
          </p>
        </form>
      </article>
    </section>
  )
}

export default Register