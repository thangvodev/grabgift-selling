import React from "react";
import LocationIcon from "../icons/LocationIcon";
import { Divider } from "antd";
import BoxIcon from "../icons/BoxIcon";
import ProductImg from "../../static/images/product1.jpg";
import PillowImg from "../../static/images/pillow.png";
import TrashBinIcon from "../icons/TrashBinIcon";
import { formatCurrency } from "../../utils/helpers";
import { Button } from "../common/button";
import MinusCircleIcon from "../icons/MinusCircleIcon";
import AddCircleIcon from "../icons/AddCircleIcon";
import GiftIcon from "../icons/GiftIcon";

export const OrderList = () => {
  return (
    <div className="flex -translate-y-[22px] flex-col gap-[12px] rounded-t-[20px] bg-[#F1FAFD] pb-[75px]">
      {/* Top section */}
      <div className="flex flex-col gap-[14px] bg-white px-[14px] pb-[14px] pt-[22px]">
        <div className="flex gap-[12px]">
          <div className="size-fit rounded-[6.4px] bg-orange1 p-[6.4px]">
            <LocationIcon className="text-orange6" />
          </div>
          <div className="flex flex-col gap-[4px]">
            <div className="text-xs font-medium">Địa chỉ nhận hàng</div>
            <div className="text-xs font-medium text-gray7">
              284/12/3 Lý Thường Kiệt
            </div>
            <div className="text-xs font-medium text-gray7">12:00 - 14:00</div>
          </div>
        </div>
        <Divider className="m-0" />
        <div className="flex items-center gap-[4px]">
          <BoxIcon className="size-[20px]" />
          <div className="text-sm font-normal">Thông tin đơn hàng</div>
        </div>
        <div className="flex flex-col gap-[12px]">
          {/* Product */}
          <div className="flex gap-[12px]">
            <img
              src={ProductImg}
              alt=""
              className="size-[53px] rounded-[8px]"
            />
            <div className="flex w-full flex-col gap-[8px]">
              <div className="flex justify-between gap-[8px]">
                <div>Ghế Sofa chất liệu cotton màu xanh navy</div>
                <TrashBinIcon className="text-[#E55C5C]" />
              </div>
              <div className="text-xs font-medium text-neutral5">
                Mã: QR2345
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-[8px]">
                  <div className="text-xs font-medium">
                    {formatCurrency(120000)}
                  </div>
                  <div className="text-xs font-normal text-neutral5 line-through">
                    {formatCurrency(140000)}
                  </div>
                </div>
                <div className="flex items-center gap-[9px]">
                  <Button.Icon
                    icon={
                      <MinusCircleIcon className="size-[24px] text-neutral4" />
                    }
                  />
                  <div className="text-[15px] font-medium leading-[120%]">
                    2
                  </div>
                  <Button.Icon
                    icon={
                      <AddCircleIcon className="size-[24px] text-[#4884FF]" />
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <Divider className="m-0" />
          {/* Product */}
          <div className="flex gap-[12px]">
            <img
              src={ProductImg}
              alt=""
              className="size-[53px] rounded-[8px]"
            />
            <div className="flex w-full flex-col gap-[8px]">
              <div className="flex justify-between gap-[8px]">
                <div>Ghế Sofa chất liệu cotton màu xanh navy</div>
                <TrashBinIcon className="text-[#E55C5C]" />
              </div>
              <div className="text-xs font-medium text-neutral5">
                Mã: QR2345
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-[8px]">
                  <div className="text-xs font-medium">
                    {formatCurrency(120000)}
                  </div>
                  <div className="text-xs font-normal text-neutral5 line-through">
                    {formatCurrency(140000)}
                  </div>
                </div>
                <div className="flex items-center gap-[9px]">
                  <Button.Icon
                    icon={
                      <MinusCircleIcon className="size-[24px] text-neutral4" />
                    }
                  />
                  <div className="text-[15px] font-medium leading-[120%]">
                    2
                  </div>
                  <Button.Icon
                    icon={
                      <AddCircleIcon className="size-[24px] text-[#4884FF]" />
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Gift section */}
      <div
        className="flex flex-col gap-[14px] bg-white p-[14px]"
        style={{ boxShadow: "0px 4px 24px 0px #8AA9B114" }}
      >
        <div className="flex items-center gap-[4px]">
          <GiftIcon className="text-neutral6" />
          <div className="text-sm font-normal">Quà tặng</div>
        </div>
        <div className="text-sm font-medium">Mua 2 sản phẩm tặng 1</div>
        <div className="flex flex-col gap-[14px]">
          {/* Gift */}
          <div className="flex items-center gap-[8px]">
            <img src={PillowImg} alt="" className="w-[53.14px] object-cover" />
            <div className="text-xs font-medium text-neutral8">
              1x Gối kê cổ cam đáng yêu
            </div>
          </div>
          <Divider className="m-0 border-dashed" />
          {/* Gift */}
          <div className="flex items-center gap-[8px]">
            <img
              src={PillowImg}
              alt=""
              className="h-[36.54px] w-[53.14px] object-cover"
            />
            <div className="text-xs font-medium text-neutral8">
              1x Gối kê cổ cam đáng yêu
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
