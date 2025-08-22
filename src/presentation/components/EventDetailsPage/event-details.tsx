import React from "react";
import { Banner } from "./banner";
import { Content } from "./content";
import { JoinButton } from "./join-button";
import { QRPopup } from "./qr-popup";

const EventDetails = () => {
  return (
    <div className="flex flex-col gap-[12px]">
      <Banner />
      <Content />
      <QRPopup>{({ open }) => <JoinButton onClick={open} />}</QRPopup>
    </div>
  );
};

export default EventDetails;
