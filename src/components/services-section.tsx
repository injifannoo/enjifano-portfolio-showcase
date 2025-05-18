
import { Code, Smartphone, Globe, Database, Video, FileCheck } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      title: "Mobile App Development",
      description: "Building cross-platform mobile applications with Flutter that provide native-like performance and beautiful UI.",
      icon: Smartphone,
    },
    {
      title: "Web Development",
      description: "Creating responsive, user-friendly websites and web applications using modern frameworks and best practices.",
      icon: Globe,
    },
    {
      title: "Backend Development",
      description: "Designing and implementing robust backend services, APIs, and database solutions for your applications.",
      icon: Database,
    },
    {
      title: "Software Testing",
      description: "Comprehensive testing services to ensure your software is reliable, secure, and performs optimally.",
      icon: FileCheck,
    },
    {
      title: "Digital Content Creation",
      description: "Producing educational tech content for your audience, including tutorials, reviews, and technical demonstrations.",
      icon: Video,
    },
    {
      title: "Custom Software Solutions",
      description: "Developing tailor-made software solutions to address specific business needs and challenges.",
      icon: Code,
    },
  ];

  return (
    <section id="services" className="section-padding bg-white dark:bg-gray-950">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">My Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            I provide a range of services to help businesses and individuals bring their digital ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group hover:border-primary"
            >
              <service.icon className="service-icon h-10 w-10 group-hover:text-primary transition-colors" />
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
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
