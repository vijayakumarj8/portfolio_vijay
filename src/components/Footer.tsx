const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Your Name. Built with passion and React.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
