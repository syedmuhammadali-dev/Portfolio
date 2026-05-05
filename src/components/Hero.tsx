import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Facebook } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center hero-glow pt-20 sm:pt-24">
      <div className="section-container py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-secondary border border-border mb-6 sm:mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs sm:text-sm text-muted-foreground">
              Available for work
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-[clamp(1.9rem,8vw,4.6rem)] font-bold leading-[1.1] mb-5 sm:mb-6"
          >
            Hello, I'm <span className="text-gradient">Syed Muhammad Ali</span>
            <span className="block mt-2 text-[clamp(1.05rem,4.4vw,2.5rem)] leading-[1.25]">
              Full Stack MERN & React Native Developer
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto px-1"
          >
            Full Stack Developer passionate about creating responsive web and
            mobile apps. Pursuing ADP in Software Engineering while building
            real-world applications with MERN Stack and React Native.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12"
          >
            <a
              href="#projects"
              className="btn-primary w-full sm:w-auto sm:min-w-[170px] text-center"
            >
              View My Work
            </a>
            <a
              href="/SYED-MUHAMMAD-ALI.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full sm:w-auto sm:min-w-[170px] text-center"
            >
              Get Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-5"
          >
            <a
              href="https://github.com/syedmuhammadali-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/syed-muhammed-ali/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://web.facebook.com/ali.mazhar.272106"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=syeadmuhammedalimazhar@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={18} className="sm:w-5 sm:h-5" />
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-muted-foreground"
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
