import CardRanking from "../Items/CardRanking";
import SeparatorHeader from "../Items/SeparatorHeader";
import flagQatar from "../../assets/flags-groups/Qatar.svg";
import flagEquador from "../../assets/flags-groups/Equador.svg";
import flagSenegal from "../../assets/flags-groups/Senegal.svg";
import flagNetherland from "../../assets/flags-groups/Netherland.svg";

const Card = () => (
    <div className="cards">
    <CardRanking />
    <div className="info-ranking">
        <div className="header-ranking">
            <span className="title-group">
                Group A
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
            <div className="team-row">
                <div className="team-info">
                    <span className="flag">
                        <img src={flagQatar} alt="" />
                    </span>
                    <span className="name">
                        Qatar
                    </span>
                </div>
                <div className="team-numbers">
                    <span>0</span>
                    <span>0</span>
                    <span>0</span>
                    <span>0</span>
                </div>
            </div>
            <div className="team-row">
                <div className="team-info">
                    <span className="flag">
                        <img src={flagEquador} alt="" />
                    </span>
                    <span className="name">
                        Ecuador
                    </span>
                </div>
                <div className="team-numbers">
                    <span>0</span>
                    <span>0</span>
                    <span>0</span>
                    <span>0</span>
                </div>
            </div>
            <div className="team-row">
                <div className="team-info">
                    <span className="flag">
                        <img src={flagSenegal} alt="" />
                    </span>
                    <span className="name">
                        Senegal
                    </span>
                </div>
                <div className="team-numbers">
                    <span>0</span>
                    <span>0</span>
                    <span>0</span>
                    <span>0</span>
                </div>
            </div>
            <div className="team-row">
                <div className="team-info">
                        <img src={flagNetherland} alt="" />
                    <span className="name">
                        Netherland
                    </span>
                </div>
                <div className="team-numbers">
                    <span>0</span>
                    <span>0</span>
                    <span>0</span>
                    <span>0</span>
                </div>
            </div>
        </div>
    </div>
</div>
);

export default Card;