import React, { useState, useEffect } from 'react';
import { Calendar, ShieldCheck, Scale, Lock } from 'lucide-react';
import { ASSETS, CONTACT_INFO } from '../constants';

const SLIDES = [
  {
    image: ASSETS.heroJusticeCourt,
    alt: "Tribunal de Justiça e estátua da Justiça em ambiente solene",
    caption: "Tribunal e Fórum de Justiça",
  },
  {
    image: ASSETS.lawCourtroomBench,
    alt: "Bancada solene do tribunal com arquitetura clássica e ambiente jurídico",
    caption: "Atuação em Tribunais e Audiências",
  },
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Troca de imagem acionada automaticamente conforme a rolagem da página
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Ao rolar a página para baixo, faz a transição suave para o segundo ambiente institucional
      if (scrollY > 120) {
        setCurrentSlide(1);
      } else {
        setCurrentSlide(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#agendamento');
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      const mainBtn = document.getElementById('main-booking-button');
      if (mainBtn) {
        setTimeout(() => {
          mainBtn.focus();
          mainBtn.classList.add('ring-4', 'ring-[#C3A45D]/60', 'scale-105');
          setTimeout(() => {
            mainBtn.classList.remove('ring-4', 'ring-[#C3A45D]/60', 'scale-105');
          }, 1200);
        }, 650);
      }
    }
  };

  return (
    <section id="inicio" className="relative min-h-[640px] lg:min-h-[740px] pt-[115px] pb-24 flex items-center overflow-hidden">
      {/* Background Image Carousel com transição suave por rolagem */}
      {SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
        </div>
      ))}

      {/* Deep Navy Overlay (#172B4D) com gradiente institucional de alto contraste */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#172B4D]/95 via-[#172B4D]/90 to-[#20395F]/80 z-10" />

      {/* Linhas geométricas sutis */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#C3A45D_1px,transparent_1px)] [background-size:24px_24px] z-10" />

      {/* Main Content Container */}
      <div className="relative z-20 max-w-[1180px] mx-auto px-4 sm:px-6 w-full py-12 lg:py-16">
        <div className="max-w-2xl text-left">
          {/* Identificação Institucional */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-[#20395F]/70 border border-[#C3A45D]/40 mb-6 backdrop-blur-xs">
            <Scale className="w-3.5 h-3.5 text-[#C3A45D]" />
            <span className="text-[#C3A45D] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
              {CONTACT_INFO.firmName}
            </span>
          </div>

          {/* H1 com tom sóbrio e autoridade jurídica */}
          <h1 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-white leading-[1.15] mb-6 tracking-tight">
            Defesa criminal com <span className="text-[#D2B875] italic">rigor técnico</span>, solidez e discrição.
          </h1>

          {/* Texto Institucional focado em serenidade e garantias */}
          <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-9 max-w-xl font-normal">
            Atuação jurídica especializada perante órgãos investigativos e tribunais. Condução estratégica voltada à salvaguarda intransigente dos direitos e garantias fundamentais.
          </p>

          {/* Chamada para Ação: Agendamento Reservado e Confidencial */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* Botão 2 Acima: Agendar Consulta (Direciona para o 3º botão real de agendamento) */}
            <a
              href="#agendamento"
              onClick={scrollToBooking}
              id="hero-primary-cta"
              className="bg-[#C3A45D] hover:bg-[#b0914c] active:bg-[#9c7f3f] text-white font-semibold text-sm sm:text-base px-8 py-4 rounded shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 tracking-wider uppercase group cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              <span>AGENDAR CONSULTA</span>
            </a>
          </div>

          {/* Selos de Confiança e Conformidade Institucional */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-gray-300">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#C3A45D]" />
              <span>Sigilo Profissional e Confidencialidade</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C3A45D]" />
              <span>{CONTACT_INFO.oabRegistrationText}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Indicadores de slide discretos no rodapé da seção */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              i === currentSlide ? 'w-8 bg-[#C3A45D]' : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
