import React, { useEffect, useState } from 'react';
import "../Styles/Components/Feed.scss"
import Post from './Post'
import Share from './Share'


import { TimeLine, GetUserPosts } from '../API Calls/PostAPI';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';

export default function Feed({profile}) {
  const [postsList, setPostsList] = useState([]);
  const [updatePost, setUpdatePost] = useState(false);

  const {id} = useParams();
  
  const timeLinePost =  async ()=>{
         
    if(profile){
      const Posts = await GetUserPosts(id);
      Posts? setPostsList(Posts):setPostsList([])
     }
     else{
       const userId = sessionStorage.getItem("userId")
       const Posts = await TimeLine(userId);
     setPostsList(Posts)
  }
   }

    useEffect(()=>{
        timeLinePost();
    
    }, [id, profile])

    useEffect(()=>{
      timeLinePost()
    }, [updatePost])

  return (

    <section className='feed'>
        <section>
            <Share updatePost={updatePost} setUpdatePost={setUpdatePost}/>
            <section  className="Post">
            {
              postsList?.length ===0? <CircularProgress/>: postsList.sort((a, b)=> new Date(b.updatedAt)- new Date(a.updatedAt)).map(post=><Post key={post._id} post={post}/>)
            }
            </section>
        </section>
    </section>
  )
}
