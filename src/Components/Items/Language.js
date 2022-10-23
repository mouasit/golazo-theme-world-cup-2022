import React from "react";
import englishFlag from "../../assets/flags/languages/english.svg";
import frenshFlag from "../../assets/flags/languages/frensh.svg";
import arabicFlag from "../../assets/flags/languages/arabic.svg";
import Translate from "../../../src/Translate.json";


const Language = (props) => {

    if(props.lang.language === "en")
    {
        return (
            <React.Fragment>
            <img src={englishFlag} alt="" />
            {
                (props.lang.typeText === "en")?(<span>{Translate.dropdownLanguages.english.en}</span>)
                :(props.lang.typeText === "fr")?(<span>{Translate.dropdownLanguages.frensh.en}</span>)
                :(props.lang.typeText === "ar")?(<span>{Translate.dropdownLanguages.arabic.en}</span>)
                :<span>{Translate.dropdownLanguages.english.en}</span>
            }
            </React.Fragment>
        )
    }
    if(props.lang.language === "fr")
    {
        return (
            <React.Fragment>
            <img src={frenshFlag} alt="" />
            {
                (props.lang.typeText === "en")?(<span>{Translate.dropdownLanguages.english.fr}</span>)
                :(props.lang.typeText === "fr")?(<span>{Translate.dropdownLanguages.frensh.fr}</span>)
                :(props.lang.typeText === "ar")?(<span>{Translate.dropdownLanguages.arabic.fr}</span>)
                :<span>{Translate.dropdownLanguages.frensh.fr}</span>
            }
            </React.Fragment>
        )
    }
    if(props.lang.language === "ar")
    {
        return (
            <React.Fragment>
            <img src={arabicFlag} alt="" />
            {
                (props.lang.typeText === "en")?(<span>{Translate.dropdownLanguages.english.ar}</span>)
                :(props.lang.typeText === "fr")?(<span>{Translate.dropdownLanguages.frensh.ar}</span>)
                :(props.lang.typeText === "ar")?(<span>{Translate.dropdownLanguages.arabic.ar}</span>)
                :<span>{Translate.dropdownLanguages.arabic.ar}</span>
            }
            </React.Fragment>
        )
    }
}

export default Language;