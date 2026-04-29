import { projectsData } from "@/../utils/Data/projects-data";
import ProjectCard from "@/app/components/projects/project-card";

const ProjectsPage = () => {
  return (
    <section id="projects" className="relative min-h-screen overflow-hidden">
      <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-red-400/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-red-700/10 blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto flex flex-col items-center gap-16 px-4 py-24 sm:px-8">
        <div className="flex max-w-4xl flex-col gap-6 text-center">
          <h1 className="text-5xl font-black tracking-tighter text-white md:text-6xl lg:text-7xl">
            Portfolio of
            <span className="block bg-gradient-to-r from-red-200 to-red-500 bg-clip-text text-transparent">
              analytical case studies
            </span>
          </h1>
          <p className="text-lg font-medium italic leading-relaxed text-slate-400 md:text-xl">
            Projects across air quality, climate analysis, geospatial systems,
            planning workflows, and location-aware data interpretation.
          </p>
        </div>

        <div className="grid w-full gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <div key={project.id} className="h-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
