import React from "react";
import Header from "./Header";

function Layout(props) {
  return (
    <div className="">
      <Header />
      <div className="">{props.children}</div>
    </div>
  );
}

export default Layout;
