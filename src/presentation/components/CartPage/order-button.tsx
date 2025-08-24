import React, { FC } from "react";
import { formatCurrency } from "../../utils/helpers";
import { Button } from "../common/button";

export const OrderButton: FC<Props> = ({ onClick }) => {
  return (
    <div
      className="fixed inset-x-0 bottom-0 flex justify-between bg-white px-[16px] pb-[24px] pt-[12px]"
      style={{ boxShadow: " 0px -4px 24px 0px #A2A2A21F" }}
    >
      <div className="flex flex-col gap-[8px]">
        <div className="text-xs font-medium">Tổng tiền</div>
        <div className="text-lg font-semibold text-error3">
          {formatCurrency(240000)}
        </div>
      </div>
      <Button
        text={<div className="text-base font-medium text-white">Đặt hàng</div>}
        className="h-[48px] w-[166px] flex-none rounded-[40px] px-[48px]"
        style={{
          background: "linear-gradient(180deg, #6AAEF2 0%, #4884FF 100%)",
        }}
        onClick={onClick}
      />
    </div>
  );
};

type Props = {
  onClick: () => void;
};
