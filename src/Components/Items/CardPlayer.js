import React from 'react'
import ShapeNumber from "./ShapeNumber";
import { getFlagTeamRanking, getPicturePlayer } from '../../Helpers';

export default function CardPlayer(props) {
  return (
    <div className='card-player'>
        <div className='rank-player'>
          <ShapeNumber />
          <span>{props.rank}</span>
        </div>
        <div className='player-details'>
          <img src={getPicturePlayer(props.name,props.team)} alt={"Picture " + props.name} />
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
