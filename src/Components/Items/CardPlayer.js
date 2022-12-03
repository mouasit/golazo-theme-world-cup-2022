import React from 'react'
import ShapeNumber from "./ShapeNumber";
import ShapeFlageMorocco from "../../assets/flags-country-players/morocco.svg";
import picturePlayer from "../../assets/Players/ziyach.png"

export default function CardPlayer(props) {
  return (
    <div className='card-player'>
        <div className='rank-player'>
          <ShapeNumber />
          <span>{props.rank}</span>
        </div>
        <div className='player-details'>
          <img src={picturePlayer} alt="" />
          <div>
            <span className='name-player'>{props.name}</span>
            <span className='country-player'>
              <img src= {ShapeFlageMorocco} alt="" />
              <span>{props.team}</span>
            </span>
          </div>
        </div>
    </div>
  )
}
