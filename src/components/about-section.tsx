
import { Download, CheckCircle, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  const skills = [
    { name: "Flutter Development", level: 95 },
    { name: "React.js", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "UI/UX Design", level: 80 },
    { name: "Database Management", level: 85 },
    { name: "DevOps", level: 75 },
  ];

  const handleDownloadCV = () => {
    // In a real scenario, this would point to an actual PDF file
    alert("CV download functionality would be implemented here with an actual PDF file");
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

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm Enjifano Tamiru, a passionate software engineer and full stack developer with expertise in Flutter mobile development. 
              With several years of experience, I've worked on a diverse range of projects from mobile applications to complex web platforms.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              My journey in tech started with a deep curiosity about how digital products are built. This curiosity evolved into a career where 
              I now create intuitive, efficient solutions that solve real-world problems. As a content creator on 5GO YouTube, I share my knowledge 
              and help others learn about software development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Card>
                <CardContent className="p-4 flex items-center">
                  <CheckCircle className="text-primary mr-2" size={20} />
                  <span>4+ years of experience</span>
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
                    <span className="text-sm font-medium">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <Button className="btn-shine" onClick={handleDownloadCV}>
              <Download className="mr-2 h-4 w-4" /> Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
