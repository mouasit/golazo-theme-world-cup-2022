import React from 'react'
import Vs from "../../Components/Items/Icons/Vs";
import Clock from "../Items/Icons/Clock";

import { getFlagTeamMatch } from '../../Helpers';

export default function MatchClock(props) {
  return (
    <div className="match-time">
        <div className="teams">
            <div className="team">
                <img src={getFlagTeamMatch(props.homeTeam[0])} alt={"Flag " + props.homeTeam[0]} />
                <span>{props.homeTeam[1]}</span>
            </div>
            <span className="vs">
                <Vs />
            </span>
            <div className="team">
                <img src={getFlagTeamMatch(props.awayTeam[0])} alt={"Flag " + props.awayTeam[0]} />
                <span>{props.awayTeam[1]}</span>
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
