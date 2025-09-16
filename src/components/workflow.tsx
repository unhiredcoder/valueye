import React from "react";
import { ArrowUpRight } from "lucide-react";

const tennisImg =
    "https://cdn.prod.website-files.com/635c4eeb78332f7971255095/6812a23fc4eee108b4e061ae_able.avif"; // Replace with your actual image path

function DashboardLayout() {
    return (
        <div className=" bg-[#f3f4ed] flex justify-center items-center">

            <div className="flex w-[90%] flex-col gap-8 min-h-screen p-10">
                {/* First row */}
                <div className="flex gap-8">
                    {/* Able card */}
                    <div
                        className="flex-2 relative h-[300px] flex flex-col justify-center text-white p-8 "
                        style={{ backgroundImage: `url(${tennisImg})` }}
                    >
                        <span className="text-[1.65rem]">ABLE</span>
                        <span className="text-[4.8rem]">87%</span>
                        <span className="text-base">ticket deflection</span>
                        <span className="absolute top-3 right-3"><ArrowUpRight /></span>
                    </div>

                    {/* Extendly card */}
                    <div className="relative flex-1 h-[300px] flex flex-col justify-center items-start p-8 bg-[#f9d7fb]">
                        <span className="text-[1.65rem]">EXTENDLY</span>
                        <span className="text-[4.0rem]">30%</span>
                        <span className="text-base">call reduction</span>
                        <span className="absolute top-3 right-3"><ArrowUpRight /></span>

                    </div>
                </div>

                {/* Second row */}
                <div className="flex gap-8">
                    {/* Ruby Labs card */}
                    <div className=" relative flex-1 h-[300px] flex flex-col justify-center items-start p-8  border border-[#cfcfcf]">
                        <span className="text-[1.65rem]">RUBY LABS</span>
                        <span className="text-[4.0rem]">98%</span>
                        <span className="text-base">resolution rate</span>
                        <span className="absolute top-3 right-3"><ArrowUpRight /></span>

                    </div>

                    {/* Testimonial card */}
                    <div className="flex-2 h-[300px] flex flex-col justify-center p-8 bg-[#9DCEF3]">
                        <p className="text-[1.3rem] mb-4">
                            <span className="bg-[#C5E1F8] p-1.5">
                                We have found Botpress’s pre-built workflows and ability to execute
                                AI tasks particularly valuable.
                            </span>
                            Instead of spending time training a
                            model from scratch, we can quickly deploy AI capabilities that meet
                            our exact needs.
                        </p>
                        <span className="text-base">
                            Bogdan Alexandru
                            <br />
                            Head of Support, RubyLabs
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardLayout;
