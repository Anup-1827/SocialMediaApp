import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AssignmentReturned, Chat, Notifications, Person, Search } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../redux/Auth/AuthSlice';

import Man1 from "../assets/Man1.jpg"
import '../Styles/Components/TopBar.scss'

function Topbar() {
  const profile = useRef();
  const whiteCard = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let userName = useSelector(state => state.auth.data?.data?.userName);
  if (!userName) {
    userName = sessionStorage.getItem('userName');
  }

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
        <div className="pageLinks">
          <div className="homePageLink">Homepage</div>
          <div className="timelineLink">Timeline</div>
        </div>
        <div className="notify icons">
          <div className="friendReqNotify notify">
            <Person />
            <span>1</span>
          </div>
          <div className="chatNotify notify">
            <Chat />
            <span>1</span>
          </div>
          <div className="friendReqNotify notify">
            <Notifications />
            <span>1</span>
          </div>
        </div>

      </div>
      <div ref={profile} className="profile">
        <div className="positionDiv" onClick={handleProfileClick}>
          <div className="imageDiv">
            <img src={Man1} alt="myPhoto" className="profileImage" />
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