
import React from "react";
import SideNav from "./NavTypes/SideNav";
import MobileHeader from "./NavTypes/Mobile/MobileHeader";
import MobileNav from "./NavTypes/Mobile/MobileNav"

const Nav = (props) =>{
    return(
    <React.Fragment>
        <SideNav lang={props.lang} />
        <MobileHeader />
        <MobileNav />
    </React.Fragment>
    )
}

export default Nav;