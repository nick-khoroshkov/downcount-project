import styled from "styled-components";

import { device } from "theme";

export const ChoiceTitleContainer = styled.div`
  padding-top: 3rem;
  width: 90%;
  margin: 0 auto;

  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media ${device.tablet} {
    width: 60%;
  }
`;

export const ChoiceText = styled.p`
  color: #ffffff;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2rem;
  text-shadow: 2px 1px 4px #e0e0e0;
  text-transform: uppercase;
  text-align: center;

  @media ${device.tablet} {
    font-size: 3rem;
    line-height: 3rem;
  }

  @media ${device.laptop} {
    font-size: 5rem;
    line-height: 5rem;
    text-shadow: 2px 2px 8px #e0e0e0;
  }
`;
