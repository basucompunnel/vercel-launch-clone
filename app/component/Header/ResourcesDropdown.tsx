import {
  TbBook,
  TbPencil,
  TbFileText,
  TbBriefcase,
  TbCalendarEvent,
  TbUsers,
} from "react-icons/tb";
import { HiOutlineBookOpen, HiOutlineEmojiHappy } from "react-icons/hi";
import { SiNextdotjs, SiNuxtdotjs, SiSvelte, SiTurborepo } from "react-icons/si";
import DropdownItem from "../common/DropdownItem";
import DropdownSection from "../common/DropdownSection";

export default function ResourcesDropdown() {
  return (
    <div className="absolute top-full left-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 min-w-[900px]">
        <div className="grid grid-cols-3">
          <DropdownSection title="Company">
            <DropdownItem
              icon={HiOutlineEmojiHappy}
              title="Customers"
              description="Trusted by the best teams"
            />
            <DropdownItem
              icon={TbPencil}
              title="Blog"
              description="The latest posts and changes"
            />
            <DropdownItem
              icon={TbFileText}
              title="Changelog"
              description="See what shipped"
            />
            <DropdownItem
              icon={TbBriefcase}
              title="Press"
              description="Read the latest news"
            />
            <DropdownItem
              icon={TbCalendarEvent}
              title="Events"
              description="Join us at an event"
            />
          </DropdownSection>

          <DropdownSection title="Learn">
            <DropdownItem
              icon={TbBook}
              title="Docs"
              description="Vercel documentation"
            />
            <DropdownItem
              icon={TbPencil}
              title="Academy"
              description="Linear courses to level up"
            />
            <DropdownItem
              icon={HiOutlineBookOpen}
              title="Knowledge Base"
              description="Find help quickly"
            />
            <DropdownItem
              icon={TbUsers}
              title="Community"
              description="Join the conversation"
            />
          </DropdownSection>

          <DropdownSection title="Open Source">
            <DropdownItem
              icon={SiNextdotjs}
              title="Next.js"
              description="The native Next.js platform"
            />
            <DropdownItem
              icon={SiNuxtdotjs}
              title="Nuxt"
              description="The progressive web framework"
            />
            <DropdownItem
              icon={SiSvelte}
              title="Svelte"
              description="The web's efficient UI framework"
            />
            <DropdownItem
              icon={SiTurborepo}
              title="Turborepo"
              description="Speed with Enterprise scale"
            />
          </DropdownSection>
        </div>
      </div>
    </div>
  );
}
