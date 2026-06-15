import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder, Star } from "lucide-react";

const mobileProjects = [
  {
    title: "RoadHelper — Multi-Role App Suite",
    featured: true,
    description:
      "Three published React Native apps on Google Play Store: Customer App (food/grocery/ride booking with real-time tracking), Restaurant Partner App (order/menu management with Kanban boards), and Driver App (delivery/ride fulfillment with navigation). Features real-time sync, push notifications, and phone auth.",
    tech: [
      "React Native CLI",
      "TypeScript",
      "Firebase Firestore",
      "Push Notifications",
      "React Navigation",
      "Redux Toolkit",
      "i18n (EN/HE/AR)",
      "React Native Maps",
      "Phone Auth",
      "Google Play Console",
    ],
    github: "",
    live: "https://drive.google.com/file/d/1ZZRi4NXkPHbKqQ415U3YHMci333VeeXP/view",
  },
  {
    title: "TalkBridge Chat App",
    description:
      "Real-time cross-platform chat application built with React Native CLI featuring one-to-one messaging, group chats, push notifications, light/dark themes, and smooth mobile performance. Implemented real-time communication with MongoDB backend.",
    tech: [
      "React Native CLI",
      "TypeScript",
      "React Navigation",
      "Redux / Redux Toolkit",
      "Tailwind RN",
      "MongoDB",
      "Axios",
      "Push Notifications",
      "AsyncStorage",
    ],
    github: "https://github.com/syedmuhammadali-dev/Talkbridge-Mobile-App",
    live: "https://drive.google.com/file/d/189Dx-YxP4rnHIWZGQVJw4uHjah1Ycr94/view?usp=sharing",
  },
];

