

import { useSocket } from "@/context/socket"
import { useRouter } from "next/router"
import Peer from "peerjs"
import { useState, useEffect, useRef } from 'react'

const usePeer = () => {

    const [peer, setPeer] = useState(null)
    const [myId, setMyId] = useState('')
    const peerset = useRef(false)
    const socket = useSocket()
    const roomId = useRouter().query.roomid

    useEffect(() => {
        if (peerset.current || !roomId || !socket) return;
        peerset.current = true;




        if (typeof window !== undefined) {


            import("peerjs").then(({ default: Peer }) => {
                // normal synchronous code
                const myPeer = new Peer({
                    host: process.env.NEXT_PUBLIC_HOST,
                    port: process.env.NEXT_PUBLIC_PORT,
                    path: 'peerjs/myapp',
                });
                setPeer(myPeer)
                myPeer.on('open', (id) => {
                    socket?.emit('join-room', roomId, id)
                    setMyId(id)
                })

            })




        }

    }, [roomId, socket])

    return {
        peer, myId
    }

}
export default usePeer;