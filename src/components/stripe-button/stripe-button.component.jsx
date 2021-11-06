import React from "react";
import StripeCheckout from "react-stripe-checkout";
import keys from "../../config/config";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = keys.publishableStripeKey;

  const onToken = (token) => {
    console.log(token);
    alert("Payment successful");
  };

  return (
    <StripeCheckout
      label='Pay now'
      name='CRWN clothing'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;