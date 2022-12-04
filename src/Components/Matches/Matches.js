
import { useState } from "react";
import ListButton from "../Items/ListButton";
import MatchTime from "../Items/MatchTime";
import { getMatchesToday } from "../../Helpers";
import { getMatchesTomorrow } from "../../Helpers";
import { useEffect } from "react";

const Matches = (props) =>{
    const [today,setToday] = useState(true);
    const [tomorrow,setTomorrow] = useState(false);

    const[matchesToday,setMatchesToday] = useState(false);
    const[matchesTomorrow,setMatchesTomorrow] = useState(false);

    useEffect(()=>{
        getMatchesToday().then((res) => {
            setMatchesToday(res);
        })

        getMatchesTomorrow().then((res)=>{
            setMatchesTomorrow(res);
        })
    },[])
    return (
        <main>
            <div id="preloaderMatch" className="spinner-container">
                <div className="spinner"></div>
            </div>
            <section className="match-program">
                <ListButton setToday={setToday} setTomorrow={setTomorrow} />
                {
                    (today)?( <MatchTime matches= {matchesToday}/> ):
                    (tomorrow)?( <MatchTime  matches= {matchesTomorrow}/> ):null
                }
            </section>
    </main>
    )
}

export default Matches