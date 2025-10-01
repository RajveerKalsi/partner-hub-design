import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Categories", href: "#categories" },
    { name: "Products", href: "#products" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.querySelector(href);
          element?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* ====================== Desktop Nav ====================== */}
      <nav
        className={`hidden md:flex nav-floating transition-all space-x-8 duration-300 items-center justify-between mx-auto max-w-6xl px-6 ${
          scrolled ? "bg-card/100" : "bg-card/50"
        } backdrop-blur-sm border-b border-border`}
      >
        {/* Logo inside container */}
        <div className="flex items-center">
          <img
            src="/h-l.png"
            alt="Logo"
            className="h-8 w-auto object-contain"
          />
        </div>

        {/* Desktop Nav Items */}
        <div className="flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              {item.name}
            </button>
          ))}
        </div>
      </nav>

      {/* ====================== Mobile Nav ====================== */}
      {/* Mobile Logo (separate, pinned left) */}
      <div className="fixed top-5 left-4 z-50 md:hidden pointer-events-none">
        <img src="/h-l.png" alt="Logo" className="h-8 w-auto object-contain" />
      </div>

      {/* Mobile Hamburger (separate, pinned right with its own background) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`md:hidden fixed top-4 right-4 z-50 p-2 rounded-full border border-border 
    ${scrolled ? "bg-card/100" : "bg-card/50"} 
    backdrop-blur-sm text-foreground hover:bg-card/90 transition-colors`}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-16 right-4 w-60 bg-card rounded-2xl border border-border shadow-2xl">
            <div className="p-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
