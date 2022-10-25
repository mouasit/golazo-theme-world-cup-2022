
import React from "react";
import SideNav from "./NavTypes/SideNav";
import MobileHeader from "./NavTypes/Mobile/MobileHeader";
import MobileNav from "./NavTypes/Mobile/MobileNav";
import { useEffect,useState} from "react";
import {handleDropdown} from "../../../Helpers";

const Nav = (props) =>{

    let getFirstLang =  localStorage.getItem("firstLang");
    let getSecondLang = localStorage.getItem("secondLang");
    getFirstLang = getFirstLang || "fr";
    getSecondLang = getSecondLang || "ar";
    const [firstLang,setFirstLang] = useState(getFirstLang);
    const [secondLang,setSecondLang] = useState(getSecondLang);
    const [typeText,setTypeText] = useState(props.lang.language);

    const [arrow,setArrow] = useState("close");
    useEffect(()=>{
        const buttonDropdown = document.getElementsByClassName("btn-dropdown");
        handleDropdown(buttonDropdown[0],setArrow);
        handleDropdown(buttonDropdown[1],setArrow);
 
    },[])
    return(
    <React.Fragment>
        <SideNav lang={props.lang} arrow={arrow} firstLang = {{firstLang: firstLang, set: setFirstLang}} secondLang={{secondLang:secondLang, set:setSecondLang}} typeText={{typeText:typeText, set:setTypeText}}/>
        <MobileHeader lang={props.lang} arrow={arrow} firstLang = {{firstLang: firstLang, set: setFirstLang}} secondLang={{secondLang:secondLang, set:setSecondLang}} typeText={{typeText:typeText, set:setTypeText}} shortLetter={true} />
        <MobileNav />
    </React.Fragment>
    )
}

export default Nav;