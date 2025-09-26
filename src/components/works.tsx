import React from "react";
import { motion } from "framer-motion";
import "../App.css";

export default function App() {
  return (
    <>
      <div className="relative w-full min-h-screen flex items-center justify-center bg-[#232323] overflow-hidden">
        {/* Section Heading */}
        <div className="absolute top-6 flex items-center w-11/12 sm:w-3/4 mx-auto">
          <span className="text-gray-400 font-medium mr-2">
            How Botpress works
          </span>
          <hr className="flex-grow border-gray-500" />
        </div>

        {/* Animated Gradient Text */}
        <motion.h1
          className="absolute text-[20vw] sm:text-[25vw] text-transparent bg-clip-text font-stretch-100% leading-none"
          style={{
            backgroundImage:
              "linear-gradient(115deg, #E0E0E0 10%, rgb(186, 211, 226) 20%, #B6B6B6 35%, #E0E0E0 45%, rgb(186, 211, 226) 60%, #E0E0E0 75%)",
            backgroundSize: "130% auto",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"], // Sweep effect
          }}
          transition={{
            duration: 4,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          Engine
        </motion.h1>

        {/* Step1 Card */}
        <div className="absolute top-28 left-1/4 glass-card w-44 sm:w-64 text-xs sm:text-sm">
          <h2 className="font-semibold text-white/85 mb-2 text-sm sm:text-base">
            Step1
          </h2>
          <p className="text-[10px] sm:text-sm text-gray-200/80 bg-[#232323] p-2 sm:p-3 rounded-md">
            You are a customer support agent. Route the user based on their
            request.
          </p>
          <div className="mt-3 space-y-2">
            <button className="glass-btn w-full text-xs sm:text-sm">
              Refund
            </button>
            <button className="glass-btn w-full text-xs sm:text-sm">
              Question
            </button>
          </div>
        </div>

        {/* Refund Card */}
        <div className="absolute bottom-10 left-1/6 glass-card w-40 sm:w-56 text-xs sm:text-sm">
          <h2 className="font-semibold text-white/85 mb-2 text-sm sm:text-base">
            Refund
          </h2>
          <div className="space-y-2">
            <button className="glass-btn w-full text-xs sm:text-sm">
              Generate Content
            </button>
            <button className="glass-btn w-full text-xs sm:text-sm">
              Generate Image
            </button>
            <button className="glass-btn w-full text-xs sm:text-sm">
              Transcribe Audio
            </button>
          </div>
        </div>

        {/* Action Card */}
        <div className="absolute bottom-24 right-10 sm:right-80 glass-card w-40 sm:w-56 text-xs sm:text-sm">
          <h2 className="font-semibold text-white/85 mb-2 text-sm sm:text-base">
            Action
          </h2>
          <div className="space-y-2">
            <button className="glass-btn w-full text-xs sm:text-sm">
              Start Conversation
            </button>
            <button className="glass-btn w-full text-xs sm:text-sm">
              Create Issue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
