import React, { FC, useState } from "react";
import Product1 from "../../static/images/product1.jpg";
import Product2 from "../../static/images/product2.jpg";
import Product3 from "../../static/images/product3.jpg";
import Product4 from "../../static/images/product4.jpg";
import { formatCurrency } from "../../utils/helpers";
import MinusCircleIcon from "../icons/MinusCircleIcon";
import AddCircleIcon from "../icons/AddCircleIcon";
import { Button } from "../common/button";
import clsx from "clsx";
import { direction } from "./layout";
import { Divider } from "antd";

const ProductList: FC<Props> = ({
  direction = "horizontal",
  compact = false,
  hideImage = false,
  isSearching,
}) => {
  return (
    <div className="flex flex-1 flex-col gap-[14px] bg-white px-[16px] pt-[20px]">
      {!compact && !isSearching ? (
        <div className="text-xl font-medium leading-[100%]">
          Tất cả sản phẩm
        </div>
      ) : null}
      <div
        className={clsx("grid grid-flow-row grid-cols-2 gap-[12px]", {
          "!grid-cols-1": compact,
        })}
      >
        {data.map((product, index) => (
          <React.Fragment key={index}>
            {compact ? <Divider className="m-0" /> : null}
            <ProductListItem
              product={product}
              direction={direction}
              compact={compact}
              hideImage={hideImage}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const ProductListItem: FC<{
  product: Product;
  direction: direction;
  compact: boolean;
  hideImage: boolean;
}> = ({ product, direction, compact, hideImage }) => {
  const [currentQuantity, setCurrentQuantity] = useState<number>(
    product.quantity,
  );

  return (
    <div
      className={clsx("flex flex-col gap-[8px]", {
        "!flex-row": compact,
      })}
    >
      {!hideImage ? (
        <img
          src={product.img}
          alt=""
          className={clsx("aspect-square rounded-[12px] object-cover", {
            "size-[56px]": compact,
          })}
        />
      ) : null}
      <div className="flex w-full flex-col justify-between gap-[4px]">
        <div className="text-sm font-medium">{product.name}</div>
        <div
          className={clsx("flex items-center justify-between", {
            "flex-col !items-start gap-[4px]": direction === "vertical",
          })}
        >
          <div className="text-sm font-medium text-neutral6">
            {formatCurrency(product.price)}
          </div>
          <div className="flex items-center gap-[9px]">
            <Button.Icon
              icon={<MinusCircleIcon className="size-[24px] text-neutral4" />}
              onClick={() =>
                setCurrentQuantity(Math.max(currentQuantity - 1, 0))
              }
            />
            <div className="text-xl font-medium leading-[120%]">
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

export default ProductList;

type Props = {
  direction?: direction;
  compact?: boolean;
  hideImage?: boolean;
  isSearching?: boolean;
};

type Product = {
  name: string;
  img: string;
  quantity: number;
  price: number;
};

const data = [
  {
    name: "Mặt nạ dưỡng ẩm Insifree",
    img: Product1,
    quantity: 2,
    price: 120000,
  },
  {
    name: "Mặt nạ dưỡng ẩm Insifree",
    img: Product2,
    quantity: 2,
    price: 120000,
  },
  {
    name: "Mặt nạ dưỡng ẩm Insifree",
    img: Product3,
    quantity: 2,
    price: 120000,
  },
  {
    name: "Mặt nạ dưỡng ẩm Insifree",
    img: Product4,
    quantity: 2,
    price: 120000,
  },
  {
    name: "Mặt nạ dưỡng ẩm Insifree",
    img: Product4,
    quantity: 2,
    price: 120000,
  },
  {
    name: "Mặt nạ dưỡng ẩm Insifree",
    img: Product4,
    quantity: 2,
    price: 120000,
  },
  {
    name: "Mặt nạ dưỡng ẩm Insifree",
    img: Product4,
    quantity: 2,
    price: 120000,
  },
];
