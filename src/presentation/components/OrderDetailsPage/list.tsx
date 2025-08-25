import React from "react";
import LocationIcon from "../icons/LocationIcon";
import { Divider } from "antd";
import BoxIcon from "../icons/BoxIcon";
import ProductImg from "../../static/images/product1.jpg";
import PillowImg from "../../static/images/pillow.png";
import { formatCurrency } from "../../utils/helpers";
import { Button } from "../common/button";
import GiftIcon from "../icons/GiftIcon";
import QRImage from "../../static/images/qrcode.png";
import ClockIcon from "../icons/ClockIcon";

export const OrderList = () => {
  return (
    <div className="flex -translate-y-[22px] flex-col gap-[6px] rounded-t-[20px] bg-[#F1FAFD]">
      {/* QRSection */}
      <div className="relative bg-white">
        <div
          className="absolute left-1/2 top-0 -mt-[80px] size-[160px] -translate-x-1/2 rounded-[8.97px] border-[0.75px] border-[#E8E8E8] bg-white p-[8.97px]"
          style={{ boxShadow: "0px 4px 12px 0px #B1B3B540" }}
        >
          <img src={QRImage} alt="" className="" />
        </div>
        <div className="flex flex-col gap-[12px] px-[16px] pb-[10px] pt-[90px]">
          <div className="text-xl font-medium">
            Món quà vô giá từ thiên nhiên
          </div>
          <div className="flex items-center gap-[4px]">
            <ClockIcon className="text-neutral6" />
            <div className="text-sm font-medium leading-[1px] text-neutral6">
              01/11/2025 - 11/11/2025
            </div>
          </div>
        </div>
      </div>
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
              <div className="text-sm font-normal">
                Ghế Sofa chất liệu cotton màu xanh navy
              </div>
              <div className="flex justify-between">
                <div className="text-xs font-medium">
                  {formatCurrency(120000)}
                </div>
                <div className="text-sm font-medium text-neutral5">sl:2</div>
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
              <div className="text-sm font-normal">
                Ghế Sofa chất liệu cotton màu xanh navy
              </div>
              <div className="flex justify-between">
                <div className="text-xs font-medium">
                  {formatCurrency(120000)}
                </div>
                <div className="text-sm font-medium text-neutral5">sl:2</div>
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
      {/* Footer buttons */}
      <div className="-mt-[6px] flex flex-col gap-[12px] bg-white px-[16px] pt-[16px]">
        <Button
          text={
            <span className="text-base font-medium text-white">
              Về trang chủ
            </span>
          }
          className="flex h-[43px] flex-none items-center justify-center rounded-[40px]"
          style={{
            background: "linear-gradient(180deg, #6AAEF2 0%, #4884FF 100%)",
          }}
        />
        <Button
          text={
            <span className="text-base font-medium text-secondary4">
              Đặt lại
            </span>
          }
          className="flex h-[43px] flex-none items-center justify-center rounded-[40px] bg-secondary1"
        />
        <Button />
      </div>
    </div>
  );
};
