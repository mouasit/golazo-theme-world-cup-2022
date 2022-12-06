import React from 'react'
import BackgroundNumber from "../Items/BackgroundNumber";
import { getPicturePlayer } from '../../Helpers';

export default function PlayerGamplan(props) {

  let namePlayer = props.namePlayer.toLowerCase();
  let arr = namePlayer.split(" ");
  
  for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  
  }
  namePlayer = arr.join(" ");
  
  return (
    <div className="player">
        <img src={getPicturePlayer(namePlayer,props.team)} alt= {"Picture " + namePlayer} />
        <div className="info-player">
            <span className="name-player">{namePlayer}</span>
            <span className="number-player">
                <BackgroundNumber />
                <span className="number">{props.numberKit}</span>
            </span>
        </div>
    </div>
  )
}
