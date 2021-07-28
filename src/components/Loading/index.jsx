import React from "react";
import Loader from "react-loader-spinner";

import { color } from "theme";
import { Wrapper, LoaderContainer } from "./style";

export default function Loading() {
  return (
    <Wrapper>
      <LoaderContainer>
        <Loader
          type="TailSpin"
          color={color.red}
          height={150}
          width={150}
          timeout={2500}
        />
      </LoaderContainer>
    </Wrapper>
  );
}
