import React from 'react';
import { UserCheck, Compass, MessageSquareText, Award } from 'lucide-react';
import { ASSETS } from '../constants';

export const DifferentialsBar: React.FC = () => {
  const items = [
    {
      title: "ATENDIMENTO PERSONALIZADO",
      desc: "Análise individual de cada situação.",
      icon: UserCheck,
    },
    {
      title: "ESTRATÉGIA JURÍDICA",
      desc: "Planejamento e orientação para cada caso.",
      icon: Compass,
    },
    {
      title: "COMUNICAÇÃO TRANSPARENTE",
      desc: "Informações claras durante o atendimento.",
      icon: MessageSquareText,
    },
    {
      title: "COMPROMISSO",
      desc: "Dedicação e responsabilidade em cada etapa.",
      icon: Award,
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-[#172B4D] overflow-hidden">
      {/* Imagem jurídica ao fundo com overlay escuro */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.legalOfficeScale}
          alt="Ambiente jurídico clássico com balança e livros de direito"
          className="w-full h-full object-cover object-center opacity-15"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#172B4D]/95 via-[#172B4D]/90 to-[#20395F]/95" />
      </div>

      {/* Grid com 4 elementos horizontais */}
      <div className="relative z-10 max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 lg:divide-x divide-white/10">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`pt-6 sm:pt-0 ${idx > 0 ? 'lg:pl-6' : ''} flex flex-col items-center text-center group`}
              >
                {/* Ícone jurídico minimalista em dourado */}
                <div className="w-14 h-14 rounded-full bg-[#20395F]/80 border border-[#C3A45D]/50 flex items-center justify-center mb-4 group-hover:border-[#C3A45D] group-hover:scale-105 transition-all duration-300">
                  <Icon className="w-6 h-6 text-[#C3A45D]" />
                </div>

                <h3 className="font-serif-luxury text-sm sm:text-base font-bold text-white tracking-wider mb-2 uppercase">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed max-w-[220px]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
