import GroupEn from "./GroupEN";
import GroupAr from "./GroupAr";
import GroupFr from "./GroupFr";
const Group = (props) =>{
    if(props.lang === "en")
        return(<GroupEn nameGroup={props.nameGroup} />);
    if (props.lang === "fr")
        return (<GroupFr nameGroup={props.nameGroup}/>);
    if (props.lang === "ar")
        return (<GroupAr nameGroup={props.nameGroup}/>);
}

export default Group;