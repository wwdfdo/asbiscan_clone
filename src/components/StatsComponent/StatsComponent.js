import React from "react";
import etheriumprice from "../../images/ethereumprice.svg";
import marketcap from "../../images/markeycap.svg";
import latestblock from "../../images/latestbook.svg";
import latestbatch from "../../images/latestbatch.svg";
import statschart from "../../images/statsimage.jpg";
import Linechart from "../Linechart/Linechart";
import RechartLine from "../RechartLine/RechartLine";

const StatsComponent = () => {
  return (
    <div className=" bg-white border-[1px] w-11/12 mx-auto -mt-10 rounded-lg flex justify-between py-2 z-40">
      <div className="flex flex-col justify-center items-start pl-5 gap-3  border-r-[1px] border-black border-opacity-40 w-1/3">
        <div className="flex justify-start items-center gap-2 ">
          <div className="w-[1.20313rem] h-[1.20313rem]">
            <img src={etheriumprice} alt="" />
          </div>
          <div className="flex flex-col">
            <div>ETHER PRICE</div>
            <div>$1,741.82 @ 0.06344 BTC (-3.59%)</div>
          </div>
        </div>
        <hr className=" border-t-[1.5px] border-black w-[90%] border-opacity-40 my-2"></hr>

        <div className="flex justify-start items-center gap-2">
          <div className="w-[1.20313rem] h-[1.20313rem]">
            <img src={marketcap} alt="" />
          </div>
          <div className="flex flex-col">
            <div>MARKET CAP</div>
            <div>$1,741.82 @ 0.06344 BTC (-3.59%)</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-start pl-5 gap-5 border-r-[1px] border-black border-opacity-40 w-1/3  ">
        <div className="flex justify-start items-center gap-2">
          <div className="w-[1.20313rem] h-[1.20313rem]">
            <img src={etheriumprice} alt="" />
          </div>
          <div className="flex flex-col">
            <div>ETHER PRICE</div>
            <div>$1,741.82 @ 0.06344 BTC (-3.59%)</div>
          </div>
        </div>
        <hr className=" border-t-[1.5px] border-black w-[90%] border-opacity-40 my-2"></hr>

        <div className="flex justify-start items-center gap-2">
          <div className="w-[1.20313rem] h-[1.20313rem]">
            <img src={latestbatch} alt="" />
          </div>
          <div className="flex flex-col">
            <div>LATEST L1 BATCH</div>
            <div>110821</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-start pl-5 gap-5 pr-5">
        <div className="flex justify-between items-center">
          <div className="text-[.8rem]">
            ARBITRUM TRANSACTION HISTORY LAST 14 DAYS
          </div>
          <div>...</div>
        </div>

        <div className="flex justify-start ">
          {/* <Linechart /> */}
          <RechartLine />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default StatsComponent;
