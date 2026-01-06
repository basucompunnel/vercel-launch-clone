"use client";

import { useState } from "react";
import VercelLogo from "../common/VercelLogo";
import { IoMenu, IoClose } from "react-icons/io5";
import ProductsDropdown from "./ProductsDropdown";
import ResourcesDropdown from "./ResourcesDropdown";
import SolutionsDropdown from "./SolutionsDropdown";
import DropdownButton from "../common/DropdownButton";
import WhiteButton from "../common/WhiteButton";
import BlackButton from "../common/BlackButton";

function Logo() {
  return (
    <div className="flex items-center">
      <div className="md:hidden">
        <VercelLogo size={70} />
      </div>
      <div className="hidden md:block">
        <VercelLogo size={90} />
      </div>
    </div>
  );
}

function NavMenu() {
  return (
    <div className="hidden md:flex items-center gap-1">
      <div className="relative group">
        <DropdownButton>Products</DropdownButton>
        <ProductsDropdown />
      </div>
      <div className="relative group">
        <DropdownButton>Resources</DropdownButton>
        <ResourcesDropdown />
      </div>
      <div className="relative group">
        <DropdownButton>Solutions</DropdownButton>
        <SolutionsDropdown />
      </div>
      <DropdownButton hideChevron>Enterprise</DropdownButton>
      <DropdownButton hideChevron>Pricing</DropdownButton>
    </div>
  );
}

function AuthButtons() {
  return (
    <div className="flex items-center gap-4">
      <WhiteButton>Log In</WhiteButton>
      <WhiteButton>Contact</WhiteButton>
      <BlackButton>Sign Up</BlackButton>
    </div>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAFA] border-b border-gray-200">
      <nav className="max-w-[1280px] mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Left side - Logo and Nav */}
        <div className="flex items-center gap-8">
          <Logo />
          <NavMenu />
        </div>

        {/* Right side - Auth buttons (desktop) */}
        <div className="hidden md:flex">
          <AuthButtons />
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-black transition-colors"
        >
          {mobileMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-4 py-4 space-y-4">
            <div className="space-y-2">
              <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-100 rounded-md transition-colors">
                Products
              </button>
              <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-100 rounded-md transition-colors">
                Resources
              </button>
              <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-100 rounded-md transition-colors">
                Solutions
              </button>
              <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-100 rounded-md transition-colors">
                Enterprise
              </button>
              <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-100 rounded-md transition-colors">
                Pricing
              </button>
            </div>
            <div className="pt-4 border-t border-gray-200 space-y-2">
              <button className="w-full px-3 py-2 text-sm font-medium text-gray-600 hover:text-black bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
                Log In
              </button>
              <button className="w-full px-3 py-2 text-sm font-medium text-gray-600 hover:text-black bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
                Contact
              </button>
              <button className="w-full px-3 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-700 transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
