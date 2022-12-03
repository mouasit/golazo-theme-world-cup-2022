
import MatchClock from "../Items/MatchClock"

import React from "react";
const MatchTime = (props) => {
    return(
        <React.Fragment>
        <div className="list-match-time">
            <div className="list-matches">
                {
                    (props.matches)?(
                        props.matches.map((match)=>{
                            return(
                                <div className="match" key={match.id}>
                                    <MatchClock firstTeam={[match.homeTeam,match.homeTeam.crest]} secondTeam={[match.awayTeam,match.awayTeam.crest]} time={match.utcDate.split("T")[1].substring(0,5)}/>
                                </div>
                            )
                        })
                    ):null
                }
            </div>
        </div>
    </React.Fragment>
    )
}

export default MatchTime;