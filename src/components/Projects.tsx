import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const mobileProjects = [
  {
    title: "RoadHelper Mobile App",
    description:
      "A cross-platform mobile application built with React Native CLI, designed for multiple users with different roles. Features include real-time tracking, notifications, and user-friendly UI. Light and Dark Theme. Three languages supported. My role focused on building responsive screens, integrating APIs, and ensuring smooth mobile performance.",
    tech: [
      "React Native CLI",
      "i18n",
      "TypeScript",
      "React Navigation",
      "Redux / Redux Toolkit",
      "Tailwind RN",
      "Firebase",
      "Axios",
      "React Native Maps",
      "AsyncStorage",
    ],
    github: "",
    live: "https://drive.google.com/file/d/1ZZRi4NXkPHbKqQ415U3YHMci333VeeXP/view",
  },
  {
    title: "TalkBridge Chat App",
    description:
      "TalkBridge Chat App is a cross-platform mobile application built with React Native CLI, designed for multiple users with different roles. Features include real-time messaging, push notifications, group chats, and user-friendly UI. Light and Dark Theme supported. My role focused on building responsive screens, integrating APIs, implementing real-time chat functionality, and ensuring smooth mobile performance.",
    tech: [
      "React Native CLI",
      "TypeScript",
      "React Navigation",
      "Redux / Redux Toolkit",
      "Tailwind RN",
      "MongoDB",
      "Axios",
      "AsyncStorage",
    ],
    github: "https://github.com/syedmuhammadali-dev/Talkbridge-Mobile-App",
    live: "https://drive.google.com/file/d/189Dx-YxP4rnHIWZGQVJw4uHjah1Ycr94/view?usp=sharing",
  },
];

