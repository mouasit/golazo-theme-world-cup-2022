
import GroupF from "../Items/Groups/GroupF"
import LocatoinBackground from "../Items/Location";

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
                        <span className="name-stadium">Al Bayt</span>
                    </div>
                </div>
            </div>
        </section>
    </main>
)

export default Live;