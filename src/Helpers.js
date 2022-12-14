
import axios from "axios";
import { dataTeams } from "../src/dataTeams";

import { standings } from "./Standings";
import {scorers} from "./Scorers";

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


export function  getStandings(){

    return standings
}

export function  getScorers(){
    return scorers;
}


export function getSquad(teamPlayers)
{

    let splitTeam = teamPlayers.split(" ");
    let fill = [];
    let squad = [];

for (let index = 0; index < splitTeam.length; index++) {

    fill.push(splitTeam[index]);
    if(Number(splitTeam[index + 1]) || index === splitTeam.length - 1)
    {

        squad.push(fill);
        fill = [];
    }
}

for (var index = 0; index < squad.length; index++) {
    let obj = {};
    [obj.kitNumber,...obj.name] = squad[index];
    obj.name = obj.name.join(" ");
    fill.push(obj);
}

return fill;
}


var Latinise={};Latinise.latin_map={"??":"A",
"??":"A",
"???":"A",
"???":"A",
"???":"A",
"???":"A",
"???":"A",
"??":"A",
"??":"A",
"???":"A",
"???":"A",
"???":"A",
"???":"A",
"???":"A",
"??":"A",
"??":"A",
"??":"A",
"??":"A",
"???":"A",
"??":"A",
"??":"A",
"???":"A",
"??":"A",
"??":"A",
"??":"A",
"??":"A",
"??":"A",
"???":"A",
"??":"A",
"??":"A",
"???":"AA",
"??":"AE",
"??":"AE",
"??":"AE",
"???":"AO",
"???":"AU",
"???":"AV",
"???":"AV",
"???":"AY",
"???":"B",
"???":"B",
"??":"B",
"???":"B",
"??":"B",
"??":"B",
"??":"C",
"??":"C",
"??":"C",
"???":"C",
"??":"C",
"??":"C",
"??":"C",
"??":"C",
"??":"D",
"???":"D",
"???":"D",
"???":"D",
"???":"D",
"??":"D",
"???":"D",
"??":"D",
"??":"D",
"??":"D",
"??":"D",
"??":"DZ",
"??":"DZ",
"??":"E",
"??":"E",
"??":"E",
"??":"E",
"???":"E",
"??":"E",
"???":"E",
"???":"E",
"???":"E",
"???":"E",
"???":"E",
"???":"E",
"??":"E",
"??":"E",
"???":"E",
"??":"E",
"??":"E",
"???":"E",
"??":"E",
"??":"E",
"???":"E",
"???":"E",
"??":"E",
"??":"E",
"???":"E",
"???":"E",
"???":"ET",
"???":"F",
"??":"F",
"??":"G",
"??":"G",
"??":"G",
"??":"G",
"??":"G",
"??":"G",
"??":"G",
"???":"G",
"??":"G",
"???":"H",
"??":"H",
"???":"H",
"??":"H",
"???":"H",
"???":"H",
"???":"H",
"???":"H",
"??":"H",
"??":"I",
"??":"I",
"??":"I",
"??":"I",
"??":"I",
"???":"I",
"??":"I",
"???":"I",
"??":"I",
"??":"I",
"???":"I",
"??":"I",
"??":"I",
"??":"I",
"??":"I",
"??":"I",
"???":"I",
"???":"D",
"???":"F",
"???":"G",
"???":"R",
"???":"S",
"???":"T",
"???":"IS",
"??":"J",
"??":"J",
"???":"K",
"??":"K",
"??":"K",
"???":"K",
"???":"K",
"???":"K",
"??":"K",
"???":"K",
"???":"K",
"???":"K",
"??":"L",
"??":"L",
"??":"L",
"??":"L",
"???":"L",
"???":"L",
"???":"L",
"???":"L",
"???":"L",
"???":"L",
"??":"L",
"???":"L",
"??":"L",
"??":"L",
"??":"LJ",
"???":"M",
"???":"M",
"???":"M",
"???":"M",
"??":"N",
"??":"N",
"??":"N",
"???":"N",
"???":"N",
"???":"N",
"??":"N",
"??":"N",
"???":"N",
"??":"N",
"??":"N",
"??":"N",
"??":"NJ",
"??":"O",
"??":"O",
"??":"O",
"??":"O",
"???":"O",
"???":"O",
"???":"O",
"???":"O",
"???":"O",
"??":"O",
"??":"O",
"??":"O",
"??":"O",
"???":"O",
"??":"O",
"??":"O",
"??":"O",
"???":"O",
"??":"O",
"???":"O",
"???":"O",
"???":"O",
"???":"O",
"???":"O",
"??":"O",
"???":"O",
"???":"O",
"??":"O",
"???":"O",
"???":"O",
"??":"O",
"??":"O",
"??":"O",
"??":"O",
"??":"O",
"??":"O",
"???":"O",
"???":"O",
"??":"O",
"??":"OI",
"???":"OO",
"??":"E",
"??":"O",
"??":"OU",
"???":"P",
"???":"P",
"???":"P",
"??":"P",
"???":"P",
"???":"P",
"???":"P",
"???":"Q",
"???":"Q",
"??":"R",
"??":"R",
"??":"R",
"???":"R",
"???":"R",
"???":"R",
"??":"R",
"??":"R",
"???":"R",
"??":"R",
"???":"R",
"???":"C",
"??":"E",
"??":"S",
"???":"S",
"??":"S",
"???":"S",
"??":"S",
"??":"S",
"??":"S",
"???":"S",
"???":"S",
"???":"S",
"??":"T",
"??":"T",
"???":"T",
"??":"T",
"??":"T",
"???":"T",
"???":"T",
"??":"T",
"???":"T",
"??":"T",
"??":"T",
"???":"A",
"???":"L",
"??":"M",
"??":"V",
"???":"TZ",
"??":"U",
"??":"U",
"??":"U",
"??":"U",
"???":"U",
"??":"U",
"??":"U",
"??":"U",
"??":"U",
"??":"U",
"???":"U",
"???":"U",
"??":"U",
"??":"U",
"??":"U",
"???":"U",
"??":"U",
"???":"U",
"???":"U",
"???":"U",
"???":"U",
"???":"U",
"??":"U",
"??":"U",
"???":"U",
"??":"U",
"??":"U",
"??":"U",
"???":"U",
"???":"U",
"???":"V",
"???":"V",
"??":"V",
"???":"V",
"???":"VY",
"???":"W",
"??":"W",
"???":"W",
"???":"W",
"???":"W",
"???":"W",
"???":"W",
"???":"X",
"???":"X",
"??":"Y",
"??":"Y",
"??":"Y",
"???":"Y",
"???":"Y",
"???":"Y",
"??":"Y",
"???":"Y",
"???":"Y",
"??":"Y",
"??":"Y",
"???":"Y",
"??":"Z",
"??":"Z",
"???":"Z",
"???":"Z",
"??":"Z",
"???":"Z",
"??":"Z",
"???":"Z",
"??":"Z",
"??":"IJ",
"??":"OE",
"???":"A",
"???":"AE",
"??":"B",
"???":"B",
"???":"C",
"???":"D",
"???":"E",
"???":"F",
"??":"G",
"??":"G",
"??":"H",
"??":"I",
"??":"R",
"???":"J",
"???":"K",
"??":"L",
"???":"L",
"???":"M",
"??":"N",
"???":"O",
"??":"OE",
"???":"O",
"???":"OU",
"???":"P",
"??":"R",
"???":"N",
"???":"R",
"???":"S",
"???":"T",
"???":"E",
"???":"R",
"???":"U",
"???":"V",
"???":"W",
"??":"Y",
"???":"Z",
"??":"a",
"??":"a",
"???":"a",
"???":"a",
"???":"a",
"???":"a",
"???":"a",
"??":"a",
"??":"a",
"???":"a",
"???":"a",
"???":"a",
"???":"a",
"???":"a",
"??":"a",
"??":"a",
"??":"a",
"??":"a",
"???":"a",
"??":"a",
"??":"a",
"???":"a",
"??":"a",
"??":"a",
"??":"a",
"???":"a",
"???":"a",
"??":"a",
"??":"a",
"???":"a",
"???":"a",
"??":"a",
"???":"aa",
"??":"ae",
"??":"ae",
"??":"ae",
"???":"ao",
"???":"au",
"???":"av",
"???":"av",
"???":"ay",
"???":"b",
"???":"b",
"??":"b",
"???":"b",
"???":"b",
"???":"b",
"??":"b",
"??":"b",
"??":"o",
"??":"c",
"??":"c",
"??":"c",
"???":"c",
"??":"c",
"??":"c",
"??":"c",
"??":"c",
"??":"c",
"??":"d",
"???":"d",
"???":"d",
"??":"d",
"???":"d",
"???":"d",
"??":"d",
"???":"d",
"???":"d",
"???":"d",
"???":"d",
"??":"d",
"??":"d",
"??":"d",
"??":"i",
"??":"j",
"??":"j",
"??":"j",
"??":"dz",
"??":"dz",
"??":"e",
"??":"e",
"??":"e",
"??":"e",
"???":"e",
"??":"e",
"???":"e",
"???":"e",
"???":"e",
"???":"e",
"???":"e",
"???":"e",
"??":"e",
"??":"e",
"???":"e",
"??":"e",
"??":"e",
"???":"e",
"??":"e",
"??":"e",
"???":"e",
"???":"e",
"???":"e",
"??":"e",
"???":"e",
"??":"e",
"???":"e",
"???":"e",
"???":"et",
"???":"f",
"??":"f",
"???":"f",
"???":"f",
"??":"g",
"??":"g",
"??":"g",
"??":"g",
"??":"g",
"??":"g",
"??":"g",
"???":"g",
"???":"g",
"??":"g",
"???":"h",
"??":"h",
"???":"h",
"??":"h",
"???":"h",
"???":"h",
"???":"h",
"???":"h",
"??":"h",
"???":"h",
"??":"h",
"??":"hv",
"??":"i",
"??":"i",
"??":"i",
"??":"i",
"??":"i",
"???":"i",
"???":"i",
"??":"i",
"??":"i",
"???":"i",
"??":"i",
"??":"i",
"??":"i",
"???":"i",
"??":"i",
"??":"i",
"???":"i",
"???":"d",
"???":"f",
"???":"g",
"???":"r",
"???":"s",
"???":"t",
"???":"is",
"??":"j",
"??":"j",
"??":"j",
"??":"j",
"???":"k",
"??":"k",
"??":"k",
"???":"k",
"???":"k",
"???":"k",
"??":"k",
"???":"k",
"???":"k",
"???":"k",
"???":"k",
"??":"l",
"??":"l",
"??":"l",
"??":"l",
"??":"l",
"???":"l",
"??":"l",
"???":"l",
"???":"l",
"???":"l",
"???":"l",
"???":"l",
"??":"l",
"??":"l",
"???":"l",
"??":"l",
"??":"l",
"??":"lj",
"??":"s",
"???":"s",
"???":"s",
"???":"s",
"???":"m",
"???":"m",
"???":"m",
"??":"m",
"???":"m",
"???":"m",
"??":"n",
"??":"n",
"??":"n",
"???":"n",
"??":"n",
"???":"n",
"???":"n",
"??":"n",
"??":"n",
"???":"n",
"??":"n",
"???":"n",
"???":"n",
"??":"n",
"??":"n",
"??":"nj",
"??":"o",
"??":"o",
"??":"o",
"??":"o",
"???":"o",
"???":"o",
"???":"o",
"???":"o",
"???":"o",
"??":"o",
"??":"o",
"??":"o",
"??":"o",
"???":"o",
"??":"o",
"??":"o",
"??":"o",
"???":"o",
"??":"o",
"???":"o",
"???":"o",
"???":"o",
"???":"o",
"???":"o",
"??":"o",
"???":"o",
"???":"o",
"???":"o",
"??":"o",
"???":"o",
"???":"o",
"??":"o",
"??":"o",
"??":"o",
"??":"o",
"??":"o",
"???":"o",
"???":"o",
"??":"o",
"??":"oi",
"???":"oo",
"??":"e",
"???":"e",
"??":"o",
"???":"o",
"??":"ou",
"???":"p",
"???":"p",
"???":"p",
"??":"p",
"???":"p",
"???":"p",
"???":"p",
"???":"p",
"???":"p",
"???":"q",
"??":"q",
"??":"q",
"???":"q",
"??":"r",
"??":"r",
"??":"r",
"???":"r",
"???":"r",
"???":"r",
"??":"r",
"??":"r",
"???":"r",
"??":"r",
"???":"r",
"??":"r",
"???":"r",
"???":"r",
"??":"r",
"??":"r",
"???":"c",
"???":"c",
"??":"e",
"??":"r",
"??":"s",
"???":"s",
"??":"s",
"???":"s",
"??":"s",
"??":"s",
"??":"s",
"???":"s",
"???":"s",
"???":"s",
"??":"s",
"???":"s",
"???":"s",
"??":"s",
"??":"g",
"???":"o",
"???":"o",
"???":"u",
"??":"t",
"??":"t",
"???":"t",
"??":"t",
"??":"t",
"???":"t",
"???":"t",
"???":"t",
"???":"t",
"??":"t",
"???":"t",
"???":"t",
"??":"t",
"??":"t",
"??":"t",
"???":"th",
"??":"a",
"???":"ae",
"??":"e",
"???":"g",
"??":"h",
"??":"h",
"??":"h",
"???":"i",
"??":"k",
"???":"l",
"??":"m",
"??":"m",
"???":"oe",
"??":"r",
"??":"r",
"??":"r",
"???":"r",
"??":"t",
"??":"v",
"??":"w",
"??":"y",
"???":"tz",
"??":"u",
"??":"u",
"??":"u",
"??":"u",
"???":"u",
"??":"u",
"??":"u",
"??":"u",
"??":"u",
"??":"u",
"???":"u",
"???":"u",
"??":"u",
"??":"u",
"??":"u",
"???":"u",
"??":"u",
"???":"u",
"???":"u",
"???":"u",
"???":"u",
"???":"u",
"??":"u",
"??":"u",
"???":"u",
"??":"u",
"???":"u",
"??":"u",
"??":"u",
"???":"u",
"???":"u",
"???":"ue",
"???":"um",
"???":"v",
"???":"v",
"???":"v",
"??":"v",
"???":"v",
"???":"v",
"???":"v",
"???":"vy",
"???":"w",
"??":"w",
"???":"w",
"???":"w",
"???":"w",
"???":"w",
"???":"w",
"???":"w",
"???":"x",
"???":"x",
"???":"x",
"??":"y",
"??":"y",
"??":"y",
"???":"y",
"???":"y",
"???":"y",
"??":"y",
"???":"y",
"???":"y",
"??":"y",
"???":"y",
"??":"y",
"???":"y",
"??":"z",
"??":"z",
"???":"z",
"??":"z",
"???":"z",
"??":"z",
"???":"z",
"??":"z",
"???":"z",
"???":"z",
"???":"z",
"??":"z",
"??":"z",
"??":"z",
"???":"ff",
"???":"ffi",
"???":"ffl",
"???":"fi",
"???":"fl",
"??":"ij",
"??":"oe",
"???":"st",
"???":"a",
"???":"e",
"???":"i",
"???":"j",
"???":"o",
"???":"r",
"???":"u",
"???":"v",
"???":"x"};
String.prototype.latinise=function(){return this.replace(/[^A-Za-z0-9\[\] ]/g,function(a){return Latinise.latin_map[a]||a})};
String.prototype.latinize=String.prototype.latinise;
String.prototype.isLatin=function(){return this===this.latinise()}

