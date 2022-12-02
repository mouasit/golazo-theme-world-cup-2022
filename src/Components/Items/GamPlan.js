import TitlePositon from "../Items/TitlePosition";
import PointSymbol from "../Items/PointSymbol";
import ButtonSwitchers from "../Items/ButtonSwitchers";
import Vs from "../Items/Vs";
import flagMorocoo from "../../assets/flags/teams/morocco.svg";
import flagCroatia from "../../assets/flags/teams/croatia.svg";
import SoccerSymbol from "./SoccerSymbol";
import PlayerGamplan from "./PlayerGamplan";
const Gamplan = (props) => {
    return(
    <div className={props.displayGamPlan}>
        <SoccerSymbol />
        <SoccerSymbol />
        <div className="teams-gam-plan">
            <div className="info-team">
                <div className="team">
                    <img src={flagMorocoo} alt="" />
                    <span className="team-name">MAR</span>
                </div>
                <div className="gam-plan">
                    <PointSymbol />
                    4-2-3-1
                    <PointSymbol />
                </div>
            </div>
            <div className="team-players">
                <ButtonSwitchers leftName="1st Team" rightName="Sabstitutes" setDisplayFirstTeamLeft={props.setDisplayFirstTeamLeft} setDisplaySabstitutesLeft={props.setDisplaySabstitutesLeft} showTeamLeft = {props.showTeamLeft} setShowTeamLeft = {props.setShowTeamLeft} />
                <div className={props.displayFirstTeamLeft}>
                    <div className="players-postion">
                        <TitlePositon namePosition="Goalkeeper" />
                        <div className="list-players">
                            <PlayerGamplan namePlayer="Mustapha" numberKit={"10"}/>
                        </div>
                    </div>
                    <div className="players-postion">
                        <TitlePositon namePosition="Defenders" />
                        <div className="list-players">
                            <PlayerGamplan namePlayer="Mustapha" numberKit={10}/>
                        </div>
                    </div>
                </div>
                <div className={props.displaySabstitutesLeft}>
                    <div className="players-postion">
                        <TitlePositon namePosition="Goalkeeper" />
                        <div className="list-players">
                            <PlayerGamplan namePlayer="Mustapha" numberKit={10}/>
                        </div>
                    </div>
                    <div className="players-postion">
                        <TitlePositon namePosition="Defenders" />
                        <div className="list-players">
                            <PlayerGamplan namePlayer="Mustapha" numberKit={10}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Vs />
        <div className="teams-gam-plan team-gam-plan-right">
            <div className="info-team">
                <div className="team">
                    <img src={flagCroatia} alt="" />
                    <span className="team-name">COR</span>
                </div>
                <div className="gam-plan">
                    <PointSymbol />
                    4-3-3
                    <PointSymbol />
                </div>
            </div>
            <div className="team-players">
                <ButtonSwitchers leftName="1st Team" rightName="Sabstitutes" setDisplayFirstTeamRight={props.setDisplayFirstTeamRight} setDisplaySabstitutesRight={props.setDisplaySabstitutesRight} showTeamRight = {props.showTeamRight} setShowTeamRight = {props.setShowTeamRight}/>
                <div className={props.displayFirstTeamRight}>
                    <div className="players-postion">
                        <TitlePositon namePosition="Goalkeeper" />
                        <div className="list-players">
                            <PlayerGamplan namePlayer="Mustapha" numberKit={10}/>
                        </div>
                    </div>
                    <div className="players-postion">
                        <TitlePositon namePosition="Defenders" />
                        <div className="list-players">
                            <PlayerGamplan namePlayer="Mustapha" numberKit={10}/>
                        </div>
                    </div>
                </div>
                <div className={props.displaySabstitutesRight}>
                    <div className="players-postion">
                        <TitlePositon namePosition="Goalkeeper" />
                        <div className="list-players">
                            <PlayerGamplan namePlayer="Mustapha" numberKit={10}/>
                        </div>
                    </div>
                    <div className="players-postion">
                        <TitlePositon namePosition="Defenders" />
                        <div className="list-players">
                            <PlayerGamplan namePlayer="Mustapha" numberKit={10}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Gamplan;