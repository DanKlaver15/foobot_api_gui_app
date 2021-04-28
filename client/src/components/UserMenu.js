import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import { logoutRequest } from "../state/User/thunks";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";

const UserMenu = ({ avatarSource, logout, userId, user }) => {
  const [userMenu, setUserMenu] = useState(false);
  const menu = useRef(null);

  const openClass = userMenu
    ? "transition ease-in duration-75 transform opacity-100 scale-100"
    : "transition ease-out duration-100 transform opacity-0 scale-0";

  useEffect(() => {
    if (userMenu) {
      menu.current.querySelector("a").focus();
      window.addEventListener("click", onClickOutsideComponent);
    }

    return () => {
      window.removeEventListener("click", onClickOutsideComponent);
    };
  });

  function onClickOutsideComponent() {
    if (userMenu) {
      setUserMenu(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => setUserMenu(!userMenu)}
        className="group w-full bg-gray-700 rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none"
        id="options-menu"
        aria-orientation="vertical"
        aria-expanded="false"
        aria-haspopup="true"
      >
        <span className="flex w-full justify-between items-center">
          <Avatar source={avatarSource} size={8} />
          <span className="flex min-w-0 items-center justify-between space-x-3">
            <span className="flex-1 flex flex-col min-w-0">
              <span className="text-gray-400 text-sm font-medium truncate">
                {user.firstName + " " + user.lastName}
              </span>
              <span className="text-gray-400 text-sm truncate">
                {user.email}
              </span>
            </span>
          </span>
          <svg
            className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>
      <div
        className={`origin-top-left absolute z-30 w-10/12 mt-3 py-2 justify-between items-center rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none ${openClass}`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-1"
      >
        <div ref={menu} className="py-1" role="none">
          <Link
            to="/"
            onClick={() => {
              logout(userId);
              setUserMenu(false);
            }}
            className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-600"
            role="menuitem"
          >
            Sign Out
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  avatarSource: state.user ? state.user.avatar : null,
  userId: state.user ? state.user._id : null,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  logout: (userId) => dispatch(logoutRequest(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
