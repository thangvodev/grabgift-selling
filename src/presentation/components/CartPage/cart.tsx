import React from "react";
import { CartItemList } from "./cart-items";
import { OrderButton } from "./order-button";
import { GiftPopup } from "./gift-popup";

const Cart = () => {
  return (
    <div className="relative">
      <CartItemList />
      <GiftPopup>{({ open }) => <OrderButton onClick={open} />}</GiftPopup>
    </div>
  );
};

export default Cart;
