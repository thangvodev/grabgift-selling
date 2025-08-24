import React, { FC } from "react";
import { Header, Page } from "zmp-ui";
import { HomePageLayout } from "../components/HomePage";
import { Button } from "../components/common/button";
import SearchIcon from "../components/icons/SearchIcon";
import { CartFloatButton } from "../components/CartPage";

const HomePage: FC = () => {
  return (
    <Page className="page-content relative flex flex-1 flex-col bg-[#F0F5FF]">
      <Header
        title={
          (
            <div className="relative flex w-[calc(100%-88px)] items-center justify-between gap-[8px]">
              <div>
                <div className="text-[11px] font-normal leading-[100%]">
                  Xin chào,
                </div>
                <div className="text-base font-medium">Thu Hồng</div>
              </div>
              <Button.Icon
                icon={<SearchIcon className="size-[16px] text-[#4884FF]" />}
                className="flex size-[28px] items-center justify-center rounded-[40px] bg-secondary1"
              />
            </div>
          ) as unknown as string
        }
        className="topbar no-border h-auto flex-none !pb-[8px] !pl-[16px]"
        showBackIcon={false}
        style={{
          background: "linear-gradient(180deg, #F0F5FF 0%, #FFFFFF 100%)",
        }}
      />
      <div className="flex-1 overflow-auto bg-white">
        <HomePageLayout />
        <CartFloatButton />
      </div>
    </Page>
  );
};

export default HomePage;
