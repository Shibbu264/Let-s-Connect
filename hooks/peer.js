

import { useSocket } from "@/context/socket"
import { useRouter } from "next/router"
import { useState, useEffect, useRef } from 'react'

const usePeer = ()=>{
    
const[peer,setPeer]=useState(null)
const[myId,setMyId]=useState('')
const peerset =useRef(false)
const socket=useSocket()
const roomId= useRouter().query.roomid

useEffect(()=>{
    if(peerset.current || !roomId || !socket)return;
    peerset.current=true;
    
   
    
    (async function initpeer(){
const myPeer = new (await import('peerjs')).default()
setPeer(myPeer)
myPeer.on('open',(id)=>{
    socket?.emit('join-room',roomId,id)
    setMyId(id)})

    
    })()
  
},[roomId,socket])

return {
    peer,myId
}

}
export default usePeer;