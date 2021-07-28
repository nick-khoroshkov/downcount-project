import React, { memo } from "react";

import { CountdowItem, CountdowItemNumber, CountdowItemDesc } from "../style";

function Minutes({ minutes }) {
  return (
    <>
      {minutes >= 0 && (
        <CountdowItem>
          <CountdowItemNumber>
            {minutes < 10 ? "0" + minutes : minutes}
          </CountdowItemNumber>
          <CountdowItemDesc>min</CountdowItemDesc>
        </CountdowItem>
      )}
    </>
  );
}

function arePropsEqual(prevProps, nextProps) {
  return prevProps.minutes === nextProps.minutes;
}

export default memo(Minutes, arePropsEqual);
