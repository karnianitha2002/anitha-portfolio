"use client";

import { skillsData } from "@/../utils/Data/skills";
import SectionReveal from "../SectionReveal";
import { BrainCircuit, Database, Map, Presentation, Wrench } from "lucide-react";

const skillGroups = [
  {
    title: "Languages",
    subtitle: "Core programming foundations",
    items: skillsData.languages,
    icon: Database,
  },
  {
    title: "Analytics",
    subtitle: "Methods for extracting signal",
    items: skillsData.analytics,
    icon: BrainCircuit,
  },
  {
    title: "Geospatial",
    subtitle: "Spatial platforms and workflows",
    items: skillsData.geospatial,
    icon: Map,
  },
  {
    title: "Visualization",
    subtitle: "Dashboards and visual storytelling",
    items: skillsData.visualization,
    icon: Presentation,
  },
  {
    title: "Machine Learning",
    subtitle: "Modeling and forecasting approaches",
    items: skillsData.machineLearning,
    icon: BrainCircuit,
  },
  {
    title: "Tools",
    subtitle: "Day-to-day delivery stack",
    items: skillsData.tools,
    icon: Wrench,
  },
];

function Skills() {
  return (
    <div id="skills" className="relative z-50 overflow-hidden py-24 lg:py-40">
      <div className="absolute left-1/2 top-1/2 h-[800px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-rose-500/8 blur-[120px] pointer-events-none" />

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="mb-16 flex flex-col items-center lg:mb-24">
          <SectionReveal direction="down">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-3 text-red-200">
                <span className="h-[1px] w-8 bg-red-400/50"></span>
                <span className="text-xs font-bold uppercase tracking-[0.5em]">
                  Toolkit
                </span>
                <span className="h-[1px] w-8 bg-red-400/50"></span>
              </div>
              <h2 className="text-center text-4xl font-black tracking-tighter text-white md:text-5xl lg:text-6xl">
                Skills for
                <span className="block bg-gradient-to-r from-red-100 via-rose-200 to-red-400 bg-clip-text text-transparent">
                  spatially-aware analytics
                </span>
              </h2>
            </div>
          </SectionReveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <SectionReveal
                key={group.title}
                direction={index % 2 === 0 ? "right" : "left"}
                delay={index * 0.06}
              >
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-red-400/40 hover:bg-white/[0.05]">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{group.title}</h3>
                      <p className="mt-1 text-sm text-slate-400">{group.subtitle}</p>
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-red-400/20 bg-red-500/10">
                      <Icon className="h-5 w-5 text-red-200" />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-[#120708] px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
