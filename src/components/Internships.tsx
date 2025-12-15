import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Internships = () => {
  const internships = [
    {
      company: "Intern at Agile Tribers",
      role: "Frontend Developer Intern",
      duration: "Feb 2025-May 2025",
      location: "Nagercoil,TamilNadu",
      description:
        "Developed and enhanced web applications with clean, scalable, and maintainable code using HTML, CSS, JavaScript.Implemented UI improvements and optimized code for better performance and user engagement. Collaborated in full SDLC from requirements gathering to deployment, ensuring timely delivery of features."
,
      // technologies: ["React", "TypeScript", "Tailwind CSS", "Git"],
    },
    {
      company: "Intern at Appin Technology",
      role: "Web development Intern",
      duration: "May 2024-June 2024",
      location: "Coimbatore,TamilNadu",
      description:
        "Built a Task Management System (To-Do List) using HTML, CSS, and JavaScript with a focus on responsive design and interactive features.Collaborated with team members using version control systems such as Git to organize modifications and assign tasks.",
      // technologies: ["Node.js", "Express", "MongoDB", "React"],
    },
    // {
    //   company: "Digital Agency",
    //   role: "Web Development Intern",
    //   duration: "Sep 2023 - Dec 2023",
    //   location: "New York, NY",
    //   description:
    //     "Created responsive websites for clients using modern web technologies. Optimized website performance and implemented SEO best practices. Participated in daily stand-ups and code reviews.",
    //   technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
    // },
  ];

  return (
    <section
      id="internships"
      className="py-20 px-2 md:px-4 bg-gradient-to-b from-background via-muted/20 to-background"
    >
      <div className="container mx-auto max-w-6xl px-0 md:px-4">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-white">
            Internships
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and key achievements
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/40" />

          <div className="space-y-10 md:space-y-20">
            {internships.map((internship, index) => (
              <motion.div
                key={index}
                variants={cardVariants as any}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="relative md:flex md:items-start"
              >
                {/* DOT (DESKTOP ONLY) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2
                                w-10 h-10 rounded-full bg-primary shadow-lg
                                items-center justify-center z-20">
                  <Briefcase className="text-white w-5 h-5" />
                </div>

                {/* CARD */}
                <div
                  className={`w-full md:w-1/2 relative
                  ${index % 2 === 0 ? "md:pr-10 md:ml-0" : "md:pl-10 md:ml-auto"}
                `}
                >
                  <div className="bg-card border border-border rounded-xl p-6
                                  shadow-sm hover:shadow-xl transition-all">

                    {/* HEADER */}
                    <div className="mb-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-2">
                        <h3 className="text-2xl font-bold">
                          {internship.role}
                        </h3>

                        <div className="flex items-center gap-1.5 text-sm
                                        bg-muted px-3 py-1 rounded-full">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{internship.duration}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-muted-foreground">
                        <p className="text-lg font-semibold text-foreground/80">
                          {internship.company}
                        </p>
                        <span className="hidden sm:block text-border">•</span>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          <span>{internship.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {internship.description}
                    </p>

                    {/* TECH */}
                    {/* <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                      {internship.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div> */}

                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;
