import React, { Fragment } from "react";
import MainHeader from "./main-headrer";

function Layout(props) {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
