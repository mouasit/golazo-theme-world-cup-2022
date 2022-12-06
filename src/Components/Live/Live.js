import MatchInfo from "../Items/MatchInfo";
import MatchLive from "../Items/MatchLive";
import MatchClock from "../Items/MatchClock";
import { useEffect } from "react";
import { useState } from "react";
import Round from "../Items/Round";

import { getMatchesToday, getSquad } from "../../Helpers";

let firstTeamStarting = getSquad("1 Yassine BOUNOU 2 Achraf HAKIMI 3 Noussair MAZRAOUI 5 Nayef AGUERD 6 Romain SAISS 4 Sofyan AMRABAT 8 Azzedine OUNAHI 11 Abdelhamid SABIRI 7 Hakim ZIYECH 17 Sofiane BOUFAL 19 Youssef EN-NESYRI");
let firstTeamSubstitutions = getSquad("12 Munir mohamedi 22 Ahmed reda tagnaouti 9 Abderrazak HAMDALLAH 10 Anass ZAROURY 13 Ilias CHAIR 14 Zakaria ABOUKHLAL 15 Selim AMALLAH 16 Abde EZZALZOULI 18 Jawad EL YAMIQ 20 Achraf DARI 21 Walid CHEDDIRA 23 Bilal EL KHANNOUSS 24 Badr BENOUN 25 Yahya ATTIAT-ALLAH 26 Yahya JABRANE");

let secondTeamStarting = getSquad("23 Unai SIMON 2 AZPILICUETA 4 Pau TORRES 14 Jordi Alba 16 Dani Carvajal 5 BUSQUETS 9 Koke 26 Pedri 7 Alvaro MORATA 12 Nico WILLIAMS 21 Dani OLMO");
let secondTeamSubstitutions = getSquad("1 Robert SANCHEZ 13 David RAYA 3 Pau TORRES 14 Jordi Alba 16 Dani Carvajal 5 BUSQUETS 9 Koke 26 Pedri 7 Alvaro MORATA 12 Nico WILLIAMS 21 Dani OLMO 25 FATI");

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
                                                tla:  match.homeTeam.tla,
                                                lineup:{

                                                    gamPlan: "4-3-3",
                                                    starting: firstTeamStarting,
                                                    substitutions : firstTeamSubstitutions
                                                }

                                            },

                                            awayTeam:{
                                                name: match.awayTeam.name,
                                                tla: match.awayTeam.tla,
                                                lineup:{
                                                    gamPlan: "4-3-3",
                                                    starting: secondTeamStarting,
                                                    substitutions : secondTeamSubstitutions
                                                }
                                                
                                            }
                                        }
                                    }
                                    />
                                    {/* <MatchInfo stadium={dataMatchs[index].stadium} channel={dataMatchs[index].channel} commentator={dataMatchs[index].commentator}/>
                                    <MatchClock firstTeam={[match.homeTeam,match.homeTeam.crest]} secondTeam={[match.awayTeam,match.awayTeam.crest]} time={match.utcDate.split("T")[1].substring(0,5)}/> */}
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