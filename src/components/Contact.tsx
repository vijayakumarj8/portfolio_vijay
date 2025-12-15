import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Contact = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);
    const response = await fetch("https://formspree.io/f/mjkjvegv", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("sent");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

  // Auto-clear status in 5 sec
  useEffect(() => {
    if (status === "sent" || status === "error") {
      const timer = setTimeout(() => setStatus("idle"), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Get in Touch
          </h2>

          <Card className="p-8 shadow-medium bg-card border-border">
            <p className="text-lg text-foreground mb-8">
              Have a question, project idea, or opportunity? Fill out the form below — I’ll get back to you soon!
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
              <motion.input
                variants={fadeItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <motion.input
                variants={fadeItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <motion.input
                variants={fadeItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full p-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <motion.textarea
                variants={fadeItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                className="w-full p-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              ></motion.textarea>

              {/* Centered Send Button */}
              <motion.div
                variants={fadeItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                className="flex justify-center"
              >
                <Button
                  type="submit"
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </Button>
              </motion.div>

              {/* Success message */}
              {status === "sent" && (
                <motion.p
                  variants={fadeItem}
                  initial="hidden"
                  whileInView="visible"
                  className="text-green-500 mt-3 text-center"
                >
                  ✅ Message sent successfully!
                </motion.p>
              )}

              {/* Error message */}
              {status === "error" && (
                <motion.p
                  variants={fadeItem}
                  initial="hidden"
                  whileInView="visible"
                  className="text-red-500 mt-3 text-center"
                >
                  ❌ Something went wrong. Please try again.
                </motion.p>
              )}
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
