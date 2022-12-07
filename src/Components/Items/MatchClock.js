import React from 'react'
import Vs from "../../Components/Items/Icons/Vs";
import Clock from "../Items/Icons/Clock";

import { getFlagTeamMatch } from '../../Helpers';

export default function MatchClock(props) {
  return (
    <div className="match-time">
        <div className="teams">
            <div className="team">
                <img src={getFlagTeamMatch(props.homeTeam)} alt={"Flag " + props.homeTeam} />
                <span>por</span>
            </div>
            <span className="vs">
                <Vs />
            </span>
            <div className="team">
                <img src={getFlagTeamMatch(props.awayTeam)} alt={"Flag " + props.awayTeam} />
                <span>sui</span>
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
