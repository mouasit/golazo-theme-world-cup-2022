import Vs from "../Items/Vs";
import RedCard from "../Items/RedCard";
import YellowCard from "../Items/YellowCard";
import { getFlagTeamMatch } from "../../Helpers";

const Stats = (props) => {
    return (
        <div className={props.displayStats}>
        <div className="teams-stats">
            <div className="team">
                <img src={getFlagTeamMatch(props.homeTeam.name)} alt={"Flag " + props.homeTeam.name } />
                <span>{props.homeTeam.tla}</span>
            </div>
            <Vs />
            <div className="team">
                <img src={getFlagTeamMatch(props.awayTeam.name)} alt={"Flag " + props.awayTeam.name} />
                <span>{props.awayTeam.tla}</span>
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
                <div className="title-stat">Pass Accuracy</div>
                <div className="info-stats">
                    <div className="stat-team"><span>80%</span></div>
                    <div className="stat-team stat-team-right"><span>50%</span></div>
                </div>
            </div>
            <div className="stat-type">
                <div className="title-stat">Cards<YellowCard /></div>
                <div className="info-stats">
                    <div className="stat-team"><span>1</span></div>
                    <div className="stat-team stat-team-right"><span>1</span></div>
                </div>
            </div>
            <div className="stat-type">
                <div className="title-stat">Cards<RedCard /></div>
                <div className="info-stats">
                    <div className="stat-team"><span>0</span></div>
                    <div className="stat-team stat-team-right"><span>0</span></div>
                </div>
            </div>
            <div className="stat-type">
                <div className="title-stat">Fouls</div>
                <div className="info-stats">
                    <div className="stat-team"><span>0</span></div>
                    <div className="stat-team stat-team-right"><span>0</span></div>
                </div>
            </div>
            <div className="stat-type">
                <div className="title-stat">Offsides</div>
                <div className="info-stats">
                    <div className="stat-team"><span>0</span></div>
                    <div className="stat-team stat-team-right"><span>0</span></div>
                </div>
            </div>
            <div className="stat-type">
                <div className="title-stat">Corners</div>
                <div className="info-stats">
                    <div className="stat-team"><span>0</span></div>
                    <div className="stat-team stat-team-right"><span>0</span></div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Stats;