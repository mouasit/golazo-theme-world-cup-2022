
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
                    (today)?( <MatchTime lang={props.lang}/> ):
                    (tomorrow)?( <MatchTime lang={props.lang}/> ):
                    (thisWeek)?( <MatchTime lang={props.lang} date={true}/>):null
                }
            </section>
    </main>
    )
}

export default Matches