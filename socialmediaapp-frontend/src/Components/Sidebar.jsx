import React from 'react'
import "../Styles/Components/Sidebar.scss";
import {RssFeed, Chat, Groups, Bookmark, HelpOutline, WorkOutline, Event, School, Group} from '@mui/icons-material'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Man2 from "../assets/Man2.jpg"
    
export default function Sidebar() {
  return (
    <section className='sidebar'>
       <article>
         <ul>
            <li>
                <RssFeed/>
                Feed
            </li>
            <li>
                <Chat/>
                Chats
            </li>
            <li>
                <PlayCircleOutlineIcon/>
                Videos
            </li>
            <li>
                <Groups/>
                Groups
            </li>
            <li>
                <Bookmark/>
                Bookkmarks
            </li>
            <li>
                <HelpOutline/>
                Questions
            </li>
            <li>
                <WorkOutline/>
                Jobs
            </li>
            <li>
                <Event/>
                Events
            </li>
            <li>
                <School/>
                Courses
            </li>
         </ul>
       </article>
        <hr/>
       <article>
            <section className='onlinePeople'>
                <article className='person'>
                    <span>John Doe</span>
                    <div className='image'>
                        <img className='imageStyle' src={Man2}/>
                        <span className='online'></span>
                    </div>
                </article>
                <article className='person'>
                    <span>John Doe</span>
                    <div className='image'>
                        <img className='imageStyle' src={Man2}/>
                        <span className='online'></span>
                    </div>
                </article>
                <article className='person'>
                    <span>John Doe</span>
                    <div className='image'>
                        <img className='imageStyle' src={Man2}/>
                        <span className='online'></span>
                    </div>
                </article>
                <article className='person'>
                    <span>John Doe</span>
                    <div className='image'>
                        <img className='imageStyle' src={Man2}/>
                        <span className='online'></span>
                    </div>
                </article>
                <article className='person'>
                    <span>John Doe</span>
                    <div className='image'>
                        <img className='imageStyle' src={Man2}/>
                        <span className='online'></span>
                    </div>
                </article>
                <article className='person'>
                    <span>John Doe</span>
                    <div className='image'>
                        <img className='imageStyle' src={Man2}/>
                        <span className='online'></span>
                    </div>
                </article>
            </section>
       </article>
    </section>
  )
}
