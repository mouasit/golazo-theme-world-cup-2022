import React from 'react'
import ArrowRight from "../Items/ArrowRight";
import ArrowLeft from "../Items/ArrowLeft";
import ShapeSlide from "../Items/ShapeSlide";
import LocationBackground from '../Items/LocationBackground';
import SpectatorBackground from "../Items/SpectatorBackground";
import { useState } from 'react';

export default function CardStadium(props) {
    const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="card-stadiums">
    <div className="container-pictures">
        <img src={props.pictures[currentIndex]} alt=""/>
        <button className="arrow arrow-left" onClick={()=>{
            if(currentIndex === 0)
                setCurrentIndex(props.pictures.length - 1);
            else{
                setCurrentIndex(currentIndex - 1);
            }
        }}>
            <ArrowLeft />
        </button>
        <button className="arrow arrow-right" onClick={()=>{
            if(currentIndex === props.pictures.length - 1)
                setCurrentIndex(0);
            else{
                setCurrentIndex(currentIndex + 1);
            }
        }}>
            <ArrowRight />
        </button>
        <div className="row-slide">
            {
                props.pictures.map( (e,index) => {
                    if(index === currentIndex)
                        return(
                            <button key={index} className="active" onClick={()=>{setCurrentIndex(index);}}>
                            <ShapeSlide />
                            </button>
                        )
                    else
                    {
                        return(
                            <button key={index} onClick={()=>{setCurrentIndex(index);}}>
                                <ShapeSlide />
                            </button>
                        ) 
                    } 
                })
            }
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
