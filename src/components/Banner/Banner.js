import React from "react";
import SearchInput from "../SearchInput/SearchInput";

const Banner = () => {
  return (
    <div className="w-full h-[40vh] bg-black">
      <div className="pl-[5%] pt-[5%]">
        <SearchInput />
      </div>
    </div>
  );
};

export default Banner;
