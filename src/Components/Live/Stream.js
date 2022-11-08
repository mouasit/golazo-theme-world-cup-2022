import StreamMatchMobile from "../Items/StreamMatchMobile";
import StreamMatchDesktop from "../Items/StreamDesktop";
import { useState } from "react";
const Stream = (props) =>{
    const [displayFirstTeamLeft,setDisplayFirstTeamLeft] = useState("list-positions show-list");
    const [displaySabstitutesLeft,setDisplaySabstitutesLeft] = useState("list-positions hide-list");
    const [displayFirstTeamRight,setDisplayFirstTeamRight] = useState("list-positions show-list");
    const [displaySabstitutesRight,setDisplaySabstitutesRight] = useState("list-positions hide-list");
    return(
        <main>
        <StreamMatchMobile lang={props.lang}
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