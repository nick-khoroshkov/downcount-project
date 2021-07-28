import styled from "styled-components";

import { color, device } from "theme";

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.centered ? "center" : "space-between")};
  max-width: 300px;
  width: 100%;
  z-index: 100;

  @media ${device.tablet} {
    flex-direction: row;
    max-width: 600px;
  }
`;

export const StyledSelect = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "transparent",
    border: "transparent",
    borderBottom: `1px solid ${color.red}`,
    borderRadius: "none",
    width: "100px",
    color: "#ffffff",
    marginBottom: "none",
    cursor: "pointer",
    outline: "none",
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      color: isSelected ? "#ffffff" : "#000000",
      color: isFocused ? "#ffffff" : "#000000",
      backgroundColor: isFocused ? "gray" : "",
    };
  },
};

export const StyledSelectTeam = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "transparent",
    border: "transparent",
    borderBottom: `1px solid ${color.red}`,
    borderRadius: "none",
    width: "200px",
    color: "#ffffff",
    marginBottom: "none",
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
    };
  },
};

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
`;

export const SelectTitles = styled.span`
  color: ${color.greyText};
  font-size: 1.8rem;
  line-height: 2.4rem;
  margin-right: 1rem;
  font-weight: 300;
`;

export const BackgroundImg = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  background: url(${(props) => props.imgUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
