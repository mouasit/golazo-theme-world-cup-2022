import React from "react"
import logo from "../assets/logo.svg"
import Background from "./Background"
import Button from "./Button"
import englishFlag from "../assets/flags/languages/english.svg"
import { BiChevronRight } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import {BiTv} from "react-icons/bi"
import {BiBarChartAlt2} from "react-icons/bi"
import{BiCalendar} from "react-icons/bi"
import{TbSoccerField} from "react-icons/tb"


const Nav = () =>{
    return(
    <React.Fragment>
        <nav className="side-nav">
            <a href="/" aria-label="Golazo">
                <img className="logo" src={logo} alt=""/>
            </a>
            <ul>
                <li>
                    <a href="/" className="active">
                        <Background />
                    <span>Live</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <Background />
                        <span>Ranking</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <Background />
                        <span>Matches</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <Background />
                        <span>Stadiums</span>
                    </a>
                </li>
            </ul>
            <div className="layout-dropdown">
                <button className="dropdown">
                    <Button />
                    <span className="name-flag">
                        <img src={englishFlag} alt="" />
                        <span>English</span>
                    </span>
                    <span className="arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21.293" height="24.286" viewBox="0 0 21.293 24.286">
                            <path id="Path_1738" data-name="Path 1738" d="M793.082,1047.652,782.435,1059.8l10.647,12.143,10.646-12.143Z" transform="translate(-782.435 -1047.652)" fill="#47b7ab"/>
                        </svg>
                        <BiChevronRight />
                    </span>
                </button>
                <div className="list-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="216.347" height="149.127" viewBox="0 0 216.347 149.127">
                        <path id="Path_7097" data-name="Path 7097" d="M476.471,776.232A947.7,947.7,0,0,1,378.5,771.12l-2.345-.247-.524-2.3a309.161,309.161,0,0,1,0-133.809l.524-2.3,2.345-.247a941.443,941.443,0,0,1,195.956,0l2.345.247.524,2.3a309.131,309.131,0,0,1,0,133.809l-.524,2.3-2.345.247a947.7,947.7,0,0,1-97.973,5.112Z" transform="translate(-368.305 -627.105)" fill="#eeeee4"/>
                    </svg>
                    <div className="item">
                        <button>
                            <img src={englishFlag} alt="" />
                            <span>English</span>
                        </button>
                        <button>
                            <img src={englishFlag} alt="" />
                            <span>English</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
        <header  className="mobile-header">
            <a href="/" aria-label="Golazo">
                <img src={logo} alt=""/>
            </a>
            <div className="layout-dropdown">
                <button className="dropdown">
                    <svg xmlns="http://www.w3.org/2000/svg" width="120.358" height="44.903" viewBox="0 0 120.358 44.903">
                        <path id="Path_1613" data-name="Path 1613" d="M377.484,766.07H489.109l4.367,22.451-4.367,22.451H377.484l-4.367-22.451Z" transform="translate(-373.118 -766.07)" fill="#eeeee4"/>
                    </svg>
                    <span className="name-flag">
                        <img src={englishFlag} alt="" />
                        <span>En</span>
                    </span>
                    <span className="arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21.293" height="24.286" viewBox="0 0 21.293 24.286">
                            <path id="Path_1738" data-name="Path 1738" d="M793.082,1047.652,782.435,1059.8l10.647,12.143,10.646-12.143Z" transform="translate(-782.435 -1047.652)" fill="#47b7ab"/>
                        </svg>
                        <BiChevronDown />
                    </span>
                </button>
                <div className="list-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="216.347" height="149.127" viewBox="0 0 216.347 149.127">
                        <path id="Path_7097" data-name="Path 7097" d="M476.471,776.232A947.7,947.7,0,0,1,378.5,771.12l-2.345-.247-.524-2.3a309.161,309.161,0,0,1,0-133.809l.524-2.3,2.345-.247a941.443,941.443,0,0,1,195.956,0l2.345.247.524,2.3a309.131,309.131,0,0,1,0,133.809l-.524,2.3-2.345.247a947.7,947.7,0,0,1-97.973,5.112Z" transform="translate(-368.305 -627.105)" fill="#eeeee4"/>
                    </svg>
                </div>
            </div>

        </header>
        <nav className="mobile-nav">
            <ul>
                <li>
                    <a href="/" className="active">
                        <BiTv />
                    </a>
                </li>
                <li>
                    <a href="/">
                        <BiBarChartAlt2 />
                    </a>
                </li>
                <li>
                    <a href="/">
                        <BiCalendar />
                    </a>
                </li>
                <li>
                    <a href="/">
                        <TbSoccerField />
                    </a>
                </li>
            </ul>
        </nav>
    </React.Fragment>
    )
}

export default Nav;