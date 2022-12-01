import React from 'react'
import ArrowRight from "../Items/ArrowRight";
import ArrowLeft from "../Items/ArrowLeft";
import ShapeSlide from "../Items/ShapeSlide";
import LocationBackground from '../Items/LocationBackground';
import SpectatorBackground from "../Items/SpectatorBackground";

export default function CardStadium(props) {
  return (
    <div className="card-stadiums">
    <div className="container-pictures">
        <img src={props.pictures} alt="" />
        <button className="arrow arrow-left">
            <ArrowLeft />
        </button>
        <button className="arrow arrow-right">
            <ArrowRight />
        </button>
        <div className="row-slide">
            <button className="active">
                <ShapeSlide />
            </button>
            <button>
                <ShapeSlide />
            </button>
            <button>
                <ShapeSlide />
            </button>
        </div>
    </div>
    <div className="stadium-details">
        <h1 className="name-stadium">{props.name}</h1>
        <p>{props.desc}</p>
        <div className="stadium-place-loacation">
            <div className="item">
                <LocationBackground />
                <span>{props.location}</span>
            </div>
            <div className="item">
                <SpectatorBackground />
                <span>{props.spectators}</span>
            </div>
        </div>
    </div>
</div>
  )
}
