
import logo from "../../../../../assets/logo.svg";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import Language from "../../../Language";

const MobileHeader = (props) => {
    return(
    <header  className="mobile-header">
        <NavLink to="/" aria-label="Golazo">
            <img className="logo" src={logo} alt=""/>
        </NavLink>
        <div className="layout-dropdown">
            <button  className="dropdown btn-dropdown" aria-label="Languages">
                <svg xmlns="http://www.w3.org/2000/svg" /*width="120.358" height="44.903"*/ viewBox="0 0 120.358 44.903">
                    <path id="Path_1613" data-name="Path 1613" d="M377.484,766.07H489.109l4.367,22.451-4.367,22.451H377.484l-4.367-22.451Z" transform="translate(-373.118 -766.07)" fill="#eeeee4"/>
                </svg>
                <div className="content-button">
                <span className="name-flag">
                <Language lang={{language: props.lang.language}} shortLetter={props.shortLetter}/>
                </span>
                <span className="arrow">
                    <svg className="symbole" xmlns="http://www.w3.org/2000/svg" width="21.293" height="24.286" viewBox="0 0 21.293 24.286">
                        <path id="Path_1738" data-name="Path 1738" d="M793.082,1047.652,782.435,1059.8l10.647,12.143,10.646-12.143Z" transform="translate(-782.435 -1047.652)" fill="#47b7ab"/>
                    </svg>
                    {
                        (props.arrow === "close")?(<BiChevronDown />):(<BiChevronUp />)
                    }
                </span>
                </div>
            </button>
            <div className="list-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 216.347 198.901">
                    <path id="Path_7097" data-name="Path 7097" d="M476.471,826.005a713.164,713.164,0,0,1-97.971-6.818l-2.345-.33-.524-3.068a547.12,547.12,0,0,1,0-178.47l.524-3.068,2.345-.329a707.35,707.35,0,0,1,195.956,0l2.345.329.524,3.068a547.063,547.063,0,0,1,0,178.47l-.524,3.068-2.345.329a713.134,713.134,0,0,1-97.973,6.818Z" transform="translate(-368.305 -627.105)" fill="#eeeee4"/>
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
                                <Language  lang={{language: props.firstLang.firstLang,typeText:props.typeText.typeText}} shortLetter={true} />
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
                                <Language  lang={{language: props.secondLang.secondLang,typeText:props.typeText.typeText}} shortLetter={true} />
                    </button>
                </div>
            </div>
        </div>
    </header>
    )
}

export default MobileHeader;