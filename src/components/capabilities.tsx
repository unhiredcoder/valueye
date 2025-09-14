import { ArrowUpRight } from "lucide-react";
import "../App.css"

const Capabilities = () => {
    return (
        <div className="w-full h-auto py-6 bg-[#232323] text-white">
            <div className="flex items-center w-3/4 mx-auto mb-20">
                <span className="text-gray-400 font-medium mr-2">Capabilities</span>
                <hr className="flex-grow border-gray-500" />
            </div>
            <p className="ml-[11%] mb-10 text-5xl w-3/4 text-amber-50">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Botpress provides the core <br /> infrastructure needed to build and run AI <br /> agents in production. </p>
            <div className="w-5/6 h-full grid place-content-center mx-auto grid-cols-2 gap-10 p-10">
                <div className="relative">
                    <img src="https://cdn.prod.website-files.com/635c4eeb78332f7971255095/6853105b7eacd33be36744f2_9749ba8cb1094cedc6428aec3585613e_capabilities_1.jpg" alt="" />
                    <div>
                        <h2 className="text-3xl font-semibold w-3/4 ">Lorem ipsum dolor sit consectetur .</h2>
                        <p className="text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elium dolor sit amet consectetur adipisicing elit. Cum, libero?</p>
                    </div>
                    <a href="" className="absolute text-gray-200 right-3 top-3 inline-flex items-center justify-center">learn more <ArrowUpRight size={20} /></a>
                </div>
                <div className="relative">
                    <img src="https://cdn.prod.website-files.com/635c4eeb78332f7971255095/6853105b6f8e73732e255af0_c60d3110fdacfdce8a6c5d7d29078cd3_capabilities_2.jpg" alt="" />
                    <div>
                        <h2 className="text-3xl font-semibold w-3/4">Lorem ipsum dolor sit consectetur .</h2>
                        <p className="text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elium dolor sit amet consectetur adipisicing elit. Cum, libero?</p>
                    </div>
                    <a href="" className="absolute text-gray-200 right-3 top-3 inline-flex items-center justify-center">learn more <ArrowUpRight size={20} /></a>
                </div>
                <div className="relative">
                    <img src="https://cdn.prod.website-files.com/635c4eeb78332f7971255095/6853105b56f27f253e8fad3c_92aabcf023e52b7ec6fc947990bc0d9e_capabilities_3.jpg" alt="" />
                    <div>
                        <h2 className="text-3xl font-semibold w-3/4">Lorem ipsum dolor sit consectetur .</h2>
                        <p className="text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elium dolor sit amet consectetur adipisicing elit. Cum, libero?</p>
                    </div>
                    <a href="" className="absolute text-gray-200 right-3 top-3 inline-flex items-center justify-center">learn more <ArrowUpRight size={20} /></a>
                </div>
                <div className="relative">
                    <img src="https://cdn.prod.website-files.com/635c4eeb78332f7971255095/6853105b734e11cae2cfdf32_001ddbac5bbcba6f1063964b066aa0f4_capabilities_4.jpg" alt="" />
                    <div>
                        <h2 className="text-3xl font-semibold w-3/4">Lorem ipsum dolor sit consectetur .</h2>
                        <p className="text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elium dolor sit amet consectetur adipisicing elit. Cum, libero?</p>
                    </div>
                    <a href="" className="absolute text-gray-200 right-3 top-3 inline-flex items-center justify-center">learn more <ArrowUpRight size={20} /></a>
                </div>
            </div>
        </div>
    );
};

export default Capabilities;
