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
                <span>
                Feed
                </span>
            </li>
            <li>
                <Chat/>
                <span>
                Chats
                </span>
            </li>
            <li>
                <PlayCircleOutlineIcon/>
                <span>
                Videos
                </span>
            </li>
            <li>
                <Groups/>
                <span>
                Groups
                </span>
            </li>
            <li>
                <Bookmark/>
                <span>
                Bookmarks
                </span>
            </li>
            <li>
                <HelpOutline/>
                <span>
                Questions
                </span>
            </li>
            <li>
                <WorkOutline/>
                <span>
                Jobs
                </span>
            </li>
            <li>
                <Event/>
                <span>
                Events
                </span>
            </li>
            <li>
                <School/>
                <span>
                Courses
                </span>
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
                    </div>
                </article>
                <article className='person'>
                    <span>John Doe</span>
                    <div className='image'>
                        <img className='imageStyle' src={Man2}/>
                    </div>
                </article>
                <article className='person'>
                    <span>John Doe</span>
                    <div className='image'>
                        <img className='imageStyle' src={Man2}/>
                    </div>
                </article>
                <article className='person'>
                    <span>John Doe</span>
                    <div className='image'>
                        <img className='imageStyle' src={Man2}/>
                    </div>
                </article>
                <article className='person'>
                    <span>John Doe</span>
                    <div className='image'>
                        <img className='imageStyle' src={Man2}/>
                    </div>
                </article>
                <article className='person'>
                    <span>John Doe</span>
                    <div className='image'>
                        <img className='imageStyle' src={Man2}/>
                    </div>
                </article>
            </section>
       </article>
    </section>
  )
}
