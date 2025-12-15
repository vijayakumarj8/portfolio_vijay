import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="
        relative min-h-screen flex items-center justify-center overflow-hidden bg-background
        pt-24 md:pt-0
      "
      style={{
        backgroundImage: `linear-gradient(rgba(20, 25, 35, 0.95), rgba(25, 30, 45, 0.92)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          {/* Title Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent"
          >
            Hi, I'm Vijayakumar J
          </motion.h1>

          {/* Subtitle Animation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.2, ease: "easeOut", delay: 0.2 }}
            className="text-xl md:text-2xl text-foreground mb-4"
          >
            Full Stack Developer & Creative Problem Solver
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.2, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105 hover:shadow-glow"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-primary text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </div>

            <Button
              size="lg"
              variant="outline"
              className="border-primary text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
              onClick={() => window.open("/vijayakumar_j.pdf", "_blank")}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
