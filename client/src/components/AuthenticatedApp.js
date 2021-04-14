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
    <div className={`${darkOrLight()} h-screen flex overflow-hidden bg-white`}>
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
          className="min-w-0 flex-1 h-full flex flex-col overflow-hidden lg:order-last p-8 pb-0 overflow-scroll scrollbar dark:scrollbar-track-gray-500"
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

export default connect(mapStateToProps)(AuthenticatedApp);
