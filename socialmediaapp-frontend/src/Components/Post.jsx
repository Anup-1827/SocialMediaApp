import React, { useState, useEffect } from 'react';
import { MoreVert, Favorite, ThumbUp } from '@mui/icons-material';
import {format} from "timeago.js"
import {Link} from 'react-router-dom';

import '../Styles/Components/Post.scss';
import {userDetails} from "../API Calls/UserAPI"


export default function Post({key, post}) {
    const [likeUnlike, setLikeUnlike] = useState(post.likes.length);
    const [like, setLike] = useState(true);
    const [user, setUser] = useState({})
    const PF = process.env.REACT_APP_PUBLIC_URL;

    const handleLikes = ()=>{
        like? setLikeUnlike(likeUnlike=> likeUnlike+1): setLikeUnlike(likeUnlike=> likeUnlike-1);
        setLike(!like);
    }

    useEffect(()=>{
        const userFunc = async ()=>{
            const userResponse = await userDetails(post.userId);
            const userInfo={};
            userInfo.userName = userResponse?.userName;
            userInfo.createdAt = userResponse?.createdAt;
            userInfo.profilePicture = userResponse?.profilePicture;
            setUser(userInfo);
            console.log(userInfo);
        }
        userFunc();
    },[post.userId])
    
  return (
  
             <article className="postCard boxShadow  " key={key}>
            <div className="topContent">    
                <div className="postUserDetails">
                    <Link to={`/profile/${user.userName}`}>
                    <img src={user.profilePicture?user.profilePicture:`${PF}/noAvatar.png`} className='postUserImage' placeholder='post user name' alt="pos"/>
                    </Link>
                    <span className="postUserName">{user.userName}</span>
                    <span className="postDateTime">{format(user.createdAt)}</span>
                </div>
                <div className="moreVert">
                    <MoreVert/>
                </div>
            </div>
            <div className="topMiddle">
                <p className='aboutPost'>{post.desc}</p>
                {post.img?
                <img className='userPost' src={post.img?post.img:`${PF}/noAvatar.png`} alt="post"/>
                :""}
            </div>
            <div className="topBottom">
                <div className="react" onClick={handleLikes}>
                    <span className='love'><Favorite/> </span>
                    <span className='like'><ThumbUp/></span>
                    <span> {likeUnlike + ' like the post'}</span>
                </div>
                <div className="comments">
                    <p>9 comments</p>
                </div>
            </div>
        </article>
               

  )
}
