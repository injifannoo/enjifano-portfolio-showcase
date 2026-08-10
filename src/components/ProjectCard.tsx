import { Github, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
export default function ProjectCard({ project, compact = false }) {
  return (
    <Card
      key={project.id}
      className="project-card overflow-hidden flex flex-col h-full"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>

        {project.status && <Badge variant="secondary">{project.status}</Badge>}

        {project.role && (
          <p className="text-sm font-medium text-primary mt-2">
            {project.role}
          </p>
        )}
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        {project.impact && !compact && (
          <div className="mb-4 p-3 rounded-lg bg-primary/5 border border-primary/10">
            <h4 className="text-sm font-semibold mb-1">Impact</h4>

            <p className="text-sm text-muted-foreground">{project.impact}</p>
          </div>
        )}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between gap-2">
        <Button variant="outline" size="sm" asChild>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" /> Github
          </a>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <Link to={`/projects/${project.slug}`}>Case Study</Link>
        </Button>

        {project.liveUrl && (
          <Button size="sm" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
