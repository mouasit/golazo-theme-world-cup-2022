import MatchInfo from "../Items/MatchInfo";
import MatchLive from "../Items/MatchLive";
import MatchClock from "../Items/MatchClock";

const Live = () =>{
    return(
    <main>
        <div className="list-matches">
                <div className="match">
                    <MatchInfo stadium="Al Bayt" channel="Beinsport 4" commentator="Issam Chaouali"/>
                    <MatchLive firstTeam="Morocco" secondTeam="Croatia" />
                </div>
                <div className="match">
                    <MatchInfo stadium="Al Bayt" channel="Beinsport 4" commentator="Issam Chaouali"/>
                    <MatchClock firstTeam="bel" secondTeam="can" time="20:00"/>
                </div>
        </div>
    </main>
    )
}

export default Live;