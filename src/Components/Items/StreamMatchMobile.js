import React from "react";
import Group from "../Items/Group";
import ButtonSwitchers from "../Items/ButtonSwitchers";
import { useState } from "react";
import Gamplan from "../Items/GamPlan";
import Stats from "../Items/Stats";
import MatchStream from "../Items/MatchStream";
const StreamMatchMobile = (props) => {
    const [displayGamPlan,setDisplayGamPlan] = useState("view-gam-plan show-list");
    const [displayStats,setDisplayStats] = useState("view-stats hide-list");
    return (
        <React.Fragment>
                <MatchStream lang ={props.lang} />
                <section className="details-match">
                    <div className="group">
                        <Group nameGroup="G" lang={props.lang}/>
                    </div>
                    <ButtonSwitchers leftName="Gam Plan" rightName="Stats" setDisplayGamPlan={setDisplayGamPlan} setDisplayStats={setDisplayStats}/>
                    <Gamplan displayGamPlan={displayGamPlan} />
                    <Stats displayStats = {displayStats}  />
                </section>
        </React.Fragment>
    )
}

export default StreamMatchMobile;