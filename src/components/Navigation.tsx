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
    { name: "Our Services", href: "#categories" },
    { name: "How We Work", href: "#how-we-work" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "About Us", href: "#about-us" },
    { name: "FAQs", href: "#faq" },
    { name: "Contact Us", href: "#contact" },
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
        className={`hidden md:flex nav-floating transition-all space-x-8 duration-300 items-center justify-between mx-auto w-[900px] px-6 ${
          scrolled ? "bg-card/900" : "bg-card/60"
        } backdrop-blur-sm border-b border-border`}
      >
        {/* Logo inside container */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            const element = document.querySelector("#home");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <img
            src="/h-l.png"
            alt="Logo"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Desktop Nav Items */}
        <div className="flex items-center space-x-4 text-[16px] md:space-x-3 lg:space-x-8">
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
      <nav
        className={`md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 border-b border-border backdrop-blur-md transition-all duration-300 ${
          scrolled ? "bg-card/90" : "bg-card/60"
        }`}
      >
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            const element = document.querySelector("#home");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <img
            src="/h-l.png"
            alt="Logo"
            className="h-8 w-auto object-contain"
          />
        </div>

        {/* Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-full border border-border border-foreground text-foreground hover:bg-card/80 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-[64px] right-4 w-60 bg-card rounded-2xl border border-border shadow-2xl">
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
