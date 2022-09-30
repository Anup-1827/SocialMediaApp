import axios from "axios";


const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const GetMessages = async (conversationId)=>{

    const getMessageResponse = await axios.get(`${BACKEND_URL}message/${conversationId}`);

    console.log(getMessageResponse);

    return getMessageResponse.data;

}

export const SaveMessage = async(conversationId, senderId, text)=>{
    const PayLoad = {
            "conversationId": conversationId,
            "senderId": senderId,
            "text": text
    }

    const SaveMessageResposne = await axios.post(`${BACKEND_URL}message`, PayLoad)

    console.log(SaveMessageResposne);
    return SaveMessageResposne.data;

}