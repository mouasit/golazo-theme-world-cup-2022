import LocatoinBackground from "../Items/LocationBackground";
import LocationBackgroundReverse from "../Items/LocationReverse";
import ChanelBackground from "../Items/ChanelBackground";
import ChanelBackgroundReverse from "../Items/ChanelBackgroundReverse";
import CommentatorBackground from "../Items/CommentatorBackground";
import CommentatorBackgroundReverse from "../Items/CommentatorBackgroundReverse";
import Translate from "../../Translate.json";
import TranslateName from "../Items/TranslateName";
const MatchInfo = (props) => {
    return (
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
    )
}

export default MatchInfo;