import styled from "styled-components";

import CustomButton from "../custom-button/custom-button.component";

export const CollectionItemContainer = styled.div`
  height: 350px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 22vw;
  position: relative;

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const ImageContainer = styled.div`
  height: 95%;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const FooterContainer = styled.div`
  height: 5%;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const TextNameContainer = styled.span`
  width: 90%;
`;

export const TextPriceContainer = styled.span`
  width: 10%;
`;

export const CustomButtonContainer = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  margin: 0 auto;
  display: none;
`;
