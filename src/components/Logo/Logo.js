import React from "react";
import Logoimg from "../../images/bethel_logo.png";

const Logo = () => {
  return (
    <div className="flex items-center gap-2 font-bold text-xl tracking-wider">
      <img src={Logoimg} className="w-[40px]" alt="" />
      <h2>Bethel Scan</h2>
    </div>
  );
};

export default Logo;
