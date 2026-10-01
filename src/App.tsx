import React from 'react';
import { BookingModalProvider } from './context/BookingModalContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { OverlappingCTA } from './components/OverlappingCTA';
import { About } from './components/About';
import { DifferentialsBar } from './components/DifferentialsBar';
import { PracticeAreas } from './components/PracticeAreas';
import { LawyerProfile } from './components/LawyerProfile';
import { CalComBooking } from './components/CalComBooking';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BackToTop } from './components/BackToTop';
import { BookingModal } from './components/BookingModal';

export default function App() {
  return (
    <BookingModalProvider>
      <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#C3A45D]/30 selection:text-[#172B4D]">
        {/* 1. Header Institucional (Logo + Navegação + Agendar Consulta) */}
        <Header />

        <main>
          {/* 2. Hero Solene (troca por rolagem, sem setas manuais) */}
          <Hero />

          {/* 3. Destaque Institucional Sobreposto */}
          <OverlappingCTA />

          {/* 4. Seção Sobre */}
          <About />

          {/* 5. Bloco de Diferenciais Institucionais */}
          <DifferentialsBar />

          {/* 6. Áreas de Atuação Jurídica */}
          <PracticeAreas />

          {/* 7. Seção de Autoridade (Foto, Nome e Destaque OAB) */}
          <LawyerProfile />

          {/* 8. Agendamento Centralizado Cal.com (Consulta Reservada e Confidencial) */}
          <CalComBooking />
        </main>

        {/* 9. Footer e Rodapé Regulatório (OAB e LGPD) */}
        <Footer />

        {/* 10. Elementos Flutuantes */}
        <FloatingWhatsApp />
        <BackToTop />

        {/* 11. Modal Popup Responsivo do Cal.com */}
        <BookingModal />
      </div>
    </BookingModalProvider>
  );
}
