import Background from "./Background";
import { NavLink } from "react-router-dom";
import Translate from "../../../src/Translate.json";

const linkLive = (props) => {
    if(props.lang === "en")
        return(
            <NavLink to="/" aria-label={Translate.sideNav.english.live}>
                <Background />
                <span>{Translate.sideNav.english.live}</span>
            </NavLink>
        )
    if(props.lang === "fr")
        return(
            <NavLink to="/" aria-label={Translate.sideNav.frensh.live}>
                <Background />
                <span>{Translate.sideNav.frensh.live}</span>
            </NavLink>
        )
    if(props.lang === "ar")
        return(
            <NavLink to="/" aria-label={Translate.sideNav.arabic.live}>
                <Background />
                <span>{Translate.sideNav.arabic.live}</span>
            </NavLink>
        )
}

export default linkLive;