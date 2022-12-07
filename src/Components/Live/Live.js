import MatchInfo from "../Items/MatchInfo";
import MatchLive from "../Items/MatchLive";
import MatchClock from "../Items/MatchClock";
import Round from "../Items/Round";
import { useState,useEffect } from "react";


const Live = () => {

    const [preloader, setPreloader] = useState(true);

    useEffect(()=>{
        setTimeout(() => {
            setPreloader(false)
        }, 1000);
    }, [])

    return (
        <main className="main-matches">
            {
                (preloader)?(
                    <div className="spinner-container">
                        <div className="spinner"></div>
                    </div>
                ):null
            }
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
                    <MatchClock homeTeam="Portugal" awayTeam="Switzerland" time="20:00" />
                </div>

            </div>
        </main>
    )
}

export default Live;