import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { loginRequest } from "../../state/User/thunks";
import Logo from "../../logo/Logo";

function LoginForm({ loginRequest, loginError }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className="bg-white flex">
      <div className="flex-1 w-full flex flex-col justify-center py-12">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <Logo />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 max-w">
          Or
          <Link
            to={"/register"}
            className="font-medium text-indigo-600 hover:text-indigo-500"
            style={{ marginLeft: ".3rem", marginRight: ".3rem" }}
          >
            Register here
          </Link>
          if you don't have an account
        </p>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="mt-6">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember_me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <button className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                  </button>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  loginError: state.loginError,
});

const mapDispatchToProps = (dispatch) => ({
  loginRequest: (user) => dispatch(loginRequest(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
