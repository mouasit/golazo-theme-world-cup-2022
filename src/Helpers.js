
import axios from "axios";

import flagMoroccoMatch from "../src/assets/flags/teams/morocco.svg";
import flagNetherlandsMatch from "../src/assets/flags/teams/netherlands.svg";
import flagunitedStatesMatch from "../src/assets/flags/teams/united-states.svg";
import flagArgentinaMatch from "../src/assets/flags/teams/argentina.svg";
import flagAustraliaMatch from "../src/assets/flags/teams/australia.svg";
import flagJapanMatch from "../src/assets/flags/teams/japan.svg";
import flagFranceMatch from "../src/assets/flags/teams/france.svg";
import flagPolandMatch from "../src/assets/flags/teams/poland.svg";
import flagEnglandMatch from "../src/assets/flags/teams/england.svg";
import flagSenegalMatch from "../src/assets/flags/teams/senegal.svg";
import flagCroatiaMatch from "../src/assets/flags/teams/croatia.svg";
import flagBrazilMatch from "../src/assets/flags/teams/brazil.svg";
import flagSouthKorealMatch from "../src/assets/flags/teams/south-korea.svg";
import flagSpainMatch from "../src/assets/flags/teams/spain.svg";
import flagPortugalMatch from "../src/assets/flags/teams/portugal.svg";
import flagSwitzerlandMatch from "../src/assets/flags/teams/switzerland.svg";


import flagQatarGroup from "../src/assets/flags-groups/qatar.svg";
import flagArgentinaGroup from "../src/assets/flags-groups/argentina.svg";
import flagNetherlandsGroup from "../src/assets/flags-groups/netherlands.svg";
import flagSenegalGroup from "../src/assets/flags-groups/senegal.svg";
import flagEcuadorGroup from "../src/assets/flags-groups/ecuador.svg";
import flagEnglandGroup from "../src/assets/flags-groups/england.svg";
import flagUnitedStatesGroup from "../src/assets/flags-groups/united-states.svg";
import flagIranGroup from "../src/assets/flags-groups/iran.svg";
import flagWalesGroup from "../src/assets/flags-groups/wales.svg";
import flagPolandGroup from "../src/assets/flags-groups/poland.svg";
import flagMexicoGroup from "../src/assets/flags-groups/mexico.svg";
import flagSaudiArabiaGroup from "../src/assets/flags-groups/saudi-arabia.svg";
import flagFranceGroup from "../src/assets/flags-groups/france.svg";
import flagAustraliaGroup from "../src/assets/flags-groups/australia.svg";
import flagTunisiaGroup from "../src/assets/flags-groups/tunisia.svg";
import flagDenmarkGroup from "../src/assets/flags-groups/denmark.svg";
import flagJapanGroup from "../src/assets/flags-groups/japan.svg";
import flagSpainGroup from "../src/assets/flags-groups/spain.svg";
import flagGermanyGroup from "../src/assets/flags-groups/germany.svg";
import flagCostaRicaGroup from "../src/assets/flags-groups/costa-rica.svg";
import flagMoroccoGroup from "../src/assets/flags-groups/morocco.svg";
import flagCroatiaGroup from "../src/assets/flags-groups/croatia.svg";
import flagBelgiumGroup from "../src/assets/flags-groups/belgium.svg";
import flagCanadaGroup from "../src/assets/flags-groups/canada.svg";
import flagBrazilGroup from "../src/assets/flags-groups/brazil.svg";
import flagSwitzerlandGroup from "../src/assets/flags-groups/switzerland.svg";
import flagCameroonGroup from "../src/assets/flags-groups/cameroon.svg";
import flagSerbiaGroup from "../src/assets/flags-groups/serbia.svg";
import flagPortugalGroup from "../src/assets/flags-groups/portugal.svg";
import flagSouthKoreaGroup from "../src/assets/flags-groups/south-korea.svg";
import flagUruguayGroup from "../src/assets/flags-groups/uruguay.svg";
import flagGhanaGroup from "../src/assets/flags-groups/ghana.svg";

import flagEcuadorRank from "../src/assets/flags-team-ranking/ecuador.svg";
import flagEnglandRank from "../src/assets/flags-team-ranking/england.svg";
import flagNetherlandsRank from "../src/assets/flags-team-ranking/netherlands.svg";
import flagArgentinaRank from "../src/assets/flags-team-ranking/argentina.svg";
import flagFranceRank from "../src/assets/flags-team-ranking/france.svg";
import flagSpainRank from "../src/assets/flags-team-ranking/spain.svg";
import flagIranRank from "../src/assets/flags-team-ranking/iran.svg";
import flagSaudiaArabiaRank from "../src/assets/flags-team-ranking/saudia-arabia.svg";
import flagPortugalRank from "../src/assets/flags-team-ranking/portugal.svg";
import flagSwitzerlandRank from "../src/assets/flags-team-ranking/switzerland.svg";
import flagSenegalRank from "../src/assets/flags-team-ranking/senegal.svg";
import flagMoroccoRank from "../src/assets/flags-team-ranking/morocco.svg";
import flagPolandRank from "../src/assets/flags-team-ranking/poland.svg";
import flagJapanRank from "../src/assets/flags-team-ranking/japan.svg";
import flagCroatiaRank from "../src/assets/flags-team-ranking/croatia.svg";
import flagBrazilRank from "../src/assets/flags-team-ranking/brazil.svg";
import flagSouthKoreaRank from "../src/assets/flags-team-ranking/south-korea.svg";

