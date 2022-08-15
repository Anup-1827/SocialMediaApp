import React from 'react'
import {Link} from "react-router-dom";
import "../Styles/Pages/Login.scss"

function Login() {

  return (
    <section className='login'>
      <article className='leftSection'>
          <h1>SOCIOWEB</h1>
          <p>
            Connect with Friends and the world around
          </p>
      </article>

      <articel className="rightSection">
        <form action="" className='formFields'>
        <input type="text" name="email" id="email" className='inputText' placeholder='Email'/>
        <input type="password" name="password" id="password" className='inputText' placeholder='Password'/>

        <button className='loginBtn'>Login</button>
        <button className='forgotPsdBtn'>ForgotPassword?</button>
        <Link to="/register">
        <button className='CreateAccount'>Create New Account</button>
        </Link>
        </form>

      </articel>

    </section>
  )
}

export default Login