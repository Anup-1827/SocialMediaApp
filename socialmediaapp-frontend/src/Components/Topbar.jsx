import React, { useRef, useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Chat, Notifications, Person, Search } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../redux/Auth/AuthSlice';

import '../Styles/Components/TopBar.scss'
import {Context} from "../App"
import { useEffect } from 'react';

function Topbar() {
  const PF = process.env.REACT_APP_PUBLIC_URL;

  const profile = useRef();
  const whiteCard = useRef();
  const notificationCardRef = useRef()
  const socket = useContext(Context);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [notifications, setNotifications] = useState([])
  
  let user = useSelector(state => state.auth.data);
  let userName = user?.userName;
  if (!userName) {
    userName = sessionStorage.getItem('userName');
  }

  useEffect(()=>{
    socket?.on("getNotification", ({senderId, type})=>{
      setNotifications(prev=> [{senderId, type}, ...prev])
    })
  }, [socket])



  const handleProfileClick = (e) => {

    const classTitle = e.target.classList;

    if (classTitle.contains('profileImage')) {

      if (profile.current.classList.contains('positionImage')) {
        profile.current.classList.remove('positionImage');
        whiteCard.current.classList.add('hide');
      }
      else {
        profile.current.classList.add('positionImage');
        whiteCard.current.classList.remove('hide');

      }
    }
    else if (classTitle.contains('logout')) {
      sessionStorage.clear();
      dispatch(logout())
      navigate('/login')
    } else if (classTitle.contains('myProfile')) {
      const userName = sessionStorage.getItem('userName');
      navigate('/profile/' + userName);
    }

  }

  const handleNotificationCard =()=>{
    notificationCardRef.current.classList.toggle('hide')
  }


  return (
    <div className="topBar">
      <div className="topLeft">
        <Link to="/home">
          <span className='socioWeb'>SocioWeb</span>
          <span className='sw'>SW</span>
        </Link>
      </div>
      <div className="topMiddle">
        <Search className="searchIcon" />
        <input type="text" placeholder='Search for friend, post or video' />
      </div>
      <div className="topRight">
        {/* <div className="pageLinks">
          <div className="homePageLink">Homepage</div>
          <div className="timelineLink">Timeline</div>
        </div> */}
        <div className="notify icons">
          <div className="friendReqNotify notify">
            <Person />
            <span>1</span>
          </div>
          <div className="chatNotify notify">
            <Link to="/messanger" style={{color:"white"}}>
            <Chat />
            <span>1</span>
            </Link>
          </div>
          <div className="friendReqNotify notify" onClick={handleNotificationCard}>
            <Notifications />
            {notifications.length === 0?"":<span>{notifications.length}</span>}
            {/* <span>1</span> */}
            {notifications.length === 0?""
            :
            <div ref={notificationCardRef} className="notificationCard hide">
              {
                notifications.map((notify)=>{
                  return(
                    <div className='card'> <img src={user?.profilPicture?user.profilPicture:`${PF}/noAvatar.png`}/> {`${notify.senderId} ${notify.type === "like"? "has liked your post": "has messaged you"}`}</div>
                  )
                })
              }
              {/* <div className='card'> <img src={user?.profilPicture?user.profilPicture:`${PF}/noAvatar.png`}/> AnupNew has liked your post</div> */}

            </div>
            }
            
          </div>
        </div>

      </div>
      <div ref={profile} className="profile">
        <div className="positionDiv" onClick={handleProfileClick}>
          
          <div className="imageDiv">
            <b>{user?.userName}</b>
            <img src={user?.profilPicture?user.profilPicture:`${PF}/noAvatar.png`} alt="myPhoto" className="profileImage" />
          </div>
          <div ref={whiteCard} className="whiteCard hide">
            <p className="logout" >Logout</p>
            <p className="myProfile">My Profile</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Topbar