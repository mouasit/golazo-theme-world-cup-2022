
import {BiTv} from "react-icons/bi";
import {BiBarChartAlt2} from "react-icons/bi";
import{BiCalendar} from "react-icons/bi";
import{TbSoccerField} from "react-icons/tb";

const MobileNav = () => (
    <nav className="mobile-nav">
        <ul>
            <li>
                <a href="/" className="active" aria-label="Live">
                    <BiTv />
                </a>
            </li>
            <li>
                <a href="/" aria-label="Ranking">
                    <BiBarChartAlt2 />
                </a>
            </li>
            <li>
                <a href="/" aria-label="Matches">
                    <BiCalendar />
                </a>
            </li>
            <li>
                <a href="/" aria-aria-label="Stadiums">
                    <TbSoccerField />
                </a>
            </li>
        </ul>
    </nav>
)

export default MobileNav