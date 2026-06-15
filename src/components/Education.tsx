import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

const titleVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const certCardVariants = {
  hidden: { opacity: 0, y: 20, rotateX: 8 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const education = [
  {
    institution: "Ilma University",
    degree: "ADP Software Engineering",
    period: "2025 - Present",
    description:
      "Currently pursuing Associate Degree Program in Software Engineering with focus on modern development practices, programming fundamentals, and software design principles.",
    current: true,
  },
  {
    institution: "Government Degree Boys College",
    degree: "Intermediate (Pre-Engineering)",
    period: "2022 - 2024",
    description:
      "Completed Intermediate in Pre-Engineering with strong foundation in Mathematics, Physics, and Chemistry.",
    current: false,
  },
  {
    institution: "Kamran Public School",
    degree: "Matric in Computer Science",
    period: "2008 - 2021",
    description: "Completed Matriculation degree with A-Grade.",
    current: false,
  },
];

const certifications = [
  {
    title: "Full Stack / MERN Stack Development",
    institution: "Saylani SMIT",
    period: "2025 - Present",
    inProgress: true,
  },
  {
    title: "Frontend Development",
    institution: "Farooq-e-Azam Institute",
    period: "2024 October To 2025 January ",
    completed: true,
  },
  {
    title: "Wordpress Development",
    institution: "Fixit Institute",
    period: "2024 February To 2024 April",
    completed: true,
  },
  {
    title: "C.I.T",
    institution: "Info Channel",
    period: "2023 March To 2023 August",
    completed: true,
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 sm:py-32 bg-secondary/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey and continuous learning path
          </p>
        </motion.div>

        <motion.div
          variants={listVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto space-y-6"
        >
          {/* Formal Education */}
          {education.map((item, index) => (
            <motion.div
              key={item.institution}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="project-card p-6 flex gap-4"
            >
              <motion.div
                whileHover={{ rotate: -6, scale: 1.06 }}
                transition={{ type: "spring", stiffness: 260, damping: 16 }}
                className="p-3 rounded-lg bg-primary/10 text-primary h-fit"
              >
                <GraduationCap size={24} />
              </motion.div>
              <div className="flex-1">
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-1">
                      {item.degree}
                    </h3>
                    <p className="text-primary font-medium">
                      {item.institution}
                    </p>
                  </div>
                  {item.current && (
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-500/10 text-green-500">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-1 mb-3">
                  {item.period}
                </p>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Certifications */}
          <motion.div variants={cardVariants} className="pt-8">
            <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-3">
              <motion.span
                initial={{ scaleX: 0, opacity: 0 }}
                animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="w-8 h-[2px] bg-primary origin-left"
              />
              Courses
            </h3>
            <motion.div
              variants={listVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid sm:grid-cols-2 gap-4"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  variants={certCardVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="project-card p-5 flex gap-4"
                >
                  <motion.div
                    whileHover={{ rotate: -8, scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 260, damping: 16 }}
                    className="p-2 rounded-lg bg-primary/10 text-primary h-fit"
                  >
                    <Award size={20} />
                  </motion.div>
                  <div>
                    <h4 className="font-display font-semibold mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-primary">{cert.institution}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs text-muted-foreground">
                        {cert.period}
                      </span>
                      {cert.inProgress && (
                        <span className=" text-nowrap px-2 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary">
                          In Progress
                        </span>
                      )}
                      {cert.completed && (
                        <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-green-500/10 text-green-500">
                          Completed
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
