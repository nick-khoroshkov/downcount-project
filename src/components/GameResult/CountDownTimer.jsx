import React, { useState, useEffect, useCallback, memo } from "react";

import Days from "./Timers/Days";
import Hours from "./Timers/Hours";
import Minutes from "./Timers/Minutes";
import Seconds from "./Timers/Seconds";

import { CountdownWrapper } from "./style";

function CountDownTimer({ timeTillDate }) {
  let then = new Date(timeTillDate).getTime();

  const calculateTimeLeft = useCallback(() => {
    let now = new Date().getTime();
    let distance = +then - +now;
    let timer = {};

    timer = {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };

    return timer;
  }, [then]);

  const [timer, setTimer] = useState(calculateTimeLeft());

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer(calculateTimeLeft());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [calculateTimeLeft]);

  let { days, hours, minutes, seconds } = timer;

  return (
    <>
      <CountdownWrapper>
        <Days days={days} />
        <Hours hours={hours} />
        <Minutes minutes={minutes} />
        <Seconds seconds={seconds} />
      </CountdownWrapper>
    </>
  );
}

export default memo(CountDownTimer);
