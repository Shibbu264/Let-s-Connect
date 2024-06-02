
import { cloneDeep } from "lodash";
import { useState } from "react"
import { useRouter } from "next/router";


const usePlayer = (myId,roomId,peer,socket)=>{
    const router=useRouter()
    const [players,setPlayers]=useState({});
    const playersCopy=cloneDeep(players)
    const playerHighlighted = playersCopy[myId]
    delete playersCopy[myId]
    const nonHighlighted=playersCopy
    

const toggleVideo = ()=>{
console.log("I toggled my Video !")
setPlayers((prev)=>{
    const copy=cloneDeep(prev)
    copy[myId].playing=!copy[myId]?.playing
    return {...copy}
})
socket?.emit('user-toggle-video',myId,roomId)
}

const leaveRoom = () => {
    socket?.emit('user-leave-video', myId, roomId)
    console.log("leaving room", roomId)
    peer?.disconnect()
    localStorage.clear()
    router.push('/')
}

const toggleAudio = ()=>{
    console.log("I toggled my Audio!")
    setPlayers((prev)=>{
        const copy=cloneDeep(prev)
        copy[myId].muted=!copy[myId]?.muted
        return {...copy}
    })
    socket?.emit('user-toggle-audio',myId,roomId)
}

    return {players,setPlayers,playerHighlighted,nonHighlighted,toggleAudio,toggleVideo,leaveRoom};
}
export default usePlayer;