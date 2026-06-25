import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Wrench, Trophy } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Competition, <span className="text-primary">Hackathon</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Competitive experiences and achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="p-8 shadow-medium hover:shadow-accent transition-all duration-300 animate-slide-up">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Trophy className="w-8 h-8 text-accent" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold">University Hackathon Participation</h3>
                  <Badge className="bg-accent/20 text-accent">Hackathon</Badge>
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">Fake News Analyzer Competition</h4>
                <p className="text-muted-foreground mb-4">
                  Participated in the university hackathon working on a Fake News Analyzer application. 
                  While the project is ongoing, this experience has been invaluable in understanding real-world 
                  problem-solving, team collaboration, and applying cyber security principles to combat misinformation.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Machine Learning</Badge>
                  <Badge variant="outline">Data Analysis</Badge>
                  <Badge variant="outline">Team Collaboration</Badge>
                  <Badge variant="outline">Problem Solving</Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
