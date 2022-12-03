
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