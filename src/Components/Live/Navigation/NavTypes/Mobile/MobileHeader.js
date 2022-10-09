
import logo from "../../../../../assets/logo.svg";
import englishFlag from "../../../../../assets/flags/languages/english.svg";
import frenshFlag from "../../../../../assets/flags/languages/frensh.svg";
import arabicFlag from "../../../../../assets/flags/languages/arabic.svg";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";
import { handleDropdown } from "../../../../../Helpers";
import { useEffect, useState } from "react";

const MobileHeader = () => {
    const [arrow,setArrow] = useState("close");
    useEffect(()=>{

       handleDropdown(document.getElementById("dropdownMobileHeader"),setArrow)

    },[])
    return(
    <header  className="mobile-header">
        <a href="/" aria-label="Golazo">
            <img src={logo} alt=""/>
        </a>
        <div className="layout-dropdown">
            <button id="dropdownMobileHeader" className="dropdown" aria-label="Languages">
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
                    {
                        (arrow === "close")?(<BiChevronDown />):(<BiChevronUp />)
                    }
                </span>
            </button>
            <div className="list-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 216.347 198.901">
                    <path id="Path_7097" data-name="Path 7097" d="M476.471,826.005a713.164,713.164,0,0,1-97.971-6.818l-2.345-.33-.524-3.068a547.12,547.12,0,0,1,0-178.47l.524-3.068,2.345-.329a707.35,707.35,0,0,1,195.956,0l2.345.329.524,3.068a547.063,547.063,0,0,1,0,178.47l-.524,3.068-2.345.329a713.134,713.134,0,0,1-97.973,6.818Z" transform="translate(-368.305 -627.105)" fill="#eeeee4"/>
                </svg>
                <div className="item">
                    <button aria-label="Frensh">
                        <img src={frenshFlag} alt="" />
                        <span>Fr</span>
                    </button>
                    <button aria-label="Arabic">
                        <img src={arabicFlag} alt="" />
                        <span>Ar</span>
                    </button>
                </div>
            </div>
        </div>
    </header>
    )
}

export default MobileHeader;