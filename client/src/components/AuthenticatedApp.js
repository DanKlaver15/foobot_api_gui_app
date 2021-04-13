import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { connect } from "react-redux";

const AuthenticatedApp = ({ user, children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const darkOrLight = () => {
    if (user.darkMode === true) {
      return "dark";
    } else {
      return "";
    }
  };

  return (
    <div className={`${darkOrLight()}h-screen flex overflow-hidden bg-white`}>
      <Sidebar
        user={user}
        isOpen={sidebarOpen}
        close={() => {
          setSidebarOpen(!sidebarOpen);
        }}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(AuthenticatedApp);
