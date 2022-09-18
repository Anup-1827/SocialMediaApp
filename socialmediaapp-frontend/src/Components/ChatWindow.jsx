import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

import "../Styles/Components/ChatWindow.scss"
import Man2 from "../assets/Man2.jpg"
import { GetConversation} from '../API Calls/ConversationAPI';
import { GetMessages, SaveMessage } from '../API Calls/MessageAPI';
import { useState } from 'react'
import {format} from "timeago.js"

export default function ChatWindow(props) {
  
  const {userChange} = props;
  const userId = sessionStorage.getItem('userId');

  const [messages, setMessages] = useState(null);
  const [conversationId, setConversationId] = useState("");
  const textMessageRef = useRef();

  useEffect(()=>{
    const fetchConverationList = async()=>{
      try{
        const getConveration = await GetConversation(userId);
        if(getConveration.isSuccess && userChange){
          const responseGetConv = getConveration.response;
          const getUserConversation = responseGetConv && responseGetConv.length > 0 && responseGetConv.reduce((userInfo, conversationItem)=>{
            if(conversationItem.member.includes(userChange)){
              return {...conversationItem};
            }
            return userInfo
          },{})
          
          setConversationId(getUserConversation._id);

          const messagesList = await GetMessages(getUserConversation._id);
          if(messagesList.isSuccess){
            const sortMessageList = messagesList.response.sort((a, b)=> new Date(a.createdAt) - new Date(b.createdAt))
            setMessages(sortMessageList);
          }
          else{
            alert("Error in Fecthing messages")
          }

        } 
      }
      catch(err){
        alert("Error in getting Conversation in chat window !!! CHECK CONSOLE");
        console.log("Error in getting Conversation in chat window !!! CHECK CONSOLE ", err);

      }
    }

    fetchConverationList();
  },[userChange])

  const sendMessage = async (event)=>{
    event.preventDefault();
    const msg = textMessageRef.current.value
    if(msg !== ""){
      const sendMessageResponse = await SaveMessage(conversationId, userId, msg);
        if(sendMessageResponse.isSuccess){
          setMessages(prev=> [...prev, sendMessageResponse.response]);
          textMessageRef.current.value=""
        }
    }
  }

  return (
    <>{
      messages === null?
      <section className='emptyWindow'>
        Click on any of the Friend to Start the Converstion!!!!!!!!!!!
      </section>
      :
      <section className="chatwindow">
      <section className="chats">
        
        {
        messages &&  messages.map(message=>{
            return(
              <article key={message._id} className={(message.senderId === userId)?"own":"chat"}>
              <div className="messageDiv">
                 <img className='imageStyle' src={Man2}/>
                 <span className='message'> {message.text}</span>
              </div>
              <div className="timestamp">
                {format(message.createdAt)}
              </div>
            </article>
            )
          })
        }
      </section>
      <section className="sendChat">
        <textarea ref={textMessageRef} name="writeChat" id="writeChat"/>
        <button className='sendMessage' onClick={sendMessage}>Send</button>
      </section>
    </section>
    }
    
    </>
  )
}
