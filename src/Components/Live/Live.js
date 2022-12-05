import MatchInfo from "../Items/MatchInfo";
import MatchLive from "../Items/MatchLive";
import MatchClock from "../Items/MatchClock";
import { useEffect } from "react";
import { useState } from "react";
import Round from "../Items/Round";

import { getMatchesToday, getStats } from "../../Helpers";
const  Live = () =>{

    const[matches,setMatches] = useState(false);
    let checkMatch = false;

    let dataMatchs = [{
            stadium: "Al Janoub",
            channel:"Bein Sports 1 Max",
            commentator: "Raouf Khaleef",
        },
        {
            stadium: "Stadium 974",
            channel:"Bein Sports 2 Max",
            commentator: "Issam Chaouali",
        }
    ]
    useEffect(()=>{
        getMatchesToday().then((res) => {
            setMatches(res);
        })
    },[])
    
    return(
        <main className="main-matches">
        <div id="preloader" className="spinner-container">
            <div className="spinner"></div>
        </div>
        <div className="round">
            <Round />
        </div>
        <div className="list-matches">
            {
            
                (matches)?(
                    matches.map((match,index) => {
                        document.getElementById("preloader").style.display = "none";
                        if(match.status === "IN_PLAY")
                        {
                            checkMatch = true;
                            return(
                                <div className="match" key={match.id}>
                                    <MatchInfo stadium={dataMatchs[index].stadium} channel={dataMatchs[index].channel} commentator={dataMatchs[index].commentator}/>
                                    <MatchLive 
                                    firstTeam={[match.homeTeam,match.homeTeam.crest]} 
                                    secondTeam={[match.awayTeam,match.awayTeam.crest]} time={match.utcDate.split("T")[1].substring(0,5)}
                                    data = {
                                        {
                                            matchInfo:{
                                                stadium: dataMatchs[index].stadium,
                                                channel:dataMatchs[index].channel,
                                                commentator: dataMatchs[index].commentator,
                                            },
                                            homeTeam:{
                                                name: match.homeTeam.name,
                                                tla:  match.homeTeam.tla
                                            },

                                            awayTeam:{
                                                name: match.awayTeam.name,
                                                tla: match.awayTeam.tla
                                            }
                                        }
                                    }
                                    />
                                </div>
                            )
                        }
                        else if(match.status === "TIMED")
                        {
                            checkMatch = true;
                            return(
                                <div className="match" key={match.id}>
                                    <MatchInfo stadium={dataMatchs[index].stadium} channel={dataMatchs[index].channel} commentator={dataMatchs[index].commentator}/>
                                    <MatchClock firstTeam={[match.homeTeam,match.homeTeam.crest]} secondTeam={[match.awayTeam,match.awayTeam.crest]} time={match.utcDate.split("T")[1].substring(0,5)}/>
                                </div>
                            )
                        }
                    })
                ):null
            }
        </div>
    </main>
    )
}

export default Live;