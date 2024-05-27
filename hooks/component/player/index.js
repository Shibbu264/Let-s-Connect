import { UserSquare } from "lucide-react";
import ReactPlayer from "react-player";

const Player = (props) => {

const{url,muted,playing,width,height,isActive}=props
    return (<div>
{playing?<ReactPlayer width={width} height={height} url={url} muted={muted} playing={playing} onError={(e) => console.log('Error playing video:', e)}/>:<UserSquare size={isActive?150:400}/>}
    </div>)
}
export default Player;