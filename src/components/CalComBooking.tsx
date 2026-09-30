import React, { useEffect } from 'react';
import { Calendar, Clock, Shield, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const CalComBooking: React.FC = () => {
  useEffect(() => {
    // Cal inline embed code begins
    (function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          const cal = C.Cal;
          const ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement('script')).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === 'string') {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ['initNamespace', namespace]);
            } else {
              p(cal, ar);
            }
            return;
          }
          p(cal, ar);
        };
    })(window, 'https://app.cal.com/embed/embed.js', 'init');

    const Cal = (window as any).Cal;
    if (Cal) {
      Cal('init', 'dra-laryssa-consultaa', { origin: 'https://app.cal.com' });
      Cal.config = Cal.config || {};
      Cal.config.forwardQueryParams = true;

      if (Cal.ns && Cal.ns['dra-laryssa-consultaa']) {
        Cal.ns['dra-laryssa-consultaa']('inline', {
          elementOrSelector: '#my-cal-inline-dra-laryssa-consultaa',
          config: {
            layout: 'month_view',
            useSlotsViewOnSmallScreen: 'true',
            theme: 'light',
          },
          calLink: 'carlos-uehebs-cauefz/dra-laryssa-consultaa',
        });

        Cal.ns['dra-laryssa-consultaa']('ui', {
          hideEventTypeDetails: false,
          layout: 'month_view',
          styles: {
            branding: {
              brandColor: '#172B4D',
            },
          },
        });
      }
    }
  }, []);

  return (
    <section id="agendamento" className="py-20 sm:py-28 bg-white relative">
      {/* Anchor compatível para navegação suave */}
      <span id="consulta" className="absolute -top-20" aria-hidden="true" />

      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        {/* Header Centralizado e Sóbrio */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[#C3A45D] text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase block mb-3">
            Atendimento Reservado e Confidencial
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#172B4D] mb-4">
            Agende sua Consulta Jurídica
          </h2>
          <div className="w-16 h-1 bg-[#C3A45D] mx-auto mb-4 rounded-full" />
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Selecione a data e o horário diretamente no calendário oficial abaixo. O atendimento é individual, com garantia irrestrita de sigilo profissional.
          </p>
        </div>

        {/* Card Centralizado com o Calendário Oficial */}
        <div className="max-w-4xl mx-auto bg-[#FBFBFC] border border-gray-200/90 rounded-xl shadow-lg overflow-hidden">
          {/* Topo Institucional do Agendador */}
          <div className="bg-[#172B4D] text-white p-5 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-[#C3A45D]">
            <div>
              <div className="flex items-center gap-2 text-[#D2B875] text-xs font-semibold uppercase tracking-wider mb-1">
                <Shield className="w-4 h-4" />
                <span>Consulta Jurídica Oficial</span>
              </div>
              <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold">
                {CONTACT_INFO.lawyerFullName}
              </h3>
              <p className="text-xs text-gray-300 mt-0.5">
                {CONTACT_INFO.lawyerRole} — {CONTACT_INFO.oabNumber}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 bg-[#20395F] py-1.5 px-3.5 rounded border border-white/10 text-xs text-gray-200">
                <Clock className="w-4 h-4 text-[#C3A45D]" />
                <span>Duração: 60 minutos</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#20395F]/70 py-1.5 px-3 rounded border border-white/10 text-xs text-[#D2B875]">
                <Calendar className="w-3.5 h-3.5" />
                <span>Agenda Aberta</span>
              </div>
            </div>
          </div>

          {/* Container do Calendário Ajustado e Limpo */}
          <div className="p-3 sm:p-6 bg-white">
            <div className="cal-embed-wrapper relative w-full rounded-lg overflow-hidden border border-gray-200/80 bg-white h-[480px] sm:h-[445px]">
              {/* Cal inline embed */}
              <div
                id="my-cal-inline-dra-laryssa-consultaa"
                className="w-full h-full overflow-hidden"
              />

              {/* Máscara sólida de segurança contra a marca d'água */}
              <div
                className="absolute bottom-0 left-0 right-0 h-10 bg-white pointer-events-none z-30"
                aria-hidden="true"
              />
            </div>

            {/* Garantias Institucionais abaixo do calendário */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-5 border-t border-gray-100 text-xs text-gray-600 text-center">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C3A45D]" />
                <span>Sigilo Profissional Absoluto</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C3A45D]" />
                <span>Confirmação Imediata por E-mail</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C3A45D]" />
                <span>Conforme Provimento 205/2021 da OAB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
