import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex gap-6">
            <a
              href="https://github.com/chahar01"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-background rounded-lg hover:bg-primary/10 transition-colors group"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/rahul-kumar-90a696200"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-background rounded-lg hover:bg-primary/10 transition-colors group"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:rahulsingh25chahar@gmail.com"
              className="p-3 bg-background rounded-lg hover:bg-primary/10 transition-colors group"
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5 group-hover:text-primary transition-colors" />
            </a>
          </div>

          <div className="text-center space-y-2">
            <p className="text-muted-foreground flex items-center gap-2 justify-center">
              Made with <Heart className="w-4 h-4 text-accent fill-accent" /> by Rahul Kumar
            </p>
            <p className="text-sm text-muted-foreground">
              © {currentYear} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