const reactProjects = [
  {
    title: "Barakah — ERP Platform",
    description:
      "Full-featured ERP system for businesses — modules for inventory, billing, HR, and analytics. A complete enterprise solution built for real-world use.",
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
    description:
      "A modern helpdesk platform with AI Center, leaderboard, real-time notifications, messaging, and explore features. Built with Next.js 16 and Framer Motion animations.",
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
    description:
      "Full-stack clinic platform with role-based dashboards (Admin, Doctor, Receptionist, Patient), appointment booking, prescription PDF generation, and AI-powered prescription explanations via Google Gemini.",
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
    description:
      "Enterprise inventory and stock management platform with role-based access, site management, stock tracking, reporting, and real-time data handling. Contributed as Senior Frontend Developer.",
    tech: [
      "Next.js",
      "TypeScript",
      "Api Integration",
      "Tailwind Css",
      "Mantine.dev",
      "Material ui",
      "Redux",
      "Vercel",
    ],
    github: "",
    live: "https://corestock-web.vercel.app/",
  },

  {
    title: "AppMash Website",
    description:
      "Modern SaaS platform UI featuring responsive layouts, reusable components, and optimized user experience across devices.",
    tech: ["Next.js", "TypeScript", "Tailwind Css", "Material ui"],
    github: "",
    live: "https://app-mash.vercel.app/",
  },
  {
    title: "Road Helper Web App",
    description:
      "A modern full-stack web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js), designed for multiple users with different roles. Features include real-time updates, responsive UI, and interactive dashboards. Light and Dark Theme supported. Three languages supported. My role focused on frontend development, API integration, and ensuring smooth full-stack performance.",
    tech: [
      "Next.js",
      "TypeScript",
      "i18n",
      "Tailwind Css",
      "Mantine.dev",
      "Material ui",
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
      "AsyncStorage",
    ],
    github:
      "https://github.com/syedmuhammadali-dev/Talkbridge-ChatApp-Frontend",
    live: "https://talkbridge-chatapp.vercel.app/",
  },
  {
    title: "CoreStock Admin Panel UI",
    description:
      "Modern and responsive admin dashboard UI designed for inventory and warehouse management systems using Next.js and modern frontend technologies.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind Css",
      "Mantine.dev",
      "Material ui",
      "Vercel",
    ],
    github: "",
    live: "https://core-stock-admin-ui.vercel.app/login",
  },
  {
    title: "CoreStock Admin Panel",
    description:
      "Comprehensive admin panel for inventory and warehouse management with role-based permissions, reporting dashboards, stock monitoring, and advanced management features. Worked as Senior Frontend Developer.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind Css",
      "Mantine.dev",
      "Material ui",
      "Redux",
      "Vercel",
    ],
    github: "",
    live: "https://corestock-admin-panel.vercel.app/",
  },
  {
    title: "T3ALL Restaurant Website",
    description:
      "A restaurant-style website UI with responsive layout and interactive elements.",
    tech: ["React.js", "Tailwind Css", "JavaScript"],
    github: "",
    live: "https://t3aldevaliui.netlify.app/",
  },
  {
    title: "React Portfolio Website",
    description:
      "Old Personal portfolio website showcasing frontend development projects, skills, and professional journey built with React and TypeScript.",
    tech: ["React.js", "TypeScript", "Tailwind Css"],
    github: "https://github.com/syedmuhammadali-dev/old-react-portfolio",
    live: "https://old-react-portfolio-puce.vercel.app/",
  },
  {
    title: "Student Portal",
    description:
      "Student Portal - a hackathon project built with React.js and TypeScript to help students access courses and events. Features responsive UI, smooth animations with Framer Motion, and intuitive navigation.",
    tech: [
      "React.js",
      "TypeScript",
      "Tailwind Css",
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

const webProjects = [
  {
    title: "Social Media App",
    description:
      "A social media application with local storage using HTML, CSS, and JavaScript.",
    tech: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
    github:
      "https://github.com/syedmuhammadali-dev/socialmedia-app-html-bootstrap",
    live: "https://socialmedia-app-ali.vercel.app/",
  },
  {
    title: "OLX Clone",
    description:
      "A classifieds marketplace UI with search/filter listings, category browsing, and listing details.",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    github: "https://github.com/syedmuhammadali-dev/olx-clone",
    live: "http://olx-by-ali.surge.sh/",
  },
  {
    title: "YouTube Clone",
    description:
      "A frontend clone of YouTube built using Tailwind CSS with responsive UI.",
    tech: ["HTML5", "Tailwind CSS"],
    github:
      "https://github.com/syedmuhammadali-dev/Tailwind-Assignments/tree/master/youtube-clone",
    live: "http://tailwind-assignment.surge.sh/youtube-clone/index.html",
  },
  {
    title: "Pokémon App",
    description:
      "A fun Pokémon app fetching data from Pokémon API and displaying it in a styled UI.",
    tech: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/syedmuhammadali-dev/Pokemon-App",
    live: "https://pokemon-clone-lake.vercel.app/",
  },
  {
    title: "Google Clone",
    description:
      "Google homepage clone built using HTML and CSS with pixel-perfect layout.",
    tech: ["HTML5", "CSS3"],
    github: "https://github.com/syedmuhammadali-dev/Google-Clone",
    live: "http://tailwind-assignment.surge.sh/google-ui/index.html",
  },
  {
    title: "CSS Animation Showcase",
    description:
      "Creative CSS animations demonstrating transitions and keyframes.",
    tech: ["HTML5", "CSS3", "Bootstrap"],
    github: "https://github.com/syedmuhammadali-dev/Animation-website",
    live: "https://animation-website.surge.sh/",
  },
  {
    title: "Nexcent Website",
    description: "A modern responsive landing page built using Tailwind CSS.",
    tech: ["Tailwind CSS", "HTML5"],
    github: "https://github.com/syedmuhammadali-dev/Nexcent-Website",
    live: "https://nexcentclone.surge.sh/",
  },
];

// const LandingPages = [
//   {
//     title: "Social Media App",
//     description:
//       "A social media application with local storage using HTML, CSS, and JavaScript.",
//     tech: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
//     github:
//       "https://github.com/syedmuhammadali-dev/socialmedia-app-html-bootstrap",
//     live: "https://socialmedia-app-ali.vercel.app/",
//   },
// ];

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tech: string[];
    github: string;
    live: string;
  };
  index: number;
  isInView: boolean;
}

const ProjectCard = ({ project, index, isInView }: ProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="project-card group"
  >
    {/* Project Header */}
    <div className="p-6 border-b border-border">
      <div className="flex items-start justify-between mb-4">
        <div className="p-2 rounded-lg bg-primary/10 text-primary">
          <Folder size={24} />
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

        {/* Web Development Projects */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-display text-xl font-semibold mb-8 flex items-center gap-3"
          >
            <span className="w-8 h-[2px] bg-primary" />
            Web Development Projects
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {webProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index + reactProjects.length}
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
