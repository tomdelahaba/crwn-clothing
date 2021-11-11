import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../redux/cart/cart.selector";
import { toggleDropdownVisibility } from "../../redux/cart/cart.actions";

import CartItem from "../cart-item/cart-item.component";

import { withRouter } from "react-router-dom";

import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
  CartDropdownButton,
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, toggleDropdownVisibility }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <EmptyMessageContainer>Your cart is empty.</EmptyMessageContainer>
      )}
    </CartItemsContainer>
    <CartDropdownButton
      onClick={() => {
        history.push("/checkout");
        toggleDropdownVisibility();
      }}
    >
      GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchProps = (dispatch) => ({
  toggleDropdownVisibility: () => dispatch(toggleDropdownVisibility()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchProps)(CartDropdown)
);
