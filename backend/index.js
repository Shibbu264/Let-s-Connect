import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';
import { ExpressPeerServer } from 'peer';

dotenv.config({ path: '.env.local' });

const app = express();
const httpServer = createServer(app);


const peerServer = ExpressPeerServer(httpServer, {
	path: "/myapp",
});

app.use("/peerjs", peerServer);

const io = new Server(httpServer, {
  cors: {
    origin: process.env.ORIGIN,
    methods: ["GET", "POST"]
  }
});

app.use(cors());

io.on('connection',(socket)=>{
    console.log("Server is connected !")
    socket.on('join-room',(roomID,id)=>{
console.log(`A new user with ${id} joined room-${roomID} `)
socket.join(roomID)
socket.broadcast.to(roomID).emit('user-connected',id)
    })

    socket.on('user-toggle-audio',(userID,roomID)=>{
    socket.join(roomID);
    socket.broadcast.to(roomID).emit('user-toggle-audio',userID)
    })

    socket.on('user-toggle-video',(userID,roomID)=>{
        console.log("toggle request received")
        socket.join(roomID);
        socket.broadcast.to(roomID).emit('user-toggle-video',userID)
        })
        
        socket.on('user-leave-video', (userId, roomId) => {
            console.log("leave request registered")
            socket.join(roomId)
            socket.broadcast.to(roomId).emit('user-leave-video', userId)
        })
    

})
const PORT = process.env.PORT;

httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
