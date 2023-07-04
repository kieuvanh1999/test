import React from "react";
import Nav from "../components/Navs";
import Footers from "../components/Footers";
import Headers from "../components/Headers";
import Navs from "../components/Navs";


const Layout = ({ children}) => {
  return (
    <>

    <div className="page-wrapper">
    <Headers />
      <div>{children}</div>
    <Footers />
    </div>

    </>
  );
}
export default Layout