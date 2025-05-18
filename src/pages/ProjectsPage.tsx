
import { Navbar } from "@/components/navbar";
import { ProjectsSection } from "@/components/projects-section";
import { Footer } from "@/components/footer";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-16">
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
