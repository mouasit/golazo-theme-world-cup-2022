
import {BiTv} from "react-icons/bi";
import {BiBarChartAlt2} from "react-icons/bi";
import{BiCalendar} from "react-icons/bi";
import{TbSoccerField} from "react-icons/tb";
import { NavLink } from "react-router-dom";

const MobileNav = () => (
    <nav className="mobile-nav">
        <ul>
            <li>
                <NavLink id="liveMobile" to="/" aria-label="Live">
                    <BiTv />
                </NavLink>
            </li>
            <li>
                <NavLink to="/Ranking" aria-label="Ranking" onClick={()=>{document.getElementById("liveMobile").classList.remove("active");}}>
                    <BiBarChartAlt2 />
                </NavLink>
            </li>
            <li>
                <NavLink to="/Matches" aria-label="Matches" onClick={()=>{document.getElementById("liveMobile").classList.remove("active");}}>
                    <BiCalendar />
                </NavLink>
            </li>
            <li>
                <NavLink to="/Stadiums" aria-label="Stadiums" onClick={()=>{document.getElementById("liveMobile").classList.remove("active");}}>
                    <TbSoccerField />
                </NavLink>
            </li>
        </ul>
    </nav>
)

export default MobileNav