import React from "react";
import englishFlag from "../../assets/flags/languages/english.svg";
import frenshFlag from "../../assets/flags/languages/frensh.svg";
import arabicFlag from "../../assets/flags/languages/arabic.svg";


const Language = (props) => {

    if(props.lang === "english")
    {
        return (
            <React.Fragment>
            <img src={englishFlag} alt="" />
            <span>English</span>
            </React.Fragment>
        )
    }
    if(props.lang === "frensh")
    {
        return (
            <React.Fragment>
            <img src={frenshFlag} alt="" />
            <span>Frensh</span>
            </React.Fragment>
        )
    }
    if(props.lang === "arabic")
    {
        return (
            <React.Fragment>
            <img src={arabicFlag} alt="" />
            <span>Arabic</span>
            </React.Fragment>
        )
    }
}

export default Language;