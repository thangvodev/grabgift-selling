import React from "react";
import { SearchBarNoPopup } from "../common/search-bar";
import { Button } from "../common/button";
import SearchIcon from "../icons/SearchIcon";

const Searchbar = () => {
  return (
    <div className="flex flex-col gap-[14px] bg-white px-[16px] pt-[20px]">
      <SearchBarNoPopup
        className="bg-grayinput h-[44px] rounded-[24px] text-base"
        placeholder="Tìm sản phẩm"
        suffixIcon={
          <Button.Icon
            icon={<SearchIcon className="text-secondary4" />}
            className="size-[26px] bg-white p-[6px]"
          />
        }
      />
      <div className="text-sm font-medium text-neutral8">
        Tìm thấy <span className="text-lg font-semibold text-infor3">12</span>{" "}
        kết quả phù hợp với từ khóa{" "}
        <span className="text-lg font-semibold text-infor3">Tủ lạnh</span>
      </div>
    </div>
  );
};

export default Searchbar;
