import { MoreVert, Favorite, ThumbUp } from '@mui/icons-material';
import React from 'react';

import '../Styles/Components/Post.scss'
import Man2 from "../assets/Man2.jpg";
import Girl1 from "../assets/Girl1.jpg";



export default function Post() {
  return (
    <section className="Post">
        <article className="postCard boxShadow  ">
            <div className="topContent">
                <div className="postUserDetails">
                    <img src={Man2} className='postUserImage' placeholder='post user name' alt="pos"/>
                    <span className="postUserName">Alert Edison</span>
                    <span className="postDateTime">5 min ago</span>
                </div>
                <div className="moreVert">
                    <MoreVert/>
                </div>
            </div>
            <div className="topMiddle">
                <p className='aboutPost'>This is my first Post</p>
                <img className='userPost' src={Girl1} alt="post"/>
            </div>
            <div className="topBottom">
                <div className="react">
                    <span className='love'><Favorite/> </span>
                    <span className='like'><ThumbUp/></span>
                    <span>32 people like it</span>
                </div>
                <div className="comments">
                    <p>9 comments</p>
                </div>
            </div>
        </article>
        <article className="postCard boxShadow  ">
            <div className="topContent">
                <div className="postUserDetails">
                    <img src={Man2} className='postUserImage' placeholder='post user name' alt="pos"/>
                    <span className="postUserName">Alert Edison</span>
                    <span className="postDateTime">5 min ago</span>
                </div>
                <div className="moreVert">
                    <MoreVert/>
                </div>
            </div>
            <div className="topMiddle">
                <p className='aboutPost'>This is my first Post</p>
                <img className='userPost' src={Girl1} alt="post"/>
            </div>
            <div className="topBottom">
                <div className="react">
                    <span className='love'><Favorite/> </span>
                    <span className='like'><ThumbUp/></span>
                    <span>32 people like it</span>
                </div>
                <div className="comments">
                    <p>9 comments</p>
                </div>
            </div>
        </article>
        <article className="postCard boxShadow  ">
            <div className="topContent">
                <div className="postUserDetails">
                    <img src={Man2} className='postUserImage' placeholder='post user name' alt="pos"/>
                    <span className="postUserName">Alert Edison</span>
                    <span className="postDateTime">5 min ago</span>
                </div>
                <div className="moreVert">
                    <MoreVert/>
                </div>
            </div>
            <div className="topMiddle">
                <p className='aboutPost'>This is my first Post</p>
                <img className='userPost' src={Girl1} alt="post"/>
            </div>
            <div className="topBottom">
                <div className="react">
                    <span className='love'><Favorite/> </span>
                    <span className='like'><ThumbUp/></span>
                    <span>32 people like it</span>
                </div>
                <div className="comments">
                    <p>9 comments</p>
                </div>
            </div>
        </article>
    </section>
  )
}
