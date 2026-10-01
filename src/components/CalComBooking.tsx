import React from 'react';
import { Calendar, Clock, Shield, CheckCircle2, Lock, ArrowRight, UserCheck } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { useBookingModal } from '../context/BookingModalContext';

export const CalComBooking: React.FC = () => {
  const { openBookingModal } = useBookingModal();

  return (
    <section id="agendamento" className="py-20 sm:py-28 bg-[#F8F9FA] relative">
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
            Selecione a data e o horário diretamente no calendário oficial. O atendimento é individual, com garantia irrestrita de sigilo profissional.
          </p>
        </div>

        {/* Card Centralizado de Agendamento */}
        <div className="max-w-3xl mx-auto bg-white border border-gray-200/90 rounded-2xl shadow-xl overflow-hidden">
          {/* Topo Institucional do Agendador */}
          <div className="bg-[#172B4D] text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-[#C3A45D]">
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

            <div className="flex flex-wrap items-center gap-2.5">
              <div className="flex items-center gap-2 bg-[#20395F] py-1.5 px-3.5 rounded border border-white/10 text-xs text-gray-200">
                <Clock className="w-4 h-4 text-[#C3A45D]" />
                <span>Duração: 60 minutos</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#20395F]/80 py-1.5 px-3 rounded border border-white/10 text-xs text-[#D2B875]">
                <Calendar className="w-3.5 h-3.5" />
                <span>Agenda Aberta</span>
              </div>
            </div>
          </div>

          {/* Painel Central com Chamada Principal de Agendamento */}
          <div className="p-6 sm:p-10 text-center flex flex-col items-center">
            {/* Ícone de Destaque */}
            <div className="w-16 h-16 rounded-full bg-[#172B4D]/5 border-2 border-[#C3A45D]/40 flex items-center justify-center mb-6 text-[#C3A45D]">
              <Calendar className="w-8 h-8" />
            </div>

            <h4 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#172B4D] mb-3">
              Calendário Oficial de Atendimento
            </h4>
            <p className="text-gray-600 text-sm sm:text-base max-w-lg mb-8 leading-relaxed">
              Clique no botão abaixo para abrir a agenda interativa oficial. Você poderá escolher o dia e horário que melhor se adaptem à sua rotina, com confirmação imediata.
            </p>

            {/* Passos do Agendamento */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-xl mb-9 text-left">
              <div className="bg-[#F8F9FA] p-4 rounded-lg border border-gray-100 flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#172B4D] text-[#D2B875] text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <span className="text-xs font-bold text-[#172B4D] block mb-0.5">Escolha o Dia</span>
                  <span className="text-[11px] text-gray-500 leading-tight block">Veja os dias disponíveis no mês</span>
                </div>
              </div>

              <div className="bg-[#F8F9FA] p-4 rounded-lg border border-gray-100 flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#172B4D] text-[#D2B875] text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <span className="text-xs font-bold text-[#172B4D] block mb-0.5">Selecione a Hora</span>
                  <span className="text-[11px] text-gray-500 leading-tight block">Horários com reserva exclusiva</span>
                </div>
              </div>

              <div className="bg-[#F8F9FA] p-4 rounded-lg border border-gray-100 flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#172B4D] text-[#D2B875] text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <span className="text-xs font-bold text-[#172B4D] block mb-0.5">Confirmação</span>
                  <span className="text-[11px] text-gray-500 leading-tight block">Receba o link e dados por e-mail</span>
                </div>
              </div>
            </div>

            {/* BOTÃO PRINCIPAL DE AGENDAMENTO */}
            <button
              onClick={openBookingModal}
              id="main-booking-button"
              className="w-full sm:w-auto bg-[#C3A45D] hover:bg-[#b0914c] active:bg-[#9c7f3f] text-white font-semibold text-base sm:text-lg px-9 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 tracking-wider uppercase group cursor-pointer"
            >
              <Calendar className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              <span>AGENDAR CONSULTA</span>
              <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-xs text-gray-400 mt-3 flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[#C3A45D]" />
              <span>Abre o agendamento oficial em popup interativo seguro</span>
            </p>

            {/* Garantias Institucionais */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 pt-6 border-t border-gray-100 text-xs text-gray-600 text-center w-full">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C3A45D]" />
                <span>Sigilo Profissional Absoluto</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C3A45D]" />
                <span>Confirmação Imediata por E-mail</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <UserCheck className="w-4 h-4 text-[#C3A45D]" />
                <span>Conforme Provimento 205/2021 da OAB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
