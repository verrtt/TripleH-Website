import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Github, Twitter, Instagram } from 'lucide-react';
function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-secondary text-secondary-foreground border-t border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-xl">T³</span>
              </div>
              <span className="font-heading font-bold text-xl">TeensHackHouston</span>
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Code. Hack. Unite. Develop.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-secondary-foreground/80 hover:text-primary transition-colors duration-200">
                Home
              </Link>
              <Link to="/competitions" className="text-secondary-foreground/80 hover:text-primary transition-colors duration-200">
                Competitions
              </Link>
              <Link to="/about" className="text-secondary-foreground/80 hover:text-primary transition-colors duration-200">
                About
              </Link>
              <Link to="/register" className="text-secondary-foreground/80 hover:text-primary transition-colors duration-200">
                Register
              </Link>
              <Link to="/contact" className="text-secondary-foreground/80 hover:text-primary transition-colors duration-200">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-secondary-foreground/80">
                <Mail className="w-5 h-5 text-primary" />
                <span>TeensHackHouston@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-secondary-foreground/80">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Houston, Texas</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/80 hover:text-primary transition-colors duration-200">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/80 hover:text-primary transition-colors duration-200">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/80 hover:text-primary transition-colors duration-200">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-secondary-foreground/60 text-sm">
            © {currentYear} TeensHackHouston. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-secondary-foreground/60 hover:text-primary transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-secondary-foreground/60 hover:text-primary transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>;
}
export default Footer;
