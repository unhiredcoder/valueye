import React from "react";
import { ArrowUpRight } from "lucide-react";

const tennisImg =
  "https://cdn.prod.website-files.com/635c4eeb78332f7971255095/6812a23fc4eee108b4e061ae_able.avif";

function DashboardLayout() {
  return (
    <div className="bg-[#f3f4ed] flex justify-center items-center">
      <div className="flex w-[95%] flex-col gap-8 min-h-screen p-4 md:p-10">
        {/* First row */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Able card */}
          <div
            className="flex-1 relative h-[220px] md:h-[300px] flex flex-col justify-center text-white p-6 md:p-8 bg-cover bg-center"
            style={{ backgroundImage: `url(${tennisImg})` }}
          >
            <span className="text-xl md:text-[1.65rem]">ABLE</span>
            <span className="text-4xl md:text-[4.8rem] font-bold">87%</span>
            <span className="text-sm md:text-base">ticket deflection</span>
            <span className="absolute top-3 right-3">
              <ArrowUpRight />
            </span>
          </div>

          {/* Extendly card */}
          <div className="relative flex-1 h-[220px] md:h-[300px] flex flex-col justify-center items-start p-6 md:p-8 bg-[#f9d7fb]">
            <span className="text-xl md:text-[1.65rem]">EXTENDLY</span>
            <span className="text-4xl md:text-[4.0rem] font-bold">30%</span>
            <span className="text-sm md:text-base">call reduction</span>
            <span className="absolute top-3 right-3">
              <ArrowUpRight />
            </span>
          </div>
        </div>

        {/* Second row */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Ruby Labs card */}
          <div className="relative flex-1 h-[220px] md:h-[300px] flex flex-col justify-center items-start p-6 md:p-8 border border-[#cfcfcf]">
            <span className="text-xl md:text-[1.65rem]">RUBY LABS</span>
            <span className="text-4xl md:text-[4.0rem] font-bold">98%</span>
            <span className="text-sm md:text-base">resolution rate</span>
            <span className="absolute top-3 right-3">
              <ArrowUpRight />
            </span>
          </div>

          {/* Testimonial card */}
          <div className="flex-1 h-auto md:h-[300px] flex flex-col justify-center p-6 md:p-8 bg-[#9DCEF3]">
            <p className="text-sm md:text-[1.3rem] mb-4 leading-relaxed">
              <span className="bg-[#C5E1F8] p-1.5">
                We have found Botpress’s pre-built workflows and ability to
                execute AI tasks particularly valuable.
              </span>{" "}
              Instead of spending time training a model from scratch, we can
              quickly deploy AI capabilities that meet our exact needs.
            </p>
            <span className="text-xs md:text-base">
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
