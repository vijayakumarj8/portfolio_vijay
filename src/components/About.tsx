import React from "react";
import { Card } from "@/components/ui/card";
import profilePhoto from "@/assets/vijayakumar.jpg";
import { Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

// 🔥 Reusable Scroll Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
};

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20 bg-background"
      variants={fadeUp as any}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}   // 👈 animation repeats every time it enters view
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeUp as any}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          className="max-w-4xl mx-auto"
        >

          {/* Title */}
          <motion.h2
            variants={fadeUp as any}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            About Me
          </motion.h2>

          {/* Card */}
          <motion.div
            variants={fadeUp as any}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
          >
            <Card className="p-8 shadow-medium bg-gradient-card border-border flex flex-col items-center text-center">

              {/* Profile Image */}
              <motion.div
                variants={scaleIn as any}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
                className="relative group mb-6"
              >
                <div className="absolute -inset-1 bg-gradient-primary rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>

                <img
                  src={profilePhoto}
                  alt="Vijayakumar Profile"
                  className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-background shadow-glow transition-all duration-500 group-hover:scale-105"
                />
              </motion.div>

              {/* Text */}
              <motion.div
                variants={fadeUp as any}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
                className="max-w-2xl text-justify"
              >
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
              </motion.div>

              {/* Social Icons */}
              <motion.div
                variants={scaleIn as any}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
                className="flex items-center gap-5 mt-8"
              >
                <a
                  href="https://www.instagram.com/ajayj_08?igsh=dDk2djN1MWRqenN4"
                  target="_blank"
                  aria-label="Instagram"
                  className="text-foreground hover:text-pink-500 transition-transform duration-200 hover:scale-110"
                >
                  <Instagram size={25} />
                </a>

                <a
                  href="https://www.linkedin.com/in/vijayakumarj2003/"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="text-foreground hover:text-blue-500 transition-transform duration-200 hover:scale-110"
                >
                  <Linkedin size={25} />
                </a>

                <a
                  href="https://wa.me/8667695593"
                  target="_blank"
                  aria-label="WhatsApp"
                  className="text-foreground hover:text-green-500 transition-transform duration-200 hover:scale-110"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.04 2C6.59 2 2.17 6.42 2.17 11.87c0 2.09.55 4.13 1.6 5.93L2 22l4.35-1.69c1.73.95 3.67 1.45 5.69 1.45h.01c5.45 0 9.87-4.42 9.87-9.87C21.96 6.42 17.54 2 12.09 2h-.05zm0 17.5c-1.79 0-3.51-.48-5.02-1.39l-.36-.21-2.58.99.92-2.5-.24-.38c-.97-1.56-1.48-3.35-1.48-5.22 0-5.39 4.38-9.77 9.77-9.77 5.39 0 9.77 4.38 9.77 9.77s-4.38 9.71-9.78 9.71zm5.39-6.83c-.29-.14-1.71-.84-1.98-.93-.27-.1-.47-.14-.67.14-.2.29-.77.93-.94 1.12-.17.2-.35.22-.64.07-.29-.14-1.23-.45-2.34-1.43-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.45.13-.59.13-.13.29-.35.43-.53.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.67-1.61-.91-2.21-.24-.58-.48-.5-.67-.51-.17-.01-.36-.01-.55-.01-.19 0-.5.07-.76.36-.27.29-1.01.98-1.01 2.39 0 1.41 1.03 2.77 1.17 2.96.14.19 2.03 3.1 4.92 4.34.69.3 1.22.48 1.64.61.69.22 1.31.19 1.81.12.55-.08 1.71-.7 1.95-1.37.24-.67.24-1.24.17-1.36-.07-.12-.27-.19-.56-.33z" />
                  </svg>
                </a>
              </motion.div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
