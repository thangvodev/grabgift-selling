import React from "react";
import { Banner } from "./banner";
import { OrderList } from "./list";
import { CheckoutButton } from "./checkout-button";
import { CheckoutPopup } from "./checkout-popup";

const Order = () => {
  return (
    <div className="h-full">
      <Banner />
      <OrderList />
      <CheckoutPopup>
        {({ open }) => <CheckoutButton onClick={open} />}
      </CheckoutPopup>
    </div>
  );
};

export default Order;
