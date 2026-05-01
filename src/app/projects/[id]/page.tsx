import { projectsData } from "@/../utils/Data/projects-data";
import FeaturedProjects from "@/app/components/projects/_components/FeaturedProjects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Cpu,
  Globe,
  GraduationCap,
  HeartPulse,
  Lightbulb,
  ListChecks,
  Radar,
  ShieldCheck,
  Target,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

const ProjectDetails = async ({ params }: Props) => {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen px-4 py-12 text-white lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <Link
          href="/#projects"
          className="group mb-8 inline-flex items-center gap-2 font-medium text-slate-300 transition-colors hover:text-red-200"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Projects</span>
        </Link>

        <div className="relative mb-12 overflow-hidden rounded-3xl border border-white/10 bg-[#120708] shadow-2xl">
          <div className="absolute inset-0 z-0">
            <Image
              src={project.images?.[0] || "/og-atlas.svg"}
              alt={project.name}
              fill
              className="scale-110 object-cover opacity-20 blur-sm"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#120708] via-transparent to-transparent" />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-12 p-8 lg:flex-row lg:p-16">
            <div className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl lg:w-1/2">
              <Image
                src={project.images?.[0] || "/og-atlas.svg"}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>

            <div className="flex w-full flex-col gap-6 lg:w-1/2">
              <div className="flex flex-wrap gap-3">
                <Badge className="border-red-400/20 bg-red-500/10 px-3 py-1 font-bold tracking-wider text-red-200 hover:bg-red-500/15">
                  {project.date || "Recent Work"}
                </Badge>
                <Badge className="border-rose-400/20 bg-rose-500/10 px-3 py-1 font-bold tracking-wider text-rose-100 hover:bg-rose-500/15">
                  {project.role}
                </Badge>
              </div>

              <h1 className="bg-gradient-to-r from-white via-red-100 to-rose-300 bg-clip-text text-4xl font-black text-transparent md:text-5xl lg:text-6xl">
                {project.name}
              </h1>

              <p className="max-w-2xl text-lg font-medium italic leading-relaxed text-slate-400">
                {project.shortSummary || project.description}
              </p>

              <div className="flex flex-wrap gap-4 mt-2">
                {project.demo && (
                  <Link href={project.demo} target="_blank">
                    <Button className="flex gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-6 text-lg font-bold uppercase tracking-widest text-white transition-all hover:scale-105 hover:border-red-400/30 hover:bg-red-500/10 active:scale-95">
                      <Globe className="h-5 w-5" />
                      Live Preview
                    </Button>
                  </Link>
                )}
                {project.code && (
                  <Link href={project.code} target="_blank">
                    <Button
                      variant="outline"
                      className="flex gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-6 text-lg font-bold uppercase tracking-widest text-white transition-all hover:scale-105 hover:border-rose-400/30 hover:bg-rose-500/10 hover:text-rose-100 active:scale-95"
                    >
                      <ArrowUpRight className="h-5 w-5" />
                      View Source
                    </Button>
                  </Link>
                )}
                {!project.demo && !project.code && (
                  <Link href="/#contact">
                    <Button className="flex gap-2 rounded-xl bg-gradient-to-r from-red-500 to-rose-500 px-8 py-6 text-lg font-bold uppercase tracking-widest text-white shadow-lg transition-all hover:scale-105 active:scale-95">
                      Discuss Project
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="flex flex-col gap-16 lg:col-span-2">
            <section className="flex flex-col gap-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-400/20 bg-red-500/10">
                  <ShieldCheck className="h-6 w-6 text-red-200 shadow-[0_0_15px_rgba(239,68,68,0.35)]" />
                </div>
                <h2 className="text-3xl font-black text-white">Key Outcomes</h2>
              </div>
              <ul className="grid grid-cols-1 gap-4">
                {project.highlights?.map((highlight, index) => (
                  <li
                    key={index}
                    className="group flex gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-6 transition-all duration-300 hover:border-red-400/20 hover:bg-red-500/[0.04]"
                  >
                    <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-400 shadow-[0_0_10px_rgba(239,68,68,0.8)] transition-transform group-hover:scale-125" />
                    <p className="text-lg font-medium leading-relaxed text-slate-300">
                      {highlight}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            {project.overview && (
              <section className="flex flex-col gap-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-rose-400/20 bg-rose-500/10">
                    <HeartPulse className="h-6 w-6 text-rose-100" />
                  </div>
                  <h2 className="text-3xl font-black text-white">Project Overview</h2>
                </div>
                <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-8">
                  <p className="text-lg leading-relaxed text-slate-300">{project.overview}</p>
                </div>
              </section>
            )}

            <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              {project.problemStatement && (
                <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <Target className="h-5 w-5 text-red-200" />
                    <h3 className="text-xl font-bold text-white">Problem Statement</h3>
                  </div>
                  <p className="leading-relaxed text-slate-300">{project.problemStatement}</p>
                </div>
              )}

              {project.solutionApproach && (
                <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <Lightbulb className="h-5 w-5 text-red-200" />
                    <h3 className="text-xl font-bold text-white">Solution Approach</h3>
                  </div>
                  <p className="leading-relaxed text-slate-300">{project.solutionApproach}</p>
                </div>
              )}

              {project.outcomeImpact && (
                <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <Radar className="h-5 w-5 text-red-200" />
                    <h3 className="text-xl font-bold text-white">Outcome and Impact</h3>
                  </div>
                  <p className="leading-relaxed text-slate-300">{project.outcomeImpact}</p>
                </div>
              )}

              {project.academicRelevance && (
                <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <GraduationCap className="h-5 w-5 text-red-200" />
                    <h3 className="text-xl font-bold text-white">Academic Relevance</h3>
                  </div>
                  <p className="leading-relaxed text-slate-300">{project.academicRelevance}</p>
                </div>
              )}
            </section>

            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <section className="flex flex-col gap-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-400/20 bg-red-500/10">
                    <ListChecks className="h-6 w-6 text-red-200" />
                  </div>
                  <h2 className="text-3xl font-black text-white">Key Features</h2>
                </div>
                <ul className="grid gap-4">
                  {project.keyFeatures.map((feature, index) => (
                    <li
                      key={index}
                      className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 text-slate-300"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {project.resumeBullets && project.resumeBullets.length > 0 && (
              <section className="flex flex-col gap-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-rose-400/20 bg-rose-500/10">
                    <ShieldCheck className="h-6 w-6 text-rose-100" />
                  </div>
                  <h2 className="text-3xl font-black text-white">Resume-Ready Bullets</h2>
                </div>
                <ul className="grid gap-4">
                  {project.resumeBullets.map((bullet, index) => (
                    <li
                      key={index}
                      className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 text-slate-300"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {project.images && project.images.length > 1 && (
              <section className="flex flex-col gap-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-rose-400/20 bg-rose-500/10">
                    <Calendar className="h-6 w-6 text-rose-100" />
                  </div>
                  <h2 className="text-3xl font-black text-white">Visual Showcase</h2>
                </div>
                <Carousel className="w-full">
                  <CarouselContent>
                    {project.images.slice(1).map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="group relative aspect-video overflow-hidden rounded-3xl border border-white/10 bg-[#120708]">
                          <Image
                            src={image}
                            alt={`${project.name} screenshot ${index + 1}`}
                            fill
                            className="object-cover opacity-85 shadow-2xl transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#120708] via-transparent to-transparent opacity-60" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4 border-red-400/30 bg-red-500/20 text-white backdrop-blur-md transition-all hover:bg-red-500 hover:text-white" />
                  <CarouselNext className="right-4 border-red-400/30 bg-red-500/20 text-white backdrop-blur-md transition-all hover:bg-red-500 hover:text-white" />
                </Carousel>
              </section>
            )}
          </div>

          <aside className="flex flex-col gap-8">
            <Card className="sticky top-24 overflow-hidden rounded-3xl border-white/10 bg-[#120708]/80 shadow-2xl">
              <CardContent className="flex flex-col gap-8 p-8">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/10">
                      <Cpu className="h-4 w-4 text-red-200" />
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-white">
                      Technologies
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="cursor-default rounded-full border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-300 transition-all hover:border-red-400/40 hover:bg-red-500/10 hover:text-white"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-red-400/20 to-transparent" />

                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-500/10">
                      <User className="h-4 w-4 text-rose-100" />
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-white">
                      Project Details
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-slate-500">Role</span>
                      <span className="rounded-md bg-white/5 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-300">
                        {project.role}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-slate-500">Completed</span>
                      <span className="font-bold text-slate-300">
                        {project.date || "Recent"}
                      </span>
                    </div>
                  </div>
                </div>

                <Link href="/#contact" className="w-full">
                  <Button className="group relative flex w-full gap-2 overflow-hidden rounded-xl border border-red-400/20 bg-red-500/10 py-6 text-xs font-bold uppercase tracking-widest text-red-200 transition-all duration-300 hover:bg-gradient-to-r hover:from-red-500 hover:to-rose-500 hover:text-white">
                    Discuss This Work
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </aside>
        </div>

        <div className="mt-32 border-t border-white/5 pt-20">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl font-black tracking-tighter text-white lg:text-5xl">
                Explore More Work
              </h2>
              <p className="text-lg font-medium text-slate-400">
                More projects across geospatial systems and applied analytics.
              </p>
            </div>
            <Link
              href="/#projects"
              className="group flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-red-200 transition-colors hover:text-red-100"
            >
              View Full Archive
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
          <FeaturedProjects />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
