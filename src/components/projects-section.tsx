
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

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Mobile App",
      description:
        "A full-featured e-commerce mobile application with product catalog, shopping cart, payment integration, and order tracking.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      technologies: ["Flutter", "Firebase", "Stripe API"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "A modern and responsive portfolio website built with React and Tailwind CSS, featuring animations and dark mode.",
      image: "https://images.unsplash.com/photo-1481887328591-3e277530862e",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 3,
      title: "Task Management Dashboard",
      description:
        "A comprehensive task management web application with task assignment, progress tracking, and reporting features.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      technologies: ["React", "Node.js", "MySQL", "Chart.js"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 4,
      title: "Social Media App",
      description:
        "A social media platform with user profiles, posts, comments, and real-time chat functionality.",
      image: "https://images.unsplash.com/photo-1493119508027-2b584f234d6c",
      technologies: ["Flutter", "Node.js", "MongoDB", "Socket.io"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 5,
      title: "Health & Fitness Tracker",
      description:
        "A mobile application for tracking health metrics, workout routines, and nutrition with data visualization.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      technologies: ["Flutter", "Firebase", "HealthKit API"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 6,
      title: "Restaurant Booking System",
      description:
        "An online reservation system for restaurants with table management, customer profiles, and email notifications.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      technologies: ["React", "Express.js", "MySQL", "Twilio API"],
      githubUrl: "#",
      liveUrl: "#",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project was a unique challenge that helped me grow as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="project-card overflow-hidden flex flex-col h-full">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
