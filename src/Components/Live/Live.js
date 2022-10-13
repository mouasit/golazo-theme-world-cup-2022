
import Group from "../Items/Groups/Group"
import LocatoinBackground from "../Items/Location";
import ChanelBackground from "../Items/ChanelBackground";
import CommentatorBackground from "../Items/CommentatorBackground";
import flagMorocco from "../../assets/flags/teams/morocco.svg";
import flagCanada from "../../assets/flags/teams/canada.svg";
import flagBelgium from "../../assets/flags/teams/belgium.svg";
import flagCroatia from "../../assets/flags/teams/croatia.svg";
import flagBrazil from "../../assets/flags/teams/brazil.svg";
import PlayIcon from "../Items/Icons/PlayIcon";

const Live = () =>(
    <main>
        <section className="group-matches" aria-label="Group Matches">
            <div className="group-head">
                <Group nameGroup="F" />
            </div>
            <div className="all-matches">
                <div className="match">
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
                <div className="match">
                    <div className="match-info">
                            <div className="item-info">
                                <LocatoinBackground />
                                <span className="name-item-info">Lusail</span>
                            </div>
                            <div className="item-info">
                                <ChanelBackground />
                                <span className="name-item-info">Beinsport 05</span>
                            </div>
                            <div className="item-info">
                                <CommentatorBackground />
                                <span className="name-item-info">Hafid Derradji</span>
                            </div>
                        </div>
                        <div className="match-play">
                            <span className="team">
                                <img src={flagBelgium} alt="Flag Morocco" />
                                <span className="team-name">Belgium</span>
                            </span>
                            <button className="play-button" aria-label="Play Button">
                                <PlayIcon />
                            </button>
                            <span className="team team-right">
                                <img src={flagCroatia} alt="Flag Morocco" />
                                <span className="team-name">Croatia</span>
                            </span>
                        </div>
                </div>
            </div>
        </section>
        <section className="group-matches" aria-label="Group Matches">
            <div className="group-head">
                <Group nameGroup="G" />
            </div>
            <div className="all-matches">
                <div className="match">
                    <div className="match-info">
                            <div className="item-info">
                                <LocatoinBackground />
                                <span className="name-item-info">Ahmad Bin Ali</span>
                            </div>
                            <div className="item-info">
                                <ChanelBackground />
                                <span className="name-item-info">Beinsport 02</span>
                            </div>
                            <div className="item-info">
                                <CommentatorBackground />
                                <span className="name-item-info">Raouf khaleef</span>
                            </div>
                        </div>
                        <div className="match-play">
                            <span className="team">
                                <img src={flagBrazil} alt="Flag Morocco" />
                                <span className="team-name">Brazil</span>
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
                <div className="match">
                    <div className="match-info">
                            <div className="item-info">
                                <LocatoinBackground />
                                <span className="name-item-info">Al Janoub</span>
                            </div>
                            <div className="item-info">
                                <ChanelBackground />
                                <span className="name-item-info">Beinsport 01</span>
                            </div>
                            <div className="item-info">
                                <CommentatorBackground />
                                <span className="name-item-info">Yousef Saif</span>
                            </div>
                        </div>
                        <div className="match-play">
                            <span className="team">
                                <img src={flagBelgium} alt="Flag Morocco" />
                                <span className="team-name">Belgium</span>
                            </span>
                            <button className="play-button" aria-label="Play Button">
                                <PlayIcon />
                            </button>
                            <span className="team team-right">
                                <img src={flagCroatia} alt="Flag Morocco" />
                                <span className="team-name">Croatia</span>
                            </span>
                        </div>
                </div>
            </div>
        </section>
        <section className="group-matches" aria-label="Group Matches">
            <div className="group-head">
                <Group nameGroup="G" />
            </div>
            <div className="all-matches">
                <div className="match">
                    <div className="match-info">
                            <div className="item-info">
                                <LocatoinBackground />
                                <span className="name-item-info">Ahmad Bin Ali</span>
                            </div>
                            <div className="item-info">
                                <ChanelBackground />
                                <span className="name-item-info">Beinsport 02</span>
                            </div>
                            <div className="item-info">
                                <CommentatorBackground />
                                <span className="name-item-info">Raouf khaleef</span>
                            </div>
                        </div>
                        <div className="match-play">
                            <span className="team">
                                <img src={flagBrazil} alt="Flag Morocco" />
                                <span className="team-name">Brazil</span>
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
                <div className="match">
                    <div className="match-info">
                            <div className="item-info">
                                <LocatoinBackground />
                                <span className="name-item-info">Al Janoub</span>
                            </div>
                            <div className="item-info">
                                <ChanelBackground />
                                <span className="name-item-info">Beinsport 01</span>
                            </div>
                            <div className="item-info">
                                <CommentatorBackground />
                                <span className="name-item-info">Yousef Saif</span>
                            </div>
                        </div>
                        <div className="match-play">
                            <span className="team">
                                <img src={flagBelgium} alt="Flag Morocco" />
                                <span className="team-name">Belgium</span>
                            </span>
                            <button className="play-button" aria-label="Play Button">
                                <PlayIcon />
                            </button>
                            <span className="team team-right">
                                <img src={flagCroatia} alt="Flag Morocco" />
                                <span className="team-name">Croatia</span>
                            </span>
                        </div>
                </div>
            </div>
        </section>
        <section className="group-matches" aria-label="Group Matches">
            <div className="group-head">
                <Group nameGroup="G" />
            </div>
            <div className="all-matches">
                <div className="match">
                    <div className="match-info">
                            <div className="item-info">
                                <LocatoinBackground />
                                <span className="name-item-info">Ahmad Bin Ali</span>
                            </div>
                            <div className="item-info">
                                <ChanelBackground />
                                <span className="name-item-info">Beinsport 02</span>
                            </div>
                            <div className="item-info">
                                <CommentatorBackground />
                                <span className="name-item-info">Raouf khaleef</span>
                            </div>
                        </div>
                        <div className="match-play">
                            <span className="team">
                                <img src={flagBrazil} alt="Flag Morocco" />
                                <span className="team-name">Brazil</span>
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
                <div className="match">
                    <div className="match-info">
                            <div className="item-info">
                                <LocatoinBackground />
                                <span className="name-item-info">Al Janoub</span>
                            </div>
                            <div className="item-info">
                                <ChanelBackground />
                                <span className="name-item-info">Beinsport 01</span>
                            </div>
                            <div className="item-info">
                                <CommentatorBackground />
                                <span className="name-item-info">Yousef Saif</span>
                            </div>
                        </div>
                        <div className="match-play">
                            <span className="team">
                                <img src={flagBelgium} alt="Flag Morocco" />
                                <span className="team-name">Belgium</span>
                            </span>
                            <button className="play-button" aria-label="Play Button">
                                <PlayIcon />
                            </button>
                            <span className="team team-right">
                                <img src={flagCroatia} alt="Flag Morocco" />
                                <span className="team-name">Croatia</span>
                            </span>
                        </div>
                </div>
            </div>
        </section>
    </main>
)

export default Live;