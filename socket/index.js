const express = require('express');
const {createServer} = require('http')
const {Server} = require('socket.io');



const app = express();  
const httpServer = createServer(app);
const io = new Server(httpServer,{
    cors :{
        origin:"http://localhost:3000"
    }
});



const port= 1555;


io.on("connection", (socket)=>{
    console.log("user is connected to socket on Port ",port );


    socket.on("disconnect", ()=>{
        console.log("User is Disconnected")
    })
})

httpServer.listen(port)