export const getFlagTeamRanking = (nameTeam)=>{

    if(nameTeam === "Morocco")
        return flagMoroccoRank;
    if(nameTeam === "Ecuador")
        return flagEcuadorRank;
    if(nameTeam === "England")
        return flagEnglandRank;
    if(nameTeam === "Netherlands")
        return flagNetherlandsRank;
    if(nameTeam === "Argentina")
        return flagArgentinaRank;
    if(nameTeam === "France")
        return flagFranceRank;
    if(nameTeam === "Spain")
        return flagSpainRank;
    if(nameTeam === "Iran")
        return flagIranRank;
    if(nameTeam === "Saudi Arabia")
        return flagSaudiaArabiaRank;
    if(nameTeam === "Portugal")
        return flagPortugalRank;
    if (nameTeam === "Switzerland")
        return flagSwitzerlandRank;
    if (nameTeam === "Senegal")
        return flagSenegalRank;
    if (nameTeam === "Poland")
        return flagPolandRank;
    if (nameTeam === "Japan")
        return flagJapanRank;
    if (nameTeam === "Croatia")
        return flagCroatiaRank;
    if (nameTeam === "Brazil")
        return flagBrazilRank;
    if (nameTeam === "South Korea")
        return flagSouthKoreaRank;
}

export const getFlagTeamGroup = (nameTeam)=>{

    if (nameTeam === "Netherlands")
        return flagNetherlandsGroup;
    if (nameTeam === "Senegal")
        return flagSenegalGroup;
    if (nameTeam === "Ecuador")
        return flagEcuadorGroup;
    if (nameTeam === "Qatar")
        return flagQatarGroup;
    if (nameTeam === "England")
        return flagEnglandGroup;
    if (nameTeam === "United States")
        return flagUnitedStatesGroup;
    if (nameTeam === "Iran")
        return flagIranGroup;
    if (nameTeam === "Wales")
        return flagWalesGroup;
    if (nameTeam === "Argentina")
        return flagArgentinaGroup;
    if (nameTeam === "Poland")
        return flagPolandGroup;
    if (nameTeam === "Mexico")
        return flagMexicoGroup;
    if (nameTeam === "Saudi Arabia")
        return flagSaudiArabiaGroup;
    if (nameTeam === "France")
        return flagFranceGroup;
    if (nameTeam === "Australia")
        return flagAustraliaGroup;
    if (nameTeam === "Tunisia")
        return flagTunisiaGroup;
    if (nameTeam === "Denmark")
        return flagDenmarkGroup;
    if (nameTeam === "Japan")
        return flagJapanGroup;
    if (nameTeam === "Spain")
        return flagSpainGroup;
    if (nameTeam === "Germany")
        return flagGermanyGroup;
    if (nameTeam === "Costa Rica")
        return flagCostaRicaGroup;
    if (nameTeam === "Morocco")
        return flagMoroccoGroup;
    if (nameTeam === "Croatia")
        return flagCroatiaGroup;
    if (nameTeam === "Belgium")
        return flagBelgiumGroup;
    if (nameTeam === "Canada")
        return flagCanadaGroup;
    if (nameTeam === "Brazil")
        return flagBrazilGroup;
    if (nameTeam === "Switzerland")
        return flagSwitzerlandGroup;
    if (nameTeam === "Cameroon")
        return flagCameroonGroup;
    if (nameTeam === "Serbia")
        return flagSerbiaGroup;
    if (nameTeam === "Portugal")
        return flagPortugalGroup;
    if (nameTeam === "South Korea")
        return flagSouthKoreaGroup;
    if (nameTeam === "Uruguay")
        return flagUruguayGroup;
    if (nameTeam === "Ghana")
        return flagGhanaGroup;
    

}


export const getFlagTeamMatch = (nameTeam)=>{

    if (nameTeam === "Morocco")
        return flagMoroccoMatch;
    if (nameTeam === "Netherlands")
        return flagNetherlandsMatch;
    if(nameTeam === "United States")
        return flagunitedStatesMatch;
    if(nameTeam === "Argentina")
        return flagArgentinaMatch;
    if (nameTeam === "Australia")
        return flagAustraliaMatch;
    if (nameTeam === "France")
        return flagFranceMatch;
    if (nameTeam === "Poland")
        return flagPolandMatch;
    if (nameTeam === "England")
        return flagEnglandMatch;
    if (nameTeam === "Senegal")
        return flagSenegalMatch;
    if (nameTeam === "Japan")
        return flagJapanMatch;
    if (nameTeam === "Croatia")
        return flagCroatiaMatch;
    if (nameTeam === "Brazil")
        return flagBrazilMatch;
    if (nameTeam === "South Korea")
        return flagSouthKorealMatch;
    if (nameTeam === "Spain")
        return flagSpainMatch;
    if (nameTeam === "Portugal")
        return flagPortugalMatch;
    if (nameTeam === "Switzerland")
        return flagSwitzerlandMatch;
}



