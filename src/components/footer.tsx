
import { Link } from "react-router-dom";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold text-primary">
              Enjifano
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              Software Engineer & Flutter Developer creating impactful digital solutions.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://github.com/injifannoo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="Github"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/injifanotamiru"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-400">
                Email: injifanotu@gmail.com
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                Phone: +251962408198
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                Location: Addis Ababa, Ethiopia
              </li>
            </ul>
            <div className="mt-4 flex items-center space-x-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">Theme:</span>
              <ThemeToggle />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {year} Enjifano Tamiru. All rights reserved.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
            Developed with Enjifano Tamiru
          </p>
        </div>
      </div>
    </footer>
  );
}
