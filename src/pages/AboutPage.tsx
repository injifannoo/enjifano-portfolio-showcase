
import { Navbar } from "@/components/navbar";
import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-16">
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
