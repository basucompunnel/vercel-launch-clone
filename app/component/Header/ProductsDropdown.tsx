import {
  TbBrandOpenai,
  TbBoxMultiple,
  TbSparkles,
  TbDeviceDesktopAnalytics,
  TbCloud,
  TbShieldCheck,
  TbDeviceDesktop,
} from "react-icons/tb";
import { HiOutlineCube, HiOutlineShieldCheck } from "react-icons/hi";
import { MdOutlineSpeed } from "react-icons/md";
import DropdownItem from "../common/DropdownItem";
import DropdownSection from "../common/DropdownSection";

export default function ProductsDropdown() {
  return (
    <div className="absolute top-full left-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 min-w-[900px]">
        <div className="grid grid-cols-3">
          <DropdownSection title="AI Cloud">
            <DropdownItem
              icon={TbBrandOpenai}
              title="v0"
              description="Build applications with AI"
            />
            <DropdownItem
              icon={HiOutlineCube}
              title="AI SDK"
              description="The AI Toolkit for TypeScript"
            />
            <DropdownItem
              icon={TbSparkles}
              title="AI Gateway"
              description="One endpoint, all your models"
            />
            <DropdownItem
              icon={TbDeviceDesktopAnalytics}
              title="Vercel Agent"
              description="An agent that knows your stack"
            />
            <DropdownItem
              icon={TbCloud}
              title="Sandbox"
              description="AI workflows in live environments"
            />
          </DropdownSection>

          <DropdownSection title="Core Platform">
            <DropdownItem
              icon={TbBoxMultiple}
              title="CI/CD"
              description="Helping teams ship 6× faster"
            />
            <DropdownItem
              icon={TbCloud}
              title="Content Delivery"
              description="Fast, scalable, and reliable"
            />
            <DropdownItem
              icon={MdOutlineSpeed}
              title="Fluid Compute"
              description="Servers, in serverless form"
            />
            <DropdownItem
              icon={TbDeviceDesktopAnalytics}
              title="Observability"
              description="Trace every step"
            />
          </DropdownSection>

          <DropdownSection title="Security">
            <DropdownItem
              icon={TbShieldCheck}
              title="Bot Management"
              description="Scalable bot protection"
            />
            <DropdownItem
              icon={HiOutlineShieldCheck}
              title="BotID"
              description="Invisible CAPTCHA"
            />
            <DropdownItem
              icon={TbShieldCheck}
              title="Platform Security"
              description="DDoS Protection, Firewall"
            />
            <DropdownItem
              icon={TbDeviceDesktop}
              title="Web Application Firewall"
              description="Granular, custom protection"
            />
          </DropdownSection>
        </div>
      </div>
    </div>
  );
}
