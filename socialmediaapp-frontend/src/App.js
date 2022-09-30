import {BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import React, { useDeferredValue, useEffect, useState, createContext } from "react";
import {Provider, useSelector} from "react-redux"
import {io} from "socket.io-client"

import Home from "./Pages/Home";
import "./Styles/Common.scss"
import Profile from "./Pages/Profile";
import Topbar from "./Components/Topbar";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import store from "./store";
import Messanger from "./Pages/Messanger";


export const Context = createContext();



function App() {
  
  const user = useSelector(state=> state.auth);
  // console.log(user)
  const [socket, setSocket] = useState(null);
  const [count, setCount] = useState(0)

  useEffect(()=>{
    if(user.isLoggedin){
      // console.log("Logged in");
      setSocket(io("http://localhost:1555"));
    }
  },[user])
  
  useEffect(()=>{
    socket?.emit("newUser", user.data._id)
  },[socket])

  useEffect(()=>{
    setCount(prev=> prev+1);

    console.log("Reloaded "+ count)
  },[])


  
function HomeComponent(){
  return(
    <Context.Provider value={socket}>
      <Topbar/>
      <Home/>
    </Context.Provider>

  )
}

function ProfileController(){
  return(
    <Context.Provider value={socket}>

      <Topbar/>
      <Profile/>
    </Context.Provider>
  )
}



  return (
    <React.Fragment>
      {/* <Provider store={store}> */}
    <Router>
       <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Navigate replace to="/login"/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/home" element={<HomeComponent/>}/>
          <Route path="/profile/:id" element={<ProfileController/>}/>
          <Route path="/messanger" element={<Messanger/>}/>
       </Routes>
    </Router>
    {/* </Provider> */}
    </React.Fragment>
  );
}

export default App;
