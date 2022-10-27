import React from "react";
import { Header } from "./Header";

function Layout(props) {
  return (
    <div>
      <Header />
      <div className="container  px-4 mx-auto items-center">{props.children}</div>
    </div>
  );
}

export default Layout;
