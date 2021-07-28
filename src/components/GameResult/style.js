import styled from "styled-components";

import { device } from "theme";

export const ResultContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media ${device.tablet} {
    margin-top: 2rem;
  }

  @media ${device.laptopL} {
    width: 50%;
  }
`;

export const ProgressText = styled.div`

  font-size: 1rem;
  font-weight: 300;
  line-height: 1.1rem;
  color: #bdbdbd;
  letter-spacing: 0.1rem;


&:after {
  overflow: hidden;
  display: inline-block;
  vertical-align: bottom;
  animation: ellipsis steps(4, end) 900ms infinite;
  content: "\2026";
  width: 0px;
  position: absolute;
}

@keyframes ellipsis {
  to {
    width: 1.5rem;
  }
}

@media ${device.tablet} {
  font-size: 1.8rem;
  line-height: 2.4rem;
  letter-spacing: 0.2rem;
  }
`;

export const CountdownWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
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
    justify-content: space-evenly;
  }
`;

export const CountdowItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  margin-right: 1rem;
`;

export const CountdowItemNumber = styled.span`
  color: #fff;
  font-weight: 400;
  font-size: 3rem;
  line-height: 3.1rem;

  @media ${device.tablet} {
    font-size: 4rem;
    line-height: 4.2rem;
  }
`;

export const CountdowItemDesc = styled.span`
  color: #bdbdbd;
  font-size: 1rem;
  line-height: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;

  @media ${device.tablet} {
    font-size: 2rem;
    line-height: 2.1rem;
  }
`;

export const EndedGamesCont = styled.div``;

export const EndedGameText = styled.span`
  color: #ffffff;
  line-height: 14px;
  font-size: 1.2rem;
  text-align: center;

  @media ${device.tablet} {
    font-size: 2rem;
    line-height: 2.1rem;
  }
`;
