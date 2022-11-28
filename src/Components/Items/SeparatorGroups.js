import SeparatorRankingDesktop from "./SeparatorRankingDesktop";
import SeparatorRankingMobile from "./SeparatorRankingMobile";

import React from "react";
const SeparatorGroups = () => {
    return (
        <React.Fragment>
            <div className="separator-ranking-desktop">
                <SeparatorRankingDesktop />
            </div>
            <div className="separator-ranking-mobile">
                <SeparatorRankingMobile />
            </div>
        </React.Fragment>
    );
}

export default SeparatorGroups;