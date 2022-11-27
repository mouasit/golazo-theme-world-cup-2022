import Group from "./Group";
import flagSwitzerland from "../../assets/flags/teams/switzerland.svg";
import flagCameroon from "../../assets/flags/teams/cameroon.svg";
import Vs from "../../Components/Items/Icons/Vs";
import Clock from "../Items/Icons/Clock";

import flagMorocco from "../../assets/flags/teams/morocco.svg";
import flagCanada from "../../assets/flags/teams/canada.svg";
import flagBelgium from "../../assets/flags/teams/belgium.svg";
import flagCroatia from "../../assets/flags/teams/croatia.svg";
import flagBrazil from "../../assets/flags/teams/brazil.svg";
import flagSerbia from "../../assets/flags/teams/serbia.svg";
import CalanderBackground from "../Items/CalanderBackground";
import React from "react";
const MatchTime = (props) => {
    return(
        <React.Fragment>
        <div className="list-match-time">
        {
            (props.date)?(
                <div className="date-row">
                    <div className="date">
                        <CalanderBackground />
                        <span>12 / 12 / 2022</span>
                    </div>
                </div>
            ):null
        }
            <div className="group-matches" aria-label="Group Matches">
                <div className="group-head">
                    <Group nameGroup="F" lang={props.lang}/>
                </div>
            <div className="all-matches">
                <div className="match">
                    <div className="match-time">
                        <div className="teams">
                            <div className="team">
                                <img src={flagMorocco} alt="" />
                                <span className="team-name">mar</span>
                            </div>
                            <span className="vs">
                                <Vs />
                            </span>
                            <div className="team">
                                <img src={flagBelgium} alt="" />
                                <span className="team-name">bel</span>
                            </div>
                        </div>
                        <div className="start-time">
                            <Clock />
                            <div className="time">
                                <span>14</span>
                                <span>:</span>
                                <span>00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="match">
                    <div className="match-time">
                        <div className="teams">
                            <div className="team">
                                <img src={flagCroatia} alt="" />
                                <span className="team-name">cor</span>
                            </div>
                            <span className="vs">
                                <Vs />
                            </span>
                            <div className="team">
                                <img src={flagCanada} alt="" />
                                <span className="team-name">can</span>
                            </div>
                        </div>
                        <div className="start-time">
                            <Clock />
                            <div className="time">
                                <span>16</span>
                                <span>:</span>
                                <span>00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {
            (props.date)?(
                <div className="date-row">
                    <div className="date">
                        <CalanderBackground />
                        <span>12 / 12 / 2022</span>
                    </div>
                </div>
            ):null
        }

        <div className="group-matches" aria-label="Group Matches">
            <div className="group-head">
                <Group nameGroup="G" lang={props.lang}/>
            </div>
            <div className="all-matches">
                <div className="match">
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
                    <div className="match-time">
                        <div className="teams">
                            <div className="team">
                                <img src={flagSerbia} alt="" />
                                <span className="team-name">srb</span>
                            </div>
                            <span className="vs">
                                <Vs />
                            </span>
                            <div className="team">
                                <img src={flagBrazil} alt="" />
                                <span className="team-name">bra</span>
                            </div>
                        </div>
                        <div className="start-time">
                            <Clock />
                            <div className="time">
                                <span>20</span>
                                <span>:</span>
                                <span>00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </React.Fragment>
    )
}

export default MatchTime;