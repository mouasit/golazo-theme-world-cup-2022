import LocatoinBackground from "../Items/LocationBackground";
import LocationBackgroundReverse from "../Items/LocationReverse";
import ChanelBackground from "../Items/ChanelBackground";
import ChanelBackgroundReverse from "../Items/ChanelBackgroundReverse";
import CommentatorBackground from "../Items/CommentatorBackground";
import CommentatorBackgroundReverse from "../Items/CommentatorBackgroundReverse";
import Translate from "../../Translate.json";
import TranslateName from "../Items/TranslateName";
import Video from "../../assets/morocco.mp4";
import Group from "../Items/Group";
import ButtonSwitchers from "../Items/ButtonSwitchers";
import flagMorocoo from "../../assets/flags/teams/morocco.svg";
import flagCroatia from "../../assets/flags/teams/croatia.svg";
import PointSymbol from "../Items/PointSymbol";
import Vs from "../Items/Vs";
import TitlePositon from "../Items/TitlePosition";
import ziyach from "../../assets/Players/ziyach.png";
import BackgroundNumber from "../Items/BackgroundNumber";
import RedCard from "../Items/RedCard";
import YellowCard from "../Items/YellowCard";
const Stream = (props) =>{
    return(
        <main>
        <section className="match-stream">
            <div className="match-info">
                <div className="item-info">
                    {(props.lang !== "ar")?(<LocatoinBackground />):(<LocationBackgroundReverse/>)}
                    <TranslateName name={Translate.matches.matche01.stadium} lang={props.lang} classItem={"name-item-info"} />
                </div>
                <div className="item-info">
                    {(props.lang !== "ar")?(<ChanelBackground />):(<ChanelBackgroundReverse/>)}
                    <TranslateName name={Translate.matches.matche01.channel} lang={props.lang} classItem={"name-item-info"} />
                </div>
                <div className="item-info">
                    {(props.lang !== "ar")?(<CommentatorBackground />):(<CommentatorBackgroundReverse/>)}
                    <TranslateName name={Translate.matches.matche01.commentator} lang={props.lang} classItem={"name-item-info"}  />
                </div>
            </div>
            <video src= {Video} controls>
            </video>
        </section>
        <section className="details-match">
            <div className="group">
            <Group nameGroup="G" lang={props.lang}/>
            </div>
            <ButtonSwitchers leftName="Gam Plan" rightName="Stats"/>
            <div id="gamPlan" className="view-gam-plan">
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
                        <ButtonSwitchers leftName="1st Team" rightName="Sabstitutes" />
                        <div id="firstTeam" className="list-positions">
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
                        <ButtonSwitchers leftName="1st Team" rightName="Sabstitutes" />
                        <div id="firstTeam" className="list-positions">
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
                    </div>
                </div>
            </div>
            <div className="view-stats">
                <div className="teams-stats">
                    <div className="team">
                        <img src={flagMorocoo} alt="" />
                        <span>MAR</span>
                    </div>
                    <Vs />
                    <div className="team">
                        <img src={flagCroatia} alt="" />
                        <span>COR</span>
                    </div>
                </div>
                <div className="stats">
                    <div className="stat-type">
                        <div className="title-stat">Possession</div>
                        <div className="info-stats">
                            <div className="stat-team">
                                <div className="line-stat"></div>
                                <span>50%</span>
                            </div>
                            <div className="stat-team stat-team-right">
                                <div className="line-stat"></div>
                                <span>50%</span>
                            </div>
                        </div>
                    </div>
                    <div className="stat-type">
                        <div className="title-stat">Possession</div>
                        <div className="info-stats">
                            <div className="stat-team">
                                <div className="line-stat"></div>
                                <span>50%</span>
                            </div>
                            <div className="stat-team stat-team-right">
                                <div className="line-stat"></div>
                                <span>50%</span>
                            </div>
                        </div>
                    </div>
                    <div className="stat-type">
                        <div className="title-stat">Cards <YellowCard /> </div>
                        <div className="info-stats">
                            <div className="stat-team">
                                <div className="line-stat"></div>
                                <span>50%</span>
                            </div>
                            <div className="stat-team stat-team-right">
                                <div className="line-stat"></div>
                                <span>50%</span>
                            </div>
                        </div>
                    </div>
                    <div className="stat-type">
                        <div className="title-stat">Cards <RedCard /> </div>
                        <div className="info-stats">
                            <div className="stat-team">
                                <div className="line-stat"></div>
                                <span>50%</span>
                            </div>
                            <div className="stat-team stat-team-right">
                                <div className="line-stat"></div>
                                <span>50%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}

export default Stream