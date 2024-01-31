import { useEffect, useRef, useState } from "react"


 const  useMediaStream = ()=>{
const [state,setstate]=useState(null)
const isstreamSet=useRef(false)

useEffect(()=>{
    if(isstreamSet.current)return;
    
    (async function initstream(){
        isstreamSet.current=true
        try{
        const stream = await navigator.mediaDevices.getUserMedia({
            audio:true,
            video:true
        })
        console.log("Setting your stream!")
        setstate(stream)}
        catch (e){
            console.log(e)
        }
    })()
},[])

return{
    stream:state
}


}
export default useMediaStream;