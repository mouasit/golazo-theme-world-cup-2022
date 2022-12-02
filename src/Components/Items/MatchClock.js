import React from 'react'
import flagCanada from "../../assets/flags/teams/canada.svg";
import flagBelgium from "../../assets/flags/teams/belgium.svg";
import Vs from "../../Components/Items/Icons/Vs";
import Clock from "../Items/Icons/Clock";

export default function MatchClock(props) {
  return (
    <div className="match-time">
        <div className="teams">
            <div className="team">
                <img src={flagBelgium} alt={"Flag " + props.firstTeam} />
                <span>{props.firstTeam}</span>
            </div>
            <span className="vs">
                <Vs />
            </span>
            <div className="team">
                <img src={flagCanada} alt={"Flag" + props.secondTeam} />
                <span>{props.secondTeam}</span>
            </div>
        </div>
        <div className="start-time">
            <Clock />
            <div className="time">
                <span>{props.time}</span>
            </div>
        </div>
    </div>
  )
}
