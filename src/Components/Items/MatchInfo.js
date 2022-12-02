import LocatoinBackground from "../Items/LocationBackground";
import ChanelBackground from "../Items/ChanelBackground";
import CommentatorBackground from "../Items/CommentatorBackground";
const MatchInfo = (props) => {
    return (
        <div className="match-info">
            <div className="item-info">
                <LocatoinBackground />
                <span className="name-item-info">{props.stadium}</span>
            </div>
            <div className="item-info">
                <ChanelBackground />
                <span className="name-item-info">{props.channel}</span>
            </div>
            <div className="item-info">
                <CommentatorBackground />
                <span className="name-item-info">{props.commentator}</span>
            </div>
        </div>
    )
}

export default MatchInfo;