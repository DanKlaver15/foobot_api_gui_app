import React from "react";
import { connect } from "react-redux";
import Avatar from "./Avatar";

const WelcomeCard = ({ user }) => {
  let numDevices = 0;
  if (user.devices) {
    numDevices = user.devices.length;
  }

  return (
    <div className="rounded-lg bg-white overflow-hidden w-full mb-4">
      <h2 className="sr-only" id="profile-overview-title">
        Profile Overview
      </h2>
      <div className="bg-white p-6">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="sm:flex sm:space-x-5">
            <div className="flex-shrink-0">
              <Avatar size={10} source={user.avatar} />
            </div>
            <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
              <p className="text-sm font-medium text-gray-600">Welcome back,</p>
              <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                {user.firstName}
              </p>
              <p className="text-sm font-medium text-gray-600">{user.role}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 bg-gray-50">
        {/*TODO: Add stats here (optional)*/}
        <div key="stats" className="px-6 py-5 text-lg font-medium">
          <span className="text-gray-900">You currently have</span>{" "}
          <span className="text-blue-600">{numDevices}</span>{" "}
          <span className="text-gray-900">Foobot machines</span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(WelcomeCard);
