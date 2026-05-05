import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Download,
  Facebook,
} from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 sm:py-32">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities, whether
            that's a project, a job opportunity, or just a chat about
            technology. Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-xl mx-auto"
        >
          {/* Contact Info */}
          <div className="project-card p-8 text-center mb-8">
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-3 text-muted-foreground">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=syeadmuhammedalimazhar@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} className="inline-block mr-3" />
                  syeadmuhammedalimazhar@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={20} className="text-primary" />
                <span>Karachi, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Social Links & Resume */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            <a
              href="https://github.com/syedmuhammadali-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/syed-muhammed-ali/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href="https://web.facebook.com/ali.mazhar.272106"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Facebook size={18} />
              Facebook
            </a>
            <a
              href="https://wa.me/923190586822"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-green-500 hover:bg-green-600 hover:text-white transition-colors"
              aria-label="WhatsApp"
            >
              {/* WhatsApp SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="inline-block mr-3 mb-1"
              >
                <path d="M20.52 3.48A11.936 11.936 0 0012 0C5.37 0 0 5.37 0 12c0 2.12.55 4.08 1.52 5.82L0 24l6.36-1.64A11.936 11.936 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 21.5a9.5 9.5 0 01-5.16-1.49l-.37-.22-3.76.97.96-3.67-.24-.38A9.5 9.5 0 1121.5 12 9.504 9.504 0 0112 21.5zm5.43-7.53c-.29-.14-1.71-.84-1.97-.94s-.46-.14-.66.14-.76.94-.93 1.13-.34.21-.63.07a8.49 8.49 0 01-2.5-1.54 9.27 9.27 0 01-1.72-2.12c-.18-.31 0-.48.13-.62.13-.13.29-.34.44-.51.15-.17.2-.28.3-.47.1-.18.05-.34-.02-.48s-.66-1.58-.91-2.17c-.24-.57-.49-.49-.66-.5-.17-.01-.37-.01-.56-.01s-.48.07-.73.34c-.24.26-.92.9-.92 2.19s.94 2.53 1.07 2.7c.14.17 1.86 2.84 4.51 3.97.63.27 1.12.43 1.5.55.63.2 1.2.17 1.65.1.5-.08 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.18-.54-.32z" />
              </svg>
              Chat on WhatsApp
            </a>

            <a
              href="/SYED-MUHAMMAD-ALI.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          {/* Quick Response Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center text-sm text-muted-foreground mt-8"
          >
            I typically respond to messages within 24 hours. For urgent matters,
            feel free to reach out on LinkedIn.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
