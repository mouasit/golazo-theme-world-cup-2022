
import React from "react";
import SideNav from "./NavTypes/SideNav";
import MobileHeader from "./NavTypes/Mobile/MobileHeader";
import MobileNav from "./NavTypes/Mobile/MobileNav"

const Nav = () =>{
    return(
    <React.Fragment>
        <SideNav />
        <MobileHeader />
        <MobileNav />
    </React.Fragment>
    )
}

export default Nav;