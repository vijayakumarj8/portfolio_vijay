const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()}  Vijayakumar. Fueled by coffee, code, and creativity.

        </p>
      </div>
    </footer>
  );
};

export default Footer;
