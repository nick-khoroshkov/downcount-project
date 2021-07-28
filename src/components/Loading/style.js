import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  /* position: fixed;
  background: rgba(242, 242, 242, 0.3); */
  z-index: -1;
  top: 0;
  left: 0;
  /* transition: all 0.2s ease-in-out; */
`;

export const LoaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;
