import MatchInfo from "./MatchInfo";
import Video from "../../assets/morocco.mp4";

const MatchStream = (props) => {
    return (
        <section className="match-stream">
            <MatchInfo/>
            <video src= {Video} controls></video>
    </section>
    )
}

export default MatchStream;