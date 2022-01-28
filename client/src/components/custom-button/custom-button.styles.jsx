import styled, { css } from "styled-components";

const buttonStyle = css`
  background-color: #000;
  color: #fff;
  border: none;

  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }
`;

const invertedButtonStyle = css`
  background-color: #fff;
  color: #000;
  border: 1px solid #000;

  &:hover {
    background-color: #000;
    color: #fff;
    border: none;
  }
`;

const googleSignInStyle = css`
  background-color: #4285f4;
  color: #fff;
  border: none;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyle;
  }
  return props.inverted ? invertedButtonStyle : buttonStyle;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 20px;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: medium;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${getButtonStyles}
`;
