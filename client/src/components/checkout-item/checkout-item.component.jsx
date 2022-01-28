import React from "react";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  removeItem,
  addItem,
} from "../../redux/cart/cart.actions";

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  IconContainer,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <TextContainer as='span' className='name'>
        {name}
      </TextContainer>
      <QuantityContainer>
        <IconContainer onClick={() => removeItem(cartItem)}>
          &#10094;
        </IconContainer>
        <span className='value'> {quantity} </span>
        <IconContainer onClick={() => addItem(cartItem)}>
          &#10095;
        </IconContainer>
      </QuantityContainer>
      <TextContainer>${price}</TextContainer>
      <IconContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </IconContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchProps)(CheckoutItem);
