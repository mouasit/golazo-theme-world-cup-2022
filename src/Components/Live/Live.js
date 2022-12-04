import MatchInfo from "../Items/MatchInfo";
import MatchLive from "../Items/MatchLive";
import MatchClock from "../Items/MatchClock";
import { useEffect } from "react";
import { useState } from "react";

import { getMatchesToday } from "../../Helpers";
const  Live = () =>{

    const[matches,setMatches] = useState(false);

    useEffect(()=>{
        getMatchesToday().then((res) => {
            setMatches(res);
        })
    },[])
    
    return(
    <main>
        <div className="list-matches">
            {
                (matches)?(
                    matches.map((match) => {
                        console.log(match.status);
                        if(match.status === "START")
                        {

                            return(
                                <div className="match" key={match.id}>
                                    <MatchInfo stadium="Khalifa" channel="Beinsport 1 Max" commentator="Ali Muhammad Ali"/>
                                    <MatchLive 
                                    firstTeam={[match.homeTeam,match.homeTeam.crest]} 
                                    secondTeam={[match.awayTeam,match.awayTeam.crest]} time={match.utcDate.split("T")[1].substring(0,5)}
                                    data = {
                                        {
                                            matchInfo:{
                                                stadium:"Khalifa",
                                                channel:"Beinsport 1 Max",
                                                commentator:"Ali Muhammad Ali"
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
                            return(
                                <div className="match" key={match.id}>
                                    <MatchInfo stadium="Ahmad Bin Ali" channel="Beinsport 2 Max" commentator="Issam Chaouali"/>
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