import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Briefcase,
  Smartphone,
  Globe,
  CreditCard,
  MapPin,
  Users,
  Bell,
} from "lucide-react";

const titleVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
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

const experiences = [
  {
    role: "FullStack & Mobile App Developer",
    company: "AppMash",
    location: "Karachi",
    period: "9 Months",
    highlights: [
      {
        icon: Smartphone,
        text: "Published 3 React Native apps on Google Play Store: Customer App (food/grocery/ride booking), Restaurant Partner App (order & menu management), and Driver App (delivery & ride fulfillment)",
      },
      {
        icon: Users,
        text: "Implemented real-time order management with Kanban-style boards using Firebase Firestore",
      },
      {
        icon: Bell,
        text: "Integrated phone authentication, push notifications, and real-time location tracking for enhanced user engagement and operational efficiency",
      },
      {
        icon: Globe,
        text: "Built multi language support (English/Urdu/Hebrew/Arabic/Roman) with i18n for global user base",
      },
      {
        icon: CreditCard,
        text: "Integrated payment gateway (Yaad), Stripe and PDF report generation for invoices and analytics",
      },
      {
        icon: MapPin,
        text: "Published and managed entire app lifecycle on Google Play Console, including updates and version management",
      },
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 sm:py-32 bg-secondary/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional journey building and shipping real-world applications
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp) => (
            <motion.div
              key={exp.role}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="project-card p-6 sm:p-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <motion.div
                  whileHover={{ rotate: -6, scale: 1.06 }}
                  transition={{ type: "spring", stiffness: 260, damping: 16 }}
                  className="p-3 rounded-lg bg-primary/10 text-primary shrink-0"
                >
                  <Briefcase size={24} />
                </motion.div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-primary font-medium">
                    {exp.company} — {exp.location}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {exp.period}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {exp.highlights.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="p-1.5 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                      <item.icon size={16} />
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
