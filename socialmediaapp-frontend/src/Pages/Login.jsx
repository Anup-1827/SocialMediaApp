import React,{ useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate } from "react-router-dom";

import { CircularProgress } from '@mui/material';
import "../Styles/Pages/Login.scss";
import { loginThunk } from '../redux/Auth/AuthSlice'
import { STATUS } from '../config';
import { useEffect } from 'react';


function Login() {

  const loginDetails = useSelector(state=> state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const email = useRef();
  const password = useRef();


  const handleLogin = async (e)=>{
    e.preventDefault();
    const UserDetails = {
      "email": email.current.value,
      "password": password.current.value
    }

 dispatch(loginThunk(UserDetails));
  }

  useEffect(()=>{
    if(loginDetails.status === STATUS.SUCCESS && loginDetails.isLoggedin){
      const user = loginDetails.data?.data;
      const userId = user?._id;
      const userName = user?.userName;
      sessionStorage.setItem("userId", userId);
      sessionStorage.setItem("userName",userName);
      navigate('/home')
    }
  },[loginDetails])

  return (
    <section className='login'>
      <article className='leftSection'>
          <h1>SOCIOWEB</h1>
          <p>
            Connect with Friends and the world around
          </p>
      </article>

      <article className="rightSection">
        <form className='formFields' onSubmit={handleLogin}>
        <input type="email" name="email" id="email" className='inputText' placeholder='Email' ref={email} required/>
        <input type="password" name="password" id="password" className='inputText' placeholder='Password' ref={password} required/>
        <button className='loginBtn'>Login{(loginDetails.status.toString().toUpperCase() === "LOADING")?<CircularProgress style={{color:'white', width:"25px", height:"25px", marginLeft:"20px"}}/>:""}  </button>
        {/* <button className='loginBtn'>Login  <CircularProgress className={(loginDetails.status.toString().toUpperCase() !== "SUCCESS" && loginDetails.status.toString().toUpperCase() !== "IDLE")?"":"visible"} style={{color:'white', width:"25px", height:"25px", marginLeft:"20px"}}/> </button> */}
        <button className='forgotPsdBtn'>ForgotPassword?</button>
        <Link to="/register">
        <button className='CreateAccount'>Create New Account</button>
        </Link>
        </form>

      </article>

    </section>
  )
}

export default Login