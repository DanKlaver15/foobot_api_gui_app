import React from "react";
import logo from "./botadora_logo.png";

const Logo = ({ size = 52 }) => {
  return <img className={`h-auto w-${size}`} src={logo} alt={"logo"} />;
};
export default Logo;
