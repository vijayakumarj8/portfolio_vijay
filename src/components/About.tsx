import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            About Me
          </h2>
          <Card className="p-8 shadow-medium bg-gradient-card border-border">
            <p className="text-lg text-foreground mb-4 leading-relaxed">
              I'm a passionate developer with a love for creating elegant solutions to complex problems. 
              With expertise in modern web technologies, I specialize in building responsive, user-friendly 
              applications that deliver exceptional experiences.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community. I believe in continuous learning 
              and staying at the forefront of web development trends.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
