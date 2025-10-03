import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Mission', href: '#company' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' }
    ],
    services: [
      { name: 'Brand Partnerships', href: '#categories' },
      { name: 'Product Showcase', href: '#products' },
      { name: 'Consulting', href: '#' },
      { name: 'Support', href: '#contact' }
    ],
    // resources: [
    //   { name: 'Blog', href: '#' },
    //   { name: 'Case Studies', href: '#' },
    //   { name: 'Documentation', href: '#' },
    //   { name: 'Help Center', href: '#' }
    // ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">Houston Logistics</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Connecting exceptional brands with discerning customers through 
                strategic partnerships and innovative solutions.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-accent" />
                <span className="text-primary-foreground/90">partnerships@logistics.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-accent" />
                <span className="text-primary-foreground/90">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-accent" />
                <span className="text-primary-foreground/90">123 Business District, City</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4 text-lg">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-primary-foreground/80 hover:text-accent transition-colors cursor-pointer"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-primary-foreground/80 hover:text-accent transition-colors cursor-pointer"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* <div>
              <h4 className="font-semibold mb-4 text-lg">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-primary-foreground/80 hover:text-accent transition-colors cursor-pointer"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>

          {/* Newsletter & Social */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h4 className="font-semibold mb-4 text-lg">Our Mission</h4>
              <p className="text-primary-foreground/80 text-sm mb-4">
                We connect premium brands with discerning customers, delivering innovation, quality, and trust in every partnership.
              </p>
              {/* <h4 className="font-semibold mb-4 text-lg">Stay Updated</h4>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Subscribe to our newsletter for the latest partnership opportunities 
                and industry insights.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-l-lg focus:outline-none focus:border-accent text-primary-foreground placeholder-primary-foreground/60"
                />
                <button className="px-4 py-2 bg-accent text-accent-foreground rounded-r-lg hover:bg-accent-hover transition-colors">
                  <Mail size={18} />
                </button>
              </div> */}
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                      aria-label={social.name}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-primary-foreground/80 text-sm">
              © {currentYear} Houston Logistics. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;