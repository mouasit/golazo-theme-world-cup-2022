import BackgroundButton from "../Items/BackgournButton";
import ActiveButton from "../Items/ActiveButton";
import { useState } from "react";
const ButtonSwitchers = (props) => {
    return(
        <div className="btn-display">
        <button className={(props.showInfo || props.showTeamLeft || props.showTeamRight)?("show"):("hide-item-left")}  onClick={(e) => {
            if(props.setShowInfo)
                props.setShowInfo(true);
            if(props.setShowTeamLeft)
                props.setShowTeamLeft(true);
            if(props.setShowTeamRight)
                props.setShowTeamRight(true);

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
                (props.showInfo || props.showTeamLeft || props.showTeamRight)?(<ActiveButton />):(<BackgroundButton />)
            }
            <span>{props.leftName}</span>
        </button>
        <div className={(!props.showInfo && props.showTeamLeft && !props.showTeamRight)?("hide hide-right"):("hide hide-left")}></div>
        <button className={(!props.showInfo && !props.showTeamLeft && !props.showTeamRight)?("show"):("hide-item-right")}  onClick={() => {
            if(props.setShowInfo)
                props.setShowInfo(false);
            if(props.setShowTeamLeft)
                props.setShowTeamLeft(false);
            if(props.setShowTeamRight)
                props.setShowTeamRight(false);

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
                (!props.showInfo && !props.showTeamLeft && !props.showTeamRight)?(<ActiveButton />):(<BackgroundButton />)
            }
            <span>{props.rightName}</span>
        </button>
    </div>
    )
}

export default ButtonSwitchers;