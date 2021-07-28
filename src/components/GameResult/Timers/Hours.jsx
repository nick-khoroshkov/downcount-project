import React, { memo } from "react";

import { CountdowItem, CountdowItemNumber, CountdowItemDesc } from "../style";

function Hours({ hours }) {
  return (
    <>
      {hours >= 0 && (
        <CountdowItem>
          <CountdowItemNumber>
            {hours < 10 ? "0" + hours : hours}
          </CountdowItemNumber>
          <CountdowItemDesc>hour</CountdowItemDesc>
        </CountdowItem>
      )}
    </>
  );
}

function arePropsEqual(prevProps, nextProps) {
  return prevProps.hours === nextProps.hours;
}

export default memo(Hours, arePropsEqual);
