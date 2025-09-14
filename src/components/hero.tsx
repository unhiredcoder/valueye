import "../App.css";

const Landing = () => {
    const size = 30; 
    const numCols = Math.floor(window.innerWidth / size) - 2; // leave space for border
    const numRows = Math.floor(window.innerHeight / size) - 2;
    const totalSquares = numCols * numRows;

    return (
        <div className="relative w-full h-screen overflow-hidden bg-black text-white flex items-center justify-center">
            {/* GRID BACKGROUND with border */}
            <div className="relative border border-gray-100 w-[90vw] h-[90vh] mt-10 ">
                <div className="container absolute inset-0 z-0">
                    {Array.from({ length: totalSquares }).map((_, i) => (
                        <div key={i} className="square"></div>
                    ))}
                </div>

                {/* TOP BANNER */}
                <div className="absolute top-10 left-1/2 -translate-x-1/2 px-6 py-3 text-xs text-green-300 border border-green-500/50 bg-black/70 z-10">
                    {/* Blinking square on border */}
                    <div className="absolute -top-1 -left-1 w-2 h-2 bg-green-400 animate-pulse"></div>
                    Community support, daily live office hours, and thousands of builders – all on Discord.
                </div>


                {/* MAIN CONTENT */}
                <div className="relative flex flex-col items-center justify-center h-full z-10 text-center">
                    <h1 className="text-5xl md:text-8xl font-semibold leading-tight rammetto-one-regular">
                        The Complete <br /> AI Agent Platform
                    </h1>
                    <p className="mt-4 text-gray-400 max-w-xl md:text-xl">
                        Botpress is an all-in-one platform for building AI agents powered by the latest LLMs.
                    </p>

                    {/* BUTTONS */}
                    <div className="mt-9 flex gap-5">
                        <button className="px-8 py-5 rounded-full bg-blue-500 hover:bg-blue-600 transition">
                            Get started for free
                        </button>
                        <button className="px-8 py-5 rounded-full bg-gray-800 hover:bg-gray-700 transition hover:border border-1 border-solid border-gray-600">
                            Watch a demo
                        </button>
                    </div>
                </div>

                {/* FLOATING ICONS */}
                <div className="absolute top-[20%] left-[-3%]">
                    <img
                        src="https://cdn.prod.website-files.com/635c4eeb78332f7971255095/682f86059da82e0d24133875_d5ea7b97770edb90f4ad21155ffd7ba6_Asset%201.svg"
                        alt="apple"
                        width={450}
                    />
                </div>
                <div className="absolute top-[20%] right-[-3%]">
                    <img
                        src="https://cdn.prod.website-files.com/635c4eeb78332f7971255095/682f861bddd620aa0ba20ed7_4534053f00933bb59743c3064f0e65e2_Asset%202.svg"
                        alt="cup"
                        width={450}
                    />
                </div>
            </div>
           
        </div>
    );
};

export default Landing;