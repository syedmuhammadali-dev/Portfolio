import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SEEN_KEY = "splash-seen";
const SHOW_MS = 3000;

const NAME = "Syed Muhammad Ali".split(" ");

const readSeen = () => {
  try {
    return sessionStorage.getItem(SEEN_KEY) === "1";
  } catch {
    return false;
  }
};

const SplashScreen = () => {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return !reduced && !readSeen();
  });

  useEffect(() => {
    if (!visible) return;
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {
        /* storage unavailable */
      }
      setVisible(false);
    }, SHOW_MS);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          aria-hidden="true"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-background px-4 text-center"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            className="pointer-events-none absolute h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-3xl"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            transition={{ duration: 2.4, ease: "easeOut" }}
          />

          <motion.div
            className="relative mb-6 h-28 w-28 sm:h-32 sm:w-32"
            initial={{ scale: 0, rotate: -90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 160, damping: 14 }}
          >
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-primary"
              initial={{ scale: 1, opacity: 0.7 }}
              animate={{ scale: 1.45, opacity: 0 }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
            />
            <img
              src="/Ali-img.jpeg"
              alt=""
              width={128}
              height={128}
              className="relative h-full w-full rounded-full border-2 border-primary/60 object-cover shadow-[var(--shadow-glow)]"
            />
          </motion.div>

          <h2 className="relative flex flex-wrap justify-center gap-x-3 font-display text-[clamp(1.8rem,7vw,3.8rem)] font-bold leading-tight">
            {NAME.map((word, i) => (
              <span key={word} className="overflow-hidden">
                <motion.span
                  className="inline-block text-gradient"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h2>

          <motion.p
            className="relative mt-3 text-[clamp(0.85rem,3vw,1.25rem)] font-medium text-muted-foreground"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            Full Stack &amp; React Native Developer
          </motion.p>

          <motion.p
            className="relative mt-1 text-xs tracking-[0.25em] text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            MERN • PERN • EXPO
          </motion.p>

          <div className="relative mt-8 h-[3px] w-48 overflow-hidden rounded-full bg-muted">
            <motion.div
              className="h-full origin-left rounded-full bg-primary"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: (SHOW_MS - 300) / 1000, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
