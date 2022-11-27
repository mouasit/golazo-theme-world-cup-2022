
import ActiveButton from "../Items/ActiveButton";
import BackgroundButton from "../Items/BackgournButton";

const ListButton = (props) => (
    <div className="list-days-week">
    <button className="active-time" onClick={()=> {
        props.setToday(true);
        props.setTomorrow(false);
        props.setThisWeek(false);
    }}>
        <ActiveButton/>
        <span>Today</span>
    </button>
    <button onClick={()=> {
        props.setTomorrow(true);
        props.setToday(false);
        props.setThisWeek(false);
    }}>
        <BackgroundButton />
        <span>Tomorrow</span>
    </button>
    <button onClick={() => {
        props.setThisWeek(true);
        props.setToday(false);
        props.setTomorrow(false);
    }}>
        <BackgroundButton />
        <span>This Week</span>
    </button>
</div>
)

export default ListButton;