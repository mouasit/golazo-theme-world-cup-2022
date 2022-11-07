import MatchInfo from "./MatchInfo";

const StreamMatchDesktop = (props) => {
    return (
        <div className="stream-desktop">
            <div className="stream-gam-plan">
                <MatchInfo lang = {props.lang}  />
            </div>
        </div>
    )
}

export default StreamMatchDesktop;