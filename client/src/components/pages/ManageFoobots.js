import React, { useState } from "react";
import ControlledTreeView from "../FolderTree";
import DataDownload from "../DataDownload";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus } from "@fortawesome/pro-light-svg-icons";
import { faFolderMinus } from "@fortawesome/pro-light-svg-icons";

const ManageFoobots = ({}) => {
  return (
    /*TODO: Remove dashed border around areas before end of project*/
    <div className="flex-1 relative z-0 flex overflow-hidden">
      <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
        <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
          <div className="h-full border-2 border-gray-200 rounded-lg overflow-y-auto">
            <div className="bg-white dark:bg-gray-600 dark:text-gray-300 overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6 text-center">
                No Foobot Selected
                <p className="text-sm">
                  Please select a Foobot from the list on the left if you want
                  to obtain data from one Foobot.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-600 overflow-hidden shadow rounded-lg mt-6 pb-4 pr-4">
              <DataDownload />
            </div>
          </div>
        </div>
      </main>
      <aside className="hidden relative xl:order-first xl:flex xl:flex-col flex-shrink-0 w-96 border-r border-gray-200">
        <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
          <div className="h-full border-2 border-gray-200 rounded-lg dark:text-gray-400">
            <button
              type="button"
              className="inline-flex align-bottom items-center px-5 mb-4 w-1/2 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded--tl-md text-white bg-indigo-600 dark:bg-gray-500 dark:border-4 dark:border-gray-300 dark:text-gray-800"
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
              className="inline-flex align-bottom items-center px-4 mb-4 w-1/2 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-tr-md text-white bg-indigo-600 dark:bg-gray-500 dark:border-4 dark:border-gray-300 dark:text-gray-800"
            >
              <FontAwesomeIcon
                icon={faFolderMinus}
                className="-ml-1 mr-3 h-6 w-6"
                fixedWidth
              />
              Delete Folder
            </button>
            {/*TODO: Add settings for overscroll for the tree component*/}
            <ControlledTreeView />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default ManageFoobots;
