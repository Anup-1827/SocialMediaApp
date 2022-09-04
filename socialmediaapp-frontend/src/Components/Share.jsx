import React, { useRef, useState } from 'react'
import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material'
import { storage } from '../FireBase/FileUpload'
import {getDownloadURL, ref, uploadBytes} from "firebase/storage"
import {v4} from "uuid";

import Man1 from '../assets/Man1.jpg'
import '../Styles/Components/Share.scss'
import { CreatePost } from '../API Calls/PostAPI';

export default function Share({updatePost, setUpdatePost}) {

  const shareThoughts = useRef();
  const [imageURL, setImageURL] = useState(null);

  const userName = sessionStorage.getItem("userName");
  const loggedUserId = sessionStorage.getItem("userId");
  const uploadedImageRef = ref(storage, `${userName}/`);


  const handlePostUpload = (e)=>{
    const file = e.target.files[0];
    
    if(file.name.includes("png"|| "jpeg"|| "jpg")){
      const imageRef = ref(storage, `${userName}/${file.name}${v4()}`);
      uploadBytes(imageRef, uploadedImageRef).then((img)=>{
        getDownloadURL(img.ref)
        .then(url=>{
          setImageURL(url.toString());
          alert("Image Uploaded Successfully");
        })
        .catch(err=>{
          console.log("Error in creating URL.", err);
          alert("Error in creating URL. CHECK CONSOLE")
        })
      })
      .catch(err=>{
        console.log("Error in uploading Image", err);
        alert("Error in uploading Image. CHECK CONSOLE")
      })
    }else{
      alert("Image Format should be jpeg, png, jpg");
    }
  }

  const sharePost = async(e)=>{
    e.preventDefault();
    const  postDetails={};
    postDetails.userId = loggedUserId;
    postDetails.desc = shareThoughts.current.value;
    postDetails.img = imageURL;
    const createPostRes = await CreatePost(postDetails);
    
    if(createPostRes.SUCCESS){
      setUpdatePost(!updatePost)
      alert("Post has been updated")
    }
  }

  return (
    <section className='share boxShadow'>
      <article className="shareThoughts">
           <img src={Man1} alt="name"/>
           <input ref={shareThoughts} type="text" name="thoughts" id="thoughts" placeholder="What's in your mind?"/>
      </article>

      <hr/>

      <article className='shareMedia'>
        <div className="media">
          <label htmlFor='postImage' className='photoMedia'>
            <PermMedia htmlColor='tomato'/>
            <span>Photo or Video</span>
            <input  type="file" className='hide' accept='jpg,.jpeg,.png' name="postImage" id="postImage" onChange={handlePostUpload}/>
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
