
import GroupF from "../Items/Groups/GroupF"
import LocatoinBackground from "../Items/Location";
import ChanelBackground from "../Items/ChanelBackground";
import CommentatorBackground from "../Items/CommentatorBackground";

const Live = () =>(
    <main>
        <section className="group-matches" aria-label="Group Matches">
            <div className="group-header">
                <GroupF />
            </div>
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
            </div>
        </section>
    </main>
)

export default Live;