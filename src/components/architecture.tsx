import React from "react";

export default function BotpressSection() {
  return (
    <>
      <div className="relative w-full min-h-screen flex items-center justify-start bg-[#232323] px-4 sm:px-6 lg:pl-30">
        {/* Section Heading */}
        <div className="absolute top-6 sm:top-10 flex items-center w-11/12 sm:w-3/4 mx-auto mb-10 sm:mb-20">
          <span className="text-gray-400 font-medium mr-2">Architecture</span>
          <hr className="flex-grow border-gray-500" />
        </div>

        {/* Content */}
        <div className="max-w-1xl text-gray-400 text-2xl sm:text-3xl lg:text-6xl  sm:leading-tight">
          <p className="mb-6">
            &nbsp;&nbsp;&nbsp;&nbsp;Botpress uses a fully isolated runtime
            architecture:{" "}
            <span className="text-white">
              every deployed agent runs its own self-contained environment.
            </span>
          </p>

          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;They&apos;re versioned{" "}
            <span className="text-blue-400">🤖</span>, durable{" "}
            <span className="text-green-400">🌱</span>, and compatible{" "}
            <span className="text-pink-400">👾</span> with future platform
            changes, so what you build today will still work tomorrow.
          </p>
        </div>
      </div>
    </>
  );
}
