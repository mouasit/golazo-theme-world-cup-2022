import MatchInfo from "./MatchInfo";
import Video from "../../assets/morocco.mp4";
import ReactPlayer from "react-player";

const MatchStream = (props) => {
    let matchInfo = props.matchInfo;

    return (
        <section className="match-stream">
            <MatchInfo stadium={matchInfo.stadium} channel={matchInfo.channel} commentator={matchInfo.commentator}/>
            <ReactPlayer 
                    url="https://youtu.be/8UFHFQRW8dE"
                    controls
                    playing
                    width="100%"
                    />
    </section>
    )
}

export default MatchStream;