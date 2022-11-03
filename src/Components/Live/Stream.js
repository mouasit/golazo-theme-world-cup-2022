import LocatoinBackground from "../Items/LocationBackground";
import LocationBackgroundReverse from "../Items/LocationReverse";
import ChanelBackground from "../Items/ChanelBackground";
import ChanelBackgroundReverse from "../Items/ChanelBackgroundReverse";
import CommentatorBackground from "../Items/CommentatorBackground";
import CommentatorBackgroundReverse from "../Items/CommentatorBackgroundReverse";
import Translate from "../../Translate.json";
import TranslateName from "../Items/TranslateName";
import Video from "../../assets/morocco.mp4";
import Group from "../Items/Group";
import ButtonSwitchers from "../Items/ButtonSwitchers";
import flagMorocoo from "../../assets/flags/teams/morocco.svg";
const Stream = (props) =>{
    return(
        <main>
        <section className="match-stream">
            <div className="match-info">
                <div className="item-info">
                    {(props.lang !== "ar")?(<LocatoinBackground />):(<LocationBackgroundReverse/>)}
                    <TranslateName name={Translate.matches.matche01.stadium} lang={props.lang} classItem={"name-item-info"} />
                </div>
                <div className="item-info">
                    {(props.lang !== "ar")?(<ChanelBackground />):(<ChanelBackgroundReverse/>)}
                    <TranslateName name={Translate.matches.matche01.channel} lang={props.lang} classItem={"name-item-info"} />
                </div>
                <div className="item-info">
                    {(props.lang !== "ar")?(<CommentatorBackground />):(<CommentatorBackgroundReverse/>)}
                    <TranslateName name={Translate.matches.matche01.commentator} lang={props.lang} classItem={"name-item-info"}  />
                </div>
            </div>
            <video src= {Video} controls>
            </video>
        </section>
        <section className="details-match">
            <div className="group">
            <Group nameGroup="G" lang={props.lang}/>
            </div>
            <ButtonSwitchers leftName="Gam Plan" rightName="Stats"/>
            <div id="gam-plan" className="view-gam-plan">
                <div className="teams-gam-plan">
                    <div className="info-team">
                        <div className="team">
                            <img src={flagMorocoo} alt="" />
                            <span className="team-name">Mar</span>
                        </div>
                        <div className="gam-plan">
                            4-2-3-1
                        </div>
                    </div>
                </div>
                <div className="teams-gam-plan team-gam-plan-right">
                    <div className="info-team">
                        <div className="team">
                            <img src={flagMorocoo} alt="" />
                            <span className="team-name">Mar</span>
                        </div>
                        <div className="gam-plan">
                            4-3-3
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}

export default Stream