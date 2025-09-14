import React from "react";
import { motion } from "framer-motion";
import "../App.css"

export default function App() {
    return (
        <>
            <div className="relative w-full h-screen flex items-center justify-center bg-[#232323] overflow-hidden">
                <div className="absolute top-10 flex items-center w-3/4 mx-auto mb-20 ">
                    <span className="text-gray-400 font-medium mr-2">How Botpress works
                    </span>
                    <hr className="flex-grow border-gray-500" />
                </div>


                {/* Animated Gradient Text */}
                <motion.h1
                    className="absolute text-[25vw] text-transparent bg-clip-text font-stretch-100%"

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

                {/* Glassmorphism Cards */}
                <div className="absolute top-30 right-2/4 glass-card w-64">
                    <h2 className="font-semibold text-white/85 mb-2">Step1</h2>
                    <p className="text-sm text-gray-200/80 bg-[#232323] p-3 rounded-md">
                        You are a customer support agent. Route the user based on their request.
                    </p>
                    <div className="mt-3 space-y-2">
                        <button className="glass-btn w-full">Refund</button>
                        <button className="glass-btn w-full">Question</button>
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/12 glass-card w-56">
                    <h2 className="font-semibold text-white/85 mb-2">Refund</h2>
                    <div className="space-y-2">
                        <button className="glass-btn w-full">Generate Content</button>
                        <button className="glass-btn w-full">Generate Image</button>
                        <button className="glass-btn w-full">Transcribe Audio</button>
                    </div>
                </div>

                <div className="absolute bottom-25 right-80 glass-card w-56">
                    <h2 className="font-semibold text-white/85 mb-2">Action</h2>
                    <div className="space-y-2">
                        <button className="glass-btn w-full">Start Conversation</button>
                        <button className="glass-btn w-full">Create Issue</button>
                    </div>
                </div>
            </div >
        </>
    );
}
