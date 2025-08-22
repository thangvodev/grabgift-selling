import React, { FC } from "react";
import { Header, Page } from "zmp-ui";
import ProfileImg from "../static/images/profile-img.png";
import { Footer } from "../components/common/footer";
import { HomePageEventList } from "../components/HomePage";

const HomePage: FC = () => {
  return (
    <Page className="page-content relative flex flex-1 flex-col bg-surface">
      <Header
        title={
          (
            <div className="relative flex items-center gap-[8px]">
              <img
                src={ProfileImg}
                alt=""
                className="size-[40px] shrink-0 rounded-full border border-stroke1 object-cover"
              />
              <div>
                <div className="text-[11px] font-normal leading-[100%]">
                  Xin chào,
                </div>
                <div className="text-base font-medium">Thu Hồng</div>
              </div>
            </div>
          ) as unknown as string
        }
        className="topbar h-auto flex-none border-b-[1px] border-stroke1a !bg-surface !pb-[8px] pl-4"
        showBackIcon={false}
      />
      <div className="flex-1 overflow-auto bg-surface">
        <HomePageEventList />
      </div>
      <Footer />
    </Page>
  );
};

export default HomePage;
