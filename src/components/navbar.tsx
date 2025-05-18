
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    
    // If we're already on the home page, just scroll to the section
    if (location.pathname === '/') {
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: "smooth",
        });
        setIsMenuOpen(false);
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
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { name: "Home", path: "/", section: "home" },
    { name: "About", path: "/about", section: "about" },
    { name: "Projects", path: "/projects", section: "projects" },
    { name: "Services", path: "/services", section: "services" },
    { name: "Testimonials", path: "/testimonials", section: "testimonials" },
    { name: "Blog", path: "/blog", section: "blog" },
    { name: "Contact", path: "/contact", section: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        <a 
          href="/"
          onClick={(e) => handleNavClick(e, "home")} 
          className="text-2xl font-bold text-primary"
        >
          Enjifano
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.section}`}
              className="nav-link text-sm font-medium"
              onClick={(e) => handleNavClick(e, item.section)}
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
          >
            <Button className="btn-shine" size="sm">
              Hire Me
            </Button>
          </a>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="text-foreground"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-x-0 top-[57px] bg-white dark:bg-gray-900 shadow-lg transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "transform translate-y-0" : "transform -translate-y-full"
        } md:hidden`}
      >
        <div className="container mx-auto py-4 px-6">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.section}`}
                className="nav-link text-base font-medium py-2"
                onClick={(e) => {
                  handleNavClick(e, item.section);
                  setIsMenuOpen(false);
                }}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={(e) => {
                handleNavClick(e, "contact");
                setIsMenuOpen(false);
              }}
            >
              <Button className="w-full btn-shine" size="sm">
                Hire Me
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
