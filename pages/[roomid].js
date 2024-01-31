import { useSocket } from "@/context/socket"
import usePeer from "@/hooks/peer"
import useMediastream from "@/hooks/useMediastream"
import Player from "@/hooks/component/player"
import { useEffect } from "react"

export default function room() {
    const socket = useSocket()
    const { stream } = useMediastream()
    const { peer, myId } = usePeer()

    useEffect(() => {
        if (!socket || !peer || !stream) { return; }
        const handleuserconnected = (newUser) => {
            console.log(`User connected with userID ${newUser}`)
            const call = peer.call(newUser, stream)
        }
        socket.on('user-connected', handleuserconnected)
        return () => {
            socket.off('user-connected', handleuserconnected)
        }

    }, [peer, socket, stream])

    useEffect((


    ) => {  if(!peer) return;
    peer.on('call',(call)=>{
call.answer(stream)
call.on('stream',(incomingstream)=>{
    console.log("incoming stream from someone")
})

    })
}, [])


    return (
        <>
            <h1 className="text-center my-6 font-bold 3xl">Welcome to the Meet Bro !</h1>
            <Player url={stream} muted playing playerID={myId} />
        </>
    )

}