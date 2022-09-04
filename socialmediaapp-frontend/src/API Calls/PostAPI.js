import { TrySharp } from "@mui/icons-material";
import axios from "axios";

const URL = "http://localhost:1888/v1/api/"

export const TimeLine = async (userId)=>{
    try{
        const posts = await axios.get(`${URL}post/timeline/${userId}`);
        return posts.data;   
    }
    catch(err){
        console.log("Error in Fetching the Feed ", err);
    }
}

export const GetUserPosts = async (userId)=>{
    try{
        const posts = await axios.get(`${URL}post/getUserPosts/${userId}`);
        return posts.data;
    }
    catch(err){
        console.log("Error In Fetching Users Posts on Profile Page ", err);
    }
}

export const LikeDislikePosts = async (postId,userId)=>{
    try{
        const response = await axios.put(`${URL}post/${postId}/likeDislike`, {"userId":userId});
        return response.data;
    }
    catch(err){
        console.log("Error in Liking and Disliking the post ", err)
    }
}

export const CreatePost = async (postDetails)=>{
    try{
        const response = await axios.post(`${URL}post`, postDetails);
        return response.data;
    }
    catch(err){
        alert("Error in creating Post");
        console.log("Error in creating Post ", err);
    }
}