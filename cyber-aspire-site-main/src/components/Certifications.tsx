import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";
import certificateImage from "@/assets/tech-blitz-certificate.jpg";

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Certificates</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional certificates and achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="p-8 shadow-medium hover:shadow-accent transition-all duration-300 animate-slide-up">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold">JNCIA-Cloud</h3>
                  <Badge className="bg-accent/20 text-accent">In Progress</Badge>
                </div>
                <h4 className="text-lg font-semibold text-accent mb-2">Cloud, Associate</h4>
                <p className="text-muted-foreground mb-4">
                  Currently pursuing the Juniper Networks Certified Associate Cloud certification, building
                  foundational knowledge of cloud networking concepts and Juniper cloud solutions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Cloud Networking</Badge>
                  <Badge variant="outline">Juniper</Badge>
                  <Badge variant="outline">Associate Level</Badge>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 shadow-medium hover:shadow-accent transition-all duration-300 animate-slide-up">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold">JNCIA-Junos</h3>
                  <Badge className="bg-accent/20 text-accent">In Progress</Badge>
                </div>
                <h4 className="text-lg font-semibold text-accent mb-2">Junos, Associate</h4>
                <p className="text-muted-foreground mb-4">
                  Currently pursuing the Juniper Networks Certified Associate Junos certification, developing
                  core routing and switching knowledge on the Junos OS platform.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Routing & Switching</Badge>
                  <Badge variant="outline">Junos OS</Badge>
                  <Badge variant="outline">Associate Level</Badge>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 shadow-medium hover:shadow-accent transition-all duration-300 animate-slide-up">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold">Tech Blitz 2025 Hackathon</h3>
                  <Badge className="bg-primary/20 text-primary">Certificate</Badge>
                </div>
                <h4 className="text-lg font-semibold text-accent mb-2">Certificate of Participation</h4>
                <p className="text-muted-foreground mb-4">
                  Participated in Tech Blitz 2025, a 24-hour hackathon organized by Coding Ninjas LPU
                  on 19th and 20th September. The event focused on building impactful solutions in
                  Web Development and Artificial Intelligence, featuring expert-led sessions and mentorship.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline">Web Development</Badge>
                  <Badge variant="outline">Artificial Intelligence</Badge>
                  <Badge variant="outline">24-hour Hackathon</Badge>
                  <Badge variant="outline">Innovation</Badge>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border border-border">
              <img
                src={certificateImage}
                alt="Tech Blitz 2025 Certificate of Participation"
                className="w-full h-auto"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
