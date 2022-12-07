import TitlePositon from "../Items/TitlePosition";
import PointSymbol from "../Items/PointSymbol";
import ButtonSwitchers from "../Items/ButtonSwitchers";
import Vs from "../Items/Vs";
import SoccerSymbol from "./SoccerSymbol";
import PlayerGamplan from "./PlayerGamplan";
import { getFlagTeamMatch} from "../../Helpers";

const Gamplan = (props) => {
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
                    4-3-3
                    <PointSymbol />
                </div>
            </div>
            <div className="team-players">
                <ButtonSwitchers leftName="1st Team" rightName="Sabstitutes" setDisplayFirstTeamLeft={props.setDisplayFirstTeamLeft} setDisplaySabstitutesLeft={props.setDisplaySabstitutesLeft} showTeamLeft = {props.showTeamLeft} setShowTeamLeft = {props.setShowTeamLeft} />
                <div className={props.displayFirstTeamLeft}>
                    <div className="players-postion">
                        <TitlePositon namePosition="Goalkeeper" />
                        <div className="list-players">
                            <PlayerGamplan team="Morocco" namePlayer="Yassine BOUNOU" numberKit="1"/>
                        </div>
                    </div>
                    <div className="players-postion">
                        <TitlePositon namePosition="Defenders" />
                        <div className="list-players">
                            <PlayerGamplan team="Morocco" namePlayer="Achraf HAKIMI" numberKit="2"/>
                            <PlayerGamplan team="Morocco" namePlayer="Noussair MAZRAOUI" numberKit="3"/>
                            <PlayerGamplan team="Morocco" namePlayer="Nayef AGUERD" numberKit="5"/>
                            <PlayerGamplan team="Morocco" namePlayer="Romain SAISS" numberKit="6"/>
                        </div>
                    </div>
                    <div className="players-postion">
                        <TitlePositon namePosition="Midfielders" />
                        <div className="list-players">
                            <PlayerGamplan team="Morocco" namePlayer="Sofyan AMRABAT" numberKit="4"/>
                            <PlayerGamplan team="Morocco" namePlayer="Azzedine OUNAHI" numberKit="8"/>
                            <PlayerGamplan team="Morocco" namePlayer="Selim AMALLAH" numberKit="15"/>
                            <PlayerGamplan team="Morocco" namePlayer="Hakim ZIYECH" numberKit="7"/>
                            <PlayerGamplan team="Morocco" namePlayer="Sofiane BOUFAL" numberKit="17"/>
                        </div>
                    </div>
                    <div className="players-postion">
                        <TitlePositon namePosition="Forwards" />
                        <div className="list-players">
                            <PlayerGamplan team="Morocco" namePlayer="Youssef EN NESYRI" numberKit="19"/>
                        </div>
                    </div>
                </div>
                <div className={props.displaySabstitutesLeft}>
                    <div className="players-postion">
                        <TitlePositon namePosition="Goalkeeper" />
                        <div className="list-players">
                            <PlayerGamplan team="Morocco" namePlayer="Monir EL KAJOUI" numberKit="12"/>
                            <PlayerGamplan team="Morocco" namePlayer="Ahmed TAGNAOUTI" numberKit="22"/>
                        </div>
                        <div className="players-postion">
                        <TitlePositon namePosition="Defenders" />
                        <div className="list-players">
                            <PlayerGamplan team="Morocco" namePlayer="Jawad EL YAMIQ" numberKit="18"/>
                            <PlayerGamplan team="Morocco" namePlayer="Achraf DARI" numberKit="20"/>
                            <PlayerGamplan team="Morocco" namePlayer="Badr BENOUN" numberKit="24"/>
                            <PlayerGamplan team="Morocco" namePlayer="Yahya ATTIAT-ALLAH" numberKit="25"/>
                        </div>
                    </div>
                    <div className="players-postion">
                        <TitlePositon namePosition="Midfielders" />
                        <div className="list-players">
                            <PlayerGamplan team="Morocco" namePlayer="Anass ZAROURY" numberKit="10"/>
                            <PlayerGamplan team="Morocco" namePlayer="Ilias CHAIR" numberKit="13"/>
                            <PlayerGamplan team="Morocco" namePlayer="Zakaria ABOUKHLAL" numberKit="14"/>
                            <PlayerGamplan team="Morocco" namePlayer="Bilal EL KHANNOUSS" numberKit="23"/>
                            <PlayerGamplan team="Morocco" namePlayer="Yahya JABRANE" numberKit="26"/>
                        </div>
                    </div>
                    <div className="players-postion">
                        <TitlePositon namePosition="Forwards" />
                        <div className="list-players">
                            <PlayerGamplan team="Morocco" namePlayer="Abderrazak HAMDALLAH" numberKit="9"/>
                            <PlayerGamplan team="Morocco" namePlayer="Abdelhamid SABIRI" numberKit="11"/>
                            <PlayerGamplan team="Morocco" namePlayer="Abde EZZALZOULI" numberKit="16"/>
                            <PlayerGamplan team="Morocco" namePlayer="Walid CHEDDIRA" numberKit="21"/>
                        </div>
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
                        4-3-3
                    <PointSymbol />
                </div>
            </div>
            <div className="team-players">
                <ButtonSwitchers leftName="1st Team" rightName="Sabstitutes" setDisplayFirstTeamRight={props.setDisplayFirstTeamRight} setDisplaySabstitutesRight={props.setDisplaySabstitutesRight} showTeamRight = {props.showTeamRight} setShowTeamRight = {props.setShowTeamRight}/>
                <div className={props.displayFirstTeamRight}>
                <div className="players-postion">
                        <TitlePositon namePosition="Goalkeeper" />
                        <div className="list-players">
                            <PlayerGamplan team="Spain" namePlayer="Unai SIMON" numberKit="23"/>
                        </div>
                    </div>
                    <div className="players-postion">
                        <TitlePositon namePosition="Defenders" />
                        <div className="list-players">
                            <PlayerGamplan team="Spain" namePlayer="Marcos LLORENTE" numberKit="6"/>
                            <PlayerGamplan team="Spain" namePlayer="RODRI" numberKit="16"/>
                            <PlayerGamplan team="Spain" namePlayer="Jordi ALBA" numberKit="18"/>
                            <PlayerGamplan team="Spain" namePlayer="Aymeric LAPORTE" numberKit="24"/>
                        </div>
                    </div>
                    <div className="players-postion">
                        <TitlePositon namePosition="Midfielders" />
                        <div className="list-players">
                            <PlayerGamplan team="Spain" namePlayer="Sergio BUSQUETS" numberKit="5"/>
                            <PlayerGamplan team="Spain" namePlayer="GAVI" numberKit="9"/>
                            <PlayerGamplan team="Spain" namePlayer="Pedri GONZALEZ" numberKit="26"/>
                        </div>
                    </div>
                    <div className="players-postion">
                        <TitlePositon namePosition="Forwards" />
                        <div className="list-players">
                            <PlayerGamplan team="Spain" namePlayer="Marco ASENSIO" numberKit="10"/>
                            <PlayerGamplan team="Spain" namePlayer="Ferran TORRES" numberKit="10"/>
                            <PlayerGamplan team="Spain" namePlayer="Dani OLMO" numberKit="21"/>
                        </div>
                    </div>
                </div>
                <div className={props.displaySabstitutesRight}>
                    <div className="players-postion">
                        <TitlePositon namePosition="Goalkeeper" />
                        <div className="list-players">
                            <PlayerGamplan team="Spain" namePlayer="Robert SANCHEZ" numberKit="1"/>
                            <PlayerGamplan team="Spain" namePlayer="David RAYA" numberKit="13"/>
                        </div>
                    </div>
                    <div className="players-postion">
                        <TitlePositon namePosition="Defenders" />
                        <div className="list-players">
                            <PlayerGamplan team="Spain" namePlayer="Cesar AZPILICUETA" numberKit="2"/>
                            <PlayerGamplan team="Spain" namePlayer="Eric GARCIA" numberKit="3"/>
                            <PlayerGamplan team="Spain" namePlayer="Pau TORRES" numberKit="4"/>
                            <PlayerGamplan team="Spain" namePlayer="Alejandro BALDE" numberKit="14"/>
                            <PlayerGamplan team="Spain" namePlayer="Hugo GUILLAMON" numberKit="15"/>
                            <PlayerGamplan team="Spain" namePlayer="Dani CARVAJAL" numberKit="20"/>
                        </div>
                    </div>
                    <div className="players-postion">
                        <TitlePositon namePosition="Midfielders" />
                        <div className="list-players">
                            <PlayerGamplan team="Spain" namePlayer="KOKE" numberKit="8"/>
                            <PlayerGamplan team="Spain" namePlayer="Carlos SOLER" numberKit="19"/>
                        </div>
                    </div>
                    <div className="players-postion">
                        <TitlePositon namePosition="Forwards" />
                        <div className="list-players">
                            <PlayerGamplan team="Spain" namePlayer="Alvaro MORATA" numberKit="7"/>
                            <PlayerGamplan team="Spain" namePlayer="Nico WILLIAMS" numberKit="12"/>
                            <PlayerGamplan team="Spain" namePlayer="Yeremy PINO" numberKit="17"/>
                            <PlayerGamplan team="Spain" namePlayer="Pablo SARABIA" numberKit="22"/>
                            <PlayerGamplan team="Spain" namePlayer="Ansu FATI" numberKit="25"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Gamplan;