import React, { useEffect, useState } from 'react';
import "../Styles/Components/Feed.scss"
import Post from './Post'
import Share from './Share'


import { TimeLine } from '../API Calls/PostAPI';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';

export default function Feed() {
  const [postsList, setPostsList] = useState([]);
  let userId = useSelector(state=> state.auth.data?.data?._id);
    useEffect(()=>{
       const timeLinePost =  async ()=>{
        if(!userId){
            userId = sessionStorage.getItem('userId');
        }    
        const Posts = await TimeLine(userId)
        setPostsList(Posts);
        }
        timeLinePost();
    
    }, [])
  return (

    <section className='feed'>
        <section>
            <Share/>
            <section  className="Post">
            {
              postsList.length ===0? <CircularProgress/>: postsList.map(post=><Post key={post._id} post={post}/>)
            }
            </section>
        </section>
    </section>
  )
}
