
import {BiTv} from "react-icons/bi";
import {BiBarChartAlt2} from "react-icons/bi";
import{BiCalendar} from "react-icons/bi";
import{TbSoccerField} from "react-icons/tb";
import { NavLink } from "react-router-dom";

const MobileNav = () => (
    <nav className="mobile-nav">
        <ul>
            <li>
                <NavLink to="/" aria-label="Live">
                    <BiTv />
                </NavLink>
            </li>
            <li>
                <NavLink to="/Ranking" aria-label="Ranking">
                    <BiBarChartAlt2 />
                </NavLink>
            </li>
            <li>
                <NavLink to="/Matches" aria-label="Matches">
                    <BiCalendar />
                </NavLink>
            </li>
            <li>
                <NavLink to="/Stadiums" aria-label="Stadiums">
                    <TbSoccerField />
                </NavLink>
            </li>
        </ul>
    </nav>
)

export default MobileNav