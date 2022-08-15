import React from 'react'
import Sidebar from '../Components/Sidebar'
import Feed  from '../Components/Feed'

import "../Styles/Pages/Profile.scss"
import CoverPhoto from "../assets/CoverPhoto.jpg";
import Man1 from "../assets/Man1.jpg";
import Man2 from "../assets/Man2.jpg";
import Man3 from "../assets/Man3.jpg";
import Girl1 from "../assets/Girl1.jpg";
import Girl2 from "../assets/Girl2.jpg";

export default function Profile() {
  return (
    <section className="profileInfo">
        <Sidebar/>
        <article className='aboutProfile'>
            <section className="ProfilePics">
                <img src={CoverPhoto} alt="coverphoto" className="CoverPhoto" />
                <img src={Man1} alt="profilePhoto" className='profilePhoto'/>
            </section>
            <section className="nameandDesc">
                <h1>Anup Alone</h1>
                <p>Hello my Friends!!</p>
            </section>
            <section className="details">
                <Feed/>
                <article className='userInfo'>
                    <div className="aboutUser">
                        <h1>User Information</h1>
                        <div className="city">
                            <b>City: </b> 
                            <span>
                                Chandrapur
                            </span> 
                        </div>
                        <div className="from">
                            <b>From: </b>
                            <span>
                             Maharashtra
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
                                <img className='friendImage' src={Man2}/>
                                <p>John Doe</p>
                            </div>
                            <div className="friend">
                                <img className='friendImage' src={Man3}/>
                                <p>Jonny Dey</p>
                            </div>
                            <div className="friend">
                                <img className='friendImage' src={Girl1}/>
                                <p>Alison Johns</p>
                            </div>
                            <div className="friend">
                                <img className='friendImage' src={Girl2}/>
                                <p>Jimmy</p>
                            </div>
                            <div className="friend">
                                <img className='friendImage' src={Man2}/>
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
