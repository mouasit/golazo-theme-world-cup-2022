import MatchInfo from "./MatchInfo";
import Video from "../../assets/morocco.mp4";

const MatchStream = (props) => {
    let matchInfo = props.matchInfo;

    return (
        <section className="match-stream">
            <MatchInfo stadium={matchInfo.stadium} channel={matchInfo.channel} commentator={matchInfo.commentator}/>
            <video src= {Video} controls></video>
    </section>
    )
}

export default MatchStream;