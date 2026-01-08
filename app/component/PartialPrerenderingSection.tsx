import { HiOutlineCube, HiOutlineClock, HiOutlineServer } from "react-icons/hi";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { getAssetPath } from "@/lib/utils";

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

function BrowserMockup({ selectedFeature }: { selectedFeature: number }) {
  return (
    <div className="relative z-10 p-8">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="h-96 bg-[#FAFAFA] overflow-hidden">
          <AnimatePresence mode="wait">
          {selectedFeature === 0 && (
            <motion.div
              key="feature-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-yellow-50 border-2 border-dashed border-orange-400 rounded-lg m-4 px-4 py-3 flex items-center justify-between"
            >
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
            </motion.div>
          )}

          {selectedFeature === 1 && (
            <motion.div
              key="feature-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="rounded-lg m-4 bg-white overflow-hidden h-[calc(100%-2rem)] flex flex-col"
            >
              {/* Header */}
              <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-b border-gray-200 flex-shrink-0">
                <div className="flex-shrink-0">
                  <span className="font-semibold text-black text-sm">
                    Acme®
                  </span>
                </div>
                <div className="flex-1 flex items-center justify-center gap-6 text-gray-600 text-xs">
                  <span>Shop All</span>
                  <span>Apparel</span>
                  <span>Sale</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-5 h-5 rounded-full bg-blue-200"></div>
                    <div className="w-5 h-5 rounded-full bg-blue-300"></div>
                  </div>
                  <span className="px-2 py-0.5 bg-blue-600 text-white text-[10px] font-medium rounded">
                    &lt;Suspense&gt;
                  </span>
                </div>
              </div>

              {/* Loading Skeletons */}
              <div className="border-2 border-dashed border-gray-300 rounded m-3 p-3 bg-blue-50 flex-shrink-0">
                <div className="space-y-2">
                  <div className="h-4 bg-blue-200 rounded-full w-2/5"></div>
                  <div className="h-4 bg-blue-200 rounded-full w-4/5"></div>
                </div>
              </div>

              {/* Content */}
              <div className="px-3 pb-3 text-[9px] flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-2 mb-3 flex-shrink-0">
                  <p className="text-gray-600 leading-tight flex-1">
                    Welcome to the Acme store, your one-stop destination for all
                    your online shopping needs.
                  </p>
                  <button className="px-2 py-1 border border-gray-300 rounded text-black font-medium whitespace-nowrap text-[9px]">
                    Shop Now
                  </button>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-4 gap-2 flex-1">
                  {[
                    {
                      name: "Hoodie",
                      price: "$45",
                      image: getAssetPath("/assets/images/partial-prerendering-1.avif"),
                    },
                    {
                      name: "Cap",
                      price: "$30",
                      image: getAssetPath("/assets/images/partial-prerendering-2.avif"),
                    },
                    {
                      name: "Mug",
                      price: "$15",
                      image: getAssetPath("/assets/images/partial-prerendering-3.avif"),
                    },
                    {
                      name: "T-Shirt",
                      price: "$20",
                      image: getAssetPath("/assets/images/partial-prerendering-4.avif"),
                    },
                  ].map((product, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-100 rounded p-2 flex flex-col"
                    >
                      <div className="bg-gray-200 rounded flex-1 relative overflow-hidden mb-1.5">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-black font-medium text-[9px]">
                          {product.name}
                        </span>
                        <span className="text-gray-600 text-[9px]">
                          {product.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {selectedFeature === 2 && (
            <motion.div
              key="feature-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="rounded-lg m-4 bg-white overflow-hidden h-[calc(100%-2rem)] flex flex-col"
            >
              {/* Header */}
              <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-b border-gray-200 flex-shrink-0">
                <div className="flex-shrink-0">
                  <span className="font-semibold text-black text-sm">
                    Acme®
                  </span>
                </div>
                <div className="flex-1 flex items-center justify-center gap-6 text-gray-600 text-xs">
                  <span>Shop All</span>
                  <span>Apparel</span>
                  <span>Sale</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="border-2 border-dashed border-teal-400 rounded-md px-2 py-1 flex items-center gap-2">
                    <div className="relative">
                      <svg
                        className="w-5 h-5 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="absolute -top-2 -right-2 bg-gray-700 text-white text-[8px] font-semibold rounded-full w-4 h-4 flex items-center justify-center">
                        2
                      </span>
                    </div>
                    <div className="w-5 h-5 rounded-full bg-teal-600"></div>
                  </div>
                </div>
              </div>

              {/* Loading Skeletons */}
              <div className="border-2 border-dashed border-teal-400 rounded-lg m-3 p-4 bg-teal-50 flex-shrink-0">
                <p className="text-xs text-gray-700">
                  <span className="font-semibold text-black">
                    Welcome back, Rauno!
                  </span>{" "}
                  <span className="text-gray-500">
                    Get 40% off your next purchase.
                  </span>
                </p>
              </div>

              {/* Content */}
              <div className="px-3 pb-3 text-[9px] flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-2 mb-3 flex-shrink-0">
                  <p className="text-gray-600 leading-tight flex-1">
                    Welcome to the Acme store, your one-stop destination for all
                    your online shopping needs.
                  </p>
                  <button className="px-2 py-1 border border-gray-300 rounded text-black font-medium whitespace-nowrap text-[9px]">
                    Shop Now
                  </button>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-4 gap-2 flex-1">
                  {[
                    {
                      name: "Hoodie",
                      price: "$45",
                      image: getAssetPath("/assets/images/partial-prerendering-1.avif"),
                    },
                    {
                      name: "Cap",
                      price: "$30",
                      image: getAssetPath("/assets/images/partial-prerendering-2.avif"),
                    },
                    {
                      name: "Mug",
                      price: "$15",
                      image: getAssetPath("/assets/images/partial-prerendering-3.avif"),
                    },
                    {
                      name: "T-Shirt",
                      price: "$20",
                      image: getAssetPath("/assets/images/partial-prerendering-4.avif"),
                    },
                  ].map((product, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-100 rounded p-2 flex flex-col"
                    >
                      <div className="bg-gray-200 rounded flex-1 relative overflow-hidden mb-1.5">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-black font-medium text-[9px]">
                          {product.name}
                        </span>
                        <span className="text-gray-600 text-[9px]">
                          {product.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
          </AnimatePresence>
        </div>
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

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedFeature((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 px-4 bg-[#FAFAFA] relative">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-black mb-6 md:mb-8 text-center font-sans">
          <span className="text-black">Partial prerendering.</span>{" "}
          <span className="text-gray-400">
            Ultra-quick static edge delivery with fully dynamic capabilities.
          </span>
        </h2>

        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <GridBorders />
          <div className="lg:col-span-2">
            <BrowserMockup selectedFeature={selectedFeature} />
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