export const handleDropdown = (buttonDropdown,setArrow) =>{
    let listDropdown = document.body.querySelectorAll(".list-item");
    let lock = true;
    let useKey = false;
    let index = 0;
    let currentIndex = 0;
    let click = false;

    buttonDropdown.addEventListener("click", ()=>{
        let toggle = false;
        listDropdown.forEach((e)=>{
            if(e.style.display === "flex")
            {
                toggle = true;
                return ;
            }
        });
        if(toggle)
        {
            listDropdown.forEach((element)=>{element.style.display = "none"});
            setArrow("close");
            lock = false;
            useKey = false;
        }
        else
        {
            listDropdown.forEach((element)=>{element.style.display = "flex"});
            setArrow("open");
            lock = true;
            useKey = true;
        }
    });
    
    buttonDropdown.addEventListener("blur", ()=>{
        lock = false;
    });

    listDropdown.forEach((e) => {
        let listButtons = e.querySelectorAll("button");
        listButtons.forEach(e => {
            e.addEventListener("click", () => {
                listDropdown.forEach((element)=>{element.style.display = "none"});
                setArrow("close");
                click = true;
                lock = false;
                useKey = false;
            })
        });
    })

    listDropdown.forEach((e)=>{
        e.querySelector(".item").addEventListener("click",()=>{
            lock = true;
        });
    })

    listDropdown.forEach((e) => {
        e.querySelector(".item").addEventListener("mouseout",()=>{
            if (!click)
                lock = false;
        });
    })
    
    document.addEventListener("click", ()=>{
        if(!lock)
        {
            listDropdown.forEach((element)=>{element.style.display = "none"});
            setArrow("close");
            lock = true;
            useKey = false;
        }
    });

    document.addEventListener("keydown",(e)=>{
        if(useKey && (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Tab"))
        {
            let items = [];

            listDropdown.forEach((e)=>{
                items.push(e.querySelectorAll("button"))
            })

            if (e.key === "Tab")
            {
                let checkClose = false;

                listDropdown.forEach((e) => {
                    let listButtons = e.querySelectorAll("button");

                    if (listButtons[listButtons.length - 1] === document.activeElement)
                    {
                        listDropdown.forEach((element)=>{element.style.display = "none"});
                        setArrow("close");
                        lock = true;
                        useKey = false;
                        index = 0;
                        currentIndex = 0;
                        checkClose = true;
                        return ;
                    }
                })

                if(!checkClose)
                {
                    index++;
                    currentIndex = index - 1;
                }
            }

            if (e.key === "ArrowDown")
            { 
                e.preventDefault();
                if(index > items.length - 1)
                    index = 0;
                let i = index++;
                
                items.forEach((e)=>{
                    e[i].focus();
                })
                currentIndex = index - 1;
            }
            
            if (e.key === "ArrowUp")
            {
                e.preventDefault();
                if(currentIndex === 0)
                    currentIndex = items.length;
                let i = --currentIndex;
                items.forEach((e)=>{e[i].focus();})
                index = currentIndex + 1;
            }
        }
    });
}


const token = "93373a20f41444c7ad3308690882fe45";
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

export async function  getMatchesToday(){
    const url = `${baseUrl}/matches`;

    return axios.get(url,{
         headers:{
             "X-Auth-Token": token
         }
     }).then((res)=> {
         let currentDate = getDateToday();
         let matches = res.data.matches.filter((e)=>{
             let splitDate = e.utcDate.split("T");
             if(splitDate[0] === currentDate)
                 return e;
         })
         return matches;
     })
}

export async function  getMatchesTomorrow(){
    const url = `${baseUrl}/matches`;

    return axios.get(url,{
         headers:{
             "X-Auth-Token": token
         }
     }).then((res)=> {
         let currentDate = getDateToday();

         let matches = res.data.matches.filter((e)=>{
             let splitDate = e.utcDate.split("T");

             let dayMatch = splitDate[0].split("-")[2];
             let currentDay = currentDate.split("-")[2];

             if((Number(dayMatch) - Number(currentDay)) === 1 )
                 return e;
         })
         return matches;
     })
}


export async function  getStandings(){
    const url = `${baseUrl}/standings`;

    return axios.get(url,{
         headers:{
             "X-Auth-Token": token
         }
     }).then((res)=> {
         return res.data.standings;
     })
}

export async function  getScorers(){
    const url = `${baseUrl}/scorers`;

    return axios.get(url,{
         headers:{
             "X-Auth-Token": token
         }
     }).then((res)=> {
        return res.data.scorers;
     })
}

