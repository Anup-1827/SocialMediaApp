import React, {useContext} from 'react'
import Rightbar from '../Components/Rightbar'
import Sidebar from '../Components/Sidebar'
import Feed from '../Components/Feed'

import "../Styles/Pages/Home.scss"
import {Context} from "../App"

function Home() {

  const socket = useContext(Context)

  return (
    <>
      <div className="homeContainer">
        <Sidebar/>
        <Feed socket={socket}/>
        <Rightbar/>
      </div>
    </>
  )
}

export default Home