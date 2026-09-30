import React, { useState } from 'react';
import { 
  Scale, 
  ChevronRight,
  Shield,
  X
} from 'lucide-react';
import { ASSETS, PRACTICE_AREAS, NAV_LINKS, CONTACT_INFO } from '../constants';

export const Footer: React.FC = () => {
  const [modalContent, setModalContent] = useState<'privacy' | 'terms' | null>(null);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
    <footer className="relative bg-[#172B4D] text-white pt-16 sm:pt-20 overflow-hidden border-t border-[#20395F]">
      {/* Imagem jurídica de background com overlay escuro */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.heroJusticeCourt}
          alt="Tribunal de Justiça e balança da justiça"
          className="w-full h-full object-cover object-center opacity-10"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#172B4D]/95 via-[#172B4D]/95 to-[#0E1B31]" />
      </div>

      {/* Container Principal */}
      <div className="relative z-10 max-w-[1180px] mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* COLUNA 1: Logotipo + Descrição (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded bg-[#20395F] flex items-center justify-center border border-[#C3A45D]/50">
                <Scale className="w-5 h-5 text-[#C3A45D]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-luxury font-bold text-white text-lg tracking-[0.12em] leading-tight">
                  LARYSSA ARRUDA
                </span>
                <span className="text-[10px] font-semibold tracking-[0.32em] text-[#C3A45D] uppercase mt-0.5">
                  ADVOCACIA
                </span>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-sm">
              Atendimento jurídico personalizado, estratégico e comprometido com a salvaguarda dos seus direitos.
            </p>

            {/* Selo institucional discreto */}
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded bg-white/5 border border-white/10 text-xs text-gray-300">
              <Shield className="w-4 h-4 text-[#C3A45D]" />
              <span>Advocacia Criminal e Estratégica</span>
            </div>
          </div>

          {/* COLUNA 2: Áreas de Atuação (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif-luxury text-base font-bold text-white tracking-wider mb-5 uppercase pb-2 border-b border-[#C3A45D]/40 inline-block">
              ÁREAS DE ATUAÇÃO
            </h4>

            <ul className="space-y-2.5 text-sm text-gray-300">
              {PRACTICE_AREAS.map((pa) => (
                <li key={pa.id}>
                  <a
                    href="#atuacao"
                    onClick={(e) => scrollToSection(e, '#atuacao')}
                    className="hover:text-[#C3A45D] transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#C3A45D] group-hover:translate-x-0.5 transition-transform" />
                    <span>{pa.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUNA 3: Menu Simplificado & Ação Principal (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="font-serif-luxury text-base font-bold text-white tracking-wider mb-5 uppercase pb-2 border-b border-[#C3A45D]/40 inline-block">
              NAVEGAÇÃO
            </h4>

            <ul className="space-y-2 text-sm text-gray-300 mb-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="hover:text-[#C3A45D] transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-[#C3A45D]" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SEÇÃO REGULATÓRIA OAB & LGPD (Visível diretamente na página, sóbria e discreta) */}
        <div className="border-t border-white/10 pt-8 mt-12 text-center text-xs text-gray-400">
          <div className="max-w-3xl mx-auto space-y-3">
            {/* Nome completo do profissional e número de registro da OAB */}
            <p className="font-serif-luxury text-sm sm:text-base font-semibold text-white tracking-wide">
              {CONTACT_INFO.lawyerFullName} — {CONTACT_INFO.oabNumber}
            </p>

            {/* Texto informativo em conformidade com o Provimento 205/2021 da OAB */}
            <p className="text-gray-400 text-xs sm:text-[13px] leading-relaxed max-w-2xl mx-auto">
              Este site possui caráter estritamente informativo e educacional, em estrita conformidade com o Provimento nº 205/2021 do Conselho Federal da OAB e com o Código de Ética e Disciplina da Advocacia, não tendo como finalidade a captação de clientela, mercantilização ou prestação de consultoria jurídica por meio deste ambiente.
            </p>

            {/* Link direto e visível para a Política de Privacidade (LGPD) */}
            <div className="pt-1 flex items-center justify-center gap-2 text-xs sm:text-[13px]">
              <span className="text-gray-400">Privacidade e Proteção de Dados:</span>
              <button
                onClick={() => setModalContent('privacy')}
                className="text-[#C3A45D] hover:text-[#D2B875] underline underline-offset-4 transition-colors font-semibold cursor-pointer"
              >
                Política de Privacidade (LGPD)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* RODAPÉ: Barra inferior azul (#0A1324) */}
      <div className="relative z-10 bg-[#0A1324] py-6 border-t border-white/10 text-xs text-gray-400">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center sm:text-left">
            © 2026 Laryssa Arruda – Advocacia. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setModalContent('privacy')}
              className="hover:text-[#C3A45D] transition-colors underline-offset-4 hover:underline"
            >
              Política de Privacidade (LGPD)
            </button>
            <span className="text-gray-600">|</span>
            <button
              onClick={() => setModalContent('terms')}
              className="hover:text-[#C3A45D] transition-colors underline-offset-4 hover:underline"
            >
              Termos de Uso
            </button>
          </div>
        </div>
      </div>

      {/* Modal de Políticas e Termos */}
      {modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-xs">
          <div className="bg-white text-[#172B4D] rounded-lg max-w-xl w-full p-6 sm:p-8 max-h-[85vh] overflow-y-auto shadow-2xl relative">
            <button
              onClick={() => setModalContent(null)}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-[#172B4D]"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {modalContent === 'privacy' ? (
              <div>
                <h3 className="font-serif-luxury text-2xl font-bold mb-4 pb-2 border-b border-gray-100">
                  Política de Privacidade
                </h3>
                <div className="text-gray-600 text-sm space-y-3 leading-relaxed">
                  <p>
                    A <strong>Laryssa Arruda – Advocacia</strong> zela pela confidencialidade e segurança dos dados e informações fornecidas por seus clientes e usuários.
                  </p>
                  <p>
                    <strong>1. Coleta de Dados:</strong> Os dados fornecidos através dos formulários de agendamento e contato (nome, telefone, e-mail e informações preliminares sobre o caso) são utilizados exclusivamente para retorno de consultas e comunicações jurídicas preliminares.
                  </p>
                  <p>
                    <strong>2. Sigilo Profissional:</strong> Todas as comunicações enviadas a este escritório estão resguardadas pelo sigilo profissional previsto no Estatuto da Advocacia e no Código de Ética e Disciplina da OAB.
                  </p>
                  <p>
                    <strong>3. Compartilhamento:</strong> Não compartilhamos dados pessoais com terceiros sem consentimento expresso, exceto quando estritamente exigido por determinação legal ou ordem judicial.
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="font-serif-luxury text-2xl font-bold mb-4 pb-2 border-b border-gray-100">
                  Termos de Uso
                </h3>
                <div className="text-gray-600 text-sm space-y-3 leading-relaxed">
                  <p>
                    Ao acessar este portal institucional, o usuário concorda com os termos e disposições a seguir:
                  </p>
                  <p>
                    <strong>1. Caráter Informativo:</strong> O conteúdo apresentado neste site tem finalidade estritamente institucional e informativa, não configurando consulta jurídica formal nem substituindo parecer técnico individualizado.
                  </p>
                  <p>
                    <strong>2. Relação Advogado-Cliente:</strong> O preenchimento de formulários de contato ou agendamento não estabelece, de pronto, contratação de serviços advocatícios, a qual depende de análise prévia e celebração de contrato de honorários.
                  </p>
                  <p>
                    <strong>3. Propriedade Intelectual:</strong> Todos os logotipos, marcas, textos e elementos visuais pertencem a Laryssa Arruda – Advocacia.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-gray-100 text-right">
              <button
                onClick={() => setModalContent(null)}
                className="bg-[#172B4D] text-white px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#20395F]"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
