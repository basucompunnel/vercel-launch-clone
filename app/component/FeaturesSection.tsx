import { IoMdRefresh } from "react-icons/io";
import { MdSpeed } from "react-icons/md";
import { TbTriangle } from "react-icons/tb";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center px-4 pt-8 md:pt-12">
      <div className="mb-6 md:mb-8">
        <div className="inline-flex items-center justify-center w-20 h-12 md:w-24 md:h-14 rounded-full border-4 border-gray-200">
          {icon}
        </div>
      </div>
      <h3 className="text-lg md:text-xl font-semibold text-black mb-4 font-sans">
        {title}
      </h3>
      <p className="text-sm md:text-base text-gray-600 max-w-sm font-['Arial'] font-medium">
        {description}
      </p>
    </div>
  );
}

function GridBorders() {
  return (
    <>
      {/* Top horizontal line */}
      <div className="hidden md:block absolute top-0 left-0 right-0 h-px bg-gray-200"></div>

      {/* Bottom horizontal line */}
      <div className="hidden md:block absolute bottom-0 left-0 right-0 h-px bg-gray-200"></div>

      {/* Left vertical line */}
      <div className="hidden md:block absolute inset-y-0 left-0 w-px bg-gray-200"></div>

      {/* Vertical dividing lines */}
      <div className="hidden md:block absolute inset-y-0 left-1/3 w-px bg-gray-200"></div>
      <div className="hidden md:block absolute inset-y-0 left-2/3 w-px bg-gray-200"></div>

      {/* Right vertical line */}
      <div className="hidden md:block absolute inset-y-0 right-0 w-px bg-gray-200"></div>
    </>
  );
}

interface FeatureData {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const featuresData: FeatureData[] = [
  {
    icon: <IoMdRefresh className="w-6 h-6 md:w-8 md:h-8 text-black" />,
    title: "Cache, controlled.",
    description:
      "Define per-component response revalidation that persists across deploys with Vercel's Data Cache.",
  },
  {
    icon: <MdSpeed className="w-6 h-6 md:w-8 md:h-8 text-black" />,
    title: "Fastest Next.js builds.",
    description:
      "Build, test, iterate, and deploy at record, industry-leading speeds with Vercel's Build Pipeline.",
  },
  {
    icon: <TbTriangle className="w-6 h-6 md:w-8 md:h-8 text-black" />,
    title: "Deploy with zero downtime.",
    description:
      "Protect against version skew and cache-related downtime with framework-aware infrastructure.",
  },
];

function FeaturesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative pb-8 md:pb-12">
      <GridBorders />

      {featuresData.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white relative">
      <div className="max-w-5xl mx-auto">
        <FeaturesGrid />
      </div>
    </section>
  );
}
