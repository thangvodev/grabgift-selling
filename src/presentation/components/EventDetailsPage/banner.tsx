import React from "react";
import BannerImage from "../../static/images/lavie.png";
import Logo from "../../static/images/lavie-logo.png";

export const Banner = () => {
  return (
    <div className="relative flex w-full flex-col items-center pb-[70px]">
      <img src={BannerImage} alt="" className="size-full object-cover" />
      <div className="absolute bottom-0 flex flex-col gap-[8px]">
        <img
          src={Logo}
          alt=""
          className="size-[80px] rounded-[12px] border-[1.5px] border-stroke1 object-cover"
        />
        <div className="text-center text-base font-medium">Lavie</div>
      </div>
    </div>
  );
};
