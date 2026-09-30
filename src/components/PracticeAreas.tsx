import React from 'react';
import { 
  Scale, 
  ShieldAlert, 
  FileSearch, 
  Landmark, 
  KeySquare, 
  Briefcase,
  ArrowRight
} from 'lucide-react';
import { PRACTICE_AREAS } from '../constants';

const ICON_MAP: Record<string, React.ElementType> = {
  Scale,
  ShieldAlert,
  FileSearch,
  Landmark,
  KeySquare,
  Briefcase,
};

export const PracticeAreas: React.FC = () => {
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
    }
  };

  return (
    <section id="atuacao" className="py-20 sm:py-28 bg-white">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        {/* Header Centralizado com bastante espaço negativo */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-[#C3A45D] text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase block mb-3">
            Especialização e Rigor
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#172B4D] mb-4">
            Áreas de atuação
          </h2>
          <div className="w-16 h-1 bg-[#C3A45D] mx-auto mb-4 rounded-full" />
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Atuação jurídica especializada para situações que exigem orientação e segurança.
          </p>
        </div>

        {/* Grid de 3 Colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRACTICE_AREAS.map((area) => {
            const IconComponent = ICON_MAP[area.icon] || Scale;
            return (
              <div
                key={area.id}
                className="group relative bg-white border border-gray-200/90 rounded-md p-8 sm:p-9 transition-all duration-300 hover:border-[#C3A45D] hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Top Accent Line on hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C3A45D] rounded-t scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div>
                  {/* Ícone Dourado */}
                  <div className="w-14 h-14 rounded bg-[#172B4D]/5 border border-[#C3A45D]/30 flex items-center justify-center mb-6 group-hover:bg-[#172B4D] group-hover:border-[#C3A45D] transition-colors duration-300">
                    <IconComponent className="w-7 h-7 text-[#C3A45D] group-hover:text-[#D2B875] transition-colors" />
                  </div>

                  {/* Título Serifado */}
                  <h3 className="font-serif-luxury text-xl sm:text-[22px] font-bold text-[#172B4D] mb-3 leading-snug group-hover:text-[#C3A45D] transition-colors">
                    {area.title}
                  </h3>

                  {/* Descrição */}
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {area.description}
                  </p>
                </div>

                {/* Card footer CTA link */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold tracking-wider text-[#172B4D] group-hover:text-[#C3A45D] transition-colors">
                  <a
                    href="#agendamento"
                    onClick={scrollToBooking}
                    className="inline-flex items-center gap-1.5 hover:underline"
                  >
                    <span>CONSULTA RESERVADA</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                  <span className="text-gray-400 font-mono text-[11px]">0{area.id}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
