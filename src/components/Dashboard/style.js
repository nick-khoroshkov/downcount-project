import styled from "styled-components";

import { device } from "theme";

export const StyledSection = styled.section`
  width: 100%;
  flex: 1 1 auto;

  @media ${device.tablet} {
    width: 50%;
  }
`;

export const LeftSideBar = styled.div`
  display: none;

  @media ${device.tablet} {
    justify-content: center;
    align-items: center;
    display: flex;
    flex: 0 0 130px;
    order: -1;
  }

  @media ${device.laptop} {
    flex: 0 0 260px;
  }
`;

export const RightSideBar = styled.div`
  display: none;

  @media ${device.tablet} {
    justify-content: center;
    align-items: center;
    display: flex;
    flex: 0 0 130px;
  }

  @media ${device.laptop} {
    flex: 0 0 260px;
  }
`;

export const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 300px);
`;
