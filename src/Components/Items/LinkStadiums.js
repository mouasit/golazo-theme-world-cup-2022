import Background from "./Background";
import { NavLink } from "react-router-dom";
import Translate from "../../../src/Translate.json";
const LinkStadiums = (props) => {
    if(props.lang === "en")
        return(
            <NavLink to="/Stadiums" aria-label={Translate.sideNav.english.stadiums}>
                <Background />
                <span>{Translate.sideNav.english.stadiums}</span>
            </NavLink>
        )
    if(props.lang === "fr")
        return(
            <NavLink to="/Stadiums" aria-label={Translate.sideNav.frensh.stadiums}>
                <Background />
                <span>{Translate.sideNav.frensh.stadiums}</span>
            </NavLink>
        )
    if(props.lang === "ar")
        return(
            <NavLink to="/Stadiums" aria-label={Translate.sideNav.arabic.stadiums}>
                <Background />
                <span>{Translate.sideNav.arabic.stadiums}</span>
            </NavLink>
        )
}

export default LinkStadiums;