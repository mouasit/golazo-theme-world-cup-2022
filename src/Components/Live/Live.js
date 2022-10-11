
import GroupF from "../Items/Groups/GroupF"
import LocatoinBackground from "../Items/Location";
import ChanelBackground from "../Items/ChanelBackground";
import CommentatorBackground from "../Items/CommentatorBackground";
import flagMorocco from "../../assets/flags/teams/morocco.svg";
import flagCanada from "../../assets/flags/teams/canada.svg";
import PlayIcon from "../Items/Icons/PlayIcon"

const Live = () =>(
    <main>
        <section className="group-matches" aria-label="Group Matches">
            <div className="group-head">
                <GroupF />
            </div>
            <div className="group-body">
                <div className="match-info">
                    <div className="item-info">
                        <LocatoinBackground />
                        <span className="name-item-info">Al Bayt</span>
                    </div>
                    <div className="item-info">
                        <ChanelBackground />
                        <span className="name-item-info">Beinsport 04</span>
                    </div>
                    <div className="item-info">
                        <CommentatorBackground />
                        <span className="name-item-info">Issam Chaouali</span>
                    </div>
                </div>
                <div className="match-play">
                    <span className="team">
                        <img src={flagMorocco} alt="Flag Morocco" />
                        <span className="team-name">Morocco</span>
                    </span>
                    <button className="play-button" aria-label="Play Button">
                        <PlayIcon />
                    </button>
                    <span className="team team-right">
                        <img src={flagCanada} alt="Flag Morocco" />
                        <span className="team-name">Canada</span>
                    </span>
                </div>
            </div>
        </section>
    </main>
)

export default Live;