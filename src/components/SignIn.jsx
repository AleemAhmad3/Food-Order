import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"; // Import the back arrow icon
import Button from "../layouts/Button";

const SignIn = () => {
  return (
    <div className="relative min-h-screen bg-white p-4">
      {/* Back arrow button */}
      <Link to="/" className="absolute top-4 left-4 text-gray-700 text-xl">
        <FaArrowLeft />
      </Link>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md bg-gray-100 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder=" example@example.com"
                className="mt-1 block h-10 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder=" ••••••••"
                className="mt-1 block h-10 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <Button title="Sign In" type="submit" />
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-brightColor font-semibold">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
