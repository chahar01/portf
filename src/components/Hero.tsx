import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/Rahul.jpg";
const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="text-primary font-semibold text-lg">Hello, I'm</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Rahul Kumar
              <span className="block text-primary mt-2">Cyber Security Analyst</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Currently pursuing MCA (Hons) in Cyber Security at Lovely Professional University, Punjab. 
              Passionate about digital security and building a career in protecting the digital world.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" onClick={() => scrollToSection("contact")}>
                Contact Me <ArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://www.linkedin.com/in/rahul-kumar-90a696200" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2" /> LinkedIn
                </a>
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/chahar01" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="mailto:rahulsingh25chahar@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/rahul-kumar-90a696200" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="relative animate-slide-up">
            <div className="relative z-10">
              <div className="w-full max-w-md mx-auto aspect-square rounded-full overflow-hidden border-8 border-background shadow-medium bg-gradient-primary p-2 flex items-center justify-center">
  <img
    src={profileImage}
    alt="Rahul Kumar - Cyber Security Analyst"
    className="w-full h-full object-cover object-top rounded-full"
  />
</div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-2xl rotate-12 opacity-80 animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-full opacity-20 animate-float" style={{ animationDelay: "0.5s" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
