import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ASSETS, CONTACT_INFO } from '../constants';

export const About: React.FC = () => {
  const scrollToPractice = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#atuacao');
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
    <section id="sobre" className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Coluna Esquerda: Cartão Limpo e Elegante com Foto da Advogada */}
          <div className="lg:col-span-5">
            <div className="mx-auto max-w-md lg:max-w-none">
              {/* Cartão institucional com cantos arredondados corretos e sem molduras deslocadas */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200/90 transition-all duration-300 hover:shadow-2xl flex flex-col">
                {/* Imagem da Profissional */}
                <div className="relative overflow-hidden bg-gray-100">
                  <img
                    src={ASSETS.lawyerPortrait}
                    alt={`${CONTACT_INFO.lawyerFullName} - ${CONTACT_INFO.lawyerRole}`}
                    className="w-full h-auto object-cover object-top max-h-[460px] sm:max-h-[500px] transition-transform duration-700 hover:scale-102"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Identificação Institucional totalmente integrada dentro da caixa */}
                <div className="bg-[#172B4D] p-5 sm:p-6 border-t-2 border-[#C3A45D]/40 text-white">
                  <p className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-wide text-white">
                    {CONTACT_INFO.lawyerFullName}
                  </p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C3A45D] flex-shrink-0" />
                    <p className="text-[#D2B875] text-xs sm:text-sm font-semibold tracking-wider uppercase">
                      {CONTACT_INFO.lawyerRole} — {CONTACT_INFO.oabNumber}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Conteúdo Institucional */}
          <div className="lg:col-span-7">
            {/* Título */}
            <h2 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172B4D] leading-tight">
              Compromisso com cada caso.
            </h2>

            {/* Subtítulo em dourado e itálico */}
            <p className="text-[#C3A45D] italic font-serif-luxury text-lg sm:text-xl mt-2 mb-4 font-normal">
              Atendimento próximo, estratégico e responsável.
            </p>

            {/* Linha decorativa dourada */}
            <div className="w-16 h-1 bg-[#C3A45D] rounded-full mb-6" />

            {/* Textos */}
            <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                A <strong>Laryssa Arruda – Advocacia</strong> oferece atendimento jurídico personalizado, buscando compreender cada situação de forma individual e apresentar orientações claras e estratégicas.
              </p>
              <p>
                Nosso trabalho é pautado pela seriedade, ética, dedicação e compromisso com os interesses de cada cliente.
              </p>
            </div>

            {/* Pilares visuais discretos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-8 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2.5 text-sm text-[#172B4D] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#C3A45D] flex-shrink-0" />
                <span>Atuação pontual e preventiva</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#172B4D] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#C3A45D] flex-shrink-0" />
                <span>Sigilo absoluto das informações</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#172B4D] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#C3A45D] flex-shrink-0" />
                <span>Rigor técnico em cada petição</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#172B4D] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#C3A45D] flex-shrink-0" />
                <span>Acompanhamento constante</span>
              </div>
            </div>

            {/* Botão: CONHEÇA NOSSA ATUAÇÃO */}
            <div className="pt-2">
              <a
                href="#atuacao"
                onClick={scrollToPractice}
                id="about-action-button"
                className="inline-flex items-center gap-3 bg-[#172B4D] hover:bg-[#20395F] text-white font-semibold text-sm sm:text-base px-8 py-4 rounded shadow hover:shadow-md transition-all duration-300 tracking-wider uppercase group"
              >
                <span>CONHEÇA NOSSA ATUAÇÃO</span>
                <ArrowRight className="w-4 h-4 text-[#C3A45D] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
