import CardRanking from "../Items/CardRanking";
import SeparatorHeader from "../Items/SeparatorHeader";

import { getFlagTeamGroup } from "../../Helpers";

const Card = (props) => (
    <div className="cards">
    <CardRanking />
    <div className="info-ranking">
        <div className="header-ranking">
            <span className="title-group">
                {"Group " + props.group}
            </span>
            <span className="details-ranking">
                <span>P</span>
                <span>W</span>
                <span>D</span>
                <span>L</span>
                <span>PTS</span>
            </span>
        </div>
        <span className="separator-header">
            <SeparatorHeader />
        </span>
        <div className="body-ranking">
            {
                props.table.map((team)=> {
                    return(
                        <div className="team-row" key={team.position}>
                            <div className="team-info">
                                <span className="flag">
                                    <img src={getFlagTeamGroup(team.team.name)} alt={"Flag " + team.team.name} />
                                </span>
                            <span className="name">
                                {team.team.name}
                            </span>
                        </div>
                        <div className="team-numbers">
                            <span>{team.playedGames}</span>
                            <span>{team.won}</span>
                            <span>{team.draw}</span>
                            <span>{team.lost}</span>
                            <span>{team.points}</span>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    </div>
</div>
);

export default Card;