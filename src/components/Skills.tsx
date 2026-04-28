import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Core",
    icon: Code2,
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "C-Language",
      "Wordpress",
      "MS Office",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "UI & Styling",
    icon: Palette,
    skills: [
      "Tailwind CSS",
      "Material UI",
      "Mantine UI",
      "Framer Motion",
      "Bootstrap",
      "Shade Cn",
      "MDB Bootstrap",
      "Ant Design",
      "Figma",
    ],
  },
  {
    title: "Backend Core",
    icon: Code2,
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "Firebase",
      "PostgreSQL",
      "PG Admin",
    ],
  },
  {
    title: "Tools & Integration",
    icon: Wrench,
    skills: [
      "Postman",
      "Thunder Client",
      "VS Code",
      "Postman",
      "Figma to Code",
      "Git & GitHub",
    ],
  },
  {
    title: "Mobile Development",
    icon: Code2,
    skills: ["React Native CLI", "Expo", "Android Studio"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 sm:py-32 bg-secondary/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="project-card p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <category.icon size={24} />
                </div>
                <h3 className="font-display text-lg font-semibold">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
