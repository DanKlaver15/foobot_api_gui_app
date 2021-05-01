import React from "react";
import icon from "./icons8-robot-light-mode.png";

const RobotIconLight = ({ size = "auto" }) => {
  return <img className={`h-auto w-${size}`} src={icon} alt={"logo"} />;
};
export default RobotIconLight;
