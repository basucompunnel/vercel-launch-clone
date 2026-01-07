import { HiOutlineCube, HiOutlineClock, HiOutlineServer } from "react-icons/hi";
import { useState } from "react";

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

function BrowserMockup() {
  return (
    <div className="relative z-10 p-8">
      <div className="bg-white rounded-2xl border-2 border-dashed border-yellow-300 overflow-hidden">
        {/* Browser header */}
        <div className="bg-yellow-50 border-b border-yellow-200 px-6 py-4 flex items-center justify-between">
          <div className="flex-shrink-0">
            <span className="font-semibold text-black text-lg">Acme®</span>
          </div>
          <div className="flex-1 flex items-center justify-center gap-8 text-gray-600 text-base">
            <span>Shop All</span>
            <span>Apparel</span>
            <span>Sale</span>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <div className="w-6 h-6 rounded-full bg-yellow-300"></div>
            <div className="w-6 h-6 rounded-full bg-yellow-400"></div>
          </div>
        </div>
        
        {/* Browser content area */}
        <div className="h-96 bg-[#FAFAFA]"></div>
      </div>
    </div>
  );
}

function BrowserMockup0() {
  return (
    <div className="relative z-10 p-8">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        {/* Browser header */}
        <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-400"></div>
            <div className="w-3 h-3 rounded-full bg-gray-500"></div>
          </div>
          <div className="flex-1 text-sm text-gray-600">
            <span className="font-medium">Acme®</span>
            <span className="ml-8">Shop All</span>
            <span className="ml-8">Apparel</span>
            <span className="ml-8">Sale</span>
          </div>
        </div>

        {/* Browser content area */}
        <div className="h-96 bg-[#FAFAFA]"></div>
      </div>
    </div>
  );
}

function BrowserMockup2() {
  return (
    <div className="relative z-10 p-8">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        {/* Browser header */}
        <div className="bg-blue-100 border-b border-blue-200 px-4 py-3 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-400"></div>
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          </div>
          <div className="flex-1 text-sm text-gray-600">
            <span className="font-medium">Acme®</span>
            <span className="ml-8">Shop All</span>
            <span className="ml-8">Apparel</span>
            <span className="ml-8">Sale</span>
          </div>
        </div>

        {/* Browser content area */}
        <div className="h-96 bg-[#FAFAFA]"></div>
      </div>
    </div>
  );
}

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgColor?: string;
  isSelected?: boolean;
  onClick?: () => void;
}

function FeatureItem({
  icon,
  title,
  description,
  iconBgColor = "bg-gray-100",
  isSelected = false,
  onClick,
}: FeatureItemProps) {
  return (
    <div
      className={`flex gap-4 cursor-pointer ${
        isSelected ? "opacity-100" : "opacity-60 hover:opacity-80"
      } transition-opacity`}
      onClick={onClick}
    >
      <div
        className={`flex-shrink-0 w-10 h-10 ${iconBgColor} rounded-full flex items-center justify-center`}
      >
        {icon}
      </div>
      <div className="flex-1 max-w-[240px]">
        <p className="text-base text-gray-500">
          <span className="font-semibold text-black">{title}</span>{" "}
          {description}
        </p>
      </div>
    </div>
  );
}

function FeaturesList({
  selectedFeature,
  onFeatureSelect,
}: {
  selectedFeature: number;
  onFeatureSelect: (index: number) => void;
}) {
  return (
    <div className="relative z-10">
      {/* Features list */}
      <div className="space-y-8">
        <FeatureItem
          icon={
            <HiOutlineCube
              className={`w-6 h-6 ${
                selectedFeature === 0 ? "text-white" : "text-gray-600"
              }`}
            />
          }
          title="Extract and prerender all static content."
          description="Automatically get an optimized HTML page shell."
          iconBgColor={selectedFeature === 0 ? "bg-orange-500" : "bg-gray-100"}
          isSelected={selectedFeature === 0}
          onClick={() => onFeatureSelect(0)}
        />
        <FeatureItem
          icon={
            <HiOutlineClock
              className={`w-6 h-6 ${
                selectedFeature === 1 ? "text-white" : "text-gray-600"
              }`}
            />
          }
          title="Prerender fallbacks of dynamic content."
          description="Leave space in your app for data to flow in."
          iconBgColor={selectedFeature === 1 ? "bg-blue-500" : "bg-gray-100"}
          isSelected={selectedFeature === 1}
          onClick={() => onFeatureSelect(1)}
        />
        <FeatureItem
          icon={
            <HiOutlineServer
              className={`w-6 h-6 ${
                selectedFeature === 2 ? "text-white" : "text-gray-600"
              }`}
            />
          }
          title="Stream in your dynamic content."
          description="Personalize the experience. Define granular loading and error states."
          iconBgColor={selectedFeature === 2 ? "bg-teal-500" : "bg-gray-100"}
          isSelected={selectedFeature === 2}
          onClick={() => onFeatureSelect(2)}
        />
      </div>

      {/* Button */}
      <div className="mt-16 ml-12">
        <button className="inline-flex items-center gap-3 px-6 py-2.5 bg-white text-black text-sm font-medium rounded-full border border-gray-300 hover:bg-gray-50 transition-colors font-sans cursor-pointer">
          Learn about PPR
          <span className="px-2 py-1 bg-teal-100 text-teal-700 text-xs font-medium rounded-md">
            Experimental
          </span>
        </button>
      </div>
    </div>
  );
}

export default function PartialPrerenderingSection() {
  const [selectedFeature, setSelectedFeature] = useState(1);

  return (
    <section className="py-16 md:py-24 px-4 bg-[#FAFAFA] relative">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-black mb-12 md:mb-16 text-center">
          <span className="text-black">Partial prerendering.</span>{" "}
          <span className="text-gray-400">
            Ultra-quick static edge delivery with fully dynamic capabilities.
          </span>
        </h2>

        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <GridBorders />
          <div className="lg:col-span-2">
            {selectedFeature === 0 && <BrowserMockup />}
            {selectedFeature === 1 && <BrowserMockup0 />}
            {selectedFeature === 2 && <BrowserMockup2 />}
          </div>
          <div className="lg:col-span-1 lg:-ml-[3.25rem]">
            <FeaturesList
              selectedFeature={selectedFeature}
              onFeatureSelect={setSelectedFeature}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
