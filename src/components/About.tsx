import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-10">
      <div className="section-container">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <img
            src="/Ali-img.jpeg"
            alt="Syed Muhammad Ali"
            className="w-48 h-48 rounded-full mx-auto border-4 border-primary object-cover shadow-lg"
          />
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm Syed Muhammad Ali, a Frontend & Full Stack Developer passionate
            about building beautiful, responsive web and mobile applications.
            Skilled in React, Next.js, and React Native, I’m currently advancing
            my full-stack skills through MERN development at Saylani SMIT while
            pursuing ADP in Software Engineering at Ilma University.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
