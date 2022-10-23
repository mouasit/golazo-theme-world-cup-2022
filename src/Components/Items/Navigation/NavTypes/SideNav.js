
import logo from "../../../../assets/logo.svg";
import Background from "../../../Items/Background";
import Button from "../../../Items/Button";
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";
import { useEffect,useState} from "react";
import {handleDropdown} from "../../../../Helpers"
import { NavLink } from "react-router-dom";
import Language from "../../Language";


const SideNav = (props) => {
    const [arrow,setArrow] = useState("close");
    let getFirstLang =  localStorage.getItem("firstLang");
    let getSecondLang = localStorage.getItem("secondLang");
    getFirstLang = getFirstLang || "fr";
    getSecondLang = getSecondLang || "ar";

    console.log("first : " + getFirstLang);
    console.log("last : " + getSecondLang);
    const [firstLang,setFirstLang] = useState(getFirstLang);
    const [secondLang,setSecondLang] = useState(getSecondLang);
    const [typeText,setTypeText] = useState(props.lang.language);
    useEffect(()=>{

        handleDropdown(document.getElementById("dropdownSidNav"),setArrow)

    },[])
    return (
        <nav className="side-nav">
            <NavLink to="/" aria-label="Golazo">
                <img className="logo" src={logo} alt=""/>
            </NavLink>
            <ul>
                <li>
                    <NavLink to="/" aria-label="Live">
                        <Background />
                        <span>Live</span>
                    </NavLink>
                </li>
                 <li>
                    <NavLink to="/Ranking" aria-label="Ranking">
                        <Background />
                        <span>Ranking</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Matches" aria-label="Matches">
                        <Background />
                        <span>Matches</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Stadiums" aria-label="Stadiums">
                        <Background />
                        <span>Stadiums</span>
                    </NavLink>
                </li>
            </ul>
            <div className="layout-dropdown">
                <button id="dropdownSidNav" className="dropdown" aria-label="Languages">
                    <Button />
                    <span className="name-flag">
                        <Language lang={{language: props.lang.language}}/>
                    </span>
                    <span className="arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21.293" height="24.286" viewBox="0 0 21.293 24.286">
                            <path id="Path_1738" data-name="Path 1738" d="M793.082,1047.652,782.435,1059.8l10.647,12.143,10.646-12.143Z" transform="translate(-782.435 -1047.652)" fill="#47b7ab"/>
                        </svg>
                        {
                            (arrow === "close")?(<BiChevronRight />):(<BiChevronLeft />)
                        }
                    </span>
                </button>
                <div className="list-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="180" height="149.127" viewBox="0 0 216.347 149.127">
                        <path id="Path_7097" data-name="Path 7097" d="M476.471,776.232A947.7,947.7,0,0,1,378.5,771.12l-2.345-.247-.524-2.3a309.161,309.161,0,0,1,0-133.809l.524-2.3,2.345-.247a941.443,941.443,0,0,1,195.956,0l2.345.247.524,2.3a309.131,309.131,0,0,1,0,133.809l-.524,2.3-2.345.247a947.7,947.7,0,0,1-97.973,5.112Z" transform="translate(-368.305 -627.105)" fill="#eeeee4"/>
                    </svg>
                    <div className="item">
                        <button aria-label={firstLang} onClick={(e) => {
                            if(props.lang.language === "en")
                            {
                                setFirstLang("en");
                                localStorage.setItem("firstLang","en");
                                setSecondLang("ar");
                                localStorage.setItem("secondLang","ar");
                                setTypeText("fr");
                            }
                            if(props.lang.language === "fr" || props.lang.language === "ar")
                            {
                                setFirstLang("fr");
                                localStorage.setItem("firstLang","fr");
                                setSecondLang("ar");
                                localStorage.setItem("secondLang","ar");
                                setTypeText("en");
                            }
                            props.lang.set(firstLang);
                            localStorage.setItem("language",firstLang);
                            }}>
                                <Language  lang={{language: firstLang,typeText}} />
                        </button>
                        <button aria-label={secondLang} onClick={(e) => {
                            if(props.lang.language === "en" || props.lang.language === "fr")
                            {
                                setFirstLang("en");
                                localStorage.setItem("firstLang","en");
                                setSecondLang("fr");
                                localStorage.setItem("secondLang","fr");
                                setTypeText("ar");
                            }

                            if(props.lang.language === "ar")
                            {
                                setFirstLang("en");
                                localStorage.setItem("firstLang","en");
                                setSecondLang("ar");
                                localStorage.setItem("secondLang","ar");
                                setTypeText("fr");

                            }
                            props.lang.set(secondLang);
                            localStorage.setItem("language",secondLang);
                            }}>
                                <Language  lang={{language: secondLang,typeText}} />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default SideNav;