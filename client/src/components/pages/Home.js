import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import WelcomeCard from "../WelcomeCard";
import RobotIconDark from "../../RobotIcons/RobotIconDark";
import RobotIconLight from "../../RobotIcons/RobotIconLight";

const Home = ({ user }) => {
  return (
    <div className="grid grid-rows-4 grid-cols-2 min-height-1/2">
      <div className="flex space-x-3">
        <WelcomeCard />
        <div className="min-w-0 flex-1" />
      </div>
      <div className="row-start-3 row-span-2 justify-self-center">
        {user.darkMode ? (
          <RobotIconDark size={96} />
        ) : (
          <RobotIconLight size={96} />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Home);
