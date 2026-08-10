import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectCaseStudy() {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div className="container mx-auto py-20">Project not found</div>;
  }

  return (
    <div className="container mx-auto py-24 max-w-4xl">
      <img
        src={project.image}
        alt={project.title}
        className="rounded-xl mb-8"
      />

      <h1 className="text-5xl font-bold mb-3">{project.title}</h1>

      <p className="text-primary font-medium mb-6">{project.role}</p>

      <p className="text-lg mb-10">{project.description}</p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-2">Impact</h2>

          <p>{project.impact}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Problem</h2>

          <p>{project.caseStudy.problem}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Solution</h2>

          <p>{project.caseStudy.solution}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Architecture</h2>

          <p>{project.caseStudy.architecture}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Challenges</h2>

          <p>{project.caseStudy.challenges}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Results</h2>

          <p>{project.caseStudy.results}</p>
        </section>
      </div>
    </div>
  );
}
