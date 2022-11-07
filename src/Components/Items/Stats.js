import flagMorocoo from "../../assets/flags/teams/morocco.svg";
import flagCroatia from "../../assets/flags/teams/croatia.svg";
import Vs from "../Items/Vs";
import RedCard from "../Items/RedCard";
import YellowCard from "../Items/YellowCard";
const Stats = (props) => {
    return (
        <div className={props.displayStats}>
        <div className="teams-stats">
            <div className="team">
                <img src={flagMorocoo} alt="" />
                <span>MAR</span>
            </div>
            <Vs />
            <div className="team">
                <img src={flagCroatia} alt="" />
                <span>COR</span>
            </div>
        </div>
        <div className="stats">
            <div className="stat-type">
                <div className="title-stat">Possession</div>
                <div className="info-stats">
                    <div className="stat-team"><span>80%</span></div>
                    <div className="stat-team stat-team-right"><span>50%</span></div>
                </div>
            </div>
            <div className="stat-type">
                <div className="title-stat">Possession</div>
                <div className="info-stats">
                    <div className="stat-team"><span>80%</span></div>
                    <div className="stat-team stat-team-right"><span>50%</span></div>
                </div>
            </div>
            <div className="stat-type">
                <div className="title-stat">Cards<YellowCard /></div>
                <div className="info-stats">
                    <div className="stat-team"><span>80%</span></div>
                    <div className="stat-team stat-team-right"><span>50%</span></div>
                </div>
            </div>
            <div className="stat-type">
                <div className="title-stat">Cards<RedCard /></div>
                <div className="info-stats">
                    <div className="stat-team"><span>80%</span></div>
                    <div className="stat-team stat-team-right"><span>50%</span></div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Stats;