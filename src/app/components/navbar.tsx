"use client";
import React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-indigo-600">
                YeetThatTx
              </span>
            </div>
          </div>

          {/* Right Side - Wallet Button */}
          <div className="flex items-center space-x-4">
            {/* Placeholder for Wallet Button - replace with WalletMultiButton when adapter is set up */}
            <WalletMultiButton
              style={{
                backgroundColor: "#F9E92B",
                color: "black",
                height: "40px",
              }}
            />

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="p-2 rounded-md text-gray-600 hover:text-indigo-600 focus:outline-none">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu (hidden by default) */}
      <div className="hidden md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#"
            className="block text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </a>
          <a
            href="#"
            className="block text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium"
          >
            Docs
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
