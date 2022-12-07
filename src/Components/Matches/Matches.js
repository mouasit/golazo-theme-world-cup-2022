
import { useState } from "react";
import ListButton from "../Items/ListButton";
import MatchTime from "../Items/MatchTime";

const Matches = () =>{
    const [today,setToday] = useState(true);
    const [tomorrow,setTomorrow] = useState(false);

    return (
        <main>
            <section className="match-program">
                <ListButton setToday={setToday} setTomorrow={setTomorrow} />
                {
                    (today)?( <MatchTime today={true}/> ):
                    (tomorrow)?( <MatchTime tomorrow={true} /> ):null
                }
            </section>
    </main>
    )
}

export default Matches