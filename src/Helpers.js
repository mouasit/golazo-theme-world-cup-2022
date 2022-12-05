
import axios from "axios";
import { dataTeams } from "../src/dataTeams";

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

var Latinise={};Latinise.latin_map={"Á":"A",
"Ă":"A",
"Ắ":"A",
"Ặ":"A",
"Ằ":"A",
"Ẳ":"A",
"Ẵ":"A",
"Ǎ":"A",
"Â":"A",
"Ấ":"A",
"Ậ":"A",
"Ầ":"A",
"Ẩ":"A",
"Ẫ":"A",
"Ä":"A",
"Ǟ":"A",
"Ȧ":"A",
"Ǡ":"A",
"Ạ":"A",
"Ȁ":"A",
"À":"A",
"Ả":"A",
"Ȃ":"A",
"Ā":"A",
"Ą":"A",
"Å":"A",
"Ǻ":"A",
"Ḁ":"A",
"Ⱥ":"A",
"Ã":"A",
"Ꜳ":"AA",
"Æ":"AE",
"Ǽ":"AE",
"Ǣ":"AE",
"Ꜵ":"AO",
"Ꜷ":"AU",
"Ꜹ":"AV",
"Ꜻ":"AV",
"Ꜽ":"AY",
"Ḃ":"B",
"Ḅ":"B",
"Ɓ":"B",
"Ḇ":"B",
"Ƀ":"B",
"Ƃ":"B",
"Ć":"C",
"Č":"C",
"Ç":"C",
"Ḉ":"C",
"Ĉ":"C",
"Ċ":"C",
"Ƈ":"C",
"Ȼ":"C",
"Ď":"D",
"Ḑ":"D",
"Ḓ":"D",
"Ḋ":"D",
"Ḍ":"D",
"Ɗ":"D",
"Ḏ":"D",
"ǲ":"D",
"ǅ":"D",
"Đ":"D",
"Ƌ":"D",
"Ǳ":"DZ",
"Ǆ":"DZ",
"É":"E",
"Ĕ":"E",
"Ě":"E",
"Ȩ":"E",
"Ḝ":"E",
"Ê":"E",
"Ế":"E",
"Ệ":"E",
"Ề":"E",
"Ể":"E",
"Ễ":"E",
"Ḙ":"E",
"Ë":"E",
"Ė":"E",
"Ẹ":"E",
"Ȅ":"E",
"È":"E",
"Ẻ":"E",
"Ȇ":"E",
"Ē":"E",
"Ḗ":"E",
"Ḕ":"E",
"Ę":"E",
"Ɇ":"E",
"Ẽ":"E",
"Ḛ":"E",
"Ꝫ":"ET",
"Ḟ":"F",
"Ƒ":"F",
"Ǵ":"G",
"Ğ":"G",
"Ǧ":"G",
"Ģ":"G",
"Ĝ":"G",
"Ġ":"G",
"Ɠ":"G",
"Ḡ":"G",
"Ǥ":"G",
"Ḫ":"H",
"Ȟ":"H",
"Ḩ":"H",
"Ĥ":"H",
"Ⱨ":"H",
"Ḧ":"H",
"Ḣ":"H",
"Ḥ":"H",
"Ħ":"H",
"Í":"I",
"Ĭ":"I",
"Ǐ":"I",
"Î":"I",
"Ï":"I",
"Ḯ":"I",
"İ":"I",
"Ị":"I",
"Ȉ":"I",
"Ì":"I",
"Ỉ":"I",
"Ȋ":"I",
"Ī":"I",
"Į":"I",
"Ɨ":"I",
"Ĩ":"I",
"Ḭ":"I",
"Ꝺ":"D",
"Ꝼ":"F",
"Ᵹ":"G",
"Ꞃ":"R",
"Ꞅ":"S",
"Ꞇ":"T",
"Ꝭ":"IS",
"Ĵ":"J",
"Ɉ":"J",
"Ḱ":"K",
"Ǩ":"K",
"Ķ":"K",
"Ⱪ":"K",
"Ꝃ":"K",
"Ḳ":"K",
"Ƙ":"K",
"Ḵ":"K",
"Ꝁ":"K",
"Ꝅ":"K",
"Ĺ":"L",
"Ƚ":"L",
"Ľ":"L",
"Ļ":"L",
"Ḽ":"L",
"Ḷ":"L",
"Ḹ":"L",
"Ⱡ":"L",
"Ꝉ":"L",
"Ḻ":"L",
"Ŀ":"L",
"Ɫ":"L",
"ǈ":"L",
"Ł":"L",
"Ǉ":"LJ",
"Ḿ":"M",
"Ṁ":"M",
"Ṃ":"M",
"Ɱ":"M",
"Ń":"N",
"Ň":"N",
"Ņ":"N",
"Ṋ":"N",
"Ṅ":"N",
"Ṇ":"N",
"Ǹ":"N",
"Ɲ":"N",
"Ṉ":"N",
"Ƞ":"N",
"ǋ":"N",
"Ñ":"N",
"Ǌ":"NJ",
"Ó":"O",
"Ŏ":"O",
"Ǒ":"O",
"Ô":"O",
"Ố":"O",
"Ộ":"O",
"Ồ":"O",
"Ổ":"O",
"Ỗ":"O",
"Ö":"O",
"Ȫ":"O",
"Ȯ":"O",
"Ȱ":"O",
"Ọ":"O",
"Ő":"O",
"Ȍ":"O",
"Ò":"O",
"Ỏ":"O",
"Ơ":"O",
"Ớ":"O",
"Ợ":"O",
"Ờ":"O",
"Ở":"O",
"Ỡ":"O",
"Ȏ":"O",
"Ꝋ":"O",
"Ꝍ":"O",
"Ō":"O",
"Ṓ":"O",
"Ṑ":"O",
"Ɵ":"O",
"Ǫ":"O",
"Ǭ":"O",
"Ø":"O",
"Ǿ":"O",
"Õ":"O",
"Ṍ":"O",
"Ṏ":"O",
"Ȭ":"O",
"Ƣ":"OI",
"Ꝏ":"OO",
"Ɛ":"E",
"Ɔ":"O",
"Ȣ":"OU",
"Ṕ":"P",
"Ṗ":"P",
"Ꝓ":"P",
"Ƥ":"P",
"Ꝕ":"P",
"Ᵽ":"P",
"Ꝑ":"P",
"Ꝙ":"Q",
"Ꝗ":"Q",
"Ŕ":"R",
"Ř":"R",
"Ŗ":"R",
"Ṙ":"R",
"Ṛ":"R",
"Ṝ":"R",
"Ȑ":"R",
"Ȓ":"R",
"Ṟ":"R",
"Ɍ":"R",
"Ɽ":"R",
"Ꜿ":"C",
"Ǝ":"E",
"Ś":"S",
"Ṥ":"S",
"Š":"S",
"Ṧ":"S",
"Ş":"S",
"Ŝ":"S",
"Ș":"S",
"Ṡ":"S",
"Ṣ":"S",
"Ṩ":"S",
"Ť":"T",
"Ţ":"T",
"Ṱ":"T",
"Ț":"T",
"Ⱦ":"T",
"Ṫ":"T",
"Ṭ":"T",
"Ƭ":"T",
"Ṯ":"T",
"Ʈ":"T",
"Ŧ":"T",
"Ɐ":"A",
"Ꞁ":"L",
"Ɯ":"M",
"Ʌ":"V",
"Ꜩ":"TZ",
"Ú":"U",
"Ŭ":"U",
"Ǔ":"U",
"Û":"U",
"Ṷ":"U",
"Ü":"U",
"Ǘ":"U",
"Ǚ":"U",
"Ǜ":"U",
"Ǖ":"U",
"Ṳ":"U",
"Ụ":"U",
"Ű":"U",
"Ȕ":"U",
"Ù":"U",
"Ủ":"U",
"Ư":"U",
"Ứ":"U",
"Ự":"U",
"Ừ":"U",
"Ử":"U",
"Ữ":"U",
"Ȗ":"U",
"Ū":"U",
"Ṻ":"U",
"Ų":"U",
"Ů":"U",
"Ũ":"U",
"Ṹ":"U",
"Ṵ":"U",
"Ꝟ":"V",
"Ṿ":"V",
"Ʋ":"V",
"Ṽ":"V",
"Ꝡ":"VY",
"Ẃ":"W",
"Ŵ":"W",
"Ẅ":"W",
"Ẇ":"W",
"Ẉ":"W",
"Ẁ":"W",
"Ⱳ":"W",
"Ẍ":"X",
"Ẋ":"X",
"Ý":"Y",
"Ŷ":"Y",
"Ÿ":"Y",
"Ẏ":"Y",
"Ỵ":"Y",
"Ỳ":"Y",
"Ƴ":"Y",
"Ỷ":"Y",
"Ỿ":"Y",
"Ȳ":"Y",
"Ɏ":"Y",
"Ỹ":"Y",
"Ź":"Z",
"Ž":"Z",
"Ẑ":"Z",
"Ⱬ":"Z",
"Ż":"Z",
"Ẓ":"Z",
"Ȥ":"Z",
"Ẕ":"Z",
"Ƶ":"Z",
"Ĳ":"IJ",
"Œ":"OE",
"ᴀ":"A",
"ᴁ":"AE",
"ʙ":"B",
"ᴃ":"B",
"ᴄ":"C",
"ᴅ":"D",
"ᴇ":"E",
"ꜰ":"F",
"ɢ":"G",
"ʛ":"G",
"ʜ":"H",
"ɪ":"I",
"ʁ":"R",
"ᴊ":"J",
"ᴋ":"K",
"ʟ":"L",
"ᴌ":"L",
"ᴍ":"M",
"ɴ":"N",
"ᴏ":"O",
"ɶ":"OE",
"ᴐ":"O",
"ᴕ":"OU",
"ᴘ":"P",
"ʀ":"R",
"ᴎ":"N",
"ᴙ":"R",
"ꜱ":"S",
"ᴛ":"T",
"ⱻ":"E",
"ᴚ":"R",
"ᴜ":"U",
"ᴠ":"V",
"ᴡ":"W",
"ʏ":"Y",
"ᴢ":"Z",
"á":"a",
"ă":"a",
"ắ":"a",
"ặ":"a",
"ằ":"a",
"ẳ":"a",
"ẵ":"a",
"ǎ":"a",
"â":"a",
"ấ":"a",
"ậ":"a",
"ầ":"a",
"ẩ":"a",
"ẫ":"a",
"ä":"a",
"ǟ":"a",
"ȧ":"a",
"ǡ":"a",
"ạ":"a",
"ȁ":"a",
"à":"a",
"ả":"a",
"ȃ":"a",
"ā":"a",
"ą":"a",
"ᶏ":"a",
"ẚ":"a",
"å":"a",
"ǻ":"a",
"ḁ":"a",
"ⱥ":"a",
"ã":"a",
"ꜳ":"aa",
"æ":"ae",
"ǽ":"ae",
"ǣ":"ae",
"ꜵ":"ao",
"ꜷ":"au",
"ꜹ":"av",
"ꜻ":"av",
"ꜽ":"ay",
"ḃ":"b",
"ḅ":"b",
"ɓ":"b",
"ḇ":"b",
"ᵬ":"b",
"ᶀ":"b",
"ƀ":"b",
"ƃ":"b",
"ɵ":"o",
"ć":"c",
"č":"c",
"ç":"c",
"ḉ":"c",
"ĉ":"c",
"ɕ":"c",
"ċ":"c",
"ƈ":"c",
"ȼ":"c",
"ď":"d",
"ḑ":"d",
"ḓ":"d",
"ȡ":"d",
"ḋ":"d",
"ḍ":"d",
"ɗ":"d",
"ᶑ":"d",
"ḏ":"d",
"ᵭ":"d",
"ᶁ":"d",
"đ":"d",
"ɖ":"d",
"ƌ":"d",
"ı":"i",
"ȷ":"j",
"ɟ":"j",
"ʄ":"j",
"ǳ":"dz",
"ǆ":"dz",
"é":"e",
"ĕ":"e",
"ě":"e",
"ȩ":"e",
"ḝ":"e",
"ê":"e",
"ế":"e",
"ệ":"e",
"ề":"e",
"ể":"e",
"ễ":"e",
"ḙ":"e",
"ë":"e",
"ė":"e",
"ẹ":"e",
"ȅ":"e",
"è":"e",
"ẻ":"e",
"ȇ":"e",
"ē":"e",
"ḗ":"e",
"ḕ":"e",
"ⱸ":"e",
"ę":"e",
"ᶒ":"e",
"ɇ":"e",
"ẽ":"e",
"ḛ":"e",
"ꝫ":"et",
"ḟ":"f",
"ƒ":"f",
"ᵮ":"f",
"ᶂ":"f",
"ǵ":"g",
"ğ":"g",
"ǧ":"g",
"ģ":"g",
"ĝ":"g",
"ġ":"g",
"ɠ":"g",
"ḡ":"g",
"ᶃ":"g",
"ǥ":"g",
"ḫ":"h",
"ȟ":"h",
"ḩ":"h",
"ĥ":"h",
"ⱨ":"h",
"ḧ":"h",
"ḣ":"h",
"ḥ":"h",
"ɦ":"h",
"ẖ":"h",
"ħ":"h",
"ƕ":"hv",
"í":"i",
"ĭ":"i",
"ǐ":"i",
"î":"i",
"ï":"i",
"ḯ":"i",
"ị":"i",
"ȉ":"i",
"ì":"i",
"ỉ":"i",
"ȋ":"i",
"ī":"i",
"į":"i",
"ᶖ":"i",
"ɨ":"i",
"ĩ":"i",
"ḭ":"i",
"ꝺ":"d",
"ꝼ":"f",
"ᵹ":"g",
"ꞃ":"r",
"ꞅ":"s",
"ꞇ":"t",
"ꝭ":"is",
"ǰ":"j",
"ĵ":"j",
"ʝ":"j",
"ɉ":"j",
"ḱ":"k",
"ǩ":"k",
"ķ":"k",
"ⱪ":"k",
"ꝃ":"k",
"ḳ":"k",
"ƙ":"k",
"ḵ":"k",
"ᶄ":"k",
"ꝁ":"k",
"ꝅ":"k",
"ĺ":"l",
"ƚ":"l",
"ɬ":"l",
"ľ":"l",
"ļ":"l",
"ḽ":"l",
"ȴ":"l",
"ḷ":"l",
"ḹ":"l",
"ⱡ":"l",
"ꝉ":"l",
"ḻ":"l",
"ŀ":"l",
"ɫ":"l",
"ᶅ":"l",
"ɭ":"l",
"ł":"l",
"ǉ":"lj",
"ſ":"s",
"ẜ":"s",
"ẛ":"s",
"ẝ":"s",
"ḿ":"m",
"ṁ":"m",
"ṃ":"m",
"ɱ":"m",
"ᵯ":"m",
"ᶆ":"m",
"ń":"n",
"ň":"n",
"ņ":"n",
"ṋ":"n",
"ȵ":"n",
"ṅ":"n",
"ṇ":"n",
"ǹ":"n",
"ɲ":"n",
"ṉ":"n",
"ƞ":"n",
"ᵰ":"n",
"ᶇ":"n",
"ɳ":"n",
"ñ":"n",
"ǌ":"nj",
"ó":"o",
"ŏ":"o",
"ǒ":"o",
"ô":"o",
"ố":"o",
"ộ":"o",
"ồ":"o",
"ổ":"o",
"ỗ":"o",
"ö":"o",
"ȫ":"o",
"ȯ":"o",
"ȱ":"o",
"ọ":"o",
"ő":"o",
"ȍ":"o",
"ò":"o",
"ỏ":"o",
"ơ":"o",
"ớ":"o",
"ợ":"o",
"ờ":"o",
"ở":"o",
"ỡ":"o",
"ȏ":"o",
"ꝋ":"o",
"ꝍ":"o",
"ⱺ":"o",
"ō":"o",
"ṓ":"o",
"ṑ":"o",
"ǫ":"o",
"ǭ":"o",
"ø":"o",
"ǿ":"o",
"õ":"o",
"ṍ":"o",
"ṏ":"o",
"ȭ":"o",
"ƣ":"oi",
"ꝏ":"oo",
"ɛ":"e",
"ᶓ":"e",
"ɔ":"o",
"ᶗ":"o",
"ȣ":"ou",
"ṕ":"p",
"ṗ":"p",
"ꝓ":"p",
"ƥ":"p",
"ᵱ":"p",
"ᶈ":"p",
"ꝕ":"p",
"ᵽ":"p",
"ꝑ":"p",
"ꝙ":"q",
"ʠ":"q",
"ɋ":"q",
"ꝗ":"q",
"ŕ":"r",
"ř":"r",
"ŗ":"r",
"ṙ":"r",
"ṛ":"r",
"ṝ":"r",
"ȑ":"r",
"ɾ":"r",
"ᵳ":"r",
"ȓ":"r",
"ṟ":"r",
"ɼ":"r",
"ᵲ":"r",
"ᶉ":"r",
"ɍ":"r",
"ɽ":"r",
"ↄ":"c",
"ꜿ":"c",
"ɘ":"e",
"ɿ":"r",
"ś":"s",
"ṥ":"s",
"š":"s",
"ṧ":"s",
"ş":"s",
"ŝ":"s",
"ș":"s",
"ṡ":"s",
"ṣ":"s",
"ṩ":"s",
"ʂ":"s",
"ᵴ":"s",
"ᶊ":"s",
"ȿ":"s",
"ɡ":"g",
"ᴑ":"o",
"ᴓ":"o",
"ᴝ":"u",
"ť":"t",
"ţ":"t",
"ṱ":"t",
"ț":"t",
"ȶ":"t",
"ẗ":"t",
"ⱦ":"t",
"ṫ":"t",
"ṭ":"t",
"ƭ":"t",
"ṯ":"t",
"ᵵ":"t",
"ƫ":"t",
"ʈ":"t",
"ŧ":"t",
"ᵺ":"th",
"ɐ":"a",
"ᴂ":"ae",
"ǝ":"e",
"ᵷ":"g",
"ɥ":"h",
"ʮ":"h",
"ʯ":"h",
"ᴉ":"i",
"ʞ":"k",
"ꞁ":"l",
"ɯ":"m",
"ɰ":"m",
"ᴔ":"oe",
"ɹ":"r",
"ɻ":"r",
"ɺ":"r",
"ⱹ":"r",
"ʇ":"t",
"ʌ":"v",
"ʍ":"w",
"ʎ":"y",
"ꜩ":"tz",
"ú":"u",
"ŭ":"u",
"ǔ":"u",
"û":"u",
"ṷ":"u",
"ü":"u",
"ǘ":"u",
"ǚ":"u",
"ǜ":"u",
"ǖ":"u",
"ṳ":"u",
"ụ":"u",
"ű":"u",
"ȕ":"u",
"ù":"u",
"ủ":"u",
"ư":"u",
"ứ":"u",
"ự":"u",
"ừ":"u",
"ử":"u",
"ữ":"u",
"ȗ":"u",
"ū":"u",
"ṻ":"u",
"ų":"u",
"ᶙ":"u",
"ů":"u",
"ũ":"u",
"ṹ":"u",
"ṵ":"u",
"ᵫ":"ue",
"ꝸ":"um",
"ⱴ":"v",
"ꝟ":"v",
"ṿ":"v",
"ʋ":"v",
"ᶌ":"v",
"ⱱ":"v",
"ṽ":"v",
"ꝡ":"vy",
"ẃ":"w",
"ŵ":"w",
"ẅ":"w",
"ẇ":"w",
"ẉ":"w",
"ẁ":"w",
"ⱳ":"w",
"ẘ":"w",
"ẍ":"x",
"ẋ":"x",
"ᶍ":"x",
"ý":"y",
"ŷ":"y",
"ÿ":"y",
"ẏ":"y",
"ỵ":"y",
"ỳ":"y",
"ƴ":"y",
"ỷ":"y",
"ỿ":"y",
"ȳ":"y",
"ẙ":"y",
"ɏ":"y",
"ỹ":"y",
"ź":"z",
"ž":"z",
"ẑ":"z",
"ʑ":"z",
"ⱬ":"z",
"ż":"z",
"ẓ":"z",
"ȥ":"z",
"ẕ":"z",
"ᵶ":"z",
"ᶎ":"z",
"ʐ":"z",
"ƶ":"z",
"ɀ":"z",
"ﬀ":"ff",
"ﬃ":"ffi",
"ﬄ":"ffl",
"ﬁ":"fi",
"ﬂ":"fl",
"ĳ":"ij",
"œ":"oe",
"ﬆ":"st",
"ₐ":"a",
"ₑ":"e",
"ᵢ":"i",
"ⱼ":"j",
"ₒ":"o",
"ᵣ":"r",
"ᵤ":"u",
"ᵥ":"v",
"ₓ":"x"};
String.prototype.latinise=function(){return this.replace(/[^A-Za-z0-9\[\] ]/g,function(a){return Latinise.latin_map[a]||a})};
String.prototype.latinize=String.prototype.latinise;
String.prototype.isLatin=function(){return this==this.latinise()}

export function getPicturePlayer(namePlayer,nameTeam){

    if(namePlayer === "Enner Valencia")
        return("https://digitalhub.fifa.com/transform/e9817141-9985-4b8a-818e-3a06260d7a8c/1442153993?io=transform:fill,width:792,height:900");

    if(namePlayer === "Mehdi Taremi")
        return("https://digitalhub.fifa.com/transform/69a40254-ff99-4324-964b-11a9d1a65d40/1441897703?io=transform:fill,width:792,height:900");
    if(namePlayer === "Salem Al-Dawsari")
        return ("https://digitalhub.fifa.com/transform/072ede2c-c624-4479-8a6d-7abe03473692/1442476890?io=transform:fill,width:792,height:900")
    for (var index = 0; index < dataTeams.length; index++) {

        if(dataTeams[index].name.toLowerCase() == nameTeam.toLowerCase())
        {
            for (let i = 0; i < dataTeams[index].squad.length; i++) {
                if(dataTeams[index].squad[i].first_name.concat(" ", dataTeams[index].squad[i].last_name).toLowerCase() == namePlayer.latinize().toLowerCase())
                {
                    return dataTeams[index].squad[i].image_url;
                }
            }
        }
        
    }
}