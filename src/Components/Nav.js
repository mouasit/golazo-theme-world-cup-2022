import React from "react"
import logo from "../assets/logo.svg"
import Background from "./Background"
import Button from "./Button"
import englishFlag from "../assets/flags/languages/english.svg"
import { BiChevronRight } from "react-icons/bi";


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
            <button>
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
            
        </header>
    </React.Fragment>
    )
}

export default Nav;