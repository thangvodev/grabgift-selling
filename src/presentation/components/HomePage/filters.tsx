import React, { FC, useState } from "react";
import { CheckableTag } from "../common/tag";
import Product1 from "../../static/images/category1.jpg";
import Product2 from "../../static/images/category2.jpg";
import Product3 from "../../static/images/category3.jpg";
import Product4 from "../../static/images/category4.jpg";
import CheckMarkIcon from "../icons/CheckMarkIcon";
import clsx from "clsx";

export const Filters: FC<Props> = ({
  direction = "horizontal",
  compact,
  hidden,
}) => {
  const [checked, setChecked] = useState<number>();

  if (hidden) {
    return null;
  }

  return (
    <>
      {compact && direction === "horizontal" ? (
        <div className="bg-white px-[16px] pt-[20px] text-xl font-medium leading-[100%]">
          Tất cả sản phẩm
        </div>
      ) : null}
      <div
        className={clsx("sticky top-0 flex h-full", {
          "w-fit flex-col gap-[20px] pt-[16px]": direction === "vertical",
          "px-[16px]": compact,
          "bg-white pt-[20px]": direction === "horizontal",
        })}
        style={{ boxShadow: "0px 4px 24px 0px #A2B0B71F" }}
      >
        {products.map((product, index) => {
          const active = checked === index;
          return (
            <CheckableTag
              key={index}
              checked={active}
              onClick={() => setChecked(index)}
              className={clsx("border-none !bg-transparent", {
                "w-full": direction === "vertical",
              })}
              checkIcon={
                <CheckMarkIcon
                  className={`absolute left-[43px] top-[25px] size-[15px] text-green6`}
                />
              }
            >
              <div
                className={clsx("border-transparent", {
                  "border-b": direction === "horizontal",
                  "!border-[#4884FF]": active,
                })}
              >
                <div
                  className={clsx(
                    "flex flex-col items-center gap-[8px] border-transparent px-[10px] pb-[8px]",
                    {
                      "border-r-2 !pb-0": direction === "vertical",
                      "!border-[#4884FF]": active,
                    },
                  )}
                >
                  <img
                    className="size-[40px] rounded-[40px] border border-white"
                    src={product.img}
                    alt=""
                    style={{
                      boxShadow: active ? "0px 4px 20px 0px #747F8640" : "",
                    }}
                  />
                  <div className="text-xs font-normal">{product.name}</div>
                </div>
              </div>
            </CheckableTag>
          );
        })}
      </div>
    </>
  );
};

type Props = {
  hidden?: boolean;
  direction?: "vertical" | "horizontal";
  compact?: boolean;
};

const products = [
  { name: "Đèn ngủ", img: Product2 },
  { name: "Ghế sofa", img: Product1 },
  { name: "Tranh", img: Product3 },
  { name: "Tủ bếp", img: Product4 },
];
