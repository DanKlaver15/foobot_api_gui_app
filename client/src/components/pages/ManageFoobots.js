import React, { useState } from "react";
import ControlledTreeView from "../FolderTree";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus } from "@fortawesome/pro-light-svg-icons";
import { faFolderMinus } from "@fortawesome/pro-light-svg-icons";

const ManageFoobots = ({}) => {
  return (
    <div className="flex-1 relative z-0 flex overflow-hidden">
      <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
        {/* Start large area*/}
        <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
          <div className="h-full border-2 border-gray-200 border-dashed rounded-lg dark:bg-gray-600" />
        </div>
        {/* End large area */}
      </main>
      <aside className="hidden relative xl:order-first xl:flex xl:flex-col flex-shrink-0 w-96 border-r border-gray-200">
        {/* Start secondary column (hidden on smaller screens) */}
        <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
          <div className="h-full border-2 border-gray-200 border-dashed rounded-lg dark:bg-gray-600">
            <button
              type="button"
              className="inline-flex align-bottom items-center px-5 mb-4 w-1/2 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded--tl-md text-white bg-indigo-600 dark:bg-gray-400 dark:border-4 dark:border-gray-300"
            >
              <FontAwesomeIcon
                icon={faFolderPlus}
                className="-ml-1 mr-3 h-6 w-6"
                fixedWidth
              />
              Add Folder
            </button>
            <button
              type="button"
              className="inline-flex align-bottom items-center px-4 mb-4 w-1/2 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-tr-md text-white bg-indigo-600 dark:bg-gray-400 dark:border-4 dark:border-gray-300"
            >
              <FontAwesomeIcon
                icon={faFolderMinus}
                className="-ml-1 mr-3 h-6 w-6"
                fixedWidth
              />
              Delete Folder
            </button>
            <ControlledTreeView />
          </div>
        </div>
        {/* End secondary column */}
      </aside>
    </div>
  );
};

export default ManageFoobots;
