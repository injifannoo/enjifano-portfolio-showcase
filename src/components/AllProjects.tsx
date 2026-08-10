import { projects } from "../data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function AllProjects() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-10">All Projects</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} compact />
          ))}
        </div>
      </div>
    </section>
  );
}
