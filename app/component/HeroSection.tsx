import Image from "next/image";
import { getAssetPath } from "@/lib/utils";
import { SiVercel } from "react-icons/si";

function GridBackground() {
  return (
    <div className="absolute inset-0 bg-grid-pattern">
      {/* Decorative circles */}
      <div className="absolute top-10 left-20 w-64 h-64 border border-gray-200 rounded-full"></div>
      <div className="absolute top-40 right-32 w-96 h-96 border border-gray-200 rounded-full"></div>
      <div className="absolute bottom-20 left-1/4 w-80 h-80 border border-gray-200 rounded-full"></div>
      
      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgb(229, 231, 235) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(229, 231, 235) 1px, transparent 1px);
          background-size: 120px 120px;
        }
      `}</style>
    </div>
  );
}

function HeroLogo() {
  return (
    <div className="mb-8 md:mb-12 flex justify-center">
      <Image
        src={getAssetPath("/assets/images/next-logo.svg")}
        alt="Next.js Logo"
        width={80}
        height={80}
        className="w-16 h-16 md:w-24 md:h-24"
      />
    </div>
  );
}

function HeroHeading() {
  return (
    <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-8 max-w-4xl font-sans">
      The native Next.js platform.
    </h1>
  );
}

function HeroDescription() {
  return (
    <p className="text-base md:text-xl text-center mb-6 md:mb-8 max-w-3xl font-['Arial'] font-medium">
      <span className="text-black">Made by the creators of Next.js,</span>{" "}
      <span className="text-gray-600">Vercel is designed</span>
      <br className="hidden md:block" />
      <span className="text-gray-600">to build, scale, and secure your Next.js apps.</span>
    </p>
  );
}

function CTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
      <button className="flex items-center gap-2 px-8 py-3.5 bg-black text-white text-base font-medium rounded-full hover:bg-gray-700 transition-colors font-sans cursor-pointer">
        <SiVercel className="w-4 h-4" />
        Start Deploying
      </button>
      <button className="px-8 py-3.5 bg-white text-gray-600 hover:text-black text-base font-medium rounded-full border border-gray-300 hover:bg-gray-100 transition-colors font-sans cursor-pointer">
        Get a Demo
      </button>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center py-12 md:py-20 px-4 overflow-hidden">
      <GridBackground />
      
      <div className="relative z-10">
        <HeroLogo />
        <HeroHeading />
        <HeroDescription />
        <CTAButtons />
      </div>
    </section>
  );
}
