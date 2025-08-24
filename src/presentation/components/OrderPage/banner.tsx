import React, { FC } from "react";
import LavieImage from "../../static/images/lavie.png";

const Banner: FC<Props> = ({ hidden }) => {
  if (hidden) {
    return null;
  }

  return (
    <div className="">
      <img src={LavieImage} alt="" className="h-[240px] w-full object-cover" />
    </div>
  );
};

export { Banner };

type Props = {
  hidden?: boolean;
};
