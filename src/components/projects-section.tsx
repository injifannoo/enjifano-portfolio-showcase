
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

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Health Care App",
      description:
        "A comprehensive healthcare platform with authentication, appointment booking, doctor profiles, content creation for patients and doctors, and real-time chat functionality.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f",
      technologies: ["Flutter", "Firebase", "Node.js", "Socket.io"],
      githubUrl: "https://github.com/enjifano/healthcare-app",
      liveUrl: "https://healthcare-app-demo.netlify.app",
    },
    {
      id: 2,
      title: "Pet Care App - Casablanca",
      description:
        "A mobile application from Casablanca, Morocco focused on pet care with enhanced UI, backend API integration, user authentication, and real-time notifications.",
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1",
      technologies: ["Flutter", "REST API", "Firebase", "Push Notifications"],
      githubUrl: "https://github.com/enjifano/petcare-app",
      liveUrl: "https://petcare-casablanca-demo.netlify.app",
    },
    {
      id: 3,
      title: "Raba Technologies Website",
      description:
        "Official website for Raba Technologies featuring modern design, responsive layout, and comprehensive company portfolio showcase.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/enjifano/raba-technologies",
      liveUrl: "https://www.rabatechnologies.com",
    },
    {
      id: 4,
      title: "E-Commerce Mobile App",
      description:
        "A full-featured e-commerce mobile application with product catalog, shopping cart, payment integration, and order tracking.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      technologies: ["Flutter", "Firebase", "Stripe API"],
      githubUrl: "https://github.com/enjifano/ecommerce-app",
      liveUrl: "https://ecommerce-app-demo.netlify.app",
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "A modern and responsive portfolio website built with React and Tailwind CSS, featuring animations and dark mode.",
      image: "https://images.unsplash.com/photo-1481887328591-3e277530862e",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/enjifano/portfolio",
      liveUrl: "https://enjifano.netlify.app",
    },
    {
      id: 6,
      title: "Task Management Dashboard",
      description:
        "A comprehensive task management web application with task assignment, progress tracking, and reporting features.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      technologies: ["React", "Node.js", "MySQL", "Chart.js"],
      githubUrl: "https://github.com/enjifano/task-manager",
      liveUrl: "https://task-manager-demo.netlify.app",
    },
    {
      id: 7,
      title: "Social Media App",
      description:
        "A social media platform with user profiles, posts, comments, and real-time chat functionality.",
      image: "https://images.unsplash.com/photo-1493119508027-2b584f234d6c",
      technologies: ["Flutter", "Node.js", "MongoDB", "Socket.io"],
      githubUrl: "https://github.com/enjifano/social-app",
      liveUrl: "https://social-app-demo.netlify.app",
    },
    {
      id: 8,
      title: "Health and Fitness Tracker",
      description:
        "A mobile application for tracking health metrics, workout routines, and nutrition with data visualization.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      technologies: ["Flutter", "Firebase", "HealthKit API"],
      githubUrl: "https://github.com/enjifano/fitness-tracker",
      liveUrl: "https://fitness-tracker-demo.netlify.app",
    },
    {
      id: 9,
      title: "Restaurant Booking System",
      description:
        "An online reservation system for restaurants with table management, customer profiles, and email notifications.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      technologies: ["React", "Express.js", "MySQL", "Twilio API"],
      githubUrl: "https://github.com/enjifano/restaurant-booking",
      liveUrl: "https://restaurant-booking-demo.netlify.app",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the 10+ projects I've worked on. Each project was a unique challenge that helped me grow as a developer.
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
          <Link to="/projects">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
