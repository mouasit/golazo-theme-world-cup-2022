import MatchInfo from "./MatchInfo";
import Stats from "./Stats";
import Video from "../../assets/morocco.mp4";
import Gamplan from "./GamPlan";
import Group from "../Items/Group";


const StreamMatchDesktop = (props) => {
    let matchInfo = props.data.matchInfo;
    return (
        <div className="stream-desktop">
            <div className="stream-gam-plan">
                <div className="stream">
                    <MatchInfo stadium={matchInfo.stadium} channel={matchInfo.channel} commentator={matchInfo.commentator}/>
                    <video src= {Video} controls></video>
                </div>
                <Gamplan displayGamPlan = "view-gam-plan show-list" 
                showTeamLeft = {props.showTeamLeft}
                setShowTeamLeft = {props.setShowTeamLeft}

                showTeamRight = {props.showTeamRight}
                setShowTeamRight = {props.setShowTeamRight}

                displayFirstTeamLeft = {props.displayFirstTeamLeft}
                setDisplayFirstTeamLeft = {props.setDisplayFirstTeamLeft}
        
                displaySabstitutesLeft = {props.displaySabstitutesLeft}
                setDisplaySabstitutesLeft = {props.setDisplaySabstitutesLeft}
        
                displayFirstTeamRight = {props.displayFirstTeamRight}
                setDisplayFirstTeamRight = {props.setDisplayFirstTeamRight}
                displaySabstitutesRight = {props.displaySabstitutesRight}
                setDisplaySabstitutesRight = {props.setDisplaySabstitutesRight}
                />
            </div>
            <div className="stats-info">
                <div className="group">
                    <Group nameGroup="" lang={props.lang}/>
                </div>
                <Stats displayStats="view-stats show-list" />
            </div>
        </div>
    )
}

export default StreamMatchDesktop;