import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Download,
  Facebook,
  Send,
  CheckCircle,
} from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=syeadmuhammedalimazhar@gmail.com&su=${subject}&body=${body}`,
      "_blank",
    );
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

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
            Have a project in mind or just want to chat? Drop me a message and
            I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-8 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="project-card p-6 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 text-muted-foreground"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-muted-foreground"
                  >
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-muted-foreground"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project, idea, or just say hello..."
                  className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                {sent ? (
                  <>
                    <CheckCircle size={18} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info + Social */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-5"
          >
            {/* Info Card */}
            <div className="project-card p-6 space-y-5">
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <Mail size={18} />
                </div>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=syeadmuhammedalimazhar@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-primary transition-colors truncate"
                >
                  syeadmuhammedalimazhar@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <MapPin size={18} />
                </div>
                <span className="text-sm">Karachi, Pakistan</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="project-card p-6 space-y-3">
              <p className="text-sm font-medium text-muted-foreground mb-3">
                Find me on
              </p>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://github.com/syedmuhammadali-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all text-sm text-muted-foreground hover:text-primary-foreground"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/syed-muhammed-ali/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all text-sm text-muted-foreground hover:text-primary-foreground"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a
                  href="https://web.facebook.com/ali.mazhar.272106"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all text-sm text-muted-foreground hover:text-primary-foreground"
                >
                  <Facebook size={16} /> Facebook
                </a>
                <a
                  href="https://wa.me/923190586822"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-secondary hover:bg-green-600 hover:text-white transition-all text-sm text-muted-foreground hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.52 3.48A11.936 11.936 0 0012 0C5.37 0 0 5.37 0 12c0 2.12.55 4.08 1.52 5.82L0 24l6.36-1.64A11.936 11.936 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 21.5a9.5 9.5 0 01-5.16-1.49l-.37-.22-3.76.97.96-3.67-.24-.38A9.5 9.5 0 1121.5 12 9.504 9.504 0 0112 21.5zm5.43-7.53c-.29-.14-1.71-.84-1.97-.94s-.46-.14-.66.14-.76.94-.93 1.13-.34.21-.63.07a8.49 8.49 0 01-2.5-1.54 9.27 9.27 0 01-1.72-2.12c-.18-.31 0-.48.13-.62.13-.13.29-.34.44-.51.15-.17.2-.28.3-.47.1-.18.05-.34-.02-.48s-.66-1.58-.91-2.17c-.24-.57-.49-.49-.66-.5-.17-.01-.37-.01-.56-.01s-.48.07-.73.34c-.24.26-.92.9-.92 2.19s.94 2.53 1.07 2.7c.14.17 1.86 2.84 4.51 3.97.63.27 1.12.43 1.5.55.63.2 1.2.17 1.65.1.5-.08 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.18-.54-.32z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
              <a
                href="/SYED-MUHAMMAD-ALI.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2 w-full mt-3"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>

            {/* Quick Response Note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center text-sm text-muted-foreground"
            >
              I typically respond within 24 hours.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
