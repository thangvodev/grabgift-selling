import React from "react";
import LavieImage from "../../static/images/lavie.png";
import ClockIcon from "../icons/ClockIcon";
import { useNavigate } from "react-router-dom";
import { Button } from "../common/button";

const EventList = () => {
  return (
    <div className="flex flex-col gap-[12px] p-[16px]">
      <div className="text-xl font-medium">Sự kiện nổi bật</div>
      <div className="flex flex-col gap-[12px]">
        {Array.from({ length: 10 }).map((_, index) => (
          <EventListItem key={index} />
        ))}
      </div>
    </div>
  );
};

const EventListItem = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col gap-[12px] rounded-[12px] bg-white p-[12px]"
      style={{ boxShadow: "0px 6px 12px 0px #3F5F7C1A" }}
    >
      <img
        src={LavieImage}
        alt=""
        className="h-[140px] w-full rounded-[12px] object-cover"
      />
      <div className="flex flex-col gap-[8px]">
        <div className="text-base font-medium">
          Món quà vô giá từ thiên nhiên
        </div>
        <div className="flex items-center gap-[4px]">
          <ClockIcon />
          <div className="text-sm font-medium text-neutral6">
            01/11/2025 - 11/11/2025
          </div>
        </div>
        <Button
          text={
            <span className="text-sm font-medium text-white">Xem chi tiết</span>
          }
          className="flex h-[32px] flex-none items-center justify-center rounded-[40px]"
          style={{
            background: "linear-gradient(180deg, #6AAEF2 0%, #4884FF 100%)",
          }}
          onClick={() => navigate("/event")}
        />
      </div>
    </div>
  );
};

export default EventList;
