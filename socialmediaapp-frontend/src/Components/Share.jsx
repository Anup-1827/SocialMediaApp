import React, { useRef, useState } from 'react'
import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material'
import { useSelector } from 'react-redux'


import Man1 from '../assets/Man1.jpg'
import '../Styles/Components/Share.scss'
import { CreatePost } from '../API Calls/PostAPI';
import { STATUS } from '../config';
import { handleUploadingFile } from '../FireBase/FileUpload'
import { async } from '@firebase/util'

export default function Share({updatePost, setUpdatePost}) {

  const shareThoughts = useRef();
  const [imageURL, setImageURL] = useState("");

  const user= useSelector(state=> state.auth.data)

  const PF = process.env.REACT_APP_PUBLIC_URL;
  const userName = sessionStorage.getItem("userName");
  const loggedUserId = sessionStorage.getItem("userId");

  const handlePostUpload = async(event)=>{
    const uploadResponse = await handleUploadingFile(event);
    if(uploadResponse.isSuccess === STATUS.SUCCESS){
      setImageURL(uploadResponse.imageUrl)
    }
  }

  const sharePost = async(e)=>{
    e.preventDefault();
    const  postDetails={};
    postDetails.userId = loggedUserId;
    postDetails.desc = shareThoughts.current.value;
    postDetails.img = imageURL?imageURL:"";
    const createPostRes = await CreatePost(postDetails);
    
    if(createPostRes.SUCCESS){
      setUpdatePost(!updatePost)
      alert("Post has been updated")
    }
  }

  return (
    <section className='share boxShadow'>
      <article className="shareThoughts">
           <img src={user?.profilPicture?user.profilPicture:`${PF}/noAvatar.png`} alt="name"/>
           <input ref={shareThoughts} type="text" name="thoughts" id="thoughts" placeholder="What's in your mind?"/>
      </article>

      <hr/>

      <article className='shareMedia'>
        <div className="media">
          <label htmlFor='postImage' className='photoMedia'>
            <PermMedia htmlColor='tomato'/>
            <span>Photo or Video</span>
            <input  type="file" className='hide' name="postImage" id="postImage" onChange={handlePostUpload}/>
          </label>
          <div className='tag'>
            <Label htmlColor='blue'/>
            <span>Tag</span>
          </div>
          <div className='location'>
            <Room htmlColor='green'/>
            <span>Location</span>
          </div>
          <div className='feelings'>
            <EmojiEmotions htmlColor='goldenrod'/>
            <span>Feelings</span>
          </div>
        </div>

        <div className="shareBtn">
          <button className='btn' onClick={sharePost}>Share</button>
        </div>
      </article>

    </section>
  )
}
