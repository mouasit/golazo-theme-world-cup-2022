import React from 'react'
import BackgroundNumber from "../Items/BackgroundNumber";
import { getPicturePlayer } from '../../Helpers';

export default function PlayerGamplan(props) {
  console.log(props);
  return (
    <div className="player">
        <img src={getPicturePlayer(props.namePlayer,props.team)} alt="" />
        <div className="info-player">
            <span className="name-player">{props.namePlayer}</span>
            <span className="number-player">
                <BackgroundNumber />
                <span className="number">{props.numberKit}</span>
            </span>
        </div>
    </div>
  )
}
