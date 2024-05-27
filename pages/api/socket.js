
import { Server } from "socket.io";

export default function sockethandler(req,res){

    if(res.socket.server.io){console.log("Socket already running !")}
    
    else{
const io=new Server(res.socket.server)
res.socket.server.io=io

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

    }

res.end()

}