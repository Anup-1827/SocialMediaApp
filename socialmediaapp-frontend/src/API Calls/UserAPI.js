import axios from "axios";

export const userDetails = async (userId)=>{
    const user = await axios.get(`/users/${userId}`)
    return user?.data;
}