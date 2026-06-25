import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  QrCode,
  Database,
  Shield,
  FileSpreadsheet,
  Users,
  ShieldAlert,
  Network,
  Bug,
  Globe,
  Activity,
  FileJson,
  Search,
  AlertTriangle,
  Github,
  ExternalLink,
} from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      icon: QrCode,
      year: 2025,
      title: "QR Code Based Attendance Management System",
      description:
        "Automate and digitize student attendance tracking using unique QR codes for each class/session.",
      features: [
        { icon: QrCode, text: "Dynamic QR code generation" },
        { icon: Users, text: "Real-time attendance recording" },
        { icon: Database, text: "Student database management" },
        { icon: FileSpreadsheet, text: "Export attendance records (CSV/Excel)" },
        { icon: Shield, text: "Basic security validation to prevent proxy attendance" },
      ],
      technologies: ["MySQL", "HTML", "Java"],
      githubLink: "https://github.com/chahar01/QR-Attendance-System",
    },
    {
      icon: ShieldAlert,
      year: 2026,
      title: "Cyber Shield X",
      description:
        "Modular cybersecurity dashboard for log analysis, network reconnaissance, packet inspection, and web threat intelligence through an interactive web interface.",
      features: [
        { icon: Search, text: "Automated log parsing for malicious patterns & brute-force attempts" },
        { icon: Network, text: "Port scanning and service detection" },
        { icon: Activity, text: "PCAP and live packet analysis using Scapy" },
        { icon: Bug, text: "Detect SQL Injection, XSS, and Command Injection" },
        { icon: Globe, text: "Web scraping for links, images, headings & forms" },
        { icon: AlertTriangle, text: "Identification of insecure (GET-based) forms" },
        { icon: Activity, text: "Centralized dashboard with real-time results" },
        { icon: FileJson, text: "Exportable reports in JSON format" },
      ],
      technologies: ["Python", "Flask", "Scapy", "Requests", "BeautifulSoup", "HTML", "CSS"],
      githubLink: "https://github.com/chahar01/Cyber-Shield-X",
    },
  ];

  return (
    <section id="projects-section" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hands-on projects showcasing practical skills
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {[...projects].sort((a, b) => b.year - a.year).map((project, idx) => (
            <Card
              key={idx}
              className="p-8 shadow-medium hover:shadow-accent transition-all duration-300 animate-slide-up overflow-hidden group relative"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-primary opacity-5 blur-3xl group-hover:opacity-10 transition-opacity" />
              <div className="relative">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-primary/10 rounded-xl border border-primary/20 shrink-0">
                    <project.icon className="w-10 h-10 text-primary" />
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-2 border-primary/30 text-primary">{project.year}</Badge>
                    <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 border border-border/50 hover:border-primary/30 transition-colors"
                    >
                      <feature.icon className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm text-foreground">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Technologies Used</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-primary/30 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {project.githubLink && (
                  <div className="mt-6">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="gap-2 border-primary/30 text-primary hover:bg-primary/10">
                        <Github className="w-4 h-4" />
                        View on GitHub
                        <ExternalLink className="w-3 h-3" />
                      </Button>
                    </a>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
