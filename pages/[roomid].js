import { useSocket } from "@/context/socket"
import usePeer from "@/hooks/peer"
import useMediastream from "@/hooks/useMediastream"
import Player from "@/hooks/component/player"
import { useEffect, useState } from "react"
import usePlayer from "@/hooks/usePlayer"
import { useRouter } from "next/router"
import Bottom from "@/hooks/component/bottom"
import { cloneDeep } from "lodash"
import { Mic, MicOff, Video, VideoOff } from "lucide-react"

export default function Room() {
    const socket = useSocket()
    const router = useRouter()
    const roomId = router.query.roomid
    const [users, setUsers] = useState([])
    const { stream } = useMediastream()
    const { peer, myId } = usePeer()
    const { players, setPlayers, playerHighlighted, nonHighlighted, toggleAudio, toggleVideo,leaveRoom } = usePlayer(myId, roomId,peer,socket)
    useEffect(() => {
        if (!socket || !peer || !stream) { return; }

        const handleUserConnected = (newUser) => {
            console.log(`user connected in room with userId ${newUser}`);
      
            const call = peer.call(newUser, stream);
      
            call.on("stream", (incomingStream) => {
              console.log(`incoming stream from ${newUser}`);
              setPlayers((prev) => ({
                ...prev,
                [newUser]: {
                  url: incomingStream,
                  muted: true,
                  playing: true,
                },
              }));
      
              setUsers((prev) => ({
                ...prev,
                [newUser]: call
              }))
            });
          };
        socket.on('user-connected', handleUserConnected)
        return () => {
            socket.off('user-connected', handleUserConnected)
        }

    }, [peer,setPlayers, socket, stream])

    useEffect(() => {
        if (!socket) { return; }
        const handleToggleaudio = (userId) => {
            console.log(`user with id ${userId} toggled audio`);
            setPlayers((prev) => {
                const copy = cloneDeep(prev)
                copy[userId].muted = !copy[userId].muted
                return { ...copy }
            })
        }
        const handleTogglevideo = (userId) => {
            console.log(`user with id ${userId} toggled video`);
            setPlayers((prev) => {
                const copy = cloneDeep(prev)
                console.log(copy[userId].playing)
                copy[userId].playing = !copy[userId].playing
                return { ...copy }
            })
        }
        const handleUserLeave = (userId) => {
            console.log(`user ${userId} is leaving the room`);
            users[userId]?.close()
            const playersCopy = cloneDeep(players);
            delete playersCopy[userId];
            setPlayers(playersCopy);
          }
        socket.on('user-toggle-audio', handleToggleaudio)
        socket.on('user-toggle-video', handleTogglevideo)
        socket.on("user-leave-video", handleUserLeave);

        return () => {
            socket.off('user-toggle-audio', handleToggleaudio)
            socket.off('user-toggle-video', handleTogglevideo)
            socket.off("user-leave-video", handleUserLeave);
        }
    }, [setPlayers,players, socket,users])



    useEffect(() => {
        if (!peer || !stream) return;

        peer.on('call', (call) => {
            const { peer: callerId } = call
            call.answer(stream)
            call.on('stream', (incomingstream) => {
                setPlayers((prev) => ({
                    ...prev,
                    [callerId]: {
                        url: incomingstream,
                        muted: true,
                        playing: true,
                    }
                }))
                setUsers((prev) => ({
                    ...prev,
                    [callerId]: call
                  }))
                console.log(`incoming stream from someone ${callerId}`)
            })
        })
    }, [peer, stream,setPlayers])

    useEffect(() => {
        if (!stream || !myId) { return; }
        setPlayers((prev) => ({
            ...prev,
            [myId]: {
                url: stream,
                muted: true,
                playing: true,
            }
        }))
    }
        , [stream,setPlayers, myId])


    return (
        <>
            <h1 className="text-center my-6 font-bold 3xl">Welcome to the Meet Bro !</h1>
            <div className="absolute sm:bottom-0  flex flex-col items-center border-2 border-blue-300 right-4 bottom-10 sm:right-16 w-[120px] h-[90px] sm:w-[240px] sm:h-[180px] mb-8">
                {playerHighlighted && <Player isActive={true} width={'100%'} height={'100%'} url={playerHighlighted.url} muted={playerHighlighted.muted} playing={playerHighlighted.playing} />}
            </div>
            <div className="flex">
                {Object.keys(nonHighlighted).map((playerID) => {
                    const { url, muted, playing } = nonHighlighted[playerID]
                    return <div key={playerID} className="ml-6 flex flex-col items-center w-screen h-[80%] sm:w-[80%] sm:h-[96px]">  <Player isActive={false} width={'100%'} height={'100%'} key={playerID} url={url} muted={muted} playing={playing} />
                        <div className="flex gap-6" >{muted ? <MicOff style={{ background: "white", color: "red" }} size={30} /> : <Mic style={{ background: "white", color: "red" }} size={30} />}
                            {playing ? <Video style={{ background: "white", color: "red" }} size={30} />:<VideoOff size={30} style={{ background: "white", color: "red" }} /> }
                        </div>

                    </div>
                })}
                <Bottom muted={playerHighlighted?.muted} playing={playerHighlighted?.playing} toggleAudio={toggleAudio} toggleVideo={toggleVideo} leaveRoom={leaveRoom} />
            </div>

        </>
    )

}