import { useSocket } from "@/context/socket"
import { useRouter } from "next/router"
import { Socket } from "socket.io-client"

const { useState, useEffect, useRef } = require("react")



export default function usePeer  (){
const[peer,setPeer]=useState(null)
const[myId,setMyId]=useState('')
const peerset =useRef(false)
const socket=useSocket()
const roomId= useRouter().query.roomId

useEffect(()=>{
    if(peerset.current || !roomId || !socket)return;
    peerset.current=true;
    
    
    
    (async function initpeer(){
       
const myPeer = new (await import('peerjs')).default()
setPeer(myPeer)
myPeer.on('open',(id)=>{console.log(id)
    setMyId(id)})
    socket?.emit('Join-room',roomId,id)
    })()
  
},[roomId,socket])

return {
    peer,myId
}

}