import React from "react";
import UserMenu from "./UserMenu";
import LogoNameLight from "../logo/LogoNameLight";

const Sidebar = ({ isOpen, close, user }) => {
  const menuOverlay = isOpen ? "opacity-100" : "opacity-0";
  const closeButton = isOpen ? "opacity-100" : "opacity-0";

  const offCanvasMenu = isOpen ? "translate-x-0" : "-translate-x-full";

  return (
    <div className="h-screen flex overflow-hidden bg-white">
      {/*<!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->*/}
      <div
        className="fixed inset-0 flex z-40 lg:hidden"
        role="dialog"
        aria-modal="true"
      >
        {/*<!--
      Off-canvas menu overlay, show/hide based on off-canvas menu state.

      Entering: "transition-opacity ease-linear duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "transition-opacity ease-linear duration-300"
        From: "opacity-100"
        To: "opacity-0"
    -->*/}
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75"
          aria-hidden="true"
        ></div>

        {/*<!--
      Off-canvas menu, show/hide based on off-canvas menu state.

      Entering: "transition ease-in-out duration-300 transform"
        From: "-translate-x-full"
        To: "translate-x-0"
      Leaving: "transition ease-in-out duration-300 transform"
        From: "translate-x-0"
        To: "-translate-x-full"
    -->*/}
        <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
          {/*<!--
        Close button, show/hide based on off-canvas menu state.

        Entering: "ease-in-out duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "ease-in-out duration-300"
          From: "opacity-100"
          To: "opacity-0"
      -->*/}
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Close sidebar</span>
              {/*<!-- Heroicon name: outline/x -->*/}
              <svg
                className="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex-shrink-0 flex items-center px-4">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-purple-500-mark-gray-700-text.svg"
              alt="Workflow"
            />
          </div>
          <div className="mt-5 flex-1 h-0 overflow-y-auto">
            <nav className="px-2">
              <div className="space-y-1">
                {/*<!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:text-gray-900 hover:bg-gray-50" -->*/}
                <button
                  className="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md"
                  aria-current="page"
                >
                  {/*<!--
                Heroicon name: outline/home

                Current: "text-gray-500", Default: "text-gray-400 group-hover:text-gray-500"
              -->*/}
                  <svg
                    className="text-gray-500 mr-3 h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Home
                </button>

                <button className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md">
                  {/*<!-- Heroicon name: outline/view-list -->*/}
                  <svg
                    className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 10h16M4 14h16M4 18h16"
                    />
                  </svg>
                  My tasks
                </button>

                <button className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md">
                  {/*<!-- Heroicon name: outline/clock -->*/}
                  <svg
                    className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Recent
                </button>
              </div>
              <div className="mt-8">
                <h3
                  className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
                  id="teams-headline"
                >
                  Teams
                </h3>
                <div
                  className="mt-1 space-y-1"
                  role="group"
                  aria-labelledby="teams-headline"
                >
                  <button className="group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                    <span
                      className="w-2.5 h-2.5 mr-4 bg-indigo-500 rounded-full"
                      aria-hidden="true"
                    ></span>
                    <span className="truncate">Engineering</span>
                  </button>

                  <button className="group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                    <span
                      className="w-2.5 h-2.5 mr-4 bg-green-500 rounded-full"
                      aria-hidden="true"
                    ></span>
                    <span className="truncate">Human Resources</span>
                  </button>

                  <button className="group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                    <span
                      className="w-2.5 h-2.5 mr-4 bg-yellow-500 rounded-full"
                      aria-hidden="true"
                    ></span>
                    <span className="truncate">Customer Success</span>
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="flex-shrink-0 w-14" aria-hidden="true">
          {/*<!-- Dummy element to force sidebar to shrink to fit close icon -->*/}
        </div>
      </div>

      {/*=============================================================================================================*/}

      {/*<!-- Static sidebar for desktop -->*/}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64 border-r border-gray-200 pt-1 bg-gray-800">
          <div className="flex items-center flex-shrink-0 px-1">
            <LogoNameLight size={72} />
          </div>
          {/*<!-- Sidebar component, swap this element with another sidebar if you like -->*/}
          <div className="h-0 flex-1 flex flex-col overflow-y-auto">
            {/*<!-- User account dropdown -->*/}
            <div className="px-3 relative inline-block text-left">
              <UserMenu />
            </div>
            {/*<!-- Navigation -->*/}
            <nav className="px-3 mt-6">
              <div className="space-y-1">
                {/*<!-- Current: "bg-gray-200 text-gray-900", Default: "text-gray-700 hover:text-gray-900 hover:bg-gray-50" -->*/}
                <button
                  className="bg-gray-200 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                  aria-current="page"
                >
                  {/*<!--
                Heroicon name: outline/home

                Current: "text-gray-500", Default: "text-gray-400 group-hover:text-gray-500"
              -->*/}
                  <svg
                    className="text-gray-500 mr-3 h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Home
                </button>

                <button className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                  {/*<!-- Heroicon name: outline/view-list -->*/}
                  <svg
                    className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 10h16M4 14h16M4 18h16"
                    />
                  </svg>
                  My tasks
                </button>

                <button className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                  {/*<!-- Heroicon name: outline/clock -->*/}
                  <svg
                    className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Recent
                </button>
              </div>
              <div className="mt-8">
                {/*<!-- Secondary navigation -->*/}
                <h3
                  className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
                  id="teams-headline"
                >
                  Teams
                </h3>
                <div
                  className="mt-1 space-y-1"
                  role="group"
                  aria-labelledby="teams-headline"
                >
                  <button className="group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50">
                    <span
                      className="w-2.5 h-2.5 mr-4 bg-indigo-500 rounded-full"
                      aria-hidden="true"
                    ></span>
                    <span className="truncate">Engineering</span>
                  </button>

                  <button className="group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50">
                    <span
                      className="w-2.5 h-2.5 mr-4 bg-green-500 rounded-full"
                      aria-hidden="true"
                    ></span>
                    <span className="truncate">Human Resources</span>
                  </button>

                  <button className="group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50">
                    <span
                      className="w-2.5 h-2.5 mr-4 bg-yellow-500 rounded-full"
                      aria-hidden="true"
                    ></span>
                    <span className="truncate">Customer Success</span>
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
