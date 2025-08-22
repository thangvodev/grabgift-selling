import React, { FC } from "react";
import { Button } from "../common/button";

export const JoinButton: FC<Props> = ({ onClick }) => {
  return (
    <div
      className="fixed inset-x-0 bottom-0 px-[16px] pb-[20px] pt-[10px]"
      style={{ boxShadow: "0px -4px 12px 0px #406A5D1F" }}
    >
      <Button
        text={
          <div className="text-base font-medium text-white">Tham gia ngay</div>
        }
        className="h-[43px] w-full rounded-[40px]"
        style={{
          background: "linear-gradient(180deg, #6AAEF2 0%, #4884FF 100%)",
        }}
        onClick={onClick}
      />
    </div>
  );
};

type Props = {
  onClick?: any;
};
