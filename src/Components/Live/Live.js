
import Group from "../Items/Group"
import LocatoinBackground from "../Items/Location";
import ChanelBackground from "../Items/ChanelBackground";
import CommentatorBackground from "../Items/CommentatorBackground";
import flagMorocco from "../../assets/flags/teams/morocco.svg";
import flagCanada from "../../assets/flags/teams/canada.svg";
import flagBelgium from "../../assets/flags/teams/belgium.svg";
import flagCroatia from "../../assets/flags/teams/croatia.svg";
import flagBrazil from "../../assets/flags/teams/brazil.svg";
import flagSwitzerland from "../../assets/flags/teams/switzerland.svg";
import flagSerbia from "../../assets/flags/teams/serbia.svg";
import flagCameroon from "../../assets/flags/teams/cameroon.svg";
import PlayIcon from "../Items/Icons/PlayIcon";
import Vs from "../../Components/Items/Icons/Vs";
import Clock from "../Items/Icons/Clock";
import Translate from "../../Translate.json";
import TranslateName from "../Items/TranslateName";

const Live = (props) =>{
    return(
    <main>
        <section className="group-matches" aria-label="Group Matches">
            <div className="group-head">
                <Group nameGroup="F" />
            </div>
            <div className="all-matches">
                <div className="match">
                    <div className="match-info">
                            <div className="item-info">
                                <LocatoinBackground />
                                <TranslateName name={Translate.matches.matche01.stadium} lang={props.lang} classItem={"name-item-info"} />
                            </div>
                            <div className="item-info">
                                <ChanelBackground />
                                <TranslateName name={Translate.matches.matche01.channel} lang={props.lang} classItem={"name-item-info"} />
                            </div>
                            <div className="item-info">
                                <CommentatorBackground />
                                <TranslateName name={Translate.matches.matche01.commentator} lang={props.lang} classItem={"name-item-info"}  />
                            </div>
                        </div>
                        <div className="match-play">
                            <span className="team">
                                <img src={flagMorocco} alt="Flag Morocco" />
                                <TranslateName name={Translate.matches.matche01.team01} lang={props.lang} classItem={"team-name"}  />
                            </span>
                            <button className="play-button" aria-label="Play Button">
                                <PlayIcon />
                            </button>
                            <span className="team team-right">
                                <img src={flagCroatia} alt="Flag Morocco" />
                                <TranslateName name={Translate.matches.matche01.team02} lang={props.lang} classItem={"team-name"}  />
                            </span>
                        </div>
                </div>
                <div className="match">
                    <div className="match-info">
                        <div className="item-info">
                            <LocatoinBackground />
                            <TranslateName name={Translate.matches.matche02.stadium} lang={props.lang} classItem={"name-item-info"} />
                        </div>
                        <div className="item-info">
                            <ChanelBackground />
                            <TranslateName name={Translate.matches.matche02.channel} lang={props.lang} classItem={"name-item-info"} />
                        </div>
                        <div className="item-info">
                            <CommentatorBackground />
                            <TranslateName name={Translate.matches.matche02.commentator} lang={props.lang} classItem={"name-item-info"} />
                        </div>
                    </div>
                    <div className="match-time">
                        <div className="teams">
                            <div className="team">
                                <img src={flagBelgium} alt="" />
                                <span>bel</span>
                            </div>
                            <span className="vs">
                                <Vs />
                            </span>
                            <div className="team">
                                <img src={flagCanada} alt="" />
                                <span>can</span>
                            </div>
                        </div>
                        <div className="start-time">
                            <Clock />
                            <div className="time">
                                <span>17</span>
                                <span>:</span>
                                <span>00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="group-matches" aria-label="Group Matches">
            <div className="group-head">
                <Group nameGroup="G" />
            </div>
            <div className="all-matches">
                <div className="match">
                    <div className="match-info">
                            <div className="item-info">
                                <LocatoinBackground />
                                <TranslateName name={Translate.matches.matche03.stadium} lang={props.lang} classItem={"name-item-info"} />
                            </div>
                            <div className="item-info">
                                <ChanelBackground />
                                <TranslateName name={Translate.matches.matche03.channel} lang={props.lang} classItem={"name-item-info"} />
                            </div>
                            <div className="item-info">
                                <CommentatorBackground />
                                <TranslateName name={Translate.matches.matche03.commentator} lang={props.lang} classItem={"name-item-info"} />
                            </div>
                        </div>
                        <div className="match-time">
                        <div className="teams">
                            <div className="team">
                                <img src={flagSwitzerland} alt="" />
                                <span className="team-name">sui</span>
                            </div>
                            <span className="vs">
                                <Vs />
                            </span>
                            <div className="team">
                                <img src={flagCameroon} alt="" />
                                <span className="team-name">cmr</span>
                            </div>
                        </div>
                        <div className="start-time">
                            <Clock />
                            <div className="time">
                                <span>18</span>
                                <span>:</span>
                                <span>00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="match">
                    <div className="match-info">
                        <div className="item-info">
                            <LocatoinBackground />
                            <TranslateName name={Translate.matches.matche04.stadium} lang={props.lang} classItem={"name-item-info"} />
                        </div>
                        <div className="item-info">
                            <ChanelBackground />
                            <TranslateName name={Translate.matches.matche04.channel} lang={props.lang} classItem={"name-item-info"} />
                        </div>
                        <div className="item-info">
                            <CommentatorBackground />
                            <TranslateName name={Translate.matches.matche04.commentator} lang={props.lang} classItem={"name-item-info"} />
                        </div>
                    </div>
                    <div className="match-time">
                        <div className="teams">
                            <div className="team">
                                <img src={flagBrazil} alt="" />
                                <span className="team-name">bra</span>
                            </div>
                            <span className="vs">
                                <Vs />
                            </span>
                            <div className="team">
                                <img src={flagSerbia} alt="" />
                                <span className="team-name">srb</span>
                            </div>
                        </div>
                        <div className="start-time">
                            <Clock />
                            <div className="time">
                                <span>21</span>
                                <span>:</span>
                                <span>00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}

export default Live;