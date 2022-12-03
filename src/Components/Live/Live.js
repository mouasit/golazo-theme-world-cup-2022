import MatchInfo from "../Items/MatchInfo";
import MatchLive from "../Items/MatchLive";
import MatchClock from "../Items/MatchClock";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const  Live = () =>{

    const[matches,setMatches] = useState(false);

    const token = "6613335ea3b645f383893070f84e740a";
    const baseUrl = "/v4/competitions/2000";

    function getDateToday(){
        const date = new Date();
            
        let day = date.getDate();
        if(day.toString().length === 1)
            day = ('0' + day).slice(-2);
        day = day.split("").reverse().join("");

        let month = date.getMonth() + 1;
        if(month.toString().length === 1)
            month = ('0' + month).slice(-2);

        month = month.toString().split("").reverse().join("");

        let year = date.getFullYear();
        if(year.toString().length === 1)
            year = ('0' + year).slice(-2);
        year = year.toString().split("").reverse().join("");

        let currentDate = `${day}-${month}-${year}`;
        return currentDate.split("").reverse().join("");
    }

    async function  getMatchesToday(){
        const url = `${baseUrl}/matches`;

        return axios.get(url,{
             headers:{
                 "X-Auth-Token": token
             }
         }).then((res)=> {
             let currentDate = getDateToday();
 
             let matches = res.data.matches.filter((e)=>{
                console.log(e);
                 let splitDate = e.utcDate.split("T");
                 if(splitDate[0] >= currentDate)
                     return e;
             })
             return matches;
         })
    }

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
                        console.log(match);
                        return(
                        <div className="match" key={match.id}>
                            <MatchInfo stadium="Al Bayt" channel="Beinsport 4" commentator="Issam Chaouali"/>
                            <MatchClock firstTeam={[match.homeTeam,match.homeTeam.crest]} secondTeam={[match.awayTeam,match.awayTeam.crest]} time={match.utcDate.split("T")[1].substring(0,5)}/>
                        </div>
                        )
                    })
                ):null
            }
        </div>
    </main>
    )
}

export default Live;