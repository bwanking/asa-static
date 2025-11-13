import React from "react";
import { Link } from "react-router-dom";
import asaLogo from "../assets/asa-logo.png"; // adjust path as needed

const Login = () => {
  return (
    <div className="font-sans bg-[#fdfdfd] text-[#222]">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 bg-gradient-to-r from-green-900 via-yellow-400 to-red-900">
        <div className="logo">
          <img src={asaLogo} alt="ASA Logo" className="w-[60px] h-[60px] rounded-full" />
        </div>
        <div className="flex items-center gap-4">
          <div className="text-white font-bold text-sm">Free Ourselves from Mental Slavery</div>
          <select className="p-2 rounded font-bold">
            <option value="en">English</option>
            <option value="sw">Swahili</option>
            <option value="fr">French</option>
          </select>
        </div>
      </header>

      {/* Main Section */}
      <main className="text-center py-12 px-4">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">ASA — African Social Media App</h1>
        <p className="text-lg text-gray-600 mb-8">Free Ourselves from Mental Slavery</p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/register"
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-6 rounded-md min-w-[150px] text-center"
          >
            Join the Movement
          </Link>
          <Link
            to="/login"
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-6 rounded-md min-w-[150px] text-center"
          >
            Sign In
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-gray-600">
        © 2025 ASA Africa. All rights reserved.
        <p>Tel +256755317357</p>
      </footer>
    </div>
  );
};

export default Login;
