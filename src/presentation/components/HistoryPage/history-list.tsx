import React from "react";
import ClockIcon from "../icons/ClockIcon";
import { Divider } from "antd";
import EventImage from "../../static/images/event.png";
import BoxIcon from "../icons/BoxIcon";
import PresentIcon from "../icons/PresentIcon";
import PresentImage from "../../static/images/pillow.png";

const HistoryList = () => {
  return (
    <div className="flex flex-col gap-[12px]">
      {Array.from({ length: 10 }).map((_, index) => {
        return <HistoryListItem key={index} />;
      })}
    </div>
  );
};

const HistoryListItem = () => {
  return (
    <div
      className="flex flex-col gap-[10px] bg-white py-[12px]"
      style={{ boxShadow: "0px 4px 24px 0px #8AA9B114" }}
    >
      <div className="flex items-center gap-[4px] px-[16px]">
        <ClockIcon className="size-[14px] text-neutral6" />
        <div className="text-xs font-normal text-neutral6">
          01/11/2025 - 11/11/2025
        </div>
      </div>
      <Divider className="m-0" />
      <div className="flex flex-col gap-[12px] px-[16px]">
        <div className="flex gap-[12px]">
          <img
            src={EventImage}
            alt=""
            className="size-[64px] rounded-[9.66px]"
          />
          <div className="flex flex-col gap-[8px]">
            <div className="text-sm font-normal leading-[120%]">
              Sự kiện sale ngày 11/11 toàn bộ sản phẩm nội thất
            </div>
            <div className="flex items-center gap-[4px]">
              <BoxIcon className="text-neutral6" />
              <div className="text-xs font-normal text-neutral6">
                1x Ghế sofa xanh navy
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[4px] rounded-[12px] border border-stroke1 bg-neutral2 p-[8px]">
          <div className="flex items-center gap-[4px]">
            <PresentIcon className="size-[16px]" />
            <div className="text-xs font-normal">Quà tặng</div>
          </div>
          <div className="flex items-center gap-[8px]">
            <img
              src={PresentImage}
              alt=""
              className="h-[27.5px] w-[40px] object-cover"
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

export default HistoryList;
