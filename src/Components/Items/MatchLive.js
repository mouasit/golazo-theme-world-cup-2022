import React from 'react';
import PlayIcon from "../Items/Icons/PlayIcon";
import { NavLink } from "react-router-dom";
import { getFlagTeamMatch } from '../../Helpers';

export default function MatchLive(props) {
  return (
    <div className="match-play">
        <span className="team">
            <img src={getFlagTeamMatch(props.firstTeam[0].name)} alt={"Flag " + props.firstTeam[0].name} />
            <span className="team-name">{props.firstTeam[0].name}</span>
        </span>
        <NavLink to= '/Stream' state= {props.data} className="play-button" aria-label="Play Button">
            <PlayIcon />
        </NavLink>
        <span className="team team-right">
            <img src={getFlagTeamMatch(props.secondTeam[0].name)} alt={"Flag " + props.secondTeam[0].name} />
            <span className="team-name">{props.secondTeam[0].name}</span>
        </span>
    </div>
  )
}
