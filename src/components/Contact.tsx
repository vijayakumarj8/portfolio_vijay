import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let's Work Together
          </h2>
          <Card className="p-8 shadow-medium bg-gradient-card border-border">
            <p className="text-lg text-foreground mb-8 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
                onClick={() => window.location.href = "mailto:your.email@example.com"}
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </Button>
            </div>
            <div className="flex gap-4 justify-center">
              <Button
                variant="outline"
                size="icon"
                className="border-border hover:bg-muted hover:border-primary"
                onClick={() => window.open("https://github.com", "_blank")}
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-border hover:bg-muted hover:border-primary"
                onClick={() => window.open("https://linkedin.com", "_blank")}
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-border hover:bg-muted hover:border-primary"
                onClick={() => window.open("https://twitter.com", "_blank")}
              >
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
