import React, { memo } from "react";

import { CountdowItem, CountdowItemNumber, CountdowItemDesc } from "../style";

function Days({ days }) {
  return (
    <>
      {days >= 0 && (
        <CountdowItem>
          <CountdowItemNumber>
            {days < 10 ? "0" + days : days}
          </CountdowItemNumber>
          <CountdowItemDesc>day</CountdowItemDesc>
        </CountdowItem>
      )}
    </>
  );
}

function arePropsEqual(prevProps, nextProps) {
  return prevProps.days === nextProps.days;
}

export default memo(Days, arePropsEqual);
