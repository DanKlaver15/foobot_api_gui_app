import React from "react";
import icon from "./icons8-robot-dark-mode.png";

const RobotIconDark = ({ size = "auto" }) => {
  return <img className={`h-auto w-${size}`} src={icon} alt={"logo"} />;
};
export default RobotIconDark;
