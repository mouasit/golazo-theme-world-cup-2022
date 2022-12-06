import MatchInfo from "./MatchInfo";
import Video from "../../assets/morocco.mp4";
import ReactPlayer from "react-player";

const MatchStream = (props) => {
    let matchInfo = props.matchInfo;

    return (
        <section className="match-stream">
            <MatchInfo stadium={matchInfo.stadium} channel={matchInfo.channel} commentator={matchInfo.commentator}/>
            <ReactPlayer 
                    url="https://www.youtube.com/watch?v=ZKQNmleYhkM"
                    controls
                    playing
                    />
    </section>
    )
}

export default MatchStream;