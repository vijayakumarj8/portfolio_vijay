import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Chatbot Interface - Gemini Clone ",
    description:
      "An interactive AI chatbot interface built with React that mimics Google’s Gemini design. It features a clean, modern UI with responsive layouts and smooth animations for an engaging user experience.",
    tags: ["React", "Google Generative AI"],
    liveUrl: "https://ai-chat-bot-gemini-clone-beryl.vercel.app/",
    githubUrl: "https://github.com/vijayakumarj8/AI-chat-bot-Gemini-clone",
  },
  {
    title: "React - Food App",
    description:
      "A responsive food ordering web app built with React, featuring dynamic routing, form validation, and location integration for a smooth and interactive user experience.",
    tags: ["React", "HTML", "CSS"],
    liveUrl: "https://food-app-react-hazel.vercel.app/",
    githubUrl: "https://github.com/vijayakumarj8/Food-app-react",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern, responsive portfolio template with smooth animations and dark mode support.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "Beautiful weather application with location-based forecasts and interactive maps.",
    tags: ["React", "API Integration", "Charts"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

// animation for individual cards
const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariant as any}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}   // 👈 triggers every time visible
            >
              <Card className="p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border">
                <h3 className="text-2xl font-semibold mb-3 text-card-foreground">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed text-justify">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    className="border-border hover:bg-muted"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
