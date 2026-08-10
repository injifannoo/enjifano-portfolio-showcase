import {
  Code,
  FileCheck,
  Smartphone,
  Database,
  Monitor,
  Brain,
  Network,
  Cloud,
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      title: "Frontend Development",
      description:
        "Building modern, responsive, and high-performance user interfaces using React, Next.js, TypeScript, Tailwind CSS, and modern frontend architecture.",
      icon: Monitor,
      stack: "React • Next.js • TypeScript • Tailwind CSS",
    },

    {
      title: "Backend & API Development",
      description:
        "Designing scalable backend systems, REST APIs, authentication workflows, database architecture, and server-side applications using Django, Node.js, and PostgreSQL.",
      icon: Database,
      stack: "Django • Node.js • PostgreSQL, REST APIs",
    },

    {
      title: "Mobile App Development",
      description:
        "Developing cross-platform mobile applications with Flutter, Firebase, and modern mobile architecture for Android and iOS.",
      icon: Smartphone,
      stack: "Flutter • Firebase • Android • iOS",
    },

    {
      title: "AI-Powered Applications",
      description:
        "Building intelligent applications using AI models, LLM integrations, automation workflows, recommendation systems, and data-driven solutions.",
      icon: Brain,
      stack: "LLMs • AI Integrations • Automation • AI Training •ML Models",
    },

    {
      title: "Software Architecture & System Design",
      description:
        "Designing maintainable and scalable software systems, database structures, application workflows, and technical architectures.",
      icon: Network,
      stack: "Scalable Systems •  Database Structures • API Design",
    },

    {
      title: "Cloud & Deployment",
      description:
        "Deploying and managing applications using Docker, cloud platforms, CI/CD pipelines, databases, and modern DevOps practices.",
      icon: Cloud,
      stack: "Docker • Cloud Platforms • CI/CD • DevOps",
    },
    {
      title: "Software Testing",
      description:
        "Comprehensive testing services to ensure your software is reliable, secure, and performs optimally.",
      icon: FileCheck,
      stack:
        "Unit Testing • Integration Testing • End-to-End Testing • Test Automation",
    },
    {
      title: "Teaching & Mentorship",
      description:
        "Sharing knowledge and guiding aspiring developers in their journey to become proficient software engineers.",
      icon: Code,
      stack: "Mentorship • Teaching • Software Engineering • Programming • AI",
    },
  ];

  return (
    <section
      id="services"
      className="section-padding bg-white dark:bg-gray-950"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Areas of Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            I design and build scalable web applications, mobile apps, backend
            systems, and AI-powered solutions using modern technologies and
            engineering best practices.{" "}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group hover:border-primary hover:-translate-y-2 transition-all duration-300"
            >
              <service.icon className="service-icon h-10 w-10 group-hover:text-primary transition-colors" />
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-primary font-medium mt-3 bg-gray-100 dark:bg-gray-800 p-2 rounded">
                {service.stack}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
