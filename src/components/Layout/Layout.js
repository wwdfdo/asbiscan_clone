import React from "react";

const Layout = (props) => {
  return (
    <div className="m-0 p-0 box-border bg-slate-300">
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
