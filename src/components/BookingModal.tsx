import React, { useEffect, useState } from 'react';
import { X, Shield, Clock, Lock, CheckCircle2, Loader2 } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { useBookingModal } from '../context/BookingModalContext';

export const BookingModal: React.FC = () => {
  const { isBookingOpen, closeBookingModal } = useBookingModal();
  const [isLoading, setIsLoading] = useState(true);

  // Trava a rolagem do body enquanto o modal estiver aberto e ouve tecla ESC
  useEffect(() => {
    if (isBookingOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      setIsLoading(true);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          closeBookingModal();
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isBookingOpen, closeBookingModal]);

  if (!isBookingOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 bg-[#0A1324]/80 backdrop-blur-sm animate-fadeIn"
      onClick={closeBookingModal}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      {/* Container do Modal Responsivo */}
      <div
        className="w-full max-w-4xl h-[95vh] md:h-auto max-h-[95vh] bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200/90 animate-slideUp relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Topo Institucional do Modal */}
        <div className="bg-[#172B4D] text-white px-5 py-4 sm:px-7 sm:py-5 flex items-center justify-between border-b-2 border-[#C3A45D] flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#20395F] flex items-center justify-center border border-[#C3A45D]/40 flex-shrink-0">
              <Shield className="w-5 h-5 text-[#C3A45D]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[#D2B875] text-[11px] sm:text-xs font-semibold uppercase tracking-wider block">
                  Consulta Jurídica Oficial
                </span>
                <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-[#C3A45D]" />
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-gray-300">
                  <Clock className="w-3 h-3 text-[#C3A45D]" />
                  60 min
                </span>
              </div>
              <h3 id="booking-modal-title" className="font-serif-luxury text-lg sm:text-2xl font-bold leading-tight">
                {CONTACT_INFO.lawyerFullName}
              </h3>
              <p className="text-[11px] sm:text-xs text-gray-300 mt-0.5">
                {CONTACT_INFO.lawyerRole} — {CONTACT_INFO.oabNumber}
              </p>
            </div>
          </div>

          {/* Botão de Fechar Acessível e Visível */}
          <button
            onClick={closeBookingModal}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#C3A45D] ml-2 flex-shrink-0"
            aria-label="Fechar janela de agendamento"
            title="Fechar (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Corpo do Modal: Área do Cal.com ajustada exatamente até a linha inferior do calendário no desktop */}
        <div className="flex-1 w-full h-full md:h-[445px] md:flex-none overflow-y-auto md:overflow-hidden overflow-x-hidden relative bg-white">
          {/* Indicador de Carregamento Suave */}
          {isLoading && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/90 gap-3">
              <Loader2 className="w-8 h-8 text-[#C3A45D] animate-spin" />
              <p className="text-xs sm:text-sm font-semibold text-[#172B4D] tracking-wide">
                Carregando calendário oficial do Cal.com...
              </p>
              <p className="text-xs text-gray-500">
                Sincronizando dias e horários disponíveis em tempo real.
              </p>
            </div>
          )}

          {/* Iframe Oficial do Cal.com com corte no desktop até a linha inferior do calendário */}
          <iframe
            src="https://app.cal.com/carlos-uehebs-cauefz/dra-laryssa-consultaa?embed=1&layout=month_view"
            title="Calendário Oficial de Agendamento - Dra. Laryssa Arruda"
            className="w-full h-full min-h-[580px] md:min-h-0 md:h-[445px] border-0 bg-white cal-desktop-embed-iframe"
            allow="camera; microphone; autoplay; fullscreen"
            onLoad={() => setIsLoading(false)}
          />
        </div>

        {/* Rodapé do Modal com Garantias de Confidencialidade */}
        <div className="bg-[#172B4D] text-white/90 px-4 py-2.5 sm:px-6 sm:py-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs flex-shrink-0">
          <div className="flex items-center gap-4 text-gray-300">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C3A45D]" />
              Sigilo Profissional Absoluto
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[#C3A45D]" />
              Conexão Segura
            </span>
          </div>

          <button
            onClick={closeBookingModal}
            className="text-xs text-[#D2B875] hover:text-white underline underline-offset-4 transition-colors font-medium ml-auto"
          >
            Voltar para a página
          </button>
        </div>
      </div>
    </div>
  );
};
