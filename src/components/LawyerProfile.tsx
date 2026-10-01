import React from 'react';
import { Shield, Scale, MapPin, Calendar, Award, Lock, FileText } from 'lucide-react';
import { ASSETS, CONTACT_INFO } from '../constants';

export const LawyerProfile: React.FC = () => {

  return (
    <section id="autoridade" className="py-20 sm:py-28 bg-[#F8F9FA] relative">
      {/* Anchor compatível para #advogada */}
      <span id="advogada" className="absolute -top-20" aria-hidden="true" />

      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        {/* Header da Seção de Autoridade */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#C3A45D] text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase block mb-3">
            Autoridade Jurídica e Defesa Técnica
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#172B4D] mb-4">
            Liderança e Prática Profissional
          </h2>
          <div className="w-16 h-1 bg-[#C3A45D] mx-auto mb-4 rounded-full" />
          <p className="text-gray-600 text-base sm:text-lg italic font-serif-luxury">
            Atuação pautada pela serenidade, rigor processual e salvaguarda das prerrogativas constitucionais.
          </p>
        </div>

        {/* Bloco Central de Autoridade */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-white p-8 sm:p-12 lg:p-14 rounded-lg shadow-sm border border-gray-200/90">
          {/* Espaço para Foto Profissional e Destaque OAB */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Moldura da Foto */}
              <div className="relative rounded-md overflow-hidden shadow-xl border-2 border-[#C3A45D]/40">
                <img
                  src={ASSETS.lawyerPortrait}
                  alt={`${CONTACT_INFO.lawyerFullName} - ${CONTACT_INFO.lawyerRole}`}
                  className="w-full h-auto object-cover object-top max-h-[500px]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#172B4D]/80 via-transparent to-transparent opacity-50" />
              </div>

              {/* Bloco Oficial de Identificação da OAB */}
              <div className="mt-5 bg-[#172B4D] text-white p-5 rounded-md shadow-md border-l-4 border-[#C3A45D]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded bg-[#20395F] flex items-center justify-center border border-[#C3A45D]/40">
                    <Scale className="w-4 h-4 text-[#C3A45D]" />
                  </div>
                  <div>
                    <span className="text-xs text-[#D2B875] uppercase font-semibold tracking-wider block">
                      Inscrição Regular na Ordem
                    </span>
                    <span className="font-serif-luxury text-base font-bold text-white tracking-wide">
                      {CONTACT_INFO.oabNumber}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-gray-300 border-t border-white/10 pt-2 leading-relaxed">
                  Habilitação profissional e atuação em estrita observância ao Estatuto da Advocacia e da OAB (Lei nº 8.906/1994).
                </p>
              </div>
            </div>
          </div>

          {/* Espaço para Nome, Formação e Detalhamento da Autoridade */}
          <div className="lg:col-span-7 pt-2 lg:pt-0">
            {/* Nome Completo do Profissional */}
            <div className="mb-6">
              <span className="text-[#C3A45D] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase block mb-1">
                Advogada Titular
              </span>
              <h3 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#172B4D] mb-2 leading-tight">
                {CONTACT_INFO.lawyerFullName}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base font-medium flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[#C3A45D]" />
                <span>{CONTACT_INFO.lawyerRole} | {CONTACT_INFO.oabNumber}</span>
              </p>
            </div>

            {/* Texto Sóbrio, Institucional e Focado em Autoridade */}
            <div className="space-y-4 text-gray-700 text-base leading-relaxed mb-8">
              <p>
                A advocacia criminal de excelência demanda análise pormenorizada de cada elemento dos autos, estudo minucioso da jurisprudência contemporânea e uma condução técnica firme, resguardando integralmente o direito à ampla defesa e ao devido processo legal.
              </p>
              <p>
                À frente da <strong>{CONTACT_INFO.firmName}</strong>, dedica-se ao acompanhamento direto de constituintes em investigações preliminares, processos penais, audiências de custódia e recursos perante os Tribunais de Justiça e Tribunais Superiores.
              </p>
              <p>
                O exercício da advocacia neste escritório pauta-se pelo dever irrestrito de sigilo profissional, discrição solene e comunicação contínua e transparente sobre os rumos procedimentais.
              </p>
            </div>

            {/* Indicadores Estruturados de Autoridade */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-5 border-y border-gray-100 mb-8 text-sm">
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-[#C3A45D] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#172B4D] block">Registro Profissional</span>
                  <span className="text-gray-600">{CONTACT_INFO.oabRegistrationText}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C3A45D] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#172B4D] block">Jurisdição Principal</span>
                  <span className="text-gray-600">Coroatá – MA, Região e Tribunais Superiores</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-[#C3A45D] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#172B4D] block">Confidencialidade</span>
                  <span className="text-gray-600">Dever ético de sigilo em todas as fases</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-[#C3A45D] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#172B4D] block">Modalidades</span>
                  <span className="text-gray-600">Atendimento Presencial ou Videoconferência</span>
                </div>
              </div>
            </div>

            {/* Informações Institucionais de Credenciamento */}
            <div className="pt-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-t border-gray-200/90">
              <span className="flex items-center gap-1.5 font-medium text-[#172B4D]">
                <Shield className="w-4 h-4 text-[#C3A45D]" />
                {CONTACT_INFO.oabRegistrationText}
              </span>
              <span className="w-1 h-1 rounded-full bg-gray-300 hidden sm:inline-block" />
              <span>Atuação pautada pela estrita conformidade ética e sigilo profissional</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
