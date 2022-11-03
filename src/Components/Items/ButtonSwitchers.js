import BackgroundButton from "../Items/BackgournButton";
import ActiveButton from "../Items/ActiveButton";
import { useState } from "react";
const ButtonSwitchers = (props) => {
    const [showLeft, setShowLeft] = useState(true);
    return(
        <div className="btn-display">
        <button className={(showLeft)?("show"):("hide-item-left")}  onClick={(e) => {
            setShowLeft(true);
            }}>
            {
                (showLeft)?(<ActiveButton />):(<BackgroundButton />)
            }
            <span>{props.leftName}</span>
        </button>
        <div className={(!showLeft)?("hide hide-right"):("hide hide-left")}></div>
        <button className={(!showLeft)?("show"):("hide-item-right")}  onClick={() => {setShowLeft(false)}}>
            {
                (!showLeft)?(<ActiveButton />):(<BackgroundButton />)
            }
            <span>{props.rightName}</span>
        </button>
    </div>
    )
}

export default ButtonSwitchers;