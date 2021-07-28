import React from "react";

import { EndedGameText, EndedGamesCont } from "./style";

export default function EndedGame({ result }) {
  let gameResult = [];
  if (result) {
    gameResult = result.split(" ");
  }

  return (
    <EndedGamesCont>
      {result === "0" && <EndedGameText>Event Concluded</EndedGameText>}
      {gameResult.length > 2 &&
        gameResult?.map((res) => <p key={res}>{res}</p>)}
    </EndedGamesCont>
  );
}
