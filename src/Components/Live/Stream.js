import StreamMatchMobile from "../Items/StreamMatchMobile";
import StreamMatchDesktop from "../Items/StreamDesktop";
import {useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
const Stream = (props) =>{
    let location = useLocation();

    const [showTeamLeft, setShowTeamLeft] = useState(true);
    const [showTeamRight, setShowTeamRight] = useState(true);
    const [displayFirstTeamLeft,setDisplayFirstTeamLeft] = useState("list-positions show-list");
    const [displaySabstitutesLeft,setDisplaySabstitutesLeft] = useState("list-positions hide-list");
    const [displayFirstTeamRight,setDisplayFirstTeamRight] = useState("list-positions show-list");
    const [displaySabstitutesRight,setDisplaySabstitutesRight] = useState("list-positions hide-list");

    useEffect(() => {
        document.getElementById("Path_1611").style.fill = "#E32052";
        document.getElementById("liveMobile").classList.add("active");
      },[]);
    return(
        <main>
            <StreamMatchMobile lang={props.lang}

            data = {location.state}
            showTeamLeft = {showTeamLeft}
            setShowTeamLeft = {setShowTeamLeft}

            showTeamRight = {showTeamRight}
            setShowTeamRight = {setShowTeamRight}

            displayFirstTeamLeft = {displayFirstTeamLeft}
            setDisplayFirstTeamLeft = {setDisplayFirstTeamLeft}

            displaySabstitutesLeft = {displaySabstitutesLeft}
            setDisplaySabstitutesLeft = {setDisplaySabstitutesLeft}

            displayFirstTeamRight = {displayFirstTeamRight}
            setDisplayFirstTeamRight = {setDisplayFirstTeamRight}
            displaySabstitutesRight = {displaySabstitutesRight}
            setDisplaySabstitutesRight = {setDisplaySabstitutesRight}
            />
            
            <StreamMatchDesktop lang={props.lang}

            data = {location.state}

            showTeamLeft = {showTeamLeft}
            setShowTeamLeft = {setShowTeamLeft}

            showTeamRight = {showTeamRight}
            setShowTeamRight = {setShowTeamRight}
            
            displayFirstTeamLeft = {displayFirstTeamLeft}
            setDisplayFirstTeamLeft = {setDisplayFirstTeamLeft}

            displaySabstitutesLeft = {displaySabstitutesLeft}
            setDisplaySabstitutesLeft = {setDisplaySabstitutesLeft}

            displayFirstTeamRight = {displayFirstTeamRight}
            setDisplayFirstTeamRight = {setDisplayFirstTeamRight}
            displaySabstitutesRight = {displaySabstitutesRight}
            setDisplaySabstitutesRight = {setDisplaySabstitutesRight}
        />
    </main>
    )
}

export default Stream