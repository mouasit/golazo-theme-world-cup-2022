import TitlePositon from "../Items/TitlePosition";
import ziyach from "../../assets/Players/ziyach.png";
import BackgroundNumber from "../Items/BackgroundNumber";
import PointSymbol from "../Items/PointSymbol";
import ButtonSwitchers from "../Items/ButtonSwitchers";
import Vs from "../Items/Vs";
import flagMorocoo from "../../assets/flags/teams/morocco.svg";
import flagCroatia from "../../assets/flags/teams/croatia.svg";
const Gamplan = (props) => {
    return(
    <div className={props.displayGamPlan}>
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
                <ButtonSwitchers leftName="1st Team" rightName="Sabstitutes" setDisplayFirstTeamLeft={props.setDisplayFirstTeamLeft} setDisplaySabstitutesLeft={props.setDisplaySabstitutesLeft} />
                <div className={props.displayFirstTeamLeft}>
                    <div className="players-postion">
                        <TitlePositon namePosition="Goalkeeper" />
                        <div className="list-players">
                            <div className="player">
                                <img src={ziyach} alt="" />
                                <div className="info-player">
                                    <span className="name-player">Hakim Ziyech</span>
                                    <span className="number-player">
                                        <BackgroundNumber />
                                        <span className="number">10</span>
                                    </span>
                                </div>
                            </div>
                            <div className="player">
                                <img src={ziyach} alt="" />
                                <div className="info-player">
                                    <span className="name-player">Hakim Ziyech</span>
                                    <span className="number-player">
                                        <BackgroundNumber />
                                        <span className="number">10</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="players-postion">
                        <TitlePositon namePosition="Defenders" />
                        <div className="list-players">
                            <div className="player">
                                <img src={ziyach} alt="" />
                                <div className="info-player">
                                    <span className="name-player">Hakim Ziyech</span>
                                    <span className="number-player">
                                        <BackgroundNumber />
                                        <span className="number">10</span>
                                    </span>
                                </div>
                            </div>
                            <div className="player">
                                <img src={ziyach} alt="" />
                                <div className="info-player">
                                    <span className="name-player">Hakim Ziyech</span>
                                    <span className="number-player">
                                        <BackgroundNumber />
                                        <span className="number">10</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={props.displaySabstitutesLeft}>
                    <div className="players-postion">
                        <TitlePositon namePosition="Goalkeeper" />
                        <div className="list-players">
                            <div className="player">
                                <img src={ziyach} alt="" />
                                <div className="info-player">
                                    <span className="name-player">Mustapha Ouasit</span>
                                    <span className="number-player">
                                        <BackgroundNumber />
                                        <span className="number">10</span>
                                    </span>
                                </div>
                            </div>
                            <div className="player">
                                <img src={ziyach} alt="" />
                                <div className="info-player">
                                    <span className="name-player">Hakim Ziyech</span>
                                    <span className="number-player">
                                        <BackgroundNumber />
                                        <span className="number">10</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="players-postion">
                        <TitlePositon namePosition="Defenders" />
                        <div className="list-players">
                            <div className="player">
                                <img src={ziyach} alt="" />
                                <div className="info-player">
                                    <span className="name-player">Hakim Ziyech</span>
                                    <span className="number-player">
                                        <BackgroundNumber />
                                        <span className="number">10</span>
                                    </span>
                                </div>
                            </div>
                            <div className="player">
                                <img src={ziyach} alt="" />
                                <div className="info-player">
                                    <span className="name-player">Hakim Ziyech</span>
                                    <span className="number-player">
                                        <BackgroundNumber />
                                        <span className="number">10</span>
                                    </span>
                                </div>
                            </div>
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
                <ButtonSwitchers leftName="1st Team" rightName="Sabstitutes" setDisplayFirstTeamRight={props.setDisplayFirstTeamRight} setDisplaySabstitutesRight={props.setDisplaySabstitutesRight}/>
                <div className={props.displayFirstTeamRight}>
                    <div className="players-postion">
                        <TitlePositon namePosition="Goalkeeper" />
                        <div className="list-players">
                            <div className="player">
                                <img src={ziyach} alt="" />
                                <div className="info-player">
                                    <span className="name-player">Hakim Ziyech</span>
                                    <span className="number-player number-player-right">
                                        <BackgroundNumber />
                                        <span className="number">10</span>
                                    </span>
                                </div>
                            </div>
                            <div className="player">
                                <img src={ziyach} alt="" />
                                <div className="info-player">
                                    <span className="name-player">Hakim Ziyech</span>
                                    <span className="number-player number-player-right">
                                        <BackgroundNumber />
                                        <span className="number">10</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="players-postion">
                        <TitlePositon namePosition="Defenders" />
                        <div className="list-players">
                            <div className="player">
                                <img src={ziyach} alt="" />
                                <div className="info-player">
                                    <span className="name-player">Hakim Ziyech</span>
                                    <span className="number-player number-player-right">
                                        <BackgroundNumber />
                                        <span className="number">10</span>
                                    </span>
                                </div>
                            </div>
                            <div className="player">
                                <img src={ziyach} alt="" />
                                <div className="info-player">
                                    <span className="name-player">Hakim Ziyech</span>
                                    <span className="number-player number-player-right">
                                        <BackgroundNumber />
                                        <span className="number">10</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={props.displaySabstitutesRight}>
                    <div className="players-postion">
                        <TitlePositon namePosition="Goalkeeper" />
                        <div className="list-players">
                            <div className="player">
                                <img src={ziyach} alt="" />
                                <div className="info-player">
                                    <span className="name-player">Mustapha Ouasit</span>
                                    <span className="number-player number-player-right">
                                        <BackgroundNumber />
                                        <span className="number">10</span>
                                    </span>
                                </div>
                            </div>
                            <div className="player">
                                <img src={ziyach} alt="" />
                                <div className="info-player">
                                    <span className="name-player">Hakim Ziyech</span>
                                    <span className="number-player number-player-right">
                                        <BackgroundNumber />
                                        <span className="number">10</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="players-postion">
                        <TitlePositon namePosition="Defenders" />
                        <div className="list-players">
                            <div className="player">
                                <img src={ziyach} alt="" />
                                <div className="info-player">
                                    <span className="name-player">Hakim Ziyech</span>
                                    <span className="number-player number-player-right">
                                        <BackgroundNumber />
                                        <span className="number">10</span>
                                    </span>
                                </div>
                            </div>
                            <div className="player">
                                <img src={ziyach} alt="" />
                                <div className="info-player">
                                    <span className="name-player">Hakim Ziyech</span>
                                    <span className="number-player number-player-right">
                                        <BackgroundNumber />
                                        <span className="number">10</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Gamplan;