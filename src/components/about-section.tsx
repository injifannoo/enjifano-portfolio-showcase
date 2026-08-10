import { Download, CheckCircle, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  const skills = [
    {
      name: "Frontend Development",
      technologies: "React.js, Next.js, TypeScript, Tailwind CSS",
      level: 90,
    },
    {
      name: "Backend Development",
      technologies:
        "Python, Django REST Framework, Node.js, Express.js, REST APIs",
      level: 85,
    },
    {
      name: "Mobile Development",
      technologies: "Flutter, Dart, Firebase",
      level: 85,
    },
    {
      name: "Database & Data Management",
      technologies: "PostgreSQL, MySQL, MongoDB, Database Design",
      level: 85,
    },
    {
      name: "Cloud & DevOps",
      technologies: "Docker, CI/CD, AWS, Server Deployment",
      level: 75,
    },
    {
      name: "Programming Languages",
      technologies: "Python, JavaScript, TypeScript, Dart, Java",
      level: 85,
    },
    {
      name: "AI Engineering",
      technologies: "LLM APIs, Generative AI, AI Agents, Prompt Engineering",
      level: 75,
    },
  ];

  const handleDownloadCV = () => {
    // In a real scenario, this would point to an actual PDF file
    window.open(
      "https://drive.google.com/file/d/1-wF1U2G0Q1RlAu25_qKsYJh9OUsCeXas/view?usp=sharing",
      "_blank",
    );
  };

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-950">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Column - Photo */}
          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute w-full h-full bg-primary rounded-2xl rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                alt="Enjifano Tamiru"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl -rotate-3 shadow-xl transition-all duration-300 hover:rotate-0"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-2">About Me</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>

            <p className="text-gray-700 dark:text-gray-300 text-italic mb-6">
              I’m a Full-Stack Software Engineer with
              <span className="font-semibold text-foreground">
                {" "}
                3+ years of experience{" "}
              </span>
              building web applications, mobile apps, REST APIs, and backend
              systems.
              <br />
              <br />I specialize in
              <span className="font-semibold text-primary">
                {" "}
                React, Next.js, TypeScript, Python, Django, Node.js, and
                Flutter,{" "}
              </span>
              with experience in database design, API development, and deploying
              scalable software solutions.
              <br />
              <br />I hold a BSc in Computer Science from Addis Ababa University
              and have worked on projects across web development, mobile
              applications, and digital platforms. I enjoy solving complex
              problems, learning emerging technologies, and building reliable
              software that creates real-world impact.
              <br />
              <br />I also help others learn about
              technology,entrepreneurship,education, and business.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Card>
                <CardContent className="p-4 flex items-center">
                  <CheckCircle className="text-primary mr-2" size={20} />
                  <span>3+ years of experience</span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-center">
                  <CheckCircle className="text-primary mr-2" size={20} />
                  <span>30+ completed projects</span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-center">
                  <Code className="text-primary mr-2" size={20} />
                  <span>100+ GitHub contributions</span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-center">
                  <CheckCircle className="text-primary mr-2" size={20} />
                  <span>Active content creator</span>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-xl font-semibold mb-4">My Skills</h3>
            <div className="space-y-4 mb-8">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-500">
                    {skill.technologies}
                  </div>
                </div>
              ))}
            </div>

            <Button className="btn-shine" onClick={handleDownloadCV}>
              <Download className="mr-2 h-4 w-4" /> View my Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
