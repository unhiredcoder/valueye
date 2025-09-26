import "../App.css";
import { useState, useEffect } from "react";

const Landing = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const size = 30;
    const numCols = Math.floor(windowSize.width / size) - 2;
    const numRows = Math.floor(windowSize.height / size) - 2;
    const totalSquares = numCols * numRows;

    return (
        <div className="relative w-full min-h-screen overflow-hidden bg-black text-white flex items-center justify-center px-3 sm:px-6 lg:px-8 py-6 sm:py-8">
            {/* GRID BACKGROUND */}
            <div className="relative border border-gray-100 w-full max-w-7xl h-full min-h-[85vh] mx-auto">
                {/* Grid squares */}
                <div className="container absolute inset-0 z-0 overflow-hidden">
                    {Array.from({ length: totalSquares }).map((_, i) => (
                        <div key={i} className="square"></div>
                    ))}
                </div>

                {/* TOP BANNER */}
                <div className="
                    absolute top-3 sm:top-6 lg:top-10 
                    left-1/2 -translate-x-1/2 
                    w-[92%] sm:w-auto 
                    px-3 py-2 sm:px-6 sm:py-3 
                    text-[11px] sm:text-sm 
                    text-green-300 
                    border border-green-500/50 
                    bg-black/90 backdrop-blur-sm 
                    z-20 rounded-md sm:rounded-lg 
                    text-center leading-snug
                ">
                    <div className="absolute -top-1 -left-1 w-2 h-2 bg-green-400 animate-pulse rounded-full"></div>
                    Community support, daily live office hours, and thousands of builders – all on Discord.
                </div>

                {/* MAIN CONTENT */}
                <div className="relative flex flex-col items-center justify-center h-full min-h-[85vh] z-10 text-center pointer-events-none">
                    <div className="pointer-events-auto">
                        <h1 className="
                            text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
                            font-semibold leading-tight 
                            rammetto-one-regular 
                            px-2
                        ">
                            The Complete <br className="hidden sm:block" /> AI Agent Platform
                        </h1>
                        <p className="mt-4 sm:mt-6 text-gray-400 
                            max-w-[90%] sm:max-w-md md:max-w-xl 
                            mx-auto 
                            text-sm sm:text-base md:text-lg lg:text-xl 
                            px-2
                        ">
                            Botpress is an all-in-one platform for building AI agents powered by the latest LLMs.
                        </p>

                        {/* BUTTONS */}
                        <div className="mt-5 sm:mt-9 flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center items-center px-2">
                            <button className="px-5 py-3 sm:px-8 sm:py-4 rounded-full bg-blue-500 hover:bg-blue-600 transition text-sm sm:text-base font-medium w-full sm:w-auto">
                                Get started for free
                            </button>
                            <button className="px-5 py-3 sm:px-8 sm:py-4 rounded-full bg-gray-800 hover:bg-gray-700 transition border border-gray-600 hover:border-gray-500 text-sm sm:text-base font-medium w-full sm:w-auto">
                                Watch a demo
                            </button>
                        </div>
                    </div>
                </div>

                {/* FLOATING ICONS */}
                <div className="absolute top-[8%] sm:top-[15%] lg:top-[20%] left-[-8%] sm:left-[-3%] z-1">
                    <img
                        src="https://cdn.prod.website-files.com/635c4eeb78332f7971255095/682f86059da82e0d24133875_d5ea7b97770edb90f4ad21155ffd7ba6_Asset%201.svg"
                        alt="apple"
                        className="w-[120px] xs:w-[160px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px]"
                    />
                </div>
                <div className="absolute top-[8%] sm:top-[15%] lg:top-[20%] right-[-8%] sm:right-[-3%] z-1">
                    <img
                        src="https://cdn.prod.website-files.com/635c4eeb78332f7971255095/682f861bddd620aa0ba20ed7_4534053f00933bb59743c3064f0e65e2_Asset%202.svg"
                        alt="cup"
                        className="w-[120px] xs:w-[160px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Landing;
