
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

            if(props.groupStage && props.playOffs)
            {
                props.playOffs(true);
                props.groupStage(false);
            }

            if(props.setTomorrow && props.setToday)
            {
                 props.setToday(true);
                 props.setTomorrow(false);  
            }
        }}>
            {(activeToday)?(<ActiveButton/>):(<BackgroundButton />)}
            <span>{(props.first)?(props.first):"Today"}</span>
        </button>
        <button  className= {(activeTomorrow)?("active-time"):null} onClick={()=> {

            setActiveTomorrow(true);
            setActiveToday(false);

            if(props.setTomorrow && props.setToday)
            {
                props.setTomorrow(true);
                props.setToday(false);   
            }

            if(props.groupStage && props.playOffs)
            {
                props.playOffs(false);
                props.groupStage(true);
            }

        }}>
            {(activeTomorrow)?(<ActiveButton/>):(<BackgroundButton />)}
            <span>{(props.second)?(props.second):"Tomorrow"}</span>
        </button>
    </div>
    )
}

export default ListButton;