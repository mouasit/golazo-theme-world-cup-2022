import React from 'react';

import SeparatorStadiumsLeft from "../Items/SeparatorStadiumsLeft";
import SeparatorStadiumsRight from "../Items/SeparatorStadiumsRight";

export default function RowSeparator() {
  return (
    <div className="row-separator">
        <SeparatorStadiumsLeft />
        <SeparatorStadiumsRight />
    </div>
  )
}
