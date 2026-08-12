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
            <a
              href="https://www.npmjs.com/~syedmuhammadali-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 text-primary hover:text-primary-foreground"
            >
              npm
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            Built with React & Tailwind CSS
          </p>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
