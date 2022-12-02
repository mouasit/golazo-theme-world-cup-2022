import LocatoinBackground from "../Items/LocationBackground";
import ChanelBackground from "../Items/ChanelBackground";
import CommentatorBackground from "../Items/CommentatorBackground";
const MatchInfo = (props) => {
    return (
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
    )
}

export default MatchInfo;