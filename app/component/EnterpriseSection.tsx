import { HiUser, HiLockClosed, HiShieldCheck, HiArrowRight } from "react-icons/hi";
import { SiNextdotjs, SiVercel } from "react-icons/si";

function SecurityCard() {
  return (
    <div className="relative border border-gray-200 p-8 md:p-12 overflow-hidden flex flex-col justify-between min-h-[500px]">
      {/* Shield Background Pattern */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <svg width="600" height="600" viewBox="0 0 600 600" className="absolute">
          {/* Outermost shield */}
          <path
            d="M300 50 L450 100 L450 300 Q450 450 300 550 Q150 450 150 300 L150 100 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-gray-900"
          />
          {/* Middle shield */}
          <path
            d="M300 100 L400 140 L400 300 Q400 420 300 500 Q200 420 200 300 L200 140 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-gray-900"
          />
          {/* Inner shield */}
          <path
            d="M300 150 L350 180 L350 300 Q350 390 300 450 Q250 390 250 300 L250 180 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-gray-900"
          />
        </svg>
      </div>

      {/* Icons */}
      <div className="flex gap-3 relative z-10">
        <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-700 shadow-md">
          <HiUser className="w-5 h-5" />
        </div>
        <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-700 shadow-md">
          <HiLockClosed className="w-5 h-5" />
        </div>
        <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-700 shadow-md">
          <HiShieldCheck className="w-5 h-5" />
        </div>
      </div>

      {/* Content and Button */}
      <div className="relative z-10">
        {/* Content */}
        <h3 className="text-lg md:text-xl font-semibold text-black mb-4">
          <span className="text-black">Secure by design.</span>{" "}
          <span className="text-gray-400">
            From automatic HTTPS and SSL encryption to industry-leading DDoS
            mitigation and Firewall, Vercel is your partner in infrastructure
            security.
          </span>
        </h3>

        {/* Button */}
        <button className="flex items-center gap-2 px-6 py-2.5 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-700 transition-colors font-sans cursor-pointer">
          Security
        </button>
      </div>
    </div>
  );
}

function ResilienceCard() {
  return (
    <div className="relative border border-gray-200 p-8 md:p-12 overflow-hidden flex flex-col justify-between min-h-[500px]">
      {/* Diagonal Lines Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="absolute">
          <defs>
            <pattern id="diagonalLines" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <line x1="0" y1="40" x2="40" y2="0" stroke="currentColor" strokeWidth="1.5" className="text-gray-900" />
              <line x1="-10" y1="10" x2="10" y2="-10" stroke="currentColor" strokeWidth="1.5" className="text-gray-900" />
              <line x1="30" y1="50" x2="50" y2="30" stroke="currentColor" strokeWidth="1.5" className="text-gray-900" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonalLines)" />
        </svg>
      </div>

      {/* Icons */}
      <div className="flex gap-3 relative z-10">
        <div className="w-12 h-12 bg-black border border-gray-200 rounded-full flex items-center justify-center shadow-md">
          <SiNextdotjs className="w-6 h-6 text-white" />
        </div>
        <div className="w-12 h-12 bg-black border border-gray-200 rounded-full flex items-center justify-center shadow-md">
          <SiVercel className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Content and Button */}
      <div className="relative z-10">
        {/* Content */}
        <h3 className="text-lg md:text-xl font-semibold text-black mb-4">
          <span className="text-black">Architected for resilience.</span>{" "}
          <span className="text-gray-400">
            Next.js and Vercel deliver maximum uptime with seamless edge
            caching and revalidation support out of the box.
          </span>
        </h3>

        {/* Button */}
        <button className="flex items-center gap-2 px-6 py-2.5 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-700 transition-colors font-sans cursor-pointer">
          Schedule a demo
        </button>
      </div>
    </div>
  );
}

interface TestimonialCardProps {
  logo: string;
  logoAlt: string;
  highlightText: string;
  beforeHighlight: string;
  afterHighlight: string;
  authorName: string;
  authorTitle: string;
  logoHeight?: string;
}

function TestimonialCard({
  logo,
  logoAlt,
  highlightText,
  beforeHighlight,
  afterHighlight,
  authorName,
  authorTitle,
  logoHeight = "h-5",
}: TestimonialCardProps) {
  return (
    <div className="relative border border-gray-200 p-8 md:p-12 cursor-pointer transition-all flex flex-col justify-between min-h-[300px] bg-gray-50 hover:bg-white">
      <div>
        {/* Logo */}
        <div className="mb-8">
          <img src={logo} alt={logoAlt} className={logoHeight} />
        </div>

        {/* Quote */}
        <blockquote className="text-xl md:text-2xl text-gray-500 mb-8">
          " {beforeHighlight} <span className="text-black font-semibold">{highlightText}</span>{afterHighlight} "
        </blockquote>
      </div>

      {/* Author */}
      <div className="flex items-center justify-between">
        <div>
          <div className="font-medium text-black">{authorName}</div>
          <div className="text-sm text-gray-500">{authorTitle}</div>
        </div>
        <HiArrowRight className="w-5 h-5 text-gray-400" />
      </div>
    </div>
  );
}

export default function EnterpriseSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-[#FAFAFA] relative">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black text-center mb-8 md:mb-12">
          First-class Enterprise features.
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <SecurityCard />
          <ResilienceCard />
        </div>

        {/* Testimonials Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-0">
          <TestimonialCard
            logo="/assets/images/hashicorp-logo.svg"
            logoAlt="HashiCorp"
            beforeHighlight="On-demand ISR speeds up the iteration process across the board"
            highlightText="for all of our sites"
            afterHighlight="."
            authorName="Bryce Kalow"
            authorTitle="Senior Web Engineer"
          />
          <TestimonialCard
            logo="/assets/images/sonos-logo.svg"
            logoAlt="Sonos"
            beforeHighlight="It's just a pity we didn't go sooner. Next.js and Vercel make our developers happier, make us"
            highlightText="go to market quicker"
            afterHighlight=", and let us move with utmost confidence."
            authorName="Jonathan Lemon"
            authorTitle="Engineering Manager"
            logoHeight="h-4"
          />
        </div>
      </div>
    </section>
  );
}
