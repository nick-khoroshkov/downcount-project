import React from "react";

import { CountdowItem, CountdowItemNumber, CountdowItemDesc } from "../style";

function Seconds({ seconds }) {
  return (
    <>
      {seconds >= 0 && (
        <CountdowItem>
          <CountdowItemNumber>
            {seconds < 10 ? "0" + seconds : seconds}
          </CountdowItemNumber>
          <CountdowItemDesc>sec</CountdowItemDesc>
        </CountdowItem>
      )}
    </>
  );
}

export default Seconds;
