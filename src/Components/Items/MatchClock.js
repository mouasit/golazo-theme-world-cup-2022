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
                <img src={props.firstTeam[1]} alt={"Flag " + props.firstTeam} />
                <span>{props.firstTeam[0]}</span>
            </div>
            <span className="vs">
                <Vs />
            </span>
            <div className="team">
                <img src={props.secondTeam[1]} alt={"Flag" + props.secondTeam} />
                <span>{props.secondTeam[0]}</span>
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
