import React, { useState } from "react";
import { Banner } from "./banner";
import { Filters } from "./filters";
import ProductList from "./product-list";
import { Divider } from "antd";
import clsx from "clsx";

const Layout = () => {
  const [direction, setDirection] = useState<direction>("horizontal");
  const [hideFilter, setHideFilter] = useState(false);
  const [hideBanner, setHideBanner] = useState(false);
  const [compact, setCompact] = useState(false);
  const [hideImage, setHideImage] = useState(false);

  return (
    <div className="pb-[78px]">
      <Banner hidden={hideBanner} />
      <>
        {direction === "vertical" ? (
          <Divider
            className={clsx("m-0 mt-[20px] border-[3px] border-stroke3", {
              hidden: hideFilter,
            })}
          />
        ) : null}
        <div
          className={clsx("flex bg-[#F2FBFF]", {
            "flex-col": direction === "horizontal",
          })}
        >
          <Filters direction={direction} hidden={hideFilter} />
          {direction === "horizontal" ? (
            <Divider
              className={clsx("m-0 border-[3px] border-stroke3", {
                hidden: hideFilter,
              })}
            />
          ) : null}
          <ProductList
            direction={direction}
            compact={compact}
            hideImage={hideImage}
          />
        </div>
      </>
    </div>
  );
};

export default Layout;

export type direction = "vertical" | "horizontal";
