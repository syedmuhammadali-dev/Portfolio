import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink, FileText } from "lucide-react";

type Certificate = {
  title: string;
  issuer: string;
  date: string;
  pdf: string;
  preview: string;
  link: string;
  sourceLabel?: string;
  primaryActionLabel?: string;
};

const certificates: Certificate[] = [
  {
    title: "1st Position — Saylani Mass IT 2026",
    issuer: "Saylani Mass IT Training",
    date: "2026",
    pdf: "/1st-position-saylani.pdf",
    preview: "/certifications/Screenshot 2026-05-30 235506.png",
    link: "/1st-position-saylani.pdf",
    sourceLabel: "PDF",
    primaryActionLabel: "Open Certificate",
  },
  {
    title: "Frontend Hackathon Certificate",
    issuer: "Saylani",
    date: "2025",
    pdf: "/certifications/Frontend-Hackathon-Certificate-Saylani.pdf",
    preview: "/certifications/Screenshot 2026-04-10 171909.png",
    link: "/certifications/Frontend-Hackathon-Certificate-Saylani.pdf",
    sourceLabel: "PDF",
    primaryActionLabel: "Open Certificate",
  },
  {
    title: "Web Development Hackathon Certificate",
    issuer: "Saylani",
    date: "2025",
    pdf: "/certifications/WEbDevelopment-certificate-hackathon-saylani.pdf",
    preview: "/certifications/Screenshot 2026-04-10 171808.png",
    link: "/certifications/WEbDevelopment-certificate-hackathon-saylani.pdf",
    sourceLabel: "PDF",
    primaryActionLabel: "Open Certificate",
  },
  {
    title: "Fixit WordPress Certificate",
    issuer: "Fixit",
    date: "2025",
    pdf: "/certifications/fixit-wordpress-certificate.pdf",
    preview: "/certifications/Screenshot 2026-04-10 171616.png",
    link: "/certifications/fixit-wordpress-certificate.pdf",
    sourceLabel: "PDF",
    primaryActionLabel: "Open Certificate",
  },
  {
    title: "Farooq-e-Azam Institute Web Development",
    issuer: "Farooq-e-Azam Institute",
    date: "2025",
    pdf: "/certifications/Farooqe-Azam-institute-webDevelopment.pdf",
    preview: "/certifications/Screenshot 2026-04-10 171553.png",
    link: "/certifications/Farooqe-Azam-institute-webDevelopment.pdf",
    sourceLabel: "PDF",
    primaryActionLabel: "Open Certificate",
  },
  {
    title: "InfoChannel CIT Course",
    issuer: "InfoChannel",
    date: "2025",
    pdf: "/certifications/InfoChannel-CIT-course.pdf",
    preview: "/certifications/Screenshot 2026-04-10 171657.png",
    link: "/certifications/InfoChannel-CIT-course.pdf",
    sourceLabel: "PDF",
    primaryActionLabel: "Open Certificate",
  },
  {
    title: "Introduction to Modern AI",
    issuer: "Cisco",
    date: "Mar 8, 2026",
    pdf: "/certifications/IntrotoModernAIUpdate20260309-31-2ivtky.pdf",
    preview: "/certifications/introduction-to-modern-ai.png",
    link: "https://www.credly.com/users/syed-muhammed-ali/badges#credly",
    sourceLabel: "Credly",
    primaryActionLabel: "Open Badge",
  },
  {
    title: "JavaScript Essentials 1",
    issuer: "Cisco",
    date: "Dec 12, 2025",
    pdf: "https://www.credly.com/users/syed-muhammed-ali/badges#credly",
    preview:
      "https://images.credly.com/images/b93bf373-3da6-4ada-9879-a0c39d6a11f8/image.png",
    link: "https://www.credly.com/users/syed-muhammed-ali/badges#credly",
    sourceLabel: "Credly",
    primaryActionLabel: "Open Badge",
  },
  {
    title: "CSS Essentials",
    issuer: "Cisco",
    date: "Dec 10, 2025",
    pdf: "https://www.credly.com/users/syed-muhammed-ali/badges#credly",
    preview:
      "https://images.credly.com/images/bd2bba36-66ad-4de2-9d91-e29433e51a16/blob",
    link: "https://www.credly.com/users/syed-muhammed-ali/badges#credly",
    sourceLabel: "Credly",
    primaryActionLabel: "Open Badge",
  },
  {
    title: "HTML Essentials",
    issuer: "Cisco",
    date: "Dec 8, 2025",
    pdf: "https://www.credly.com/users/syed-muhammed-ali/badges#credly",
    preview:
      "https://images.credly.com/images/b1c17d0c-e76b-45fc-9b28-87b01ae1caf3/blob",
    link: "https://www.credly.com/users/syed-muhammed-ali/badges#credly",
    sourceLabel: "Credly",
    primaryActionLabel: "Open Badge",
  },
  {
    title: "Fundamentals of Agile Project Management",
    issuer: "Project Management Institute",
    date: "May 15, 2025",
    pdf: "https://www.credly.com/users/syed-muhammed-ali/badges#credly",
    preview:
      "https://images.credly.com/images/2677386a-c65f-4d4d-89f2-5b0babbc77d2/KickoffAgileBadge.png",
    link: "https://www.credly.com/users/syed-muhammed-ali/badges#credly",
    sourceLabel: "Credly",
    primaryActionLabel: "Open Badge",
  },
  {
    title: "Fundamentals of Predictive Project Management",
    issuer: "Project Management Institute",
    date: "May 15, 2025",
    pdf: "https://www.credly.com/users/syed-muhammed-ali/badges#credly",
    preview:
      "https://images.credly.com/images/37f7183c-9a25-4c72-916d-0c21572f5875/image.png",
    link: "https://www.credly.com/users/syed-muhammed-ali/badges#credly",
    sourceLabel: "Credly",
    primaryActionLabel: "Open Badge",
  },
];

const Certificates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certificates" className="py-20 sm:py-32">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">Certificates</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A compact gallery of my Credly badges and certificate PDFs.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {certificates.map((certificate, index) => (
            <motion.article
              key={certificate.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="project-card overflow-hidden h-full"
            >
              <div className="flex h-full flex-col">
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block h-[150px] sm:h-[170px] bg-secondary/60 border-b border-border overflow-hidden p-3"
                >
                  <img
                    src={encodeURI(certificate.preview)}
                    alt={`${certificate.title} badge preview`}
                    className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-background/80 px-2.5 py-1 text-[11px] font-medium text-foreground backdrop-blur">
                    <FileText size={12} />
                    {certificate.sourceLabel ?? "Certificate"}
                  </div>
                  <div className="absolute bottom-3 right-3 rounded-full bg-primary/90 px-2.5 py-1 text-[11px] font-semibold text-primary-foreground shadow-sm">
                    Open
                  </div>
                </a>

                <div className="p-4 sm:p-5 flex flex-1 flex-col justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2.5 mb-2 text-primary">
                      <Award size={18} />
                      <span className="text-xs font-medium uppercase tracking-[0.18em]">
                        {certificate.date}
                      </span>
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-semibold mb-1">
                      {certificate.title}
                    </h3>
                    <p className="text-sm text-primary font-medium">
                      {certificate.issuer}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-nowrap btn-primary inline-flex items-center justify-center gap-2 text-sm py-2.5 px-4"
                    >
                      <ExternalLink size={16} />
                      {certificate.primaryActionLabel ?? "Open"}
                    </a>
                    <a
                      href={certificate.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-nowrap btn-outline inline-flex items-center justify-center gap-2 text-sm py-2.5 px-4"
                    >
                      <FileText size={16} />
                      View Source
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
