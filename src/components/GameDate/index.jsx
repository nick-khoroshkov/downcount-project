import React, { memo } from "react";
import Moment from "react-moment";
import moment from "moment";
import "moment-timezone";

import dateFormat from "helpers/dateFormat";

import { DateContainer } from "./style";

function GameDate({ eventTime, eventState }) {
  return (
    <DateContainer>
      {eventState === 1 && <></>}
      {eventState === 2 && (
        <Moment element="span" format="dddd, MMMM D,  YYYY">
          {moment(dateFormat(eventTime)).tz("America/New_York")}
        </Moment>
      )}
      {eventState === 3 && (
        <>
          <Moment element="span" format="ddd, MMMM D,  YYYY">
            {moment(dateFormat(eventTime)).tz("America/New_York")}
          </Moment>{" "}
          <span>at</span>{" "}
          <Moment element="span" format="h:mm A z">
            {moment(dateFormat(eventTime)).tz("America/New_York")}
          </Moment>
        </>
      )}
    </DateContainer>
  );
}

function arePropsEqual(prevProps, nextProps) {
  return prevProps.eventTime === nextProps.eventTime;
}

export default memo(GameDate, arePropsEqual);
