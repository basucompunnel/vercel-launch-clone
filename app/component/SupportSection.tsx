import { SiNextdotjs, SiVercel } from "react-icons/si";
import { HiChartBar, HiLightningBolt, HiRefresh, HiCog, HiDocumentText, HiGlobe, HiSwitchHorizontal, HiShieldCheck } from "react-icons/hi";
import { MdRocket } from "react-icons/md";
import BlackButton from "./common/BlackButton";
import WhiteButton from "./common/WhiteButton";

function FeaturesGrid() {
  const features = [
    {
      icon: <HiChartBar className="w-6 h-6" />,
      title: "Advanced observability.",
      description: "Understand Next.js performance with Vercel's Speed Insights and monitoring tools."
    },
    {
      icon: <MdRocket className="w-6 h-6" />,
      title: "Zero configuration.",
      description: "Git push to update your Next.js site and deploy globally in seconds."
    },
    {
      icon: <HiLightningBolt className="w-6 h-6" />,
      title: "Edge Middleware.",
      description: "Run A/B tests, experiment, and feature flag using Vercel Edge Middleware."
    },
    {
      icon: <HiRefresh className="w-6 h-6" />,
      title: "Incremental Static Regeneration (ISR).",
      description: "Globally update content from your headless CMS or database in 300ms without redeploying."
    },
    {
      icon: <HiCog className="w-6 h-6" />,
      title: "Server-Side Rendering (SSR).",
      description: "Autoscaling Serverless Functions to dynamically render your Next.js application."
    },
    {
      icon: <HiDocumentText className="w-6 h-6" />,
      title: "Static Site Generation (SSG).",
      description: "Prerender and automatically cache and distribute generated Next.js pages to every Vercel Edge Network region."
    },
    {
      icon: <HiGlobe className="w-6 h-6" />,
      title: "Create public APIs.",
      description: "Build high-performance APIs that are deployed to every Vercel Edge Network region."
    },
    {
      icon: <HiSwitchHorizontal className="w-6 h-6" />,
      title: "Routing and nested layouts.",
      description: "Create routes using the file system, including support for more advanced routing patterns and UI layouts."
    },
    {
      icon: <HiShieldCheck className="w-6 h-6" />,
      title: "Application security.",
      description: "Create private connections between Serverless Functions and your backend cloud."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col text-left">
          <div className="w-10 h-10 mb-4 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-600 shadow-md">
            {feature.icon}
          </div>
          <h3 className="text-base font-semibold text-black mb-3">
            {feature.title}
          </h3>
          <p className="text-base text-gray-500 leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}

function GridBorders() {
  return (
    <>
      {/* Top horizontal line */}
      <div className="hidden md:block absolute top-0 left-0 right-0 h-px bg-gray-200 z-0"></div>

      {/* Bottom horizontal line */}
      <div className="hidden md:block absolute bottom-0 left-0 right-0 h-px bg-gray-200 z-0"></div>

      {/* Left vertical line */}
      <div className="hidden md:block absolute inset-y-0 left-0 w-px bg-gray-200 z-0"></div>

      {/* Vertical dividing lines */}
      <div className="hidden md:block absolute inset-y-0 left-1/3 w-px bg-gray-200 z-0"></div>
      <div className="hidden md:block absolute inset-y-0 left-2/3 w-px bg-gray-200 z-0"></div>

      {/* Right vertical line */}
      <div className="hidden md:block absolute inset-y-0 right-0 w-px bg-gray-200 z-0"></div>
    </>
  );
}

export default function SupportSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-[#FAFAFA] relative">
      <div className="max-w-5xl mx-auto">
        <div className="relative pb-8 md:pb-12">
          <GridBorders />

          <div className="flex flex-col items-center text-center px-4 py-12 md:py-16 relative z-10">
            {/* Logo Icons */}
            <div className="mb-12 md:mb-16 relative">
              {/* Infinity/Figure-8 Background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[170px]">
                <img
                  src="/assets/images/ellipsed-background.svg"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Icon Containers */}
              <div className="relative z-10 inline-flex items-center gap-12 px-12 py-6">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-black rounded-full flex items-center justify-center">
                  <SiNextdotjs className="w-8 h-8 md:w-9 md:h-9 text-white" />
                </div>
                <span className="text-2xl text-gray-400 font-light">+</span>
                <div className="w-14 h-14 md:w-16 md:h-16 bg-black rounded-full flex items-center justify-center">
                  <SiVercel className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-8 md:mb-10">
              Out-of-the-box support.
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg lg:text-xl text-gray-500 max-w-3xl leading-relaxed mb-10 md:mb-12">
              No company in the world is more integrated with the creators of
              both Next.js and React than Vercel. Understanding the challenges
              of high-performance teams and applications is our primary role.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <button className="flex items-center gap-2 px-6 py-2.5 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-700 transition-colors font-sans cursor-pointer">
                <SiVercel className="w-4 h-4" />
                Start Deploying
              </button>
              <button className="px-6 py-2.5 bg-white text-gray-600 hover:text-black text-sm font-medium rounded-full border border-gray-300 hover:bg-gray-100 transition-colors font-sans cursor-pointer">
                Get a Demo
              </button>
            </div>

            {/* Features Grid */}
            <div className="mt-16 md:mt-24 w-full">
              <FeaturesGrid />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
