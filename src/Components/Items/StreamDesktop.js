import MatchInfo from "./MatchInfo";
import Stats from "./Stats";
import Video from "../../assets/morocco.mp4";
import Gamplan from "./GamPlan";


const StreamMatchDesktop = (props) => {
    return (
        <div className="stream-desktop">
            <div className="stream-gam-plan">
                <div className="stream">
                    <MatchInfo lang={props.lang}/>
                    <video src= {Video} controls></video>
                </div>
                <Gamplan displayGamPlan = "view-gam-plan show-list" />
            </div>
            <Stats displayStats="view-stats show-list" />
        </div>
    )
}

export default StreamMatchDesktop;