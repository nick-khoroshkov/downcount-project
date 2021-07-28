import styled from "styled-components";

import { device } from "theme";

export const TeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;

  animation: appearence 1s ease-in;

  @keyframes appearence {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const TeamsTitle = styled.span`
  color: #ffffff;
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 2rem;
  text-align: center;

  @media ${device.tablet} {
    line-height: 4.6rem;
    font-size: 4.6rem;
    font-weight: 700;
  }
`;

export const StyledVersus = styled(TeamsTitle)`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;

  @media ${device.tablet} {
    font-size: 4rem;
    line-height: 4rem;
  }
`;