const reactProjects = [
  {
    title: "Barakah — ERP Platform",
    featured: true,
    description:
      "Enterprise Resource Planning (ERP) platform featuring inventory management, billing, HR operations, reporting, and business analytics for modern organizations.",
    tech: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Redux Toolkit",
    ],
    github: "https://github.com/syedmuhammadali-dev/Barakah-ERP-Frontend",
    live: "https://barakah-erp.vercel.app/",
  },
  {
    title: "Helplytics — Helpdesk & Analytics",
    featured: true,
    description:
      "AI-powered helpdesk and analytics platform featuring ticket management, leaderboards, messaging, notifications, and intelligent customer support workflows.",
    tech: [
      "Next.js 16",
      "React 19",
      "Redux Toolkit",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    github: "https://github.com/syedmuhammadali-dev/Helplytics-Frontend",
    live: "https://helplytics-frontend.vercel.app/",
  },
  {
    title: "AI Clinic Management System",
    featured: true,
    description:
      "Healthcare management platform featuring role-based dashboards, appointment scheduling, digital prescriptions, PDF generation, and AI-powered prescription explanations using Google Gemini.",
    tech: [
      "Next.js 16",
      "Firebase",
      "Redux Toolkit",
      "Tailwind CSS",
      "Gemini AI",
      "pdf-lib",
    ],
    github: "https://github.com/syedmuhammadali-dev/Clinic-Management-Web",
    live: "https://clinic-management-hackathon.vercel.app/",
  },
  {
    title: "CoreStock Web App",
    featured: true,
    description:
      "Enterprise inventory and stock management platform with role-based access, site management, stock tracking, reporting, and real-time data handling. Contributed as Senior Frontend Developer.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Mantine UI",
      "Material UI",
      "Redux",
      "API Integration",
      "Vercel",
    ],
    github: "",
    live: "https://corestock-web.vercel.app/",
  },
  {
    title: "CoreStock Admin Panel UI",
    featured: true,
    description:
      "Modern and responsive admin dashboard UI designed for inventory and warehouse management systems using Next.js and modern frontend technologies.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Mantine UI",
      "Material UI",
      "Vercel",
    ],
    github: "",
    live: "https://core-stock-admin-UI.vercel.app/login",
  },

  {
    title: "Road Helper Web App",
    featured: true,
    description:
      "Multi-role roadside assistance platform featuring real-time tracking, multilingual support, location services, and responsive dashboards. Contributed to frontend development, API integration, and user experience optimization.",
    tech: [
      "Next.js",
      "TypeScript",
      "i18n",
      "Tailwind CSS",
      "Mantine UI",
      "Material UI",
      "Redux",
      "Firebase",
      "Vercel",
      "Map & Location",
      "3 Role Different pages and dashboards with security",
    ],
    github: "https://github.com/syedmuhammadali-dev/Road-Helper",
    live: "https://roadhelper.vercel.app/",
  },
  {
    title: "AppMash Website",
    description:
      "Modern SaaS platform UI featuring responsive layouts, reusable components, and optimized user experience across devices.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Material UI"],
    github: "",
    live: "https://app-mash.vercel.app/",
  },
  {
    title: "TalkBridge Chat Web",
    description:
      "Real-time chat application built with React.js and TypeScript featuring one-to-one messaging, group chats, authentication, responsive UI, and seamless user experience.",
    tech: [
      "React.js",
      "TypeScript",
      "Redux / Redux Toolkit",
      "Tailwind",
      "MongoDB",
      "Axios",
      "Socket.io",
    ],
    github:
      "https://github.com/syedmuhammadali-dev/Talkbridge-ChatApp-Frontend",
    live: "https://talkbridge-chatapp.vercel.app/",
  },
  {
    title: "T3ALL Restaurant Website",
    description:
      "A restaurant-style website UI with responsive layout and interactive elements.",
    tech: ["React.js", "Tailwind CSS", "JavaScript"],
    github: "",
    live: "https://t3aldevaliUI.netlify.app/",
  },
  {
    title: "React Portfolio Website",
    description:
      "Old Personal portfolio website showcasing frontend development projects, skills, and professional journey built with React and TypeScript.",
    tech: ["React.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/syedmuhammadali-dev/old-react-portfolio",
    live: "https://old-react-portfolio-puce.vercel.app/",
  },
  {
    title: "Student Portal",
    description:
      "Student Portal - a hackathon project built with React.js and TypeScript to help students access courses and events. Features responsive UI, smooth animations with Framer Motion, and intUItive navigation.",
    tech: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Material UI",
      "Framer Motion",
      "FontAwesome Icons",
    ],
    github: "https://github.com/syedmuhammadali-dev/ILMA-Hackathon-Event",
    live: "https://studentportal-silk.vercel.app/",
  },
  {
    title: "MyBindle Website",
    description:
      "Responsive business website built with React featuring modern UI components, optimized layouts, and user-friendly navigation.",
    tech: ["React.js", "JavaScript", "Tailwind CSS", "CSS3"],
    github: "https://github.com/syedmuhammadali-dev/Mybindle-react",
    live: "https://my-bindle-website-react.vercel.app/",
  },
  {
    title: "Text Changer App",
    description:
      "A text manipulation tool with features like uppercase, lowercase, trimming spaces, and copy.",
    tech: ["React.js", "Tailwind CSS"],
    github: "https://github.com/syedmuhammadali-dev/Text-Changer-App",
    live: "https://text-changer.surge.sh/",
  },
];

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tech: string[];
    github: string;
    live: string;
    featured?: boolean;
  };
  index: number;
  isInView: boolean;
}

const ProjectCard = ({ project, index, isInView }: ProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className={`project-card group ${project.featured ? "shadow-[0_0_20px_-4px] shadow-primary/30" : ""}`}
  >
    {/* Project Header */}
    <div className="p-6 border-b border-border">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            <Folder size={24} />
          </div>
          {project.featured && (
            <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 text-primary text-xs font-semibold px-2.5 py-1 shadow-[0_0_12px_-2px] shadow-primary/50">
              <Star size={12} className="fill-primary" />
              Featured
            </span>
          )}
        </div>
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="View on GitHub"
            >
              <Github size={20} />
            </a>
          )}
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="View live site"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
      <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {project.description}
      </p>
    </div>
    {/* Tech Stack */}
    <div className="p-6 pt-4">
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs text-muted-foreground font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 sm:py-32">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        {/* Mobile App Projects */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-display text-xl font-semibold mb-8 flex items-center gap-3"
          >
            <span className="w-8 h-[2px] bg-primary" />
            Mobile App Projects
          </motion.h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {mobileProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>

        {/* React & Next.js Projects */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-display text-xl font-semibold mb-8 flex items-center gap-3"
          >
            <span className="w-8 h-[2px] bg-primary" />
            Full Stack / MERN Stack Projects
          </motion.h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {reactProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
