import React from 'react'
import Vs from "../../Components/Items/Icons/Vs";
import Clock from "../Items/Icons/Clock";

import { getFlagTeamMatch } from '../../Helpers';

export default function MatchClock(props) {
  return (
    <div className="match-time">
        <div className="teams">
            <div className="team">
                <img src={getFlagTeamMatch(props.firstTeam[0].name)} alt={"Flag " + props.firstTeam[0].name} />
                <span>{props.firstTeam[0].tla}</span>
            </div>
            <span className="vs">
                <Vs />
            </span>
            <div className="team">
                <img src={getFlagTeamMatch(props.secondTeam[0].name)} alt={"Flag " + props.secondTeam[0].name} />
                <span>{props.secondTeam[0].tla}</span>
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
