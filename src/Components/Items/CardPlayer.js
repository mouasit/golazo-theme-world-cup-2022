import React from 'react'
import ShapeNumber from "./ShapeNumber";
import { getFlagTeamRanking } from '../../Helpers';

export default function CardPlayer(props) {
  return (
    <div className='card-player'>
        <div className='rank-player'>
          <ShapeNumber />
          <span>{props.rank}</span>
        </div>
        <div className='player-details'>
          <img src="https://digitalhub.fifa.com/transform/96ff445c-211f-4bc3-b0d8-cc6bb5777982/Morocco-Portraits-FIFA-World-Cup-Qatar-2022?io=transform:fill,width:792,height:900" alt="" />
          <div>
            <span className='name-player'>{props.name}</span>
            <span className='country-player'>
              <img src= {getFlagTeamRanking(props.team)} alt={"Flag " + props.team} />
              <span>{props.team}</span>
            </span>
          </div>
        </div>
    </div>
  )
}
