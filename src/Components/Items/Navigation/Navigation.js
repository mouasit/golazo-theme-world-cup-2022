
import React from "react";
import SideNav from "./NavTypes/SideNav";
import MobileHeader from "./NavTypes/Mobile/MobileHeader";
import MobileNav from "./NavTypes/Mobile/MobileNav";
import { useEffect,useState} from "react";
import {handleDropdown} from "../../../Helpers";

const Nav = (props) =>{
    const [arrow,setArrow] = useState("close");
    useEffect(()=>{
        const buttonDropdown = document.getElementsByClassName("btn-dropdown");
        handleDropdown(buttonDropdown[0],setArrow);
        handleDropdown(buttonDropdown[1],setArrow);

    },[])
    return(
    <React.Fragment>
        <SideNav arrow={arrow} lang={props.lang} />
        <MobileHeader arrow={arrow} lang={props.lang} />
        <MobileNav />
    </React.Fragment>
    )
}

export default Nav;