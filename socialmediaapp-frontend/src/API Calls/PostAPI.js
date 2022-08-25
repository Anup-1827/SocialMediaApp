import axios from "axios";

export const TimeLine = async (userId)=>{
    const posts = await axios.get(`post/timeline/${userId}`);
    return posts.data;   
}