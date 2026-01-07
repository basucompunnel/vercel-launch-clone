import BlackButton from "./common/BlackButton";
import { IoSend } from "react-icons/io5";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import {
  IoChatbubbleOutline,
  IoLayersOutline,
  IoShareOutline,
} from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";
import { useState, useEffect } from "react";
import { IoRefreshOutline } from "react-icons/io5";
import { SiNextdotjs, SiShopify } from "react-icons/si";

interface CommentMessageProps {
  avatar?: string;
  author: string;
  message: React.ReactNode;
  color?: string;
  direction?: "left" | "right";
}

function AuthorBadge({
  author,
  color = "red",
  direction = "left",
}: {
  author: string;
  color?: string;
  direction?: "left" | "right";
}) {
  const bgColor = color === "blue" ? "bg-blue-500" : "bg-red-500";
  const textColor = color === "blue" ? "text-blue-500" : "text-red-500";
  const isRight = direction === "right";

  return (
    <motion.div
      className={`absolute top-10 ${
        isRight ? "left-32" : "right-32"
      } flex items-center gap-2 ${isRight ? "flex-row-reverse" : "flex-row"}`}
      animate={{
        y: [0, -5, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <IoSend
        className={`w-5 h-5 ${textColor} ${isRight ? "" : "rotate-180"}`}
      />
      <div
        className={`${bgColor} text-white px-3 py-1.5 rounded-md text-sm font-semibold shadow-sm`}
      >
        {author.charAt(0).toUpperCase() + author.slice(1)}
      </div>
    </motion.div>
  );
}

function CommentMessage({
  avatar,
  author,
  message,
  color = "red",
  direction = "left",
}: CommentMessageProps) {
  const avatarBgColor = color === "blue" ? "bg-blue-500" : "bg-red-500";

  return (
    <div className="relative">
      <AuthorBadge author={author} color={color} direction={direction} />
      <div className="bg-white rounded-lg px-4 py-3 border border-gray-200 shadow-sm max-w-md">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3 flex-1">
            <div
              className={`w-8 h-8 rounded-full ${avatarBgColor} flex items-center justify-center flex-shrink-0`}
            >
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

function CollaborationToolbar() {
  return (
    <div className="mt-8 mx-auto flex items-center justify-between bg-white rounded-full border border-gray-200 shadow-sm px-3 py-2 max-w-xs">
      <div className="flex items-center divide-x divide-gray-200">
        <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
          <IoChatbubbleOutline className="w-4 h-4 text-gray-600" />
        </button>
        <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors ml-2 pl-2">
          <HiOutlineMenu className="w-4 h-4 text-gray-600" />
        </button>
        <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors ml-2 pl-2">
          <IoLayersOutline className="w-4 h-4 text-gray-600" />
        </button>
        <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors ml-2 pl-2">
          <IoLayersOutline className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      <div className="flex items-center -space-x-2">
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 ring-2 ring-white flex items-center justify-center">
          <span className="text-white text-xs font-semibold">J</span>
        </div>
        <div className="w-7 h-7 rounded-full bg-red-500 ring-2 ring-white flex items-center justify-center">
          <span className="text-white text-xs font-semibold">R</span>
        </div>
        <div className="w-7 h-7 rounded-full bg-red-600 ring-2 ring-white flex items-center justify-center">
          <span className="text-white text-xs font-semibold">H</span>
        </div>
      </div>

      <div className="flex items-center divide-x divide-gray-200">
        <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors pr-2">
          <IoShareOutline className="w-4 h-4 text-gray-600" />
        </button>
        <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors ml-2 pl-2">
          <HiOutlineMenu className="w-4 h-4 text-gray-600" />
        </button>
      </div>
    </div>
  );
}

function AnimatedTerminal() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timings = [2000, 1500, 2000, 2000, 2000];
    const timer = setTimeout(() => {
      setStage((prev) => (prev + 1) % 5);
    }, timings[stage]);

    return () => clearTimeout(timer);
  }, [stage]);

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm">
      <div className="flex items-center gap-2 min-h-[24px]">
        <AnimatePresence mode="wait">
          {stage === 0 && (
            <motion.span
              key="stage0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-2 h-5 bg-black inline-block animate-pulse"
            />
          )}
          {stage === 1 && (
            <motion.div
              key="stage1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2"
            >
              <span className="text-gray-500 text-sm font-mono">~</span>
              <span className="text-gray-900 text-sm font-mono">vercel-site/</span>
            </motion.div>
          )}
          {stage === 2 && (
            <motion.div
              key="stage2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2"
            >
              <span className="text-gray-500 text-sm font-mono">~</span>
              <span className="text-gray-900 text-sm font-mono">vercel-site/</span>
              <span className="text-gray-900 text-sm font-mono">git push</span>
              <span className="w-2 h-5 bg-black inline-block animate-pulse"></span>
            </motion.div>
          )}
          {stage === 3 && (
            <motion.div
              key="stage3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 1 L11 11 L1 11 Z" fill="black" />
                </svg>
              </div>
              <span className="text-gray-900 text-sm font-mono">building...</span>
              <div className="flex items-center gap-1.5 ml-2">
                <SiNextdotjs className="w-5 h-5 text-black" />
                <SiShopify className="w-5 h-5 text-green-500" />
              </div>
            </motion.div>
          )}
          {stage === 4 && (
            <motion.div
              key="stage4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2"
            >
              <span className="text-gray-900 text-sm font-mono">deployed</span>
              <IoRefreshOutline className="w-5 h-5 text-gray-900 ml-2" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function InfrastructureContent() {
  return (
    <div className="mt-12">
      <div className="mb-8 flex flex-row items-start gap-6">
        <p className="text-lg md:text-xl text-gray-600 leading-normal font-medium flex-1">
          <span className="font-semibold text-black">
            Infrastructure on autopilot.
          </span>{" "}
          Your gateway to globally fast, infinitely scalable, and always
          reliable web apps.
        </p>
        <div className="flex-shrink-0">
          <button className="flex items-center gap-2 px-8 py-3.5 bg-black text-white text-base font-medium rounded-full hover:bg-gray-700 transition-colors font-sans cursor-pointer">
            Infrastructure
          </button>
        </div>
      </div>

      {/* Globe Visualization */}
      <div className="relative w-full h-96 flex items-center justify-center">
        <svg
          className="w-full h-full max-w-2xl"
          viewBox="0 0 600 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Horizontal grid lines */}
          <ellipse
            cx="300"
            cy="200"
            rx="250"
            ry="180"
            stroke="#e5e7eb"
            strokeWidth="1"
            fill="none"
          />
          <ellipse
            cx="300"
            cy="200"
            rx="250"
            ry="120"
            stroke="#e5e7eb"
            strokeWidth="1"
            fill="none"
          />
          <ellipse
            cx="300"
            cy="200"
            rx="250"
            ry="60"
            stroke="#e5e7eb"
            strokeWidth="1"
            fill="none"
          />

          {/* Vertical grid lines */}
          <path
            d="M 300 20 Q 300 110 300 200 Q 300 290 300 380"
            stroke="#e5e7eb"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M 200 40 Q 220 110 240 200 Q 220 290 200 360"
            stroke="#e5e7eb"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M 100 60 Q 140 110 180 200 Q 140 290 100 340"
            stroke="#e5e7eb"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M 400 40 Q 380 110 360 200 Q 380 290 400 360"
            stroke="#e5e7eb"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M 500 60 Q 460 110 420 200 Q 460 290 500 340"
            stroke="#e5e7eb"
            strokeWidth="1"
            fill="none"
          />

          {/* Connection lines (blue) */}
          <path
            d="M 240 120 L 300 50"
            stroke="#3b82f6"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 240 120 L 460 180"
            stroke="#3b82f6"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 300 50 L 460 180"
            stroke="#3b82f6"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 460 180 L 520 240"
            stroke="#3b82f6"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 120 280 L 300 220"
            stroke="#3b82f6"
            strokeWidth="2"
            fill="none"
          />

          {/* Location pins (triangles) */}
          <g transform="translate(240, 120)">
            <circle
              cx="0"
              cy="0"
              r="16"
              fill="white"
              stroke="#e5e7eb"
              strokeWidth="1"
            />
            <path d="M 0 -6 L 5 4 L -5 4 Z" fill="#6b7280" />
          </g>
          <g transform="translate(300, 50)">
            <circle
              cx="0"
              cy="0"
              r="16"
              fill="white"
              stroke="#e5e7eb"
              strokeWidth="1"
            />
            <path d="M 0 -6 L 5 4 L -5 4 Z" fill="#6b7280" />
          </g>
          <g transform="translate(460, 180)">
            <circle
              cx="0"
              cy="0"
              r="16"
              fill="white"
              stroke="#e5e7eb"
              strokeWidth="1"
            />
            <path d="M 0 -6 L 5 4 L -5 4 Z" fill="#6b7280" />
          </g>
          <g transform="translate(300, 220)">
            <circle
              cx="0"
              cy="0"
              r="16"
              fill="white"
              stroke="#e5e7eb"
              strokeWidth="1"
            />
            <path d="M 0 -6 L 5 4 L -5 4 Z" fill="#6b7280" />
          </g>
          <g transform="translate(520, 240)">
            <circle
              cx="0"
              cy="0"
              r="16"
              fill="white"
              stroke="#e5e7eb"
              strokeWidth="1"
            />
            <path d="M 0 -6 L 5 4 L -5 4 Z" fill="#6b7280" />
          </g>
          <g transform="translate(120, 280)">
            <circle
              cx="0"
              cy="0"
              r="16"
              fill="white"
              stroke="#e5e7eb"
              strokeWidth="1"
            />
            <path d="M 0 -6 L 5 4 L -5 4 Z" fill="#6b7280" />
          </g>
        </svg>

        <AnimatedTerminal />
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
    <div className="flex flex-col justify-center px-4 md:px-8 py-12 md:py-16 sticky top-20">
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
          teams{" "}
          <span className="font-semibold text-black">shipping 6x faster</span>.
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

      <CollaborationToolbar />

      <div className="mt-8 h-px bg-gray-200"></div>

      <InfrastructureContent />
    </div>
  );
}

export default function CloudInfoSection() {
  return (
    <section className="px-4 bg-[#FAFAFA] relative">
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
