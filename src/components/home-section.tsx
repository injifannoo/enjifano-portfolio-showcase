
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";

export function HomeSection() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    
    // Only handle scroll behavior on the home page
    if (location.pathname === '/') {
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Adjust for header height
          behavior: "smooth",
        });
      }
    } else {
      // If we're on another page, navigate to home page first, then scroll
      navigate('/');
      // Use setTimeout to ensure the navigation completes before scrolling
      setTimeout(() => {
        const targetElement = document.getElementById(sectionId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
      style={{
        background: "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent dark:from-blue-900/20" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Enjifano Tamiru</span>
          </h1>
          
          <div className="mb-8 text-lg md:text-xl text-gray-700 dark:text-gray-300">
            <p className="mb-4">I transform ideas into exceptional software solutions with 3+ years of experience.</p>
            <p>Software Engineer / Flutter Developer / Full Stack Web Developer / Content Creator</p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" onClick={(e) => handleScrollToSection(e, "projects")}>
              <Button className="btn-shine" size="lg">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            
            <a href="#contact" onClick={(e) => handleScrollToSection(e, "contact")}>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Contact Me
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white"
          onClick={(e) => handleScrollToSection(e, "about")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
