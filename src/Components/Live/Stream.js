import LocatoinBackground from "../Items/LocationBackground";
import LocationBackgroundReverse from "../Items/LocationReverse";
import ChanelBackground from "../Items/ChanelBackground";
import ChanelBackgroundReverse from "../Items/ChanelBackgroundReverse";
import CommentatorBackground from "../Items/CommentatorBackground";
import CommentatorBackgroundReverse from "../Items/CommentatorBackgroundReverse";
import Translate from "../../Translate.json";
import TranslateName from "../Items/TranslateName";
import Video from "../../assets/morocco.mp4";
import Group from "../Items/Group";
import BackgroundButton from "../Items/BackgournButton";
import ActiveButton from "../Items/ActiveButton";
import { useState } from "react";
const Stream = (props) =>{
    const [showLeft, setShowLeft] = useState(true);
    return(
        <main>
        <section className="match-stream">
            <div className="match-info">
                <div className="item-info">
                    {(props.lang !== "ar")?(<LocatoinBackground />):(<LocationBackgroundReverse/>)}
                    <TranslateName name={Translate.matches.matche01.stadium} lang={props.lang} classItem={"name-item-info"} />
                </div>
                <div className="item-info">
                    {(props.lang !== "ar")?(<ChanelBackground />):(<ChanelBackgroundReverse/>)}
                    <TranslateName name={Translate.matches.matche01.channel} lang={props.lang} classItem={"name-item-info"} />
                </div>
                <div className="item-info">
                    {(props.lang !== "ar")?(<CommentatorBackground />):(<CommentatorBackgroundReverse/>)}
                    <TranslateName name={Translate.matches.matche01.commentator} lang={props.lang} classItem={"name-item-info"}  />
                </div>
            </div>
            <video src= {Video} controls>
            </video>
        </section>
        <section className="details-match">
            <div className="group">
            <Group nameGroup="G" lang={props.lang}/>
            </div>
            <div className="btn-display">
                <button className={(showLeft)?("show"):("hide-item-left")}  onClick={(e) => {
                    setShowLeft(true);
                    }}>
                    {
                        (showLeft)?(<ActiveButton />):(<BackgroundButton />)
                    }
                    <span>Gam Plan</span>
                </button>
                <div className={(!showLeft)?("hide hide-right"):("hide hide-left")}></div>
                <button className={(!showLeft)?("show"):("hide-item-right")}  onClick={() => {setShowLeft(false)}}>
                    {
                        (!showLeft)?(<ActiveButton />):(<BackgroundButton />)
                    }
                    <span>Stats</span>
                </button>
            </div>
        </section>
    </main>
    )
}

export default Stream