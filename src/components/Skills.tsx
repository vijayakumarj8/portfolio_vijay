import { Code2, Database, Globe, Layers, Palette, Smartphone } from "lucide-react";
import { Card } from "@/components/ui/card";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "React, TypeScript, Tailwind CSS",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Node.js, PostgreSQL, APIs",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Mobile-first, Cross-browser",
  },
  {
    icon: Layers,
    title: "Full Stack",
    description: "End-to-end development",
  },
  {
    icon: Globe,
    title: "Web Technologies",
    description: "HTML5, CSS3, JavaScript",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design principles",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 bg-card border-border"
            >
              <skill.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                {skill.title}
              </h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
