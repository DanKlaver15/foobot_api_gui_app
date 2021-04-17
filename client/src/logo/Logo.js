import React from "react";
import logo from "./logo_alt.svg";

const Logo = ({ size = "auto" }) => {
  return <img className={`h-auto w-${size}`} src={logo} alt={"logo"} />;
};
export default Logo;
