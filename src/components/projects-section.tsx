import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured);
  return (
    <section
      id="projects"
      className="section-padding bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Selected projects demonstrating my experience building web
            applications, mobile platforms, backend systems, and AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/allprojects">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
