import Background from "./Background";
import { NavLink } from "react-router-dom";
import Translate from "../../../src/Translate.json";

const linkRanking = (props) => {
    if(props.lang === "en")
        return(
            <NavLink to="/Ranking" aria-label={Translate.sideNav.english.ranking} onClick={() => {document.getElementById("Path_1611").style.fill = "#60071e";}}>
                <Background />
                <span>{Translate.sideNav.english.ranking}</span>
            </NavLink>
        )
    if(props.lang === "fr")
        return(
            <NavLink to="/Ranking" aria-label={Translate.sideNav.frensh.ranking} onClick={() => {document.getElementById("Path_1611").style.fill = "#60071e";}}>
                <Background />
                <span>{Translate.sideNav.frensh.ranking}</span>
            </NavLink>
        )
    if(props.lang === "ar")
        return(
            <NavLink to="/Ranking" aria-label={Translate.sideNav.arabic.ranking} onClick={() => {document.getElementById("Path_1611").style.fill = "#60071e";}}>
                <Background />
                <span>{Translate.sideNav.arabic.ranking}</span>
            </NavLink>
        )
}


export default linkRanking;