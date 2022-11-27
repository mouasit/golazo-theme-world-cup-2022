
import { useState } from "react";
import ActiveButton from "../Items/ActiveButton";
import BackgroundButton from "../Items/BackgournButton";

const ListButton = (props) => {
    const[activeToday,setActiveToday] = useState(true);
    const[activeTomorrow,setActiveTomorrow] = useState(false);
    const[activeThisWeek,setActiveThisWeek] = useState(false);
    return(
        <div className="list-days-week">
        <button className= {(activeToday)?("active-time"):null} onClick={()=> {

            setActiveToday(true);
            setActiveTomorrow(false);
            setActiveThisWeek(false);

            props.setToday(true);
            props.setTomorrow(false);
            props.setThisWeek(false);
        }}>
            {(activeToday)?(<ActiveButton/>):(<BackgroundButton />)}
            <span>Today</span>
        </button>
        <button  className= {(activeTomorrow)?("active-time"):null} onClick={()=> {

            setActiveTomorrow(true);
            setActiveToday(false);
            setActiveThisWeek(false);

            props.setTomorrow(true);
            props.setToday(false);
            props.setThisWeek(false);
        }}>
            {(activeTomorrow)?(<ActiveButton/>):(<BackgroundButton />)}
            <span>Tomorrow</span>
        </button>
        <button className= {(activeThisWeek)?("active-time"):null} onClick={() => {

            setActiveThisWeek(true);
            setActiveTomorrow(false);
            setActiveToday(false);

            props.setThisWeek(true);
            props.setToday(false);
            props.setTomorrow(false);
        }}>
            {(activeThisWeek)?(<ActiveButton/>):(<BackgroundButton />)}
            <span>This Week</span>
        </button>
    </div>
    )
}

export default ListButton;