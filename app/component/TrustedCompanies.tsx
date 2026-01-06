import Image from "next/image";

const logos = [
  {
    name: "Unity",
    src: "/assets/images/unity-logo.svg",
    width: 120,
    height: 40,
  },
  {
    name: "The Washington Post",
    src: "/assets/images/the-washington-post-logo-5.png",
    width: 180,
    height: 20,
  },
  {
    name: "Wayfair",
    src: "/assets/images/wayfair-logo.svg",
    width: 140,
    height: 40,
  },
  {
    name: "Under Armour",
    src: "/assets/images/under-armour-logo-2.png",
    width: 140,
    height: 40,
  },
  {
    name: "Stripe",
    src: "/assets/images/stripe-logo.png",
    width: 100,
    height: 40,
  },
];

function CompaniesHeading() {
  return (
    <h2 className="text-center text-lg md:text-xl text-gray-600 mb-12 md:mb-16 font-sans font-semibold">
      Trusted by the{" "}
      <span className="text-black">largest Next.js companies.</span>
    </h2>
  );
}

function LogoItem({ logo, keyPrefix }: { logo: typeof logos[0]; keyPrefix: string }) {
  return (
    <div
      key={keyPrefix}
      className="flex-shrink-0 flex items-center justify-center px-12 md:px-16"
    >
      <Image
        src={logo.src}
        alt={logo.name}
        width={logo.width}
        height={logo.height}
        className="opacity-60 grayscale h-8 md:h-10 w-auto object-contain"
      />
    </div>
  );
}

function LogoCarousel() {
  return (
    <div className="relative overflow-hidden">
      {/* Left fade overlay */}
      <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      
      {/* Right fade overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex animate-scroll">
        {/* First set of logos */}
        {logos.map((logo, index) => (
          <LogoItem key={`logo-1-${index}`} logo={logo} keyPrefix={`logo-1-${index}`} />
        ))}
        {/* Duplicate set for seamless loop */}
        {logos.map((logo, index) => (
          <LogoItem key={`logo-2-${index}`} logo={logo} keyPrefix={`logo-2-${index}`} />
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default function TrustedCompanies() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <CompaniesHeading />
        <LogoCarousel />
      </div>
    </section>
  );
}
