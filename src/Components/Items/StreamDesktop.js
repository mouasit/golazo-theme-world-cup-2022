import MatchInfo from "./MatchInfo";
import Stats from "./Stats";
import Video from "../../assets/morocco.mp4";


const StreamMatchDesktop = (props) => {
    return (
        <div className="stream-desktop">
            <div className="stream-gam-plan">
                <MatchInfo lang={props.lang}/>
                <video src= {Video} controls></video>
            </div>
            <Stats displayStats="view-stats show-list" />
        </div>
    )
}

export default StreamMatchDesktop;