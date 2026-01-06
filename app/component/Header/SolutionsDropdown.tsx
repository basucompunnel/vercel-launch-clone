import {
  TbSparkles,
  TbShoppingCart,
  TbChartLine,
  TbBoxMultiple,
  TbBrowser,
  TbShoppingBag,
  TbTemplate,
  TbUsers,
  TbTool,
  TbPalette,
} from "react-icons/tb";
import DropdownItem from "../common/DropdownItem";
import DropdownSection from "../common/DropdownSection";

export default function SolutionsDropdown() {
  return (
    <div className="absolute top-full left-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 min-w-[900px]">
        <div className="grid grid-cols-3">
          <DropdownSection title="Use Cases">
            <DropdownItem
              icon={TbSparkles}
              title="AI Apps"
              description="Deploy at the speed of AI"
            />
            <DropdownItem
              icon={TbShoppingCart}
              title="Composable Commerce"
              description="Power storefronts that convert"
            />
            <DropdownItem
              icon={TbChartLine}
              title="Marketing Sites"
              description="Launch campaigns fast"
            />
            <DropdownItem
              icon={TbBoxMultiple}
              title="Multi-tenant Platforms"
              description="Scale apps with one codebase"
            />
            <DropdownItem
              icon={TbBrowser}
              title="Web Apps"
              description="Ship features, not infrastructure"
            />
          </DropdownSection>

          <DropdownSection title="Tools">
            <DropdownItem
              icon={TbShoppingBag}
              title="Marketplace"
              description="Extend and automate workflows"
            />
            <DropdownItem
              icon={TbTemplate}
              title="Templates"
              description="Jumpstart app development"
            />
            <DropdownItem
              icon={TbUsers}
              title="Partner Finder"
              description="Get help from solution partners"
            />
          </DropdownSection>

          <DropdownSection title="Users">
            <DropdownItem
              icon={TbTool}
              title="Platform Engineers"
              description="Automate away repetition"
            />
            <DropdownItem
              icon={TbPalette}
              title="Design Engineers"
              description="Deploy for every idea"
            />
          </DropdownSection>
        </div>
      </div>
    </div>
  );
}
