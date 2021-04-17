import React, { useState } from "react";
import ControlledTreeView from "../FolderTree";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
            <ControlledTreeView />
          </div>
        </div>
        {/* End secondary column */}
      </aside>
    </div>
  );
};

export default ManageFoobots;
