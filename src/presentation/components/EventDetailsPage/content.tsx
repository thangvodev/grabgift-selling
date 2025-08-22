import React from "react";
import ClockIcon from "../icons/ClockIcon";
import { Divider } from "antd";

export const Content = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex flex-col gap-[12px] px-[16px]">
        <div className="text-xl font-medium">Món quà vô giá từ thiên nhiên</div>
        <div className="border-alert3 bg-alert1 flex h-[28px] w-fit items-center justify-center gap-[4px] rounded-[24px] border px-[8px]">
          <ClockIcon className="size-[16px] text-alert4" />
          <div className="text-xs font-semibold leading-[100%] text-alert4">
            01/11/2025 - 11/11/2025
          </div>
        </div>
      </div>
      <Divider className="m-0 border-[3px] border-[#ECF7FA]" />
      <div className="px-[16px]">
        <div className="text-sm font-normal leading-[100%]">
          <div>
            1. Chương trình này mình sẽ chạy các kênh sau:
            <br />
            - Kênh tạp hóa GT
            <br />
            - Kênh chung cư <br />
            - Ngoài ra Lâm đang add thêm phần Mer check và giao hàng (phần này
            nếu ko kịp app vẫn đc, nếu đc thêm phần tracking giao hàng thôi thì
            tốt)
            <br />
            <br />
            2. Scheme: mua 1 thùng 500ml thì có cơ hội nhận 1 vòng quay may mắn
            trên app, trúng 1 phần quà trong các phần quà dưới
            <br />
            <br />
            3. Các thông tin cần lấy khách hàng: tên, sdt, địa chỉ, đơn hàng,
            quà tặng,...
          </div>
        </div>
      </div>
    </div>
  );
};
