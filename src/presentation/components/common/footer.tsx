import React from "react";
import TransitionLink from "./transition-link";
import HomeIcon from "../icons/HomeIcon";
import HistoryIcon from "../icons/HistoryIcon";
import UserIcon from "../icons/UserIcon";

const NAV_ITEMS = [
  {
    name: "Trang chủ",
    path: "/",
    icon: ({ active }: { active: boolean }) =>
      active ? (
        <HomeIcon className="size-[20px] text-[#4884FF]" />
      ) : (
        <HomeIcon className="size-[20px] text-neutral5" />
      ),
  },
  {
    name: "Lịch sử",
    path: "/history",
    icon: ({ active }: { active: boolean }) =>
      active ? (
        <HistoryIcon className="size-[20px] text-[#4884FF]" />
      ) : (
        <HistoryIcon className="size-[20px] text-neutral5" />
      ),
  },
  {
    name: "Tài khoản",
    path: "/profile",
    icon: ({ active }: { active: boolean }) =>
      active ? (
        <UserIcon className="size-[20px] text-[#4884FF]" />
      ) : (
        <UserIcon className="size-[20px] text-neutral5" />
      ),
  },
];

function Footer() {
  return (
    <div
      className="p w-ful grid bg-[#FFFFFF] px-[16px] pb-[20px] pt-[10px]"
      style={{
        gridTemplateColumns: `repeat(${NAV_ITEMS.length}, 1fr)`,
        paddingBottom: `max(16px, env(safe-area-inset-bottom)`,
        boxShadow: "0px -4px 12px 0px #406A5D1F",
      }}
    >
      {NAV_ITEMS.map((item, key) => {
        return (
          <TransitionLink
            to={item.path}
            key={key}
            className="flex cursor-pointer flex-col items-center"
          >
            {({ isActive }) => (
              <>
                <div className="flex h-6 w-6 items-center justify-center">
                  <item.icon active={isActive} />
                </div>
                <div
                  className={`text-2xs ${isActive ? "text-[#4E86FF]" : "text-gray5"}`}
                >
                  {item.name}
                </div>
              </>
            )}
          </TransitionLink>
        );
      })}
    </div>
  );
}

export { Footer };
