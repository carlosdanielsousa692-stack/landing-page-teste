import React, { useState, useEffect } from 'react';
import { Menu, X, Scale, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, NAV_LINKS } from '../constants';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Main Header (White, clean, max-w ~1180px) */}
      <div
        className={`bg-white transition-shadow duration-300 ${
          isScrolled ? 'shadow-md border-b border-gray-100' : 'border-b border-gray-100/90'
        }`}
      >
        <div className="max-w-[1180px] mx-auto px-5 sm:px-6 h-[76px] sm:h-[84px] flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => scrollToSection(e, '#inicio')}
            className="flex items-center gap-3 group"
            id="brand-logo-link"
          >
            {/* Minimalist Golden Law Symbol */}
            <div className="w-10 h-10 rounded bg-[#172B4D] flex items-center justify-center border border-[#C3A45D]/40 shadow-sm group-hover:border-[#C3A45D] transition-colors flex-shrink-0">
              <Scale className="w-5 h-5 text-[#C3A45D]" />
            </div>

            <div className="flex flex-col">
              <span className="font-serif-luxury font-bold text-[#172B4D] text-lg sm:text-xl tracking-[0.12em] leading-tight">
                LARYSSA ARRUDA
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.32em] text-[#C3A45D] uppercase mt-0.5">
                ADVOCACIA
              </span>
            </div>
          </a>

          {/* Desktop Nav (Menu Simplificado) */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-[#172B4D] text-[13px] font-semibold tracking-wider hover:text-[#C3A45D] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C3A45D] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Highlighted CTA Button (oculto no mobile) & Mobile Toggle */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Visível apenas a partir de md (desktop / tablets) */}
            <a
              href="#agendamento"
              onClick={(e) => scrollToSection(e, '#agendamento')}
              id="header-cta-button"
              className="hidden md:inline-flex items-center gap-2 bg-[#C3A45D] hover:bg-[#b0914c] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase px-4 sm:px-6 py-2.5 sm:py-3 rounded shadow-sm hover:shadow transition-all duration-300 whitespace-nowrap"
            >
              <span>AGENDAR CONSULTA</span>
            </a>

            {/* Mobile Hamburger Button (bem posicionado, organizado e com espaçamento equilibrado) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-11 h-11 rounded-lg text-[#172B4D] hover:text-[#C3A45D] hover:bg-gray-100/80 active:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C3A45D]/40"
              aria-label={mobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#172B4D]" />
              ) : (
                <Menu className="w-6 h-6 text-[#172B4D]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl px-4 py-6 transition-all animate-fadeIn">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-[#172B4D] text-sm font-semibold tracking-wide py-2 border-b border-gray-50 hover:text-[#C3A45D] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <a
                  href="#agendamento"
                  onClick={(e) => scrollToSection(e, '#agendamento')}
                  className="w-full text-center bg-[#C3A45D] hover:bg-[#b0914c] text-white font-semibold text-sm py-3 rounded tracking-wider uppercase transition-colors"
                >
                  AGENDAR CONSULTA
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
