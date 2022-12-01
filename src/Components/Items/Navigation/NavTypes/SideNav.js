
import logo from "../../../../assets/logo.svg";
import Button from "../../../Items/Button";
import ButtonReverse from "../../ButtonReverse";
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import Language from "../../Language";
import LinkLive from "../../LinkLive";
import LinkRanking from "../../LinkRanking";
import LinkMatches from "../../LinkMatches";
import LinkStadiums from "../../LinkStadiums";


const SideNav = (props) => {
    if (props.lang.language === "ar")
        document.getElementById("root").classList.add("reverse");
    else
        document.getElementById("root").removeAttribute("class");
    return (
        <nav className="side-nav">
            <NavLink to="/" aria-label="Golazo" onClick={() => {document.getElementById("Path_1611").style.fill = "#E32052";}}>
                <img className="logo" src={logo} alt=""/>
            </NavLink>
            <ul>
                <li>
                    <LinkLive lang = {props.lang.language}/>
                </li>
                 <li>
                    <LinkRanking lang = {props.lang.language}/>
                </li>
                <li>
                    <LinkMatches lang = {props.lang.language} />
                </li>
                <li>
                    <LinkStadiums lang = {props.lang.language} />
                </li>
            </ul>
            <div className="layout-dropdown">
                <button  className="dropdown btn-dropdown" aria-label="Languages">
                {(props.lang.language !== "ar")?(<Button />):(<ButtonReverse/>)}
                    <span className="name-flag">
                        <Language lang={{language: props.lang.language}}/>
                    </span>
                    <span className="arrow">
                        <span className="content-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21.293" height="24.286" viewBox="0 0 21.293 24.286">
                            <path id="Path_1738" data-name="Path 1738" d="M793.082,1047.652,782.435,1059.8l10.647,12.143,10.646-12.143Z" transform="translate(-782.435 -1047.652)" fill="#47b7ab"/>
                        </svg>
                        {
                            (props.lang.language !== "ar")?(
                                (props.arrow === "close")?(<BiChevronRight />):(<BiChevronLeft />)
                            ):
                            (
                                (props.arrow === "close")?(<BiChevronLeft />):(<BiChevronRight />)
                            )
                        }
                        </span>
                    </span>
                </button>
                <div className="list-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="180" height="149.127" viewBox="0 0 216.347 149.127">
                        <path id="Path_7097" data-name="Path 7097" d="M476.471,776.232A947.7,947.7,0,0,1,378.5,771.12l-2.345-.247-.524-2.3a309.161,309.161,0,0,1,0-133.809l.524-2.3,2.345-.247a941.443,941.443,0,0,1,195.956,0l2.345.247.524,2.3a309.131,309.131,0,0,1,0,133.809l-.524,2.3-2.345.247a947.7,947.7,0,0,1-97.973,5.112Z" transform="translate(-368.305 -627.105)" fill="#eeeee4"/>
                    </svg>
                    <div className="item">
                        <button aria-label={props.firstLang.firstLang} onClick={(e) => {
                            if(props.lang.language === "en")
                            {
                                props.firstLang.set("en");
                                localStorage.setItem("firstLang","en");
                                props.secondLang.set("ar");
                                localStorage.setItem("secondLang","ar");
                                props.typeText.set("fr");
                            }
                            if(props.lang.language === "fr" || props.lang.language === "ar")
                            {
                                props.firstLang.set("fr");
                                localStorage.setItem("firstLang","fr");
                                props.secondLang.set("ar");
                                localStorage.setItem("secondLang","ar");
                                props.typeText.set("en");
                            }
                            props.lang.set(props.firstLang.firstLang);
                            localStorage.setItem("language",props.firstLang.firstLang);
                            }}>
                                <Language  lang={{language: props.firstLang.firstLang,typeText:props.typeText.typeText}} />
                        </button>
                        <button aria-label={props.secondLang.secondLang} onClick={(e) => {
                            if(props.lang.language === "en" || props.lang.language === "fr")
                            {
                                props.firstLang.set("en");
                                localStorage.setItem("firstLang","en");
                                props.secondLang.set("fr");
                                localStorage.setItem("secondLang","fr");
                                props.typeText.set("ar");
                            }

                            if(props.lang.language === "ar")
                            {
                                props.firstLang.set("en");
                                localStorage.setItem("firstLang","en");
                                props.secondLang.set("ar");
                                localStorage.setItem("secondLang","ar");
                                props.typeText.set("fr");

                            }
                            props.lang.set(props.secondLang.secondLang);
                            localStorage.setItem("language",props.secondLang.secondLang);
                            }}>
                                <Language  lang={{language: props.secondLang.secondLang,typeText:props.typeText.typeText}} />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default SideNav;