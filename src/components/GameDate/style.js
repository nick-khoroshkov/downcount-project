import styled from "styled-components";

import { device } from "theme";

export const DateContainer = styled.div`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.1rem;
  color: #bdbdbd;
  letter-spacing: 0.1rem;

  animation: appearence 1s ease-in;

  @keyframes appearence {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media ${device.tablet} {
    font-size: 1.8rem;
    line-height: 2.4rem;
    letter-spacing: 0.2rem;
  }
`;
