import React from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <div className="flex justify-between h-16 items-center px-[5%]">
      <Logo />
      <Navigation />
    </div>
  );
};

export default Header;
