import BackgroundButton from "../Items/BackgournButton";
import ActiveButton from "../Items/ActiveButton";
import { useState } from "react";
const ButtonSwitchers = (props) => {
    const [showLeft, setShowLeft] = useState(true);
    return(
        <div className="btn-display">
        <button className={(showLeft)?("show"):("hide-item-left")}  onClick={(e) => {
            setShowLeft(true);

            if(props.setDisplayGamPlan)
            {
                props.setDisplayGamPlan("view-gam-plan show-list");
                props.setDisplayStats("view-stats hide-list");
            }

            if(props.setDisplayFirstTeamLeft)
            {
                props.setDisplayFirstTeamLeft("list-positions show-list");
                props.setDisplaySabstitutesLeft("list-positions hide-list");
            }

            if(props.setDisplayFirstTeamRight)
            {
                props.setDisplayFirstTeamRight("list-positions show-list");
                props.setDisplaySabstitutesRight("list-positions hide-list");
            }
            }}>
            {
                (showLeft)?(<ActiveButton />):(<BackgroundButton />)
            }
            <span>{props.leftName}</span>
        </button>
        <div className={(!showLeft)?("hide hide-right"):("hide hide-left")}></div>
        <button className={(!showLeft)?("show"):("hide-item-right")}  onClick={() => {
            setShowLeft(false);

            if(props.setDisplayGamPlan)
            {
                props.setDisplayGamPlan("view-gam-plan hide-list");
                props.setDisplayStats("view-stats show-list");
            }

            if(props.setDisplayFirstTeamLeft)
            {
                props.setDisplayFirstTeamLeft("list-positions hide-list");
                props.setDisplaySabstitutesLeft("list-positions show-list");
            }

            if(props.setDisplayFirstTeamRight)
            {
                props.setDisplayFirstTeamRight("list-positions hide-list");
                props.setDisplaySabstitutesRight("list-positions show-list");
            }
            }}>
            {
                
                (!showLeft)?(<ActiveButton />):(<BackgroundButton />)
            }
            <span>{props.rightName}</span>
        </button>
    </div>
    )
}

export default ButtonSwitchers;