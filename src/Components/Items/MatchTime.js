
import MatchClock from "../Items/MatchClock";
import Round from "../Items/Round";
import React from "react";
const MatchTime = (props) => {
    return(
        <React.Fragment>
        <div className="list-match-time main-matches">
            <div className="round">
                <Round />
            </div>
            <div className="list-matches">
                {
                    (props.today)?(
                        <div className="match">
                            <MatchClock homeTeam= {["Morocco","Mar"]} awayTeam={["Spain","Esp"]} time="16:00"/>
                            <MatchClock homeTeam= {["Portugal","Por"]} awayTeam={["Switzerland", "Sui"]} time="20:00"/>
                        </div>
                    ):
                    (props.tomorrow)?(
                        <div className="match">
                            <div className="match">
                                <MatchClock homeTeam= {["Croatia","Cro"]} awayTeam={["Brazil","Bra"]} time="16:00"/>
                                <MatchClock homeTeam= {["Netherlands","Hol"]} awayTeam={["Argentina", "Arg"]} time="20:00"/>
                            </div>
                        </div>
                    ):null
                }
            </div>
        </div>
    </React.Fragment>
    )
}

export default MatchTime;