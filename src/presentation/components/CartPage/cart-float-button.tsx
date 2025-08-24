import React from "react";
import { Button } from "../common/button";
import ShoppingCartIcon from "../icons/ShoppingCartIcon";
import { formatCurrency } from "../../utils/helpers";
import { Badge } from "antd";
import { useNavigate } from "react-router-dom";

const CartFloatButton = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-x-0 bottom-0 bg-white px-[16px] pb-[20px] pt-[10px]">
      <Button
        text={
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[12px]">
              <Badge count="1" size="small" color="#E55C5C">
                <ShoppingCartIcon className="size-[24px] text-white" />
              </Badge>
              <div className="text-sm font-medium text-white">Đặt hàng</div>
            </div>
            <div className="text-base font-medium leading-[150%] text-white">
              {formatCurrency(105000)}
            </div>
          </div>
        }
        className="h-[48px] w-full rounded-[24px] px-[16px]"
        style={{
          background: "linear-gradient(180deg, #6AAEF2 0%, #4884FF 100%)",
        }}
        onClick={() => navigate("/cart")}
      />
    </div>
  );
};

export default CartFloatButton;
