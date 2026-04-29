"use client";

import { projectsData } from "@/../utils/Data/projects-data";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import ProjectCard from "./project-card";

const Projects = () => {
  const displayedProjects = projectsData.slice(0, 3);

  return (
    <section id="projects" className="relative z-50 overflow-hidden py-16 lg:py-32">
      <div className="absolute left-1/2 top-1/2 h-[800px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/8 blur-[150px] pointer-events-none" />

      <div className="mb-20 flex justify-center lg:mb-28">
        <div className="flex items-center">
          <span className="h-[2px] w-24 bg-gradient-to-r from-transparent to-red-400/80"></span>
          <span className="w-fit rounded-full border border-red-400/20 bg-[#120708] px-8 py-3 text-2xl font-bold text-white shadow-[0_0_20px_rgba(239,68,68,0.15)]">
            Project Archive
          </span>
          <span className="h-[2px] w-24 bg-gradient-to-l from-transparent to-red-400/80"></span>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:gap-20">
          <div className="text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-red-200">
              Selected Work
            </p>
            <h2 className="text-4xl font-black leading-tight tracking-tighter text-white md:text-5xl lg:text-6xl">
              Applied analytics across
              <span className="block bg-gradient-to-r from-red-100 via-rose-200 to-red-400 bg-clip-text text-transparent">
                environment, planning, and data systems
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-relaxed text-slate-400">
              A curated view of projects spanning GIS operations, environmental
              analytics, dashboard development, and predictive modeling.
            </p>
          </div>

          <div className="grid w-full gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {displayedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <Link href="/projects" className="group mt-4">
            <button className="relative flex items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-red-500 to-rose-500 px-10 py-4 text-sm font-bold uppercase tracking-[0.24em] text-white transition-all hover:scale-105 active:scale-95">
              <span className="relative flex items-center gap-2">
                Explore All Projects <MoveUpRight className="h-4 w-4" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
