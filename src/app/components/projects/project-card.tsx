"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProjectCardProps } from "@/Types/types";
import {
  ArrowUpRight,
  ChevronUp,
  ExternalLink,
  FileSearch,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MouseEvent, useRef, useState } from "react";

const ProjectCard = ({ project }: ProjectCardProps) => {
  const firstImage = project.images?.[0];
  const [showAllTags, setShowAllTags] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const maxVisibleTags = 4;
  const hasMoreTags = project.tools.length > maxVisibleTags;
  const visibleTools = showAllTags
    ? project.tools
    : project.tools.slice(0, maxVisibleTags);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const isNewProject = (dateString: string) => {
    if (!dateString) return false;

    try {
      const projectDate = new Date(dateString);
      const currentDate = new Date();
      const oneMonthAgo = new Date();
      oneMonthAgo.setMonth(currentDate.getMonth() - 1);

      return projectDate >= oneMonthAgo && projectDate <= currentDate;
    } catch {
      return false;
    }
  };

  const externalHref = project.demo || project.code;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative h-full"
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(239, 68, 68, 0.14), transparent 40%)`,
        }}
      />

      <Card className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#120708]/70 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-red-400/40 hover:shadow-red-500/10">
        <div className="flex-1">
          <div className="relative aspect-video overflow-hidden">
            {firstImage ? (
              <Image
                src={firstImage}
                width={800}
                height={450}
                alt={project.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-slate-900">
                <span className="text-slate-600">{project.name}</span>
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-[#120708] to-transparent opacity-85" />

            <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-[#120708]/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-red-200 backdrop-blur">
              {project.role}
            </div>

            {isNewProject(project.date) && (
              <div className="absolute right-4 top-4 z-10 flex items-center gap-1.5 rounded-full border border-white/10 bg-gradient-to-r from-red-500 to-rose-500 px-3 py-1 text-white shadow-lg">
                <Sparkles className="h-3 w-3 text-white" />
                <span className="text-[10px] font-bold tracking-wider text-white">
                  NEW
                </span>
              </div>
            )}
          </div>

          <CardHeader className="p-6 pb-2">
            <Link href={`/projects/${project.id}`} className="group/title inline-block">
              <CardTitle className="flex items-center gap-2 text-2xl font-bold tracking-tight text-white transition-colors group-hover/title:text-red-200">
                {project.name}
                <ExternalLink className="h-4 w-4 translate-x-1 -translate-y-1 opacity-0 text-red-300 transition-all group-hover/title:translate-x-0 group-hover/title:translate-y-0 group-hover/title:opacity-100" />
              </CardTitle>
            </Link>
          </CardHeader>

          <CardContent className="px-6">
            <p className="mb-6 text-sm font-medium italic leading-relaxed text-slate-400 line-clamp-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {visibleTools.map((tool, index) => (
                <span
                  key={index}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-bold text-slate-300 transition-all duration-300 hover:border-red-400/30 hover:bg-red-500/10 hover:text-red-100"
                >
                  {tool}
                </span>
              ))}
              {hasMoreTags && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowAllTags(!showAllTags);
                  }}
                  className="pl-1 text-[11px] font-black uppercase tracking-widest text-red-200 transition-colors hover:text-red-100"
                >
                  {showAllTags ? (
                    <span className="inline-flex items-center gap-1">
                      <ChevronUp className="h-3 w-3" />
                      less
                    </span>
                  ) : (
                    `+${project.tools.length - maxVisibleTags}`
                  )}
                </button>
              )}
            </div>
          </CardContent>
        </div>

        <CardFooter className="flex gap-4 p-6 pt-2">
          <Link href={`/projects/${project.id}`} className="flex-1">
            <Button className="flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:border-red-400/40 hover:bg-red-500/10">
              <FileSearch className="h-4 w-4" />
              Case Study
            </Button>
          </Link>
          {externalHref ? (
            <Link href={externalHref} target="_blank" className="flex-1">
              <Button className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-rose-500 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:brightness-105">
                <ArrowUpRight className="h-4 w-4" />
                External
              </Button>
            </Link>
          ) : (
            <div className="flex-1">
              <Button
                className="h-11 w-full cursor-default rounded-xl border-none bg-white/[0.04] text-xs font-bold uppercase tracking-widest text-slate-600"
                disabled
              >
                Portfolio Project
              </Button>
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
