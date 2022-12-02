import React from 'react'
import ziyach from "../../assets/Players/ziyach.png";
import BackgroundNumber from "../Items/BackgroundNumber";

export default function PlayerGamplan(props) {
  return (
    <div className="player">
        <img src={ziyach} alt="" />
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
