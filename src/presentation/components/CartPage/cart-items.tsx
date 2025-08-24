import React, { FC, useState } from "react";
import CartItemImage from "../../static/images/cart-product1.jpg";
import { Checkbox } from "../common/checkbox";
import TrashBinIcon from "../icons/TrashBinIcon";
import { formatCurrency } from "../../utils/helpers";
import { Button } from "../common/button";
import MinusCircleIcon from "../icons/MinusCircleIcon";
import AddCircleIcon from "../icons/AddCircleIcon";

const CartItemList = () => {
  return (
    <div className="flex flex-col gap-[12px] pt-[12px]">
      {data.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
    </div>
  );
};

const CartItem: FC<{ item: TItem }> = ({ item }) => {
  const [currentQuantity, setCurrentQuantity] = useState<number>(item.quantity);

  return (
    <div
      className="flex items-start gap-[14px] bg-white px-[16px] py-[14px]"
      style={{ boxShadow: "0px 4px 24px 0px #8AA9B114" }}
    >
      <Checkbox />
      <img src={item.image} alt="" className="size-[53px] rounded-[8px]" />
      <div className="flex flex-col gap-[8px]">
        <div className="flex items-start gap-[8px]">
          <div className="flex flex-col gap-[4px]">
            <div className="text-sm font-normal">{item.name}</div>
            <div className="text-xs font-medium text-neutral5">
              Mã: {item.code}
            </div>
          </div>
          <TrashBinIcon className="text-[#E55C5C]" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[8px]">
            <div className="text-xs font-medium">
              {formatCurrency(item.price)}
            </div>
            <div className="text-xs font-normal text-neutral5 line-through">
              {formatCurrency(item.oldPrice)}
            </div>
          </div>
          <div className="flex items-center gap-[9px]">
            <Button.Icon
              icon={<MinusCircleIcon className="size-[24px] text-neutral4" />}
              onClick={() =>
                setCurrentQuantity(Math.max(currentQuantity - 1, 0))
              }
            />
            <div className="text-[15px] font-medium leading-[120%]">
              {currentQuantity}
            </div>
            <Button.Icon
              icon={<AddCircleIcon className="size-[24px] text-[#4884FF]" />}
              onClick={() => setCurrentQuantity(currentQuantity + 1)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { CartItemList };

const data = [
  {
    image: CartItemImage,
    name: "Ghế Sofa chất liệu cotton màu xanh navy",
    price: 120000,
    oldPrice: 140000,
    quantity: 2,
    code: "QR2345",
  },
  {
    image: CartItemImage,
    name: "Ghế Sofa chất liệu cotton màu xanh navy",
    price: 120000,
    oldPrice: 140000,
    quantity: 2,
    code: "QR2345",
  },
];

type TItem = {
  image: string;
  name: string;
  price: number;
  oldPrice: number;
  quantity: number;
  code: string;
};
