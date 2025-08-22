import React, { FC, useState } from "react";
import { Modal } from "zmp-ui";
import { Button } from "../common/button";
import CloseIcon from "../icons/CloseIcon";
import QRcode from "../../static/images/qrcode.png";

export const QRPopup: FC<Props> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {children({ open: () => setIsModalOpen(true) })}
      <Modal
        visible={isModalOpen}
        title={
          (
            <>
              <div className="text-pretty text-lg font-semibold leading-[120%]">
                Mã QR Khách hàng
              </div>
              <div
                className="absolute right-0 top-0 size-[32px] -translate-y-[50px]"
                onClick={handleCancel}
              >
                <CloseIcon className="size-[100%] text-white" />
              </div>
            </>
          ) as unknown as string
        }
        onClose={() => {
          setIsModalOpen(false);
        }}
        modalStyle={{
          overflow: "visible",
          paddingTop: "28px",
          position: "relative",
          width: "294px",
          borderRadius: "24px",
        }}
      >
        <div className="flex flex-col items-center gap-[19px] px-[37px] pb-[37px]">
          <div className="size-[214px] rounded-[12px] border border-[#E8E8E8] p-[12px]">
            <img src={QRcode} alt="" className="size-full" />
          </div>
          <div className="flex w-full flex-col gap-[12px]">
            <Button
              text={
                <span className="text-sm font-medium text-white">
                  Tiếp tục mua hàng
                </span>
              }
              className="flex h-[33px] flex-none items-center justify-center rounded-[40px]"
              style={{
                background: "linear-gradient(180deg, #6AAEF2 0%, #4884FF 100%)",
              }}
            />
            <Button />
            <Button
              text={
                <span className="text-sm font-medium text-secondary4">
                  Về trang chủ
                </span>
              }
              className="bg-secondary1 flex h-[33px] flex-none items-center justify-center rounded-[40px]"
            />
            <Button />
          </div>
        </div>
      </Modal>
    </>
  );
};

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};
