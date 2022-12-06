import TitlePositon from "../Items/TitlePosition";
import PointSymbol from "../Items/PointSymbol";
import ButtonSwitchers from "../Items/ButtonSwitchers";
import Vs from "../Items/Vs";
import SoccerSymbol from "./SoccerSymbol";
import PlayerGamplan from "./PlayerGamplan";
import { getFlagTeamMatch , getPositions} from "../../Helpers";
import {useState, useEffect} from "react";

const Gamplan = (props) => {
    const [homeGkStarting,sethomeGkStarting] = useState(false);
    const [homeDfStarting,sethomeDfStarting] = useState(false);
    const [homeMdStarting,sethomeMdStarting] = useState(false);
    const [homeFoStarting,sethomeFoStarting] = useState(false);

    const [awayGkStarting,setawayGkStarting] = useState(false);
    const [awayDfStarting,setawayDfStarting] = useState(false);
    const [awayMdStarting,setawayMdStarting] = useState(false);
    const [awayFoStarting,setawayFoStarting] = useState(false);

    const [homeGkSubstitutions,sethomeGkSubstitutions] = useState(false);
    const [homeDfSubstitutions,sethomeDfSubstitutions] = useState(false);
    const [homeMdSubstitutions,sethomeMdSubstitutions] = useState(false);
    const [homeFoSubstitutions,sethomeFoSubstitutions] = useState(false);

    const [awayGkSubstitutions,setawayGkSubstitutions] = useState(false);
    const [awayDfSubstitutions,setawayDfSubstitutions] = useState(false);
    const [awayMdSubstitutions,setawayMdSubstitutions] = useState(false);
    const [awayFoSubstitutions,setawayFoSubstitutions] = useState(false);


    useEffect(()=>{
        getPositions(props.homeTeam.lineup.starting,"Goalkeeper", props.homeTeam.name).then((res)=>{
            if (res.length > 0) 
                sethomeGkStarting(res);
        });

        getPositions(props.homeTeam.lineup.starting,"Defence", props.homeTeam.name).then((res)=>{
            if (res.length > 0) 
                sethomeDfStarting(res);
        });

        getPositions(props.homeTeam.lineup.starting,"Midfield", props.homeTeam.name).then((res)=>{
            if (res.length > 0) 
                sethomeMdStarting(res);
        });
        getPositions(props.homeTeam.lineup.starting,"Offence", props.homeTeam.name).then((res)=>{
            if (res.length > 0) 
                sethomeFoStarting(res);
        });


        getPositions(props.awayTeam.lineup.starting,"Goalkeeper", props.awayTeam.name).then((res)=>{
            if (res.length > 0) 
                setawayGkStarting(res);
        });

        getPositions(props.awayTeam.lineup.starting,"Defence", props.awayTeam.name).then((res)=>{
            if (res.length > 0) 
                setawayDfStarting(res);
        });

        getPositions(props.awayTeam.lineup.starting,"Midfield", props.awayTeam.name).then((res)=>{
            if (res.length > 0) 
                setawayMdStarting(res);
        });
        getPositions(props.awayTeam.lineup.starting,"Offence", props.awayTeam.name).then((res)=>{
            if (res.length > 0) 
                setawayFoStarting(res);
        });













        getPositions(props.homeTeam.lineup.substitutions,"Goalkeeper", props.homeTeam.name).then((res)=>{
            if (res.length > 0) 
                sethomeGkSubstitutions(res);
        });

        getPositions(props.homeTeam.lineup.substitutions,"Defence", props.homeTeam.name).then((res)=>{
            if (res.length > 0) 
                sethomeDfSubstitutions(res);
        });

        getPositions(props.homeTeam.lineup.substitutions,"Midfield", props.homeTeam.name).then((res)=>{
            if (res.length > 0) 
                sethomeMdSubstitutions(res);
        });
        getPositions(props.homeTeam.lineup.substitutions,"Offence", props.homeTeam.name).then((res)=>{
            if (res.length > 0) 
                sethomeFoSubstitutions(res);
        });


        getPositions(props.awayTeam.lineup.substitutions,"Goalkeeper", props.awayTeam.name).then((res)=>{
            if (res.length > 0) 
                setawayGkSubstitutions(res);
        });

        getPositions(props.awayTeam.lineup.substitutions,"Defence", props.awayTeam.name).then((res)=>{
            if (res.length > 0) 
                setawayDfSubstitutions(res);
        });

        getPositions(props.awayTeam.lineup.substitutions,"Midfield", props.awayTeam.name).then((res)=>{
            if (res.length > 0) 
                setawayMdSubstitutions(res);
        });
        getPositions(props.awayTeam.lineup.substitutions,"Offence", props.awayTeam.name).then((res)=>{
            if (res.length > 0) 
                setawayFoSubstitutions(res);
        });


    },[])
    return(
    <div className={props.displayGamPlan}>
        <SoccerSymbol />
        <SoccerSymbol />
        <div className="teams-gam-plan">
            <div className="info-team">
                <div className="team">
                    <img src={getFlagTeamMatch(props.homeTeam.name)} alt={"Flag " + props.homeTeam.name } />
                    <span className="team-name">{props.homeTeam.tla}</span>
                </div>
                <div className="gam-plan">
                    <PointSymbol />
                    {props.homeTeam.lineup.gamPlan}
                    <PointSymbol />
                </div>
            </div>
            <div className="team-players">
                <ButtonSwitchers leftName="1st Team" rightName="Sabstitutes" setDisplayFirstTeamLeft={props.setDisplayFirstTeamLeft} setDisplaySabstitutesLeft={props.setDisplaySabstitutesLeft} showTeamLeft = {props.showTeamLeft} setShowTeamLeft = {props.setShowTeamLeft} />
                <div className={props.displayFirstTeamLeft}>
                    <div className="players-postion">
                        <TitlePositon namePosition="Goalkeeper" />
                        <div className="list-players">
                            {
                                (homeGkStarting)?(
                                    homeGkStarting.map((e,index)=>{
                                        return(
                                        
                                            <PlayerGamplan team={props.homeTeam.name} namePlayer={e.name} numberKit={e.kitNumber} key={index}/>
                                        )
                                    })
                                ):null
                            }
                        </div>
                    </div>

                    <div className="players-postion">
                        <TitlePositon namePosition="Defenders" />
                        <div className="list-players">
                            {
                                (homeDfStarting)?(
                                    homeDfStarting.map((e,index)=>{
                                        return(
                                        
                                            <PlayerGamplan team={props.homeTeam.name} namePlayer={e.name} numberKit={e.kitNumber} key={index}/>
                                        )
                                    })
                                ):null
                            }
                        </div>
                    </div>
                    <div className="players-postion">
                        <TitlePositon namePosition="Midfielders" />
                        <div className="list-players">
                            {
                                (homeMdStarting)?(
                                    homeMdStarting.map((e,index)=>{
                                        return(
                                        
                                            <PlayerGamplan team={props.homeTeam.name} namePlayer={e.name} numberKit={e.kitNumber} key={index}/>
                                        )
                                    })
                                ):null
                            }
                        </div>
                    </div>

                    <div className="players-postion">
                        <TitlePositon namePosition="Forward" />
                        <div className="list-players">
                            {
                                (homeFoStarting)?(
                                    homeFoStarting.map((e,index)=>{
                                        return(
                                        
                                            <PlayerGamplan team={props.homeTeam.name} namePlayer={e.name} numberKit={e.kitNumber} key={index}/>
                                        )
                                    })
                                ):null
                            }
                        </div>
                    </div>
                </div>
                <div className={props.displaySabstitutesLeft}>
                <div className="players-postion">
                        <TitlePositon namePosition="Goalkeeper" />
                        <div className="list-players">
                            {
                                (homeGkSubstitutions)?(
                                    homeGkSubstitutions.map((e,index)=>{
                                        return(
                                        
                                            <PlayerGamplan team={props.homeTeam.name} namePlayer={e.name} numberKit={e.kitNumber} key={index}/>
                                        )
                                    })
                                ):null
                            }
                        </div>
                    </div>

                    <div className="players-postion">
                        <TitlePositon namePosition="Defenders" />
                        <div className="list-players">
                            {
                                (homeDfSubstitutions)?(
                                    homeDfSubstitutions.map((e,index)=>{
                                        return(
                                        
                                            <PlayerGamplan team={props.homeTeam.name} namePlayer={e.name} numberKit={e.kitNumber} key={index}/>
                                        )
                                    })
                                ):null
                            }
                        </div>
                    </div>
                    <div className="players-postion">
                        <TitlePositon namePosition="Midfielders" />
                        <div className="list-players">
                            {
                                (homeMdSubstitutions)?(
                                    homeMdSubstitutions.map((e,index)=>{
                                        return(
                                        
                                            <PlayerGamplan team={props.homeTeam.name} namePlayer={e.name} numberKit={e.kitNumber} key={index}/>
                                        )
                                    })
                                ):null
                            }
                        </div>
                    </div>

                    <div className="players-postion">
                        <TitlePositon namePosition="Forward" />
                        <div className="list-players">
                            {
                                (homeFoSubstitutions)?(
                                    homeFoSubstitutions.map((e,index)=>{
                                        return(
                                        
                                            <PlayerGamplan team={props.homeTeam.name} namePlayer={e.name} numberKit={e.kitNumber} key={index}/>
                                        )
                                    })
                                ):null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Vs />
        <div className="teams-gam-plan team-gam-plan-right">
            <div className="info-team">
                <div className="team">
                    <img src={getFlagTeamMatch(props.awayTeam.name)} alt={"Flag " + props.awayTeam.name} />
                    <span className="team-name">{props.awayTeam.tla}</span>
                </div>
                <div className="gam-plan">
                    <PointSymbol />
                    {props.awayTeam.lineup.gamPlan}
                    <PointSymbol />
                </div>
            </div>
            <div className="team-players">
                <ButtonSwitchers leftName="1st Team" rightName="Sabstitutes" setDisplayFirstTeamRight={props.setDisplayFirstTeamRight} setDisplaySabstitutesRight={props.setDisplaySabstitutesRight} showTeamRight = {props.showTeamRight} setShowTeamRight = {props.setShowTeamRight}/>
                <div className={props.displayFirstTeamRight}>
                    <div className="players-postion">
                        <TitlePositon namePosition="Goalkeeper" />
                        <div className="list-players">
                            {
                                (awayGkStarting)?(
                                    awayGkStarting.map((e,index)=>{
                                        return(
                                        
                                            <PlayerGamplan team={props.awayTeam.name} namePlayer={e.name} numberKit={e.kitNumber} key={index}/>
                                        )
                                    })
                                ):null
                            }
                        </div>
                    </div>

                    <div className="players-postion">
                        <TitlePositon namePosition="Defenders" />
                        <div className="list-players">
                            {
                                (awayDfStarting)?(
                                    awayDfStarting.map((e,index)=>{
                                        return(
                                        
                                            <PlayerGamplan team={props.awayTeam.name} namePlayer={e.name} numberKit={e.kitNumber} key={index}/>
                                        )
                                    })
                                ):null
                            }
                        </div>
                    </div>
                    <div className="players-postion">
                        <TitlePositon namePosition="Midfielders" />
                        <div className="list-players">
                            {
                                (awayMdStarting)?(
                                    awayMdStarting.map((e,index)=>{
                                        return(
                                        
                                            <PlayerGamplan team={props.awayTeam.name} namePlayer={e.name} numberKit={e.kitNumber} key={index}/>
                                        )
                                    })
                                ):null
                            }
                        </div>
                    </div>

                    <div className="players-postion">
                        <TitlePositon namePosition="Forward" />
                        <div className="list-players">
                            {
                                (awayFoStarting)?(
                                    awayFoStarting.map((e,index)=>{
                                        return(
                                        
                                            <PlayerGamplan team={props.awayTeam.name} namePlayer={e.name} numberKit={e.kitNumber} key={index}/>
                                        )
                                    })
                                ):null
                            }
                        </div>
                    </div>
                </div>
                <div className={props.displaySabstitutesRight}>
                <div className="players-postion">
                        <TitlePositon namePosition="Goalkeeper" />
                        <div className="list-players">
                            {
                                (awayGkSubstitutions)?(
                                    awayGkSubstitutions.map((e,index)=>{
                                        return(
                                        
                                            <PlayerGamplan team={props.awayTeam.name} namePlayer={e.name} numberKit={e.kitNumber} key={index}/>
                                        )
                                    })
                                ):null
                            }
                        </div>
                    </div>

                    <div className="players-postion">
                        <TitlePositon namePosition="Defenders" />
                        <div className="list-players">
                            {
                                (awayDfSubstitutions)?(
                                    awayDfSubstitutions.map((e,index)=>{
                                        return(
                                        
                                            <PlayerGamplan team={props.awayTeam.name} namePlayer={e.name} numberKit={e.kitNumber} key={index}/>
                                        )
                                    })
                                ):null
                            }
                        </div>
                    </div>
                    <div className="players-postion">
                        <TitlePositon namePosition="Midfielders" />
                        <div className="list-players">
                            {
                                (awayMdSubstitutions)?(
                                    awayMdSubstitutions.map((e,index)=>{
                                        return(
                                        
                                            <PlayerGamplan team={props.awayTeam.name} namePlayer={e.name} numberKit={e.kitNumber} key={index}/>
                                        )
                                    })
                                ):null
                            }
                        </div>
                    </div>

                    <div className="players-postion">
                        <TitlePositon namePosition="Forward" />
                        <div className="list-players">
                            {
                                (awayFoSubstitutions)?(
                                    awayFoSubstitutions.map((e,index)=>{
                                        return(
                                        
                                            <PlayerGamplan team={props.awayTeam.name} namePlayer={e.name} numberKit={e.kitNumber} key={index}/>
                                        )
                                    })
                                ):null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Gamplan;