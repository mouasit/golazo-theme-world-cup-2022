
import {BiTv} from "react-icons/bi";
import {BiBarChartAlt2} from "react-icons/bi";
import{BiCalendar} from "react-icons/bi";
import{TbSoccerField} from "react-icons/tb";

const MobileNav = () => (
    <nav className="mobile-nav">
        <ul>
            <li>
                <a href="/" className="active">
                    <BiTv />
                </a>
            </li>
            <li>
                <a href="/">
                    <BiBarChartAlt2 />
                </a>
            </li>
            <li>
                <a href="/">
                    <BiCalendar />
                </a>
            </li>
            <li>
                <a href="/">
                    <TbSoccerField />
                </a>
            </li>
        </ul>
    </nav>
)

export default MobileNav