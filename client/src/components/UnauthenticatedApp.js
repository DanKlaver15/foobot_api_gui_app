import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

const UnauthenticatedApp = () => {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="https://source.unsplash.com/SkJG9sNkQVQ/1080"
        alt=""
      />
      <div
        className="fixed z-10 inset-0 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div
            className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>

          {/*<!-- This element is to trick the browser into centering the modal contents. -->*/}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-3xl shadow-inner transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
            <div>
              <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/register" component={Registration} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnauthenticatedApp;
