
import { useState } from "react";
import ListButton from "../Items/ListButton";
import MatchTime from "../Items/MatchTime";

const Matches = (props) =>{
    const [today,setToday] = useState(true);
    const [tomorrow,setTomorrow] = useState(false);
    const [thisWeek,setThisWeek] = useState(false);
    return (
        <main>
            <section className="match-program">
                <ListButton setToday={setToday} setTomorrow={setTomorrow} setThisWeek ={setThisWeek} />
                {
                    (today)?( <MatchTime lang={props.lang} first="today"/> ):
                    (tomorrow)?( <MatchTime lang={props.lang} first="tomorrow"/> ):
                    (thisWeek)?( <MatchTime lang={props.lang} first="week"/>):null
                }
            </section>
    </main>
    )
}

export default Matches