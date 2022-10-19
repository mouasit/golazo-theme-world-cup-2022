
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

const Live = () =>(
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
                                <span className="name-item-info">Al Bayt</span>
                            </div>
                            <div className="item-info">
                                <ChanelBackground />
                                <span className="name-item-info">Beinsport 04</span>
                            </div>
                            <div className="item-info">
                                <CommentatorBackground />
                                <span className="name-item-info">Issam Chaouali</span>
                            </div>
                        </div>
                        <div className="match-play">
                            <span className="team">
                                <img src={flagMorocco} alt="Flag Morocco" />
                                <span className="team-name">Morocco</span>
                            </span>
                            <button className="play-button" aria-label="Play Button">
                                <PlayIcon />
                            </button>
                            <span className="team team-right">
                                <img src={flagCanada} alt="Flag Morocco" />
                                <span className="team-name">Canada</span>
                            </span>
                        </div>
                </div>
                <div className="match">
                    <div className="match-info">
                        <div className="item-info">
                            <LocatoinBackground />
                            <span className="name-item-info">Lusail</span>
                        </div>
                        <div className="item-info">
                            <ChanelBackground />
                            <span className="name-item-info">Beinsport 05</span>
                        </div>
                        <div className="item-info">
                            <CommentatorBackground />
                            <span className="name-item-info">Hafid Derradji</span>
                        </div>
                    </div>
                    <div className="match-time">
                        <div className="teams">
                            <div className="team">
                                <img src={flagMorocco} alt="" />
                                <span className="team-name">Morocco</span>
                            </div>
                            <span className="vs">
                                <Vs />
                            </span>
                            <div className="team">
                                <img src={flagMorocco} alt="" />
                                <span className="team-name">manchister city</span>
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
                <Group nameGroup="F" />
            </div>
            <div className="all-matches">
                <div className="match">
                    <div className="match-info">
                            <div className="item-info">
                                <LocatoinBackground />
                                <span className="name-item-info">Al Bayt</span>
                            </div>
                            <div className="item-info">
                                <ChanelBackground />
                                <span className="name-item-info">Beinsport 04</span>
                            </div>
                            <div className="item-info">
                                <CommentatorBackground />
                                <span className="name-item-info">Issam Chaouali</span>
                            </div>
                        </div>
                        <div className="match-time">
                        <div className="teams">
                            <div className="team">
                                <img src={flagMorocco} alt="" />
                                <span className="team-name">Morocco</span>
                            </div>
                            <span className="vs">
                                <Vs />
                            </span>
                            <div className="team">
                                <img src={flagMorocco} alt="" />
                                <span className="team-name">Morocco</span>
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
                <div className="match">
                    <div className="match-info">
                        <div className="item-info">
                            <LocatoinBackground />
                            <span className="name-item-info">Lusail</span>
                        </div>
                        <div className="item-info">
                            <ChanelBackground />
                            <span className="name-item-info">Beinsport 05</span>
                        </div>
                        <div className="item-info">
                            <CommentatorBackground />
                            <span className="name-item-info">Hafid Derradji</span>
                        </div>
                    </div>
                    <div className="match-time">
                        <div className="teams">
                            <div className="team">
                                <img src={flagMorocco} alt="" />
                                <span className="team-name">Morocco</span>
                            </div>
                            <span className="vs">
                                <Vs />
                            </span>
                            <div className="team">
                                <img src={flagMorocco} alt="" />
                                <span className="team-name">Camerooonooon</span>
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
    </main>
)

export default Live;