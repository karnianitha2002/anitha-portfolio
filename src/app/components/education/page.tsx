"use client";

import { educations } from "@/../utils/Data/educations";
import { GraduationCap, Calendar, MapPin, School, Sparkles } from "lucide-react";
import SectionReveal from "../SectionReveal";
import Tilt from "react-parallax-tilt";

function Education() {
  return (
    <div id="education" className="relative z-50 overflow-hidden py-20 lg:py-32">
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/6 blur-[120px] pointer-events-none" />

      <div className="mb-20 flex justify-center lg:mb-28">
        <div className="flex items-center">
          <span className="h-[2px] w-24 bg-gradient-to-r from-transparent to-red-400/80"></span>
          <span className="w-fit rounded-full border border-red-300/20 bg-[#120708] px-8 py-3 text-2xl font-bold text-white shadow-[0_0_20px_rgba(239,68,68,0.15)]">
            Academic Background
          </span>
          <span className="h-[2px] w-24 bg-gradient-to-l from-transparent to-red-400/80"></span>
        </div>
      </div>

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col gap-8">
            {educations.map((education, index) => (
              <SectionReveal
                key={education.id}
                direction="right"
                delay={index * 0.1}
              >
                <Tilt
                  perspective={1500}
                  glareEnable={true}
                  glareMaxOpacity={0.08}
                  scale={1.01}
                >
                  <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-xl backdrop-blur-md transition-all duration-500 hover:border-red-300/40">
                    <div className="relative z-10 flex items-start gap-6">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-red-300/20 bg-red-300/10 shadow-[0_0_20px_rgba(239,68,68,0.15)] transition-transform duration-500 group-hover:scale-110">
                        <GraduationCap className="h-7 w-7 text-red-200" />
                      </div>

                      <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-200">
                            <Calendar className="h-3 w-3" />
                            {education.duration}
                          </div>
                          <h3 className="text-xl font-bold text-white transition-colors group-hover:text-red-200 md:text-2xl">
                            {education.title}
                          </h3>
                        </div>

                        <div className="flex items-center gap-2 font-medium text-slate-300">
                          <School className="h-4 w-4 text-red-300" />
                          {education.institution}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-400">
                          <MapPin className="h-4 w-4 text-red-300" />
                          {education.location}
                        </div>
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                          {education.score}
                        </p>
                      </div>
                    </div>

                    <div className="absolute -bottom-4 -right-4 opacity-[0.05] transition-opacity duration-500 group-hover:opacity-[0.1]">
                      <GraduationCap className="h-32 w-32 text-red-300" />
                    </div>
                  </div>
                </Tilt>
              </SectionReveal>
            ))}
          </div>

          <div className="order-first lg:order-last">
            <SectionReveal direction="left">
              <div className="relative overflow-hidden rounded-[40px] border border-white/5 bg-white/[0.02] p-10 backdrop-blur-3xl lg:p-16">
                <div className="absolute inset-0 bg-gradient-to-br from-red-400/6 via-transparent to-red-700/5" />
                <div className="relative z-10 flex flex-col gap-8 text-center lg:text-left">
                  <div className="flex items-center justify-center gap-3 text-red-200 lg:justify-start">
                    <Sparkles className="h-5 w-5" />
                    <span className="text-xs font-bold uppercase tracking-[0.3em]">
                      Learning Arc
                    </span>
                  </div>
                  <h2 className="text-3xl font-black leading-tight text-white md:text-4xl lg:text-5xl">
                    Building a foundation in
                    <span className="block bg-gradient-to-r from-red-200 to-red-500 bg-clip-text text-transparent">
                      data, place, and impact
                    </span>
                  </h2>
                  <p className="text-lg font-medium italic leading-relaxed text-slate-400">
                    My academic path connects engineering discipline with modern
                    data science, giving me a practical lens for environmental,
                    civic, and infrastructure-focused analytics.
                  </p>
                  <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-red-400 to-transparent lg:mx-0" />
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
