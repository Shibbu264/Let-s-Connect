import ReactPlayer from "react-player";

const Player = (props) => {

const{playerID,url,muted,playing}=props
    return (<div>
<ReactPlayer key={playerID} url={url} muted={muted} playing={playing} onError={(e) => console.log('Error playing video:', e)}/>
    </div>)
}
export default Player;