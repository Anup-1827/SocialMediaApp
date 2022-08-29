import axios from "axios";
import { BACKEND_URL } from "../config";

export const userDetails = async (userId)=>{
    const user = await axios.get(`${BACKEND_URL}users?userId=${userId}`)
    return user?.data;
}