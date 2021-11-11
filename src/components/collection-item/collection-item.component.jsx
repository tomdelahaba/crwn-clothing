import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import {
  CollectionItemContainer,
  ImageContainer,
  FooterContainer,
  TextNameContainer,
  TextPriceContainer,
  CustomButtonContainer,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <CollectionItemContainer>
      <ImageContainer imageUrl={imageUrl} />
      <FooterContainer>
        <TextNameContainer>{name}</TextNameContainer>
        <TextPriceContainer>${price}</TextPriceContainer>
      </FooterContainer>
      <CustomButtonContainer inverted onClick={() => addItem(item)}>
        Add to cart
      </CustomButtonContainer>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
