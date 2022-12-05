import { useState,useEffect } from "react";
import Card from "../Items/Card";
import SeparatorGroups from "../Items/SeparatorGroups";
import Modal from "../Items/Modal";
import CardPlayer from "../Items/CardPlayer";
import ListButton from "../Items/ListButton";
import PlayOffsTournement from "../Items/PlayOffs";

import { getStandings, getScorers } from "../../Helpers";

function checkPair(number)
{
    return number % 2;
}

let groupTmp = [];


const Ranking = () => {
    const[standings,setStandings] = useState(false);
    const[scorers,setScorers] = useState(false);

    const [playOffs,setPlayOffs] = useState(true);
    const [groupStage,setGroupStage] = useState(false);
    
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const setWindowDimensions = () => {
        setWindowWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', setWindowDimensions);
        getStandings().then((res) => {
            setStandings(res);
        });

        getScorers().then((res) => {
            setScorers(res);
        });
}, [])
if(windowWidth >= 1350)
{
    document.body.style.overflow = "auto";
    if(document.getElementById("modal"))
        document.getElementById("modal").style.display = "none";
}

    return (
        <main>
            <div id="preloaderRank" className="spinner-container">
                <div className="spinner"></div>
            </div>
        <div className="ranking">
            <section className="ranking-teams">
            <ListButton groupStage={setGroupStage} playOffs={setPlayOffs} first="Playoffs" second ="Group Stage"/>
                {
                    (groupStage)?(
                        (standings)?(
                            standings.map((group,index) => {
                                document.getElementById("preloaderRank").style.display = "none";
                                document.getElementById("headList").style.display = "flex";
                                groupTmp.push(group);
                                if(checkPair(index))
                                {
                                    let previousGroup = groupTmp[0];
                                    groupTmp = [];
                                    return(
                                        <div className="row-cards" key={index}>
                                            <Card 
                                                group = {previousGroup.group.split("_")[1]}
                                                table={previousGroup.table}
                                                />
                                            <SeparatorGroups />
                                            <Card
                                                group = {group.group.split("_")[1]}
                                                table= {group.table}
                                            />
                                        </div>
                                    )
                                }                       
                            })
                        ):null
                    ):(playOffs)?(
                        (document.getElementById("preloaderRank"))?(document.getElementById("preloaderRank").style.display = "none"):null,
                        <div className="play-offs">
                          <PlayOffsTournement />
                        </div>
                    ):null

                }
        </section>
        <button className="btn-modal" aria-label="" onClick={() => {
            document.getElementById("modal").style.display = "flex";
            document.body.style.overflow = "hidden";
            } }>
            <svg xmlns="http://www.w3.org/2000/svg" width="60.509" height="60.642" viewBox="0 0 60.509 60.642">
                <g id="Group_4537" data-name="Group 4537" transform="translate(-1.741 -1.679)">
                    <g id="_09-Goal" data-name="09-Goal">
                    <path id="Path_7104" data-name="Path 7104" d="M26.89,44.24a88.413,88.413,0,0,0-8.98,2.12C14.46,57.19,7.92,61.6,7.55,61.84a1,1,0,0,1-1.1-1.68c.08-.05,5.68-3.85,9.05-13.05A97.989,97.989,0,0,0,3.43,51.9.965.965,0,0,1,3,52a1,1,0,0,1-.43-1.9,99.01,99.01,0,0,1,13.7-5.32A44.527,44.527,0,0,0,17.98,33H3a1,1,0,0,1,0-2H17.98a44.606,44.606,0,0,0-1.64-11.5A76.737,76.737,0,0,1,2.53,13.88a1,1,0,0,1,.94-1.76A75.674,75.674,0,0,0,15.6,17.18C12.24,7.77,6.53,3.89,6.45,3.84a1,1,0,1,1,1.1-1.68c.37.25,7.02,4.72,10.44,15.75a79.946,79.946,0,0,0,8.79,1.96,1,1,0,0,1-.16,1.99.86.86,0,0,1-.16-.01c-2.66-.44-5.28-1.02-7.84-1.71A48.38,48.38,0,0,1,19.98,31H23a1,1,0,0,1,0,2H19.98a47.8,47.8,0,0,1-1.42,11.11c2.66-.74,5.32-1.36,7.97-1.83a1,1,0,1,1,.36,1.96ZM44.73,10.69A78.884,78.884,0,0,1,21.51,2.14a1,1,0,1,0-1.02,1.72,65.885,65.885,0,0,0,9.87,4.68,24.782,24.782,0,0,1,3.08,6.38,1.006,1.006,0,0,0,.95.68,1.127,1.127,0,0,0,.32-.05,1,1,0,0,0,.63-1.27,32.32,32.32,0,0,0-1.99-4.66,99.411,99.411,0,0,0,10.96,3.03,19.777,19.777,0,0,1,0,38.7,99.411,99.411,0,0,0-10.96,3.03,32.32,32.32,0,0,0,1.99-4.66,1,1,0,1,0-1.9-.64,24.782,24.782,0,0,1-3.08,6.38,65.885,65.885,0,0,0-9.87,4.68A1,1,0,0,0,21,62a.959.959,0,0,0,.51-.14,78.884,78.884,0,0,1,23.22-8.55,21.783,21.783,0,0,0,0-42.62ZM26,32A16,16,0,1,1,42,48,16,16,0,0,1,26,32Zm25.34-1.98-2.83.92-1.83,5.87,1.7,2.28h5.67a13.862,13.862,0,0,0,1.88-5.73ZM43,25.49l4.88,3.55,2.84-.92,1.75-5.39a14.146,14.146,0,0,0-4.88-3.56L43,22.51ZM38.93,38l-1.7,2.27,1.75,5.39a13.582,13.582,0,0,0,6.04,0l1.75-5.39L45.07,38Zm-7.4-15.27,1.75,5.39,2.84.92L41,25.49V22.51l-4.59-3.34a14.146,14.146,0,0,0-4.88,3.56ZM28.07,33.36a13.862,13.862,0,0,0,1.88,5.73h5.67l1.7-2.28-1.83-5.87-2.83-.92Z" fill="#eeeee4" stroke="#eeeee4" strokeWidth="0.5"/>
                    </g>
                </g>
            </svg>
        </button>
        <section className="ranking-scorers">
            <div id="headList" className="head-list">
                <div className="title-list">
                    <svg viewBox="0 0 36 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.0281 3.59999C14.5465 2.11801 12.5886 1.20761 10.5006 1.02975C8.41263 0.85188 6.32899 1.418 4.61808 2.62803C2.90717 3.83805 1.6792 5.61404 1.15125 7.642C0.623306 9.66997 0.829398 11.8193 1.73309 13.71L1.79709 13.844C2.37233 14.9943 3.19054 16.0059 4.19515 16.8089C5.19976 17.6119 6.36679 18.1872 7.61555 18.4948C8.8643 18.8025 10.165 18.8353 11.4277 18.591C12.6903 18.3466 13.8849 17.8309 14.9287 17.0795C15.9725 16.3282 16.8406 15.3591 17.4731 14.2392C18.1056 13.1194 18.4873 11.8755 18.5918 10.5937C18.6964 9.31186 18.5213 8.0226 18.0786 6.81507C17.636 5.60754 16.9363 4.51057 16.0281 3.59999ZM10.2761 3.10699C11.538 3.20352 12.7476 3.65143 13.7681 4.39998L12.9851 5.17898C12.6465 5.51547 12.2334 5.76736 11.7792 5.91418C11.325 6.06101 10.8426 6.09862 10.3711 6.02399C9.89607 5.94996 9.44543 5.76412 9.05633 5.48176C8.66722 5.19941 8.35078 4.82863 8.13309 4.39998L7.63909 3.42299C8.48883 3.14559 9.38487 3.03821 10.2761 3.10699ZM4.94309 5.07499C5.20188 4.81686 5.48112 4.58009 5.77809 4.36699L6.27809 5.35399C6.49431 5.78122 6.60633 6.25356 6.60501 6.73238C6.60369 7.21121 6.48905 7.68292 6.27048 8.10895C6.0519 8.53498 5.7356 8.90323 5.34743 9.18358C4.95925 9.46394 4.51024 9.64844 4.03709 9.72199L2.95909 9.88899C2.95747 8.99575 3.13185 8.11094 3.47227 7.28511C3.81269 6.45928 4.31248 5.70861 4.94309 5.07599V5.07499ZM7.83309 15.263L7.65909 16.342C6.78075 16.059 5.96931 15.6 5.27434 14.9929C4.57938 14.3858 4.01549 13.6434 3.61709 12.811L3.59309 12.761C3.47186 12.4983 3.36764 12.2281 3.28109 11.952L4.37209 11.782C4.84524 11.7083 5.3291 11.7477 5.78411 11.8969C6.23912 12.0461 6.65236 12.3009 6.99003 12.6404C7.32769 12.9799 7.5802 13.3945 7.7269 13.8504C7.87361 14.3062 7.91034 14.7903 7.83409 15.263H7.83309ZM9.09209 11.792L7.83509 10.535C7.74644 10.4464 7.68815 10.332 7.66856 10.2082C7.64898 10.0844 7.66912 9.95762 7.72609 9.84599L8.53309 8.26299C8.59001 8.15153 8.68073 8.06093 8.79228 8.00416C8.90383 7.9474 9.03048 7.92739 9.15409 7.94699L10.9091 8.22499C11.0328 8.24457 11.1471 8.30281 11.2357 8.39138C11.3243 8.47994 11.3825 8.59428 11.4021 8.71799L11.6801 10.473C11.6996 10.5967 11.6794 10.7234 11.6225 10.835C11.5655 10.9466 11.4747 11.0372 11.3631 11.094L9.78009 11.901C9.66868 11.9578 9.54214 11.978 9.41857 11.9586C9.295 11.9392 9.18073 11.8813 9.09209 11.793V11.792ZM14.5521 14.684C13.9173 15.317 13.1636 15.8183 12.3343 16.159C11.505 16.4997 10.6166 16.673 9.72009 16.669L9.89609 15.58C9.97239 15.1074 10.1594 14.6595 10.442 14.273C10.7245 13.8866 11.0944 13.5724 11.5216 13.3563C11.9488 13.1402 12.421 13.0282 12.8998 13.0295C13.3785 13.0309 13.8501 13.1455 14.2761 13.364L15.2501 13.864C15.0396 14.1558 14.8062 14.4303 14.5521 14.685V14.684ZM16.1991 12.005L15.2151 11.505C14.7903 11.2871 14.4229 10.972 14.1428 10.5854C13.8627 10.1988 13.6778 9.75154 13.6031 9.27999C13.5279 8.80569 13.5664 8.32032 13.7154 7.8638C13.8644 7.40728 14.1196 6.99264 14.4601 6.65399L15.2361 5.88299C15.8717 6.75438 16.2905 7.76469 16.4578 8.8302C16.6251 9.89571 16.536 10.9857 16.1981 12.01L16.1991 12.005Z" fill="#47B7AB"/>
                        <path d="M29.9242 4.60084L24.645 9.88L29.9242 15.1592L35.2034 9.88L29.9242 4.60084Z" fill="#47B7AB"/>
                    </svg>
                    <span>Top Scorers</span>
                </div>
                <span className="goals">Goals</span>
            </div>
            <div className="list-player">
                {
                    (scorers)?(
                        scorers.map((player,index)=>{
                            return(
                                <div className="row-player" key={player.player.id}>
                                    <CardPlayer rank={index + 1} name={player.player.name} team={player.team.name}/>
                                    <span className="number-goals">{player.goals}</span>
                                </div>
                            )
                        })
                    ):null
                }
            </div>
        </section>
        <section className="ranking-scorers-modal">
            <Modal onClose={()=>{
                
                if(document.getElementById("modal"))
                    document.getElementById("modal").style.display = "none";
                document.body.style.overflow = "auto";
                }}>
                <div className="list-player">
                {
                    (scorers)?(
                        scorers.map((player,index)=>{
                            return(
                                <div className="row-player" key={player.player.id}>
                                    <CardPlayer rank={index + 1} name={player.player.name} team={player.team.name}/>
                                    <span className="number-goals">{player.goals}</span>
                                </div>
                            )
                        })
                    ):null
                }
                </div>
            </Modal>
        </section>
        </div>
    </main>
    )
}

export default Ranking