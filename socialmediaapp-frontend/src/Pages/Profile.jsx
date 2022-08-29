import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Feed  from '../Components/Feed'

import "../Styles/Pages/Profile.scss"
import { useSelector } from 'react-redux'
import { userDetails } from '../API Calls/UserAPI'

export default function Profile() {
    const user = useSelector(state=> state.auth.data);
    const  PF = process.env.REACT_APP_PUBLIC_URL;
    const [userDetailedInfo, setUserDetailedInfo] = useState({});

    console.log(user)


    useEffect(()=>{
        const fetchUserDetails = async ()=>{
            if(Object.keys(user).length == 0){
                const id = sessionStorage.getItem('userId');

                const userInfo = await userDetails(id);
                setUserDetailedInfo(userInfo);
            }
            
        }

        fetchUserDetails();
    },[])
  return (
    <section className="profileInfo">
        <Sidebar/>
        <article className='aboutProfile'>
            <section className="ProfilePics">
                <img src={(user && user?.data?.coverPicture && user.data?.coverPicture !== "")?user.data.coverPicture
                            :(userDetailedInfo && userDetailedInfo?.coverPicture && userDetailedInfo?.coverPicture !== "")?userDetailedInfo.coverPicture
                            :`${PF}/noAvatar.png`} 
                    alt="coverphoto" className="CoverPhoto" />
                <img src={(user && user?.data?.profilePicture && user?.data?.profilePicture !== "")?user?.data?.profilePicture
                            :(userDetailedInfo && userDetailedInfo?.profilePicture && userDetailedInfo?.profilePicture !== "")?userDetailedInfo.profilePicture
                            :`${PF}/noAvatar.png`} 
                    alt="profilePhoto" className='profilePhoto'/>
            </section>
            <section className="nameandDesc">
                <h1>
                {(user && user?.data?.useName)?user.data.userName
                :userDetailedInfo?.userName
                }

                </h1>
                <p>
                {(user && user?.data?.desc)?user.data.desc
                :userDetailedInfo?.desc
                }
                </p>
            </section>
            <section className="details">
                <Feed profile={true}/>
                <article className='userInfo'>
                    <div className="aboutUser">
                        <h1>User Information</h1>
                        <div className="city">
                            <b>City: </b> 
                            <span>
                            {(user && user?.data?.city)?user.data.city
                :userDetailedInfo?.city
                }
                            </span> 
                        </div>
                        <div className="from">
                            <b>From: </b>
                            <span>
                            {(user && user?.data?.from)?user.data.from
                :userDetailedInfo?.from
                }
                            </span>
                        </div>
                        <div className="relationship">
                            <b>Relationship: </b> 
                            <span>
                            Single
                            </span>
                        </div>
                    </div>
                    <div className="userFriends">
                        <h1>User Friends</h1>
                        <div className="friendList">
                            <div className="friend">
                                <img className='friendImage' src={`${PF}/Man2.jpg`}/>
                                <p>John Doe</p>
                            </div>
                            <div className="friend">
                                <img className='friendImage' src={`${PF}/Man3.jpg`}/>
                                <p>Jonny Dey</p>
                            </div>
                            <div className="friend">
                                <img className='friendImage' src={`${PF}/Girl1.jpg`}/>
                                <p>Alison Johns</p>
                            </div>
                            <div className="friend">
                                <img className='friendImage' src={`${PF}/Girl2.jpg`}/>
                                <p>Jimmy</p>
                            </div>
                            <div className="friend">
                                <img className='friendImage' src={`${PF}/Man2.jpg`}/>
                                <p>Nick Dawyn</p>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </article>
    </section>
  )
}
