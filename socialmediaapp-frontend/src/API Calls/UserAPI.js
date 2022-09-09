import { async } from "@firebase/util";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const userDetails = async (userId,userName)=>{
    try{
        const user = userId?await axios.get(`${BACKEND_URL}users?userId=${userId}`):await axios.get(`${BACKEND_URL}users?userName=${userName}`);
        return user?.data;
    }
    catch(err){
        console.log("Error in gettting user details", err);
    }
}

export const updateUser = async(userId, updateData)=>{
    try{
        const user = await axios.put(`${BACKEND_URL}users/${userId}`, updateData);
        return user?.data;
    }
    catch(err){
        console.log("Error in updating user ", err);
    }
}