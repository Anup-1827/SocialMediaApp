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