const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Ali. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-2">
              <a
                href="https://www.npmjs.com/~syedmuhammadali-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 text-primary hover:text-primary-foreground"
              >
                npm
              </a>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://github.com/syedmuhammadali-dev/React-Dev-Footer-pkg"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 text-primary hover:text-primary-foreground"
              >
                React-Dev-Footer-pkg
              </a>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://github.com/syedmuhammadali-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 text-primary hover:text-primary-foreground"
              >
                GitHub
              </a>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/syed-muhammed-ali/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 text-primary hover:text-primary-foreground"
              >
                LinkedIn
              </a>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="mailto:syeadmuhammedalimazhar@gmail.com"
                className="underline underline-offset-2 text-primary hover:text-primary-foreground"
              >
                Email
              </a>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
