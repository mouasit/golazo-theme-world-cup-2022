import React from 'react'
import ShapeNumber from "./ShapeNumber";
import ShapeFlageMorocco from "./ShapeFlagMorocco";
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
            <span className='name-player'>Hakim Ziyach</span>
            <span className='country-player'>
              <ShapeFlageMorocco />
              <span>Morocco</span>
            </span>
          </div>
        </div>
    </div>
  )
}
