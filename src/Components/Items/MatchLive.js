import React from 'react';
import PlayIcon from "../Items/Icons/PlayIcon";
import { NavLink } from "react-router-dom";
import { getFlagTeamMatch } from '../../Helpers';

export default function MatchLive(props) {
  return (
    <div className="match-play">
        <span className="team">
            <img src={getFlagTeamMatch(props.homeTeam)} alt={"Flag " + props.homeTeam} />
            <span className="team-name">{props.homeTeam}</span>
        </span>
        <NavLink to= '/Stream' state= {props.data} className="play-button" aria-label="Play Button">
            <PlayIcon />
        </NavLink>
        <span className="team team-right">
            <img src={getFlagTeamMatch(props.awayTeam)} alt={"Flag " + props.awayTeam} />
            <span className="team-name">{props.awayTeam}</span>
        </span>
    </div>
  )
}
