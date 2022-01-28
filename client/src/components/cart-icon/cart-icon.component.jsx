import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectCartItemsCount } from "../../redux/cart/cart.selector";

import { toggleDropdownVisibility } from "../../redux/cart/cart.actions";

import {
  CartIconWrapper,
  ShopIcon,
  ItemCountWrapper,
} from "./cart-icon.styles";

const CartIcon = ({ toggleDropdownVisibility, itemCount }) => (
  <CartIconWrapper onClick={toggleDropdownVisibility}>
    <ShopIcon />
    <ItemCountWrapper>{itemCount}</ItemCountWrapper>
  </CartIconWrapper>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchProps = (dispatch) => ({
  toggleDropdownVisibility: () => dispatch(toggleDropdownVisibility()),
});

export default connect(mapStateToProps, mapDispatchProps)(CartIcon);
