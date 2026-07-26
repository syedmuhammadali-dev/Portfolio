import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Briefcase, MapPin, GraduationCap } from "lucide-react";

const stats = [
  { icon: Code2, label: "Real Projects Built", value: "15+" },
  { icon: Briefcase, label: "Experience", value: "9+ Months" },
  { icon: GraduationCap, label: "Certifications", value: "12+" },
  { icon: MapPin, label: "Location", value: "Karachi, PK" },
];

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
            className="w-36 h-36 sm:w-48 sm:h-48 rounded-full mx-auto border-4 border-primary object-cover shadow-[0_0_30px_-5px] shadow-primary/30"
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
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            I'm Syed Muhammad Ali, a Full Stack & Mobile App Developer with 9
            months of professional experience building scalable web and mobile
            applications. I've published 3 React Native apps on Google Play
            Store featuring real-time order management, push notifications, and
            multilingual support. Proficient in MERN & PERN stacks, React
            Native, and Expo, I specialize in delivering end-to-end solutions
            from concept to deployment. I also leverage AI-powered development
            tools to accelerate workflows and solve complex problems — backed by
            2+ years of strong manual coding fundamentals in JavaScript,
            TypeScript, React / Next, and Node.js.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="project-card p-4 text-center"
              >
                <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                <div className="font-display text-xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
