import React from "react";
import { Banner } from "./banner";
import { OrderList } from "./list";

const Order = () => {
  return (
    <div className="h-full">
      <Banner />
      <OrderList />
    </div>
  );
};

export default Order;
