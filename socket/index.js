// import { AddUser, RemoveUser, GetUser } from './EventCalls/UserEvents';

const express = require('express');
const {createServer} = require('http')
const {Server} = require('socket.io');
const UserEvents = require("./EventCalls/UserEvents");
// const NotificationEvents = re



const app = express();  
const httpServer = createServer(app);
const io = new Server(httpServer,{
    cors :{
        origin:"http://localhost:3000"
    }
});


const port= 1555;

// const OnlineUser = [{"userId":"1", "socketId": "a"}, {"userId":"2", "socketId": "b"}];
let OnlineUser = []


io.on("connection", (socket)=>{

    socket.on("newUser",(userId)=>{
     OnlineUser =   UserEvents.AddUser({userId, "socketId": socket.id}, OnlineUser);
    //  return OnlineUser
    console.log(OnlineUser)
    })

    socket.on("sendNotification", ({senderId, receiverId, type})=>{
        const receiver = UserEvents.GetUser(receiverId, OnlineUser);
            io.to(receiver.socketId).emit("getNotification", {senderId, type})
    })

    socket.on("disconnect", ()=>{
        console.log("User is Disconnected");
        OnlineUser = UserEvents.RemoveUser(socket.id, OnlineUser);
        console.log(OnlineUser)
    })

})

httpServer.listen(port)