import MatchInfo from "../Items/MatchInfo";
import MatchLive from "../Items/MatchLive";
import MatchClock from "../Items/MatchClock";
import Round from "../Items/Round";

const Live = () => {
    return (
        <main className="main-matches">
            <div className="round">
                <Round />
            </div>
            <div className="list-matches">
                <div className="match">
                    <MatchInfo stadium="Education City" channel="Bein Sports 1 Max" commentator="Jawad Bada" />
                    <MatchLive
                        homeTeam="Morocco"
                        awayTeam="Spain"
                        data={
                            {
                                matchInfo: {
                                    stadium: "Education City",
                                    channel: "Bein Sports 1 Max",
                                    commentator: "Jawad Bada",
                                },
                                homeTeam: {
                                    name: "Morocco",
                                    tla: "MAR"
                                },

                                awayTeam: {
                                    name: "Spain",
                                    tla: "ESP",
                                }
                            }
                        }
                    />
                </div>
                <div className="match">
                    <MatchInfo stadium="Lusail" channel="Bein Sports 2 Max" commentator="Hafid Derradji" />
                    <MatchClock homeTeam={["Portugal","Por"]} awayTeam={["Switzerland","Sui"]} time="20:00" />
                </div>

            </div>
        </main>
    )
}

export default Live;