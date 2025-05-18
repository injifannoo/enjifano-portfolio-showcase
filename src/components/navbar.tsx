
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
    // Only handle scroll behavior on the home page
    if (location.pathname === '/') {
      e.preventDefault();
      
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Adjust for header height
          behavior: "smooth",
        });
        setIsMenuOpen(false);
      }
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
        <Link to="/" className="text-2xl font-bold text-primary">
          Enjifano
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="nav-link text-sm font-medium"
              onClick={(e) => handleNavClick(e, item.section)}
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
          <Link to="/contact">
            <Button className="btn-shine" size="sm">
              Hire Me
            </Button>
          </Link>
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
              <Link
                key={item.name}
                to={item.path}
                className="nav-link text-base font-medium py-2"
                onClick={(e) => {
                  handleNavClick(e, item.section);
                  setIsMenuOpen(false);
                }}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full btn-shine" size="sm">
                Hire Me
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
