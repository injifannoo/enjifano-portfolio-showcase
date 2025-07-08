
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
      title: "Pet Care App - Casablanca",
      description:
        "A mobile application from Casablanca, Morocco focused on pet care with enhanced UI, backend API integration, user authentication, and real-time notifications.",
      image: "/images/projects/kasbark.jpg",
      technologies: ["Flutter", "REST API", "Firebase", "Push Notifications"],
      githubUrl: "https://github.com/enjifano/petcare-app",
      liveUrl: "https://www.linkedin.com/company/kasbarks/about/",
    },
    {
      id: 2,
      title: "Raba Technologies Website",
      description:
        "Official website for Raba Technologies featuring modern design, responsive layout, and comprehensive company portfolio showcase.",
      image: "images/projects/raba.png",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/RabaTechnologies/RabaWebsite",
      liveUrl: "https://www.rabatechnologies.com",
    },
     {
      id: 3,
      title: "Health Care App",
      description:
        "A comprehensive healthcare platform with authentication, appointment booking, doctor profiles, content creation for patients and doctors, and real-time chat functionality.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f",
      technologies: ["Flutter", "Firebase", "BloC", "Socket.io"],
      githubUrl: "https://github.com/enjifano/healthcare-app",
      liveUrl: "https://healthcare-app-demo.netlify.app",
    },
    {
      id: 4,
      title: "Recipe System for Oromo Cultural Food",
      description:
        "A multilingual cultural recipe platform featuring zone-based food discovery, contributor system (text, audio, video), gamification, training request page, admin dashboard, secure user authentication and integrated chatbot for user support — designed to preserve and promote Oromo cuisine.",
      image: "/images/projects/food.png",
      technologies: ["React/Next.js", "Node.js", "MongoDB", "Express.js"],
      githubUrl: "https://github.com/injifannoo/oromo-cultural-food",
      liveUrl: "https://ecommerce-app-demo.oromoFood.app",
    },
    
    {
      id: 5,
      title: "E-Commerce Mobile App",
      description:
        "A full-featured e-commerce mobile application with product catalog, shopping cart, payment integration, and order tracking.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      technologies: ["Flutter", "Firebase", "Stripe API"],
      githubUrl: "https://github.com/enjifano/ecommerce-app",
      liveUrl: "https://ecommerce-app-demo.netlify.app",
    },
     {
    id: 6,
      title: "Voice Assistant App",
      description: "The Voice Assistant App is a Flutter-based application that integrates the capabilities of ChatGPT for natural language understanding and DALL-E for image generation. This app allows users to interact with a voice assistant, ask questions, and receive both text and image responses. With Features: Voice Interaction, Natural Language Processing, Image Generation, User-Friendly Interface.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      technologies: ["Flutter", "ChatGPT", "Dall-E", "Firebase"],
      githubUrl: "https://github.com/injifannoo/voice_assistant_app",
      liveUrl: "https://restaurant-booking-demo.netlify.app",
    },
     {
      id: 7,
      title: "Ethiopian Exit Exam Preparation Platform",
      description:
        "The Exit Exam Platform is designed to help students prepare effectively for national exit exams. It provides easy access to past exam questions prepared by the Ministry of Education, as well as model exams developed by First Generation Universities. The platform organizes previous years’ questions and answers in a user-friendly format, allowing students to study more efficiently. System administrators manage and upload well-structured question sets and solutions, ensuring that users have reliable resources at their fingertips. This tool is especially valuable for final-year students aiming to perform well in their exit assessments.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      githubUrl: "https://github.com/injifannoo/ETHIOPIAN-EXIT-EXAM-",
    },
    {
      id: 8,
      title: "Portfolio Website",
      description:
        "A modern and responsive portfolio website built with React and Tailwind CSS, featuring animations and dark mode.",
      image: "https://images.unsplash.com/photo-1481887328591-3e277530862e",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/enjifano/portfolio",
      liveUrl: "https://enjifano.netlify.app",
    },
    {
      id: 9,
      title: "Task Management Dashboard",
      description:
        " A simple Task Management mobile application built with Flutter, implementing CRUD (Create, Read, Update, Delete) functionalities using the BLoC pattern and following Clean Architecture principles.",      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      technologies: ["Flutter", "Node.js", "BloC", "MongoDB", "Express.js"],
      githubUrl: "https://github.com/injifannoo/flutter_task_management_crud_app",
      liveUrl: "https://task-manager-demo.netlify.app",
    },
    {
      id: 10,
      title: "Social Media App",
      description:
        "A social media platform with user profiles, posts, comments, and real-time chat functionality.",
      image: "https://images.unsplash.com/photo-1493119508027-2b584f234d6c",
      technologies: ["Flutter", "Node.js", "MongoDB", "Socket.io"],
      githubUrl: "https://github.com/enjifano/social-app",
      liveUrl: "https://social-app-demo.netlify.app",
    },
    {
      id: 11,
      title: "Habit Track App",
      description:
        "A simple Habit Tracker app built using Flutter and Riverpod with Clean Architecture.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      technologies: ["Flutter", "Firebase", "Riverpod", "Clean Architecture"],
      githubUrl: "https://github.com/injifannoo/Habit_Track_App",
      liveUrl: "https://fitness-tracker-demo.netlify.app",
    },
    {
      id: 12,
      title: "Role-Based Ticketing System",
      description:
        "An online reservation system for restaurants with table management, customer profiles, and email notifications.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      technologies: ["Tailwind", "HTML", "MySQL", "JavaScript"],
      githubUrl: "https://github.com/injifannoo/Role-Based-Ticketing-System",
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
