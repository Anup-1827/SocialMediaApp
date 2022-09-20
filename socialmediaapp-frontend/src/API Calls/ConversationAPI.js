import axios from 'axios'

const URL = "http://localhost:1888/v1/api/"

// Save Converstaion
export const SaveConversation = async (senderId, receiverId)=>{
        try{
            const  saveConversationResponse = await axios.post(`${URL}conversation`, {senderId, receiverId});
            return saveConversationResponse.data;
        }
        catch(err){
            alert("Error in Saving Conversation. Check Console")
            console.log("Error in Saving Conversation.", err)
        }
}

// Get Converstion
export const GetConversation = async (memberId)=>{
    try{
        const getConversationResponse = await axios.get(`${URL}conversation/${memberId}`);
        return getConversationResponse.data;
    }
    catch(err){
        alert("Error in Getting Conversation. Check Console")
        console.log("Error in Saving Conversation. ", memberId, err)
    }

}