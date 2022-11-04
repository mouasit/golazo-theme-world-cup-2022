import LeftSymbolArrow from "../Items/LeftSymbolArrow";
import RightSymbolArrow from "../Items/RightSymbolArrow";
const TitlePositon = (props) => {
    return (
        <div className="titlePosition">
            <LeftSymbolArrow />
            <span>{props.namePosition}</span>
            <RightSymbolArrow />
        </div>
    )
}

export default TitlePositon;