import React from 'react'
import {Link} from "react-router-dom"

import "../Styles/Pages/Register.scss";
import "../Styles/Pages/Login.scss";

function Register() {
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
        <input type="text" name="name" id="name" className='inputText' placeholder='Full Name' />
        <input type="text" name="email" id="email" className='inputText' placeholder='Email' />
        <input type="text" name="userName" id="userName" className='inputText' placeholder='UserName' />

        <input type="password" name="password" id="password" className='inputText' placeholder='Password' />

        <button className='loginBtn'>Register</button>
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