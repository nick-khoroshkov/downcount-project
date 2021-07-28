import React from "react";
import moment from "moment-timezone";

import dateFormat from "helpers/dateFormat";

import GameInProgress from "./GameInProgress";
import EndedGame from "./EndedGame";
import CountDownTimer from "./CountDownTimer";

import { ResultContainer } from "./style";

export default function GameResult({ date, result }) {
  const gameDate = moment(dateFormat(date));
  const todayDate = moment();

  // END GAME TIME = EVENT_START + 4 hours
  const gameEndTime = moment(dateFormat(date))
    .tz("America/New_York")
    .add(4, "h");

  const isGameInProgress = todayDate > gameDate && todayDate < gameEndTime;

  const isGameEnded = todayDate > gameEndTime;

  return (
    <ResultContainer>
      {isGameInProgress && <GameInProgress />}
      {isGameEnded ? (
        <EndedGame result={result} />
      ) : (
        !isGameInProgress && <CountDownTimer timeTillDate={gameDate} />
      )}
    </ResultContainer>
  );
}
