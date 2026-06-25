import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Target, Download, MapPin, Calendar, Award } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "MCA (Hons) in Cyber Security",
      institution: "Lovely Professional University",
      location: "Punjab, India",
      year: "Present",
      status: "current",
    },
    {
      degree: "Bachelor's Degree in Science",
      institution: "DBRAU",
      location: "Agra, India",
      year: "Completed",
      status: "completed",
    },
    {
      degree: "High School",
      institution: "Secondary Education",
      location: "Jaipur, India",
      year: "Completed",
      status: "completed",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            My journey in technology and cyber security
          </p>
          <Button 
            asChild 
            size="lg"
            className="shadow-lg hover:shadow-xl transition-shadow"
          >
            <a href="/Rahul_Resume.pdf" download="Rahul_Kumar_Resume.pdf">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </a>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="p-8 shadow-medium hover:shadow-accent transition-shadow duration-300 animate-slide-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Career Objective</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              As an aspiring Cyber Security Analyst, I am dedicated to building a strong foundation in digital security. 
              My goal is to leverage my academic knowledge and hands-on experience to contribute to protecting organizations 
              from cyber threats and ensuring the safety of digital assets in an increasingly connected world.
            </p>
          </Card>

          <Card className="p-8 shadow-medium hover:shadow-accent transition-all duration-300 animate-slide-up overflow-hidden group" style={{ animationDelay: "0.1s" }}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-5 blur-3xl group-hover:opacity-10 transition-opacity"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-primary rounded-lg shadow-soft">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">Education Journey</h3>
              </div>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div 
                    key={index} 
                    className="relative pl-8 group/item hover:translate-x-1 transition-transform duration-300"
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    {/* Timeline line */}
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 via-primary/20 to-transparent"></div>
                    
                    {/* Timeline dot */}
                    <div className={`absolute -left-[7px] top-2 w-4 h-4 rounded-full border-2 border-background z-10 transition-all duration-300 ${
                      edu.status === "current" 
                        ? "bg-primary shadow-glow animate-pulse" 
                        : "bg-accent/60 group-hover/item:bg-accent group-hover/item:shadow-soft"
                    }`}>
                      {edu.status === "current" && (
                        <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></div>
                      )}
                    </div>

                    {/* Content card */}
                    <div className="bg-secondary/30 rounded-lg p-4 border border-border/50 group-hover/item:border-primary/30 group-hover/item:bg-secondary/50 transition-all duration-300">
                      {edu.status === "current" && (
                        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 mb-2 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          <Award className="w-3 h-3" />
                          Currently Pursuing
                        </div>
                      )}
                      <h4 className="font-bold text-foreground mb-2 group-hover/item:text-primary transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-medium text-muted-foreground mb-2">
                        {edu.institution}
                      </p>
                      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {edu.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {edu.year}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
