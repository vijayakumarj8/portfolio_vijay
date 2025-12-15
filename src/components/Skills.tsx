import { Code2, FileCode2, Atom, Database, Paintbrush, Braces, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const skills = [
  {
    icon: FileCode2,
    title: "HTML",
    description: "Semantic and well-structured web pages",
    color: "text-[#E34F26]",
  },
  {
    icon: Paintbrush,
    title: "CSS",
    description: "Modern and responsive web styling",
    color: "text-[#264DE4]",
  },
  {
    icon: Paintbrush,
    title: "Tailwind CSS",
    description: "Utility-first CSS framework for rapid design",
    color: "text-[#06B6D4]",
  },
  {
    icon: Code2,
    title: "JavaScript",
    description: "Dynamic and interactive web functionality",
    color: "text-[#F7DF1E]",
  },
  {
    icon: Atom,
    title: "React",
    description: "Building reusable and interactive UI components",
    color: "text-[#61DAFB]",
  },
  {
    icon: Braces,
    title: "Python",
    description: "Efficient scripting and backend logic",
    color: "text-[#3776AB]",
  },
  {
    icon: Database,
    title: "MySQL",
    description: "Structured data storage and management",
    color: "text-[#00758F]",
  },
  {
    icon: Github,
    title: "GitHub",
    description: "Version control and collaboration using Git",
    color: "text-[#181717]",
  },
];

// ANIMATION VARIANTS
const leftVariant = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0 },
};

const rightVariant = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0 },
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30 overflow-hidden">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
      Skills & Expertise
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {skills.map((skill, index) => {
        const IconComponent = skill.icon;
        const animation = index % 2 === 0 ? leftVariant : rightVariant;

        return (
          <motion.div
            key={index}
            variants={animation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Card className="group p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card border-border hover:border-primary/50">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-muted/50 group-hover:bg-muted transition-colors mb-4">
                  <IconComponent
                    className={`w-10 h-10 ${skill.color} group-hover:scale-110 transition-transform`}
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                  {skill.title}
                </h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            </Card>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>

  );
};

export default Skills;
