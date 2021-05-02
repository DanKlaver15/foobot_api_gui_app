import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { connect } from "react-redux";
import { updateFoobotsRequest } from "../state/User/thunks";

const AuthenticatedApp = ({ user, children, updateUserFoobots }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const darkOrLight = () => {
    if (user.darkMode === true) {
      return "dark";
    } else {
      return "";
    }
  };

  // useEffect(() => {
  //   updateUserFoobots(user);
  // }, [user, updateUserFoobots]);

  return (
    <div
      className={`${darkOrLight()} h-screen flex overflow-hidden bg-gray-200`}
    >
      <Sidebar
        user={user}
        isOpen={sidebarOpen}
        close={() => {
          setSidebarOpen(!sidebarOpen);
        }}
      />
      <main className="flex-1 overflow-y-auto border-t border-gray-200 dark:bg-gray-800 dark:border-gray-500">
        {/* <!-- Primary column --> */}
        <section
          aria-labelledby="primary-heading"
          className="min-w-0 flex-1 h-full flex flex-col overflow-hidden lg:order-last p-6 pb-0 overflow-scroll scrollbar dark:scrollbar-track-gray-500"
        >
          {children}
        </section>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

// const mapDispatchToProps = (dispatch) => ({
//   updateUserFoobots: (user) => dispatch(updateFoobotsRequest(user)),
// });

export default connect(mapStateToProps)(AuthenticatedApp);
