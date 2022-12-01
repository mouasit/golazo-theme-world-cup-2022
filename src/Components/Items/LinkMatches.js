import Background from "./Background";
import { NavLink } from "react-router-dom";
import Translate from "../../../src/Translate.json";
const LinkMatches = (props) => {
    if(props.lang === "en")
        return(
            <NavLink to="/Matches" aria-label={Translate.sideNav.english.matches}  onClick={() => {document.getElementById("Path_1611").style.fill = "#60071e";}}>
                <Background />
                <span>{Translate.sideNav.english.matches}</span>
            </NavLink>
        )
    if(props.lang === "fr")
        return(
            <NavLink to="/Matches" aria-label={Translate.sideNav.frensh.matches}  onClick={() => {document.getElementById("Path_1611").style.fill = "#60071e";}}>
                <Background />
                <span>{Translate.sideNav.frensh.matches}</span>
            </NavLink>
        )
    if(props.lang === "ar")
        return(
            <NavLink to="/Matches" aria-label={Translate.sideNav.arabic.matches}  onClick={() => {document.getElementById("Path_1611").style.fill = "#60071e";}}>
                <Background />
                <span>{Translate.sideNav.arabic.matches}</span>
            </NavLink>
        )
}

export default LinkMatches;