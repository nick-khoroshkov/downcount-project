import styled from "styled-components";

import { device } from "theme";

export const BodyContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  animation: appearence 1.2s ease-in;
  background: transparent;

  @keyframes appearence {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 150px;
`;

export const StyledFooter = styled.footer`
  padding: 20px;
  min-height: 150px;
`;
