import React from "react";

import { ChoiceTitleContainer, ChoiceText } from "./style";

export default function ChoiceTitle({ oneLeague }) {
  return (
    <ChoiceTitleContainer>
      {oneLeague === "true" ? (
        <ChoiceText>Select your team</ChoiceText>
      ) : (
        <ChoiceText>Select your league and then your team</ChoiceText>
      )}
    </ChoiceTitleContainer>
  );
}
