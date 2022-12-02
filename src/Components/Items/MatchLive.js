import React from 'react';
import flagCroatia from "../../assets/flags/teams/croatia.svg";
import PlayIcon from "../Items/Icons/PlayIcon";
import flagMorocco from "../../assets/flags/teams/morocco.svg";
import { NavLink } from "react-router-dom";

export default function MatchLive(props) {
  return (
    <div className="match-play">
        <span className="team">
            <img src={flagMorocco} alt={"Flag " + props.firstTeam} />
            <span className="team-name">{props.firstTeam}</span>
        </span>
        <NavLink to= '/Stream' state= {props.data}className="play-button" aria-label="Play Button">
            <PlayIcon />
        </NavLink>
        <span className="team team-right">
            <img src={flagCroatia} alt={"Flag " + props.secondTeam} />
            <span className="team-name">{props.secondTeam}</span>
        </span>
    </div>
  )
}
