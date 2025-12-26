import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("services");

  // Detect scroll for navbar background change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect active section based on scroll position
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ["services", "products", "why-choose-us", "about", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "About", href: "#about" },
  ];

  const handleNavClick = (href) => {
    setMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-black/30 border-b border-white/20 shadow-lg"
            : "backdrop-blur-sm bg-black/10 border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4">
          
          {/* Left: Logo */}
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#services");
            }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <img
              src="/images/logo.jpeg"
              alt="GE&B Logo"
              className="h-24 w-24 md:h-36 md:w-36 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
            />
          </a>

          {/* Center/Right: Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-white">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative text-base font-medium transition-all duration-300 group ${
                  activeSection === link.href.substring(1)
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                {link.name}
                
                {/* Active indicator */}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-yellow-400 transition-all duration-300 ${
                    activeSection === link.href.substring(1)
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            ))}

            {/* CTA Button */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="px-6 py-2.5 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 
                       text-white font-semibold rounded-lg transition-all duration-300 
                       hover:shadow-lg hover:shadow-yellow-500/50 hover:scale-105 active:scale-95"
            >
              Get Quote
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden p-2 text-white hover:text-yellow-400 transition-colors duration-300"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed inset-0 z-[9999] transition-all duration-300 ${
          menuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Slide Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-black/90 backdrop-blur-xl border-l border-white/10 transform transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-2 border-b border-white/10">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.jpeg"
                alt="GE&B Logo"
                className="h-26 w-26 object-cover rounded-lg"
              />
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 text-white hover:text-yellow-400 transition-colors duration-300"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col p-6 gap-2">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
                  activeSection === link.href.substring(1)
                    ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                    : "text-white hover:bg-white/5 hover:text-yellow-400"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.name}
              </a>
            ))}

            {/* CTA Button in Mobile */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="mt-4 px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 
                       text-white font-semibold rounded-lg text-center transition-all duration-300 
                       hover:shadow-lg hover:shadow-yellow-500/50"
            >
              Get Quote
            </a>
          </nav>

          {/* Footer Info */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
            <p className="text-white/60 text-sm text-center">
              © {new Date().getFullYear()} GE&B
              <br />
              <span className="text-xs">Gohar Ejaz & Brothers</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}