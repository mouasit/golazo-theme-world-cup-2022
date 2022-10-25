const TranslateName = (props) => {
    if(props.lang === "en")
    {
        return(
            <span className={props.classItem}>{props.name.en}</span>
        )
    }
    if(props.lang === "fr")
    {
        return(
            <span className={props.classItem}>{props.name.fr}</span>
        )
    }
    if(props.lang === "ar")
    {
        return(
            <span className={props.classItem}>{props.name.ar}</span>
        )
    }
}

export default TranslateName;