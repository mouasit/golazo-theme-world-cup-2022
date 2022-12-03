
import { useState } from "react";
import ActiveButton from "../Items/ActiveButton";
import BackgroundButton from "../Items/BackgournButton";

const ListButton = (props) => {
    const[activeToday,setActiveToday] = useState(true);
    const[activeTomorrow,setActiveTomorrow] = useState(false);
    return(
        <div className="list-days-week">
        <button className= {(activeToday)?("active-time"):null} onClick={()=> {

            setActiveToday(true);
            setActiveTomorrow(false);

            props.setToday(true);
            props.setTomorrow(false);
        }}>
            {(activeToday)?(<ActiveButton/>):(<BackgroundButton />)}
            <span>Today</span>
        </button>
        <button  className= {(activeTomorrow)?("active-time"):null} onClick={()=> {

            setActiveTomorrow(true);
            setActiveToday(false);

            props.setTomorrow(true);
            props.setToday(false);
        }}>
            {(activeTomorrow)?(<ActiveButton/>):(<BackgroundButton />)}
            <span>Tomorrow</span>
        </button>
    </div>
    )
}

export default ListButton;