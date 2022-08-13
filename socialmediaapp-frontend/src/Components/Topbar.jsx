import React from 'react'
import {Chat, Notifications, Person, Search} from '@mui/icons-material'

import '../Styles/Components/TopBar.scss'

function Topbar() {
  return (
    <div className="topBar">
      <div className="topLeft">
        <span>SocioWeb</span>
      </div>
      <div className="topMiddle">
        <Search className="searchIcon"/>
        <input type="text" placeholder='Search for friend, post or video'/>
      </div>
      <div className="topRight">
        <div className="pageLinks">
          <div className="homePageLink">Homepage</div>
          <div className="timelineLink">Timeline</div>
        </div>
        <div className="notify">
          <div className="friendReqNotify notify">
            <Person/>
            <span>1</span>
          </div>
          <div className="chatNotify notify">
            <Chat/>
            <span>1</span>
          </div>
          <div className="friendReqNotify notify">
            <Notifications/>
            <span>1</span>
          </div>
        </div>
        <div className="profile">
          <img alt="img"/>
        </div>
      </div>
    </div>
  )
}

export default Topbar