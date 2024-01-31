
import { Server } from "socket.io";
import room from "../[roomid]";

export default function sockethandler(req,res){
    console.log("hello")
    if(res.socket.server.io){console.log("Socket already running !")}
    
    else{
const io=new Server(res.socket.server)
res.socket.server.io=io

io.on('connection',(socket)=>{
    console.log("Server is connected !")
    socket.on('join-room',(roomID,id)=>{
console.log(`A new user with ${id} joined room-${roomID} `)
socket.join(roomID)
socket.broadcast.to(roomID).emit('userjoined with UserID',id)
    })
})

    }

res.end()

}