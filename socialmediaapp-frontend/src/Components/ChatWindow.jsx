import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

import "../Styles/Components/ChatWindow.scss"
import Man2 from "../assets/Man2.jpg"
import { GetConversation} from '../API Calls/ConversationAPI';
import { GetMessages, SaveMessage } from '../API Calls/MessageAPI';
import { userDetails} from '../API Calls/UserAPI';
import { useState } from 'react'
import {format} from "timeago.js"

export default function ChatWindow(props) {
  
  const {userChange, socket} = props;
  const userId = sessionStorage.getItem('userId');

  const [messages, setMessages] = useState(null);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [change, setChange] = useState(false)
  const [conversationInfo, setConversationInfo] = useState(null);
  const [imageObj, setImageObj] = useState({
    "senderImg":"",
    "userImg":""
  })
  const textMessageRef = useRef();
  const chatWindowRef = useRef();

  // useEffect(()=>{
  //   socket?.on("getMessage", ({senderId, text, type})=>{
  //     console.log("getMessage");
  //     setArrivalMessage(
  //       prev=> ({senderId, text, type, createdAt: new Date()})
  //     )
      
  //     // console.log(change);
  //   })
  //   // setChange(prev=> !prev);  
  // },[])


  useEffect(()=>{
    const fetchImages = async()=>{
      try{
        if(conversationInfo?.member.length >0){
          const imagesURL = await Promise.all(conversationInfo?.member?.map(async (id)=>{
            const userInfo = await userDetails(id)
            return {[id]: userInfo.profilPicture}
          }))
          console.log(...imagesURL)
        }
        
      }
      catch(err){
        alert("Error in Fetch the User Image in Chat window");
        console.log("Error in Fetching the User Image in Chat Window", err)
      }

    }

    fetchImages()
  },[conversationInfo])

  useEffect(()=>{
    console.log(conversationInfo);
    console.log(arrivalMessage);

    conversationInfo?.member?.some(id=> id=== arrivalMessage?.senderId) && setMessages(prev=> [...prev, arrivalMessage])
  },[change])


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
          
          setConversationInfo(getUserConversation);

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

  useEffect(()=>{
    chatWindowRef.current?.scrollTo(0, chatWindowRef.current.scrollHeight)
  },[messages])

  const sendMessage = async (event)=>{
    event.preventDefault();
    const msg = textMessageRef.current.value
    if(msg !== ""){
      const receiverId = conversationInfo.member.find(id=> id !== userId)
      socket.emit("sendMessage", {senderId: userId, receiverId, type:"message", text:msg})

      const sendMessageResponse = await SaveMessage(conversationInfo._id, userId, msg);
        if(sendMessageResponse.isSuccess){
          setMessages(prev=> [...prev, sendMessageResponse.response]);
          textMessageRef.current.value="";
          chatWindowRef.current.scrollTo(0, chatWindowRef.current.scrollHeight)
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
      <section  className="chatwindow">
      <section ref={chatWindowRef} className="chats">
        
        {
        messages &&  messages.map(message=>{
            return(
              <article key={message?._id} className={(message.senderId === userId)?"own":"chat"}>
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
