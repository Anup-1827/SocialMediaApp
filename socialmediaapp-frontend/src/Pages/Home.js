import React from 'react'
import Rightbar from '../Components/Rightbar'
import Sidebar from '../Components/Sidebar'
import Feed from '../Components/Feed'

import "../Styles/Pages/Home.scss"

function Home() {
  return (
    <>
      <div className="homeContainer">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </div>
    </>
  )
}

export default Home