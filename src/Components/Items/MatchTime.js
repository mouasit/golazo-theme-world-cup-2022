import CalanderBackground from "../Items/CalanderBackground";

import MatchClock from "../Items/MatchClock"

import React from "react";
const MatchTime = (props) => {
    return(
        <React.Fragment>
        <div className="list-match-time">
        {
            (props.date)?(
                <div className="date-row">
                    <div className="date">
                        <CalanderBackground />
                        <span>12 / 12 / 2022</span>
                    </div>
                </div>
            ):null
        }
            <div className="list-matches">
                <div className="match">
                    <MatchClock firstTeam="bel" secondTeam="can" time="20:00"/>
                </div>
                <div className="match">
                    <MatchClock firstTeam="bel" secondTeam="can" time="20:00"/>
                </div>
            </div>
        </div>
    </React.Fragment>
    )
}

export default MatchTime;