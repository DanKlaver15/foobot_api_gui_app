import React from "react";
import logo from "./botadora_logo_name_black.png.png";

const LogoNameDark = ({ size = "auto" }) => {
  return <img className={`h-auto w-${size}`} src={logo} alt={"logo"} />;
};
export default LogoNameDark;
