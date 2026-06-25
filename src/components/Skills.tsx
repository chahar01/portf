import { Card } from "@/components/ui/card";
import { MessageSquare, TrendingUp, Coffee, FileCode, Database, Terminal, Monitor } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: MessageSquare,
      title: "Communication Skills",
      description: "Effective communication and collaboration in team environments",
      color: "primary",
    },
    {
      icon: TrendingUp,
      title: "Analytical Skills",
      description: "Strong analytical thinking and problem-solving capabilities",
      color: "accent",
    },
    {
      icon: Coffee,
      title: "Programming with Java",
      description: "Proficient in Java programming and object-oriented development",
      color: "primary",
    },
    {
      icon: FileCode,
      title: "Programming with Python",
      description: "Skilled in Python for scripting, automation, and security tools",
      color: "accent",
    },
    {
      icon: Database,
      title: "MySQL (Intermediate)",
      description: "Intermediate knowledge of MySQL database management and queries",
      color: "primary",
    },
    {
      icon: Terminal,
      title: "Linux & Burp Suite",
      description: "Hands-on experience with Linux systems and web security testing using Burp Suite",
      color: "accent",
    },
    {
      icon: Monitor,
      title: "Visual Studio & Android Studio",
      description: "Proficient with Visual Studio and Android Studio for app development",
      color: "primary",
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Core competencies and technical skills for cyber security and development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((skill, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-2 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-4 rounded-lg mb-4 ${skill.color === "primary" ? "bg-primary/10" : "bg-accent/10"} group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon className={`w-8 h-8 ${skill.color === "primary" ? "text-primary" : "text-accent"}`} />
              </div>
              <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