export function getPicturePlayer(namePlayer,nameTeam){

    if(namePlayer === "Enner Valencia")
        return("https://digitalhub.fifa.com/transform/e9817141-9985-4b8a-818e-3a06260d7a8c/1442153993?io=transform:fill,width:792,height:900");

    if(namePlayer === "Mehdi Taremi")
        return("https://digitalhub.fifa.com/transform/69a40254-ff99-4324-964b-11a9d1a65d40/1441897703?io=transform:fill,width:792,height:900");
    if(namePlayer === "Salem Al-Dawsari")
        return ("https://digitalhub.fifa.com/transform/072ede2c-c624-4479-8a6d-7abe03473692/1442476890?io=transform:fill,width:792,height:900")
        for (var index = 0; index < dataTeams.length; index++) {

        if(dataTeams[index].name.toLowerCase() === nameTeam.toLowerCase())
        {
            for (let i = 0; i < dataTeams[index].squad.length; i++) {
                if(dataTeams[index].squad[i].last_name == null)
                if(dataTeams[index].squad[i].first_name.toLowerCase() === namePlayer.latinize().toLowerCase())
                {
                    return dataTeams[index].squad[i].image_url;
                }
                if(dataTeams[index].squad[i].first_name.concat(" ", dataTeams[index].squad[i].last_name).toLowerCase() === namePlayer.latinize().toLowerCase())
                {
                    return dataTeams[index].squad[i].image_url;
                }
            }
        }
        
    }
}