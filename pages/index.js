import { useRouter } from "next/router"
import { useState } from "react"
import {v4 as uuidv4} from 'uuid'

export default function Home() {
const router =useRouter()
const[joinroomId,setRoomId]=useState('')
const createandjoinroom = ()=>{
  const roomId=uuidv4()
  router.push(`/${roomId}`)
}

const joinRoom =()=>{
if(joinroomId){router.push(`/${joinroomId}`)}
else{
  alert("Please Provide Valid room ID !")
}
}



const[showroomoption,setroomoption]=useState(false)
  return (
   <div>
   <h1 className="text-center my-12 text-4xl">Welcome to Google meet clone!</h1>
<div className="flex justify-center items-center gap-[2%]">
   <button onClick={createandjoinroom} type="button" className="text-white flex justify-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Create Room</button>
   
  {showroomoption?<> <input value={joinroomId} onChange={(e)=>{setRoomId(e.target.value)}} className="h-10 rounded-lg px-2 text-black font-semibold" placeholder="Enter room ID" type="text"/>
   <button onClick={joinRoom} type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Join! </button></>
:
<button onClick={()=>{setroomoption(true)}} type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Join Room </button>}
</div>
   </div>

  )
}
