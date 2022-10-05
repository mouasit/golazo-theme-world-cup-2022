import React from "react"
import logo from "../assets/logo.svg"
import Background from "./Background"
import Button from "./Button"
import englishFlag from "../assets/flags/languages/english.svg"
import { BiChevronRight } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";


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
        </nav>
        <header  className="mobile-header">
            <a href="/" aria-label="Golazo">
                <img src={logo} alt=""/>
            </a>
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
        </header>
    </React.Fragment>
    )
}

export default Nav;