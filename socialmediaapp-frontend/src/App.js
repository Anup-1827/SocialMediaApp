import {BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import React
 from "react";
import Home from "./Pages/Home";
import "./Styles/Common.scss"
import Profile from "./Pages/Profile";
import Topbar from "./Components/Topbar";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import {Provider} from "react-redux"
import store from "./store";


function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
    <Router>
       <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Navigate replace to="/login"/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/home" element={<HomeComponent/>}/>
          <Route path="/profile/:id" element={<ProfileController/>}/>
       </Routes>
    </Router>
    </Provider>
    </React.Fragment>
  );
}


function HomeComponent(){
  return(
    <>
      <Topbar/>
      <Home/>
    </>
  )
}

function ProfileController(){
  return(
    <>
      <Topbar/>
      <Profile/>
    </>
  )
}

export default App;
