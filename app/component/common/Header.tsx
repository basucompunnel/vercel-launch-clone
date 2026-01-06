"use client";

import VercelLogo from "./VercelLogo";
import { IoChevronDown } from "react-icons/io5";
import { TbBrandOpenai, TbBoxMultiple, TbSparkles, TbDeviceDesktopAnalytics, TbCloud, TbShieldCheck, TbDeviceDesktop } from "react-icons/tb";
import { HiOutlineCube, HiOutlineShieldCheck } from "react-icons/hi";
import { MdOutlineSpeed } from "react-icons/md";

function Logo() {
  return (
    <div className="flex items-center">
      <VercelLogo size={90} />
    </div>
  );
}

function DropdownButton({ children, hideChevron = false }: { children: React.ReactNode; hideChevron?: boolean }) {
  return (
    <button className="group px-3 py-1.5 text-sm text-gray-600 hover:text-black hover:bg-[#EBEBEB] rounded-full flex items-center gap-1 cursor-pointer transition-colors">
      {children}
      {!hideChevron && <IoChevronDown size={12} className="transition-transform group-hover:rotate-180" />}
    </button>
  );
}

function ProductsDropdown() {
  return (
    <div className="absolute top-full left-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 min-w-[900px]">
        <div className="grid grid-cols-3 gap-8">
          {/* AI Cloud Section */}
          <div>
            <h3 className="text-xs font-medium text-gray-500 mb-4 uppercase tracking-wider">AI Cloud</h3>
            <div className="space-y-4">
              <div className="flex gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                <TbBrandOpenai className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-sm text-black">v0</div>
                  <div className="text-xs text-gray-600">Build applications with AI</div>
                </div>
              </div>
              <div className="flex gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                <HiOutlineCube className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-sm text-black">AI SDK</div>
                  <div className="text-xs text-gray-600">The AI Toolkit for TypeScript</div>
                </div>
              </div>
              <div className="flex gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                <TbSparkles className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-sm text-black">AI Gateway</div>
                  <div className="text-xs text-gray-600">One endpoint, all your models</div>
                </div>
              </div>
              <div className="flex gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                <TbDeviceDesktopAnalytics className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-sm text-black">Vercel Agent</div>
                  <div className="text-xs text-gray-600">An agent that knows your stack</div>
                </div>
              </div>
              <div className="flex gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                <TbCloud className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-sm text-black">Sandbox</div>
                  <div className="text-xs text-gray-600">AI workflows in live environments</div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Platform Section */}
          <div>
            <h3 className="text-xs font-medium text-gray-500 mb-4 uppercase tracking-wider">Core Platform</h3>
            <div className="space-y-4">
              <div className="flex gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                <TbBoxMultiple className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-sm text-black">CI/CD</div>
                  <div className="text-xs text-gray-600">Helping teams ship 6× faster</div>
                </div>
              </div>
              <div className="flex gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                <TbCloud className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-sm text-black">Content Delivery</div>
                  <div className="text-xs text-gray-600">Fast, scalable, and reliable</div>
                </div>
              </div>
              <div className="flex gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                <MdOutlineSpeed className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-sm text-black">Fluid Compute</div>
                  <div className="text-xs text-gray-600">Servers, in serverless form</div>
                </div>
              </div>
              <div className="flex gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                <TbDeviceDesktopAnalytics className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-sm text-black">Observability</div>
                  <div className="text-xs text-gray-600">Trace every step</div>
                </div>
              </div>
            </div>
          </div>

          {/* Security Section */}
          <div>
            <h3 className="text-xs font-medium text-gray-500 mb-4 uppercase tracking-wider">Security</h3>
            <div className="space-y-4">
              <div className="flex gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                <TbShieldCheck className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-sm text-black">Bot Management</div>
                  <div className="text-xs text-gray-600">Scalable bot protection</div>
                </div>
              </div>
              <div className="flex gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                <HiOutlineShieldCheck className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-sm text-black">BotID</div>
                  <div className="text-xs text-gray-600">Invisible CAPTCHA</div>
                </div>
              </div>
              <div className="flex gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                <TbShieldCheck className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-sm text-black">Platform Security</div>
                  <div className="text-xs text-gray-600">DDoS Protection, Firewall</div>
                </div>
              </div>
              <div className="flex gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                <TbDeviceDesktop className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-sm text-black">Web Application Firewall</div>
                  <div className="text-xs text-gray-600">Granular, custom protection</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WhiteButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-black bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors font-sans cursor-pointer">
      {children}
    </button>
  );
}

function BlackButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-3 py-1.5 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-700 transition-colors font-sans cursor-pointer">
      {children}
    </button>
  );
}

function NavMenu() {
  return (
    <div className="hidden md:flex items-center gap-1">
      <div className="relative group">
        <DropdownButton>Products</DropdownButton>
        <ProductsDropdown />
      </div>
      <DropdownButton>Resources</DropdownButton>
      <DropdownButton>Solutions</DropdownButton>
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
  return (
    <header className="sticky top-0 z-50 bg-[#FAFAFA] border-b border-gray-200">
      <nav className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left side - Logo and Nav */}
        <div className="flex items-center gap-8">
          <Logo />
          <NavMenu />
        </div>

        {/* Right side - Auth buttons */}
        <AuthButtons />
      </nav>
    </header>
  );
}
