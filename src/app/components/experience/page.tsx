"use client";

import { experiences } from "@/../utils/Data/experience";
import { BsPersonWorkspace } from "react-icons/bs";
import { Calendar, Building2, ChevronRight } from "lucide-react";
import SectionReveal from "../SectionReveal";

function Experience() {
  return (
    <div id="experience" className="relative z-50 overflow-hidden py-16 lg:py-32">
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/8 blur-[120px] pointer-events-none" />

      <div className="mb-20 flex justify-center lg:mb-32">
        <div className="flex items-center">
          <span className="h-[2px] w-24 bg-gradient-to-r from-transparent to-red-400/80"></span>
          <span className="w-fit rounded-full border border-red-300/20 bg-[#120708] px-8 py-3 text-2xl font-bold text-white shadow-[0_0_20px_rgba(239,68,68,0.15)]">
            Professional Journey
          </span>
          <span className="h-[2px] w-24 bg-gradient-to-l from-transparent to-red-400/80"></span>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="absolute bottom-0 left-4 top-0 w-[2px] bg-gradient-to-b from-red-400 via-red-700/40 to-transparent opacity-40 md:left-1/2 md:-translate-x-1/2" />

        <div className="flex flex-col gap-16 lg:gap-24">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative">
              <SectionReveal direction={index % 2 === 0 ? "right" : "left"}>
                <div
                  className={`flex flex-col items-center gap-8 md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="absolute left-4 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-xl border-2 border-red-400 bg-[#120708] shadow-[0_0_15px_rgba(239,68,68,0.35)] md:left-1/2 md:-translate-x-1/2">
                    <BsPersonWorkspace className="h-5 w-5 text-red-200" />
                  </div>

                  <div
                    className={`flex w-full md:w-1/2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}
                  >
                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur-sm">
                      <Calendar className="h-4 w-4 text-red-300" />
                      {exp.duration}
                    </div>
                  </div>

                  <div className="w-full md:w-1/2">
                    <div className="group relative rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-xl transition-all duration-500 hover:border-red-300/40 hover:shadow-red-400/5">
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                          <h3 className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-2xl font-bold text-transparent">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 font-semibold text-red-200">
                            <Building2 className="h-4 w-4" />
                            {exp.company}
                          </div>
                        </div>

                        <div className="mt-2 space-y-3">
                          {exp.details?.map((detail, idx) => (
                            <div
                              key={idx}
                              className="group/item flex items-start gap-3"
                            >
                              <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-red-300 transition-transform group-hover/item:translate-x-1" />
                              <p className="text-sm leading-relaxed text-slate-400 transition-colors group-hover/item:text-slate-200 lg:text-base">
                                {detail}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-red-400/10 via-transparent to-red-700/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                  </div>
                </div>
              </SectionReveal>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
