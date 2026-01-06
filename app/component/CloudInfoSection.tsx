import BlackButton from "./common/BlackButton";
import { IoSend } from "react-icons/io5";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";

interface CommentMessageProps {
  avatar?: string;
  author: string;
  message: React.ReactNode;
  color?: string;  direction?: "left" | "right";}

function AuthorBadge({ author, color = "red", direction = "left" }: { author: string; color?: string; direction?: "left" | "right" }) {
  const bgColor = color === "blue" ? "bg-blue-500" : "bg-red-500";
  const textColor = color === "blue" ? "text-blue-500" : "text-red-500";
  const isRight = direction === "right";
  
  return (
    <motion.div 
      className={`absolute top-10 ${isRight ? "left-32" : "right-32"} flex items-center gap-2 ${isRight ? "flex-row-reverse" : "flex-row"}`}
      animate={{ 
        y: [0, -5, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <IoSend className={`w-5 h-5 ${textColor} ${isRight ? "" : "rotate-180"}`} />
      <div className={`${bgColor} text-white px-3 py-1.5 rounded-md text-sm font-semibold shadow-sm`}>
        {author.charAt(0).toUpperCase() + author.slice(1)}
      </div>
    </motion.div>
  );
}

function CommentMessage({ avatar, author, message, color = "red", direction = "left" }: CommentMessageProps) {
  const avatarBgColor = color === "blue" ? "bg-blue-500" : "bg-red-500";
  
  return (
    <div className="relative">
      <AuthorBadge author={author} color={color} direction={direction} />
      <div className="bg-white rounded-lg px-4 py-3 border border-gray-200 shadow-sm max-w-md">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3 flex-1">
            <div className={`w-8 h-8 rounded-full ${avatarBgColor} flex items-center justify-center flex-shrink-0`}>
              <span className="text-white text-xs font-semibold">
                {author.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-black mb-1">{author}</p>
              <p className="text-sm text-gray-700 leading-relaxed">{message}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button className="p-1.5 hover:bg-gray-100 rounded">
              <HiOutlineDevicePhoneMobile className="w-4 h-4 text-gray-500" />
            </button>
            <button className="p-1.5 hover:bg-gray-100 rounded">
              <IoMdInformationCircleOutline className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function GridBorders() {
  return (
    <>
      {/* Top horizontal line */}
      <div className="hidden md:block absolute top-0 left-0 right-0 h-px bg-gray-200"></div>
      
      {/* Left vertical line */}
      <div className="hidden md:block absolute inset-y-0 left-0 w-px bg-gray-200"></div>

      {/* Center vertical dividing line */}
      <div className="hidden md:block absolute inset-y-0 left-1/3 w-px bg-gray-200"></div>

      {/* Right vertical line */}
      <div className="hidden md:block absolute inset-y-0 right-0 w-px bg-gray-200"></div>

      {/* Bottom horizontal line */}
      <div className="hidden md:block absolute bottom-0 left-0 right-0 h-px bg-gray-200"></div>
    </>
  );
}

function LeftColumn() {
  return (
    <div className="flex flex-col justify-center px-4 md:px-8 py-12 md:py-16">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-8 leading-tight">
        Vercel's
        <br />
        Frontend Cloud.
      </h2>
      <p className="text-base md:text-lg text-gray-600 leading-normal font-medium">
        Providing the developer experience and infrastructure to build, scale,
        and secure a faster, more personalized web.
      </p>
    </div>
  );
}

function RightColumn() {
  return (
    <div className="flex flex-col justify-center px-4 md:px-8 py-12 md:py-16">
      <div className="mb-8 flex flex-row items-start gap-6">
        <p className="text-lg md:text-xl text-gray-600 leading-normal font-medium flex-1">
          Traditional deployment tools weren't built for frontend development.
          Vercel is the{" "}
          <span className="font-semibold text-black">DX Platform</span> that has
          teams <span className="font-semibold text-black">shipping 6x faster</span>
          .
        </p>
        <div className="flex-shrink-0">
          <button className="flex items-center gap-2 px-8 py-3.5 bg-black text-white text-base font-medium rounded-full hover:bg-gray-700 transition-colors font-sans cursor-pointer">
            DX Platform
          </button>
        </div>
      </div>

      <CommentMessage
        author="rauno"
        message={
          <>
            The contrast ratio on this{" "}
            <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono">
              blockquote
            </code>{" "}
            isn't passing AA contrast. Can we tweak?
          </>
        }
      />

      <div className="mt-6 ml-24">
        <CommentMessage
          author="henryjeff"
          color="blue"
          direction="right"
          message={
            <>
              Okay, I've flipped this to our second darkest color token,{" "}
              <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono">
                -900
              </code>
              .
            </>
          }
        />
      </div>

      
    </div>
  );
}

export default function CloudInfoSection() {
  return (
    <section className="px-4 bg-white relative">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative pb-8 md:pb-12">
          <GridBorders />
          <div className="md:col-span-1">
            <LeftColumn />
          </div>
          <div className="md:col-span-2">
            <RightColumn />
          </div>
        </div>
      </div>
    </section>
  );
}
