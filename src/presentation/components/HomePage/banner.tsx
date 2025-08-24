import React, { FC } from "react";
import LavieImage from "../../static/images/lavie.png";

const Banner: FC<Props> = ({ hidden }) => {
  if (hidden) {
    return null;
  }

  return (
    <div className="px-[16px]">
      <img
        src={LavieImage}
        alt=""
        className="h-[140px] w-full rounded-[12px] object-cover"
      />
    </div>
  );
};

export { Banner };

type Props = {
  hidden?: boolean;
};
