import React from "react";

import { TeamWrapper, TeamsTitle, StyledVersus } from "./style";

export default function Teams({ team, opponent, location }) {
  return (
    <TeamWrapper>
      <TeamsTitle>{team}</TeamsTitle>
      <StyledVersus>
        {location === "0" || location === "2" ? "VS" : "AT"}
      </StyledVersus>
      <TeamsTitle>{opponent}</TeamsTitle>
    </TeamWrapper>
  );
}